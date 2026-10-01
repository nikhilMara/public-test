<script setup lang="ts">
import {
  ArrowDownIcon,
  ArrowUpIcon,
  FilterLinesIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLDataTable,
  HLDataTableWrapper,
  HLDatePicker,
  HLDivider,
  HLDropdown,
  HLEmpty,
  HLIcon,
  HLPopover,
  HLTable,
  HLTag,
  HLText,
} from '@gohighlevel/highrise'
import { computed, h, nextTick, ref, useAttrs, watch } from 'vue'
import TableCrudLeft from './TableCrudLeft.vue'
import TableCrudRight from './TableCrudRight.vue'
import rows100 from './rows100.json'

const globalFilter = ref('')
const tableInstance = ref<{ table: HLTable<any> }>()
const data = ref(rows100)
// Global filter change handler
const handleGlobalFilterChange = (value: string) => {
  globalFilter.value = value
  tableInstance.value?.table?.setGlobalFilter(value)
}

const args: any = useAttrs()

const defaultColumnOptions = ref<any[]>([
  {
    value: 'name',
    label: 'Name',
    expand: false,
    options: [
      { value: 'firstName', label: 'First Name', checked: true, frozen: true },
      { value: 'lastName', label: 'Last Name', checked: true },
    ],
  },
  {
    value: 'others',
    label: 'Others',
    expand: false,
    options: [
      { value: 'age', label: 'Age', checked: true },
      { value: 'rating', label: 'Rating', checked: true },
      { value: 'DOB', label: 'DOB', checked: true },
    ],
  },
])

// Column re ordering
const columnOptions = ref(
  defaultColumnOptions.value.flatMap(
    option => option.options || [option]
  ) as any[]
)

const handleColumnOrder = (columnIds: string[]) => {
  columnOptions.value = columnIds.map((id: string) =>
    columnOptions.value.find(option => option.value === id)
  )
}

const handleFilterChange = (
  columnId: string,
  filterValues: string[] | number[]
) => {
  const column: any = tableInstance.value?.table.getColumn(columnId)
  column.columnDef.filterFn = 'containsInArray' as any
  if (filterValues.length === 0) {
    column.setFilterValue(undefined)
    return
  }
  column.setFilterValue(filterValues)
}

const handleSort = (sortObj: any) => {
  tableInstance.value?.table?.setSorting(sortObj)
}

const handleColumnOrdering = (columns: any[]) => {
  const remainingColumns = columnOptions.value.filter(
    option => option.checked == false
  )
  columnOptions.value = [...columns, ...remainingColumns]
  const columnIds = columnOptions.value
    .filter(option => option.checked !== false)
    .map(option => option.value)
  tableInstance.value?.table?.setColumnOrder(columnIds)
}

const handleColumnChecked = (field: string, checked: boolean) => {
  const tableColumn = tableInstance.value?.table?.getColumn(field)
  tableColumn?.toggleVisibility(checked)
  const column = columnOptions.value.find(option => option.value === field)
  column.checked = checked
}

const tableCrudLeftRef = ref<any>(null)

const callCrud = (columnId: string, value: string, option: any) => {
  if (value === 'filter') {
    tableCrudLeftRef.value?.handleAddFilter(columnId, option)
  } else if (value === 'desc') {
    tableCrudLeftRef.value?.handleSort(columnId, option, 'desc')
  } else {
    tableCrudLeftRef.value?.handleSort(columnId, option, 'asc')
  }
}

const getFilterComponent = (columnId: string, label: string) => {
  return () =>
    h(
      HLDropdown,
      {
        id: `${columnId}-dropdown`,
        options: [
          { key: 'asc', label: 'Sort A → Z', selected: false },
          { key: 'desc', label: 'Sort Z → A', selected: false },
          { key: 'filter', label: 'Filter This Column', selected: false },
        ],

        onSelect: value => {
          callCrud(columnId, value, { label: label })
        },
      },
      h(HLIcon, { size: 14, color: 'var(--gray-600)' }, h(FilterLinesIcon))
    )
}

const columns = [
  {
    id: 'firstName',
    header: {
      text: 'First Name',
      filterComponent: getFilterComponent('firstName', 'First Name'),
    },
    sortingFn: 'alphanumeric',
    accessorKey: 'firstName',
    size: 100,
    meta: {
      align: 'left',
      headerAlign: 'left',
    },
  },
  {
    id: 'lastName',
    header: {
      text: 'Last Name',
      filterComponent: getFilterComponent('lastName', 'Last Name'),
    },
    accessorKey: 'lastName',
    sortingFn: 'alphanumeric',
    size: 100,
    meta: {
      align: 'left',
      headerAlign: 'left',
    },
  },
  {
    id: 'age',
    header: {
      text: 'Age',
      filterComponent: getFilterComponent('age', 'Age'),
    },
    accessorKey: 'age',
    sortingFn: 'alphanumeric',
    size: 100,
    meta: {
      align: 'right',
      headerAlign: 'right',
    },
  },
  {
    id: 'rating',
    accessorKey: 'rating',
    header: {
      text: 'Rating',
      filterComponent: getFilterComponent('rating', 'Rating'),
    },
    size: 100,
    meta: {
      align: 'center',
      headerAlign: 'start',
    },
  },
  {
    id: 'DOB',
    accessorKey: 'DOB',
    size: 100,
    meta: {
      align: 'right',
    },
    header: {
      text: 'Date',
      filterComponent: () =>
        h(
          HLDropdown,
          {
            id: 'DOB-dropdown',
            options: [
              { key: 'asc', label: 'Sort Newest First' },
              { key: 'desc', label: 'Sort Oldest First' },
              { key: 'filter', label: 'Filter This Column' },
            ],
            showSearch: false,
            showArrow: false,
            onSelect: value => {
              callCrud('DOB', value, { label: 'Date' })
            },
          },
          h(HLIcon, { size: 14, color: 'var(--gray-600)' }, h(FilterLinesIcon))
        ),
    },
    cellFormatter: ({ row }: { row: any }) => {
      return h(
        'div',
        { style: { textAlign: 'right' } },
        new Date(row.original.DOB).toLocaleDateString()
      )
    },
  },
]

const today = new Date().setHours(0, 0, 0, 0)
const times = [
  { label: 'Yesterday', selected: false, value: today - 24 * 60 * 60 * 1000 },
  {
    label: 'Past Week',
    selected: false,
    value: today - 7 * 24 * 60 * 60 * 1000,
  },
  {
    label: 'Past Month',
    selected: false,
    value: today - 30 * 24 * 60 * 60 * 1000,
  },
  { label: 'Tomorrow', selected: false, value: today + 24 * 60 * 60 * 1000 },
]
const selectedDate = ref<any>(null)
const selectedDateLabel = computed(() => {
  if (times.find(time => time.value === selectedDate.value)) {
    return times.find(time => time.value === selectedDate.value)?.label
  }
  return selectedDate.value
    ? new Date(selectedDate.value).toLocaleDateString()
    : 'Select'
})
const handleDateConfirm = () => {
  handleFilterChange('DOB', [selectedDate.value])
  showFilterDropdown.value = false
  setTimeout(() => {
    showFilterDropdown.value = undefined
  }, 100)
}

const handleDateCancel = () => {
  handleFilterChange('DOB', [])
  selectedDate.value = null
  showFilterDropdown.value = false
  setTimeout(() => {
    showFilterDropdown.value = undefined
  }, 100)
}
const showWatcher = ref(false)
const showFilterDropdown = ref<boolean | undefined>(undefined)
watch(showWatcher, newValue => {
  if (newValue) {
    nextTick(() => {
      showFilterDropdown.value = newValue
    })
  } else {
    showFilterDropdown.value = undefined
  }
})
</script>

<template>
  <div>
    <HLDataTableWrapper
      id="data-table-wrapper-default"
      max-width="1000px"
      :show-global-search="true"
      :show-header="true"
      :global-filter="globalFilter"
      :search-placeholder="args.searchPlaceholder"
      :fill-parent-height="args.fillParentHeight"
      responsive-column-width
      @update:global-filter="handleGlobalFilterChange"
    >
      <template #header-content-left>
        <TableCrudLeft
          ref="tableCrudLeftRef"
          :custom-filter-dropdown-for="['DOB']"
          :data="data"
          :columnOptions="columnOptions"
          @set-sort="handleSort"
          @filter-change="handleFilterChange"
        >
          <template #filter-dropdown="{ onClose, show }">
            <HLPopover
              :show="showFilterDropdown"
              :data-dummy="(showWatcher = show)"
              trigger="click"
              :show-arrow="false"
              @clickoutside="showFilterDropdown = undefined"
            >
              <template #trigger>
                <HLTag size="lg" round closable @close="onClose">
                  <span>
                    Date
                    <HLTag id="filter-tag-group" size="xs" :bordered="false">
                      <HLText size="md" weight="medium">
                        {{ selectedDateLabel }}
                      </HLText>
                    </HLTag>
                  </span>
                </HLTag>
              </template>
              <div class="p-2 flex flex-col gap-2">
                <div class="flex gap-3">
                  <div class="flex flex-col gap-1 pt-2">
                    <HLButton
                      v-for="time in times"
                      :id="time.label"
                      :key="time.label"
                      size="2xs"
                      variant="secondary"
                      :color="time.value === selectedDate ? 'primary' : 'gray'"
                      @click="selectedDate = time.value"
                    >
                      {{ time.label }}
                    </HLButton>
                  </div>
                  <HLDatePicker
                    id="date-picker-with-side-content"
                    v-model:value="selectedDate"
                    :panel="true"
                    type="date"
                  >
                  </HLDatePicker>
                </div>
                <HLDivider :margin-bottom="false" :margin-top="false" />
                <div class="flex justify-end gap-1">
                  <HLButton
                    id="date-picker-cancel"
                    size="2xs"
                    variant="secondary"
                    @click="handleDateCancel"
                  >
                    Cancel
                  </HLButton>
                  <HLButton
                    id="date-picker-confirm"
                    size="2xs"
                    variant="primary"
                    color="blue"
                    @click="handleDateConfirm"
                  >
                    Confirm
                  </HLButton>
                </div>
              </div>
            </HLPopover>
          </template>
          <template
            #sort-dropdown="{ onClose, isAscending, onToggleSort, sortOptions }"
          >
            <HLTag size="lg" round closable @close="onClose">
              <template #icon>
                <span
                  style="--n-text-color: var(--primary-600)"
                  @click="onToggleSort"
                >
                  <ArrowUpIcon v-if="isAscending" />
                  <ArrowDownIcon v-else />
                </span>
              </template>
              <HLDropdown
                id="add-filter-dropdown"
                :width="240"
                :options="sortOptions"
                :show-arrow="false"
                :multiple="false"
                show-search-highlight
                show-selected-mark
                @select="
                  (key, option) =>
                    callCrud(key, isAscending ? 'asc' : 'desc', option)
                "
              >
                <HLTag id="filter-tag-group" size="xs" :bordered="false">
                  <HLText size="md" weight="medium">
                    Date {{ isAscending ? 'Newest' : 'Oldest' }}
                  </HLText>
                </HLTag>
              </HLDropdown>
            </HLTag>
          </template>
        </TableCrudLeft>
      </template>
      <template #header-content-right>
        <TableCrudRight
          :columnOptions="columnOptions"
          :defaultColumnOptions="defaultColumnOptions"
          @column-ordering="handleColumnOrdering"
          @column-checked="handleColumnChecked"
        />
      </template>
      <HLDataTable
        id="data-table-default"
        ref="tableInstance"
        v-bind="args"
        :data="data"
        :columns="columns"
        @update:column-order="handleColumnOrder"
      >
        <template #no-data>
          <HLEmpty
            id="empty-state"
            size="md"
            title="No data available to display. This is a placeholder slot"
            description="This is a placeholder"
            positive-text="Refresh"
            negative-text="Try again"
            icon="info"
          />
        </template>
      </HLDataTable>
    </HLDataTableWrapper>
  </div>
</template>
