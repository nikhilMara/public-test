<script setup lang="ts">
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronSelectorVerticalIcon,
  PlusIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLDivider,
  HLDropdown,
  HLIcon,
  HLPopover,
  HLTag,
  HLText,
} from '@gohighlevel/highrise'
import { computed, h, PropType, ref } from 'vue'
import TableCRUDDropdown from './TableCRUDDropdown.vue'

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  columnOptions: {
    type: Array as PropType<any[]>,
    required: true,
  },
  customFilterDropdownFor: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const selectedFilters = ref<any[]>([])
const selectedSort = ref<{ key: string; label: string } | null>(null)

const isAscending = ref(true)
const toggleSort = () => {
  isAscending.value = !isAscending.value
  if (selectedSort.value) {
    emit('set-sort', [{ id: selectedSort.value.key, desc: !isAscending.value }])
  }
}

// Sort
const handleSort = (key: string, option: any, dir: string) => {
  isAscending.value = dir ? dir === 'asc' : isAscending.value
  selectedSort.value = { key: key, label: option.label }
  emit('set-sort', [{ id: key, desc: !isAscending.value }])
}

const popoverShow = ref<boolean | undefined>(undefined)

// show filter open
const openFilter = (index: number) => {
  if (index > 1 || (index > 0 && selectedSort.value)) {
    popoverShow.value = true
  }
  setTimeout(() => {
    selectedFilters.value[index].show = true
  }, 100)
  setTimeout(() => {
    selectedFilters.value[index].show = undefined
  }, 1000)
}

// Filters
const handleAddFilter = (key: string, option: any) => {
  const index = selectedFilters.value.findIndex(
    filter => filter.columnId === key
  )
  if (index !== -1) {
    openFilter(index)
    return
  }
  selectedFilters.value.splice(0, 0, {
    columnId: key,
    label: option.label,
    data: {
      value: option.label,
      options: Array.from(new Set(props.data.map(data => data[key]))).map(
        option => ({ key: option, label: option })
      ),
    },
  })
  openFilter(0)
}
const emit = defineEmits(['filter-change', 'set-sort'])
const handleFilterChange = (columnId: string, filterValues: string[]) => {
  emit('filter-change', columnId, filterValues)
}
const handleTagClose = (columnId: string) => {
  emit('filter-change', columnId, [])
  selectedFilters.value = selectedFilters.value.filter(
    filter => filter.columnId !== columnId
  )
}

const getOptions = (isSort: boolean = false) => {
  const allOptions = props.columnOptions.map(column => ({
    key: column.value,
    label: column.label,
    selected: isSort
      ? selectedSort.value
        ? selectedSort.value.key === column.value
        : false
      : selectedFilters.value.find(filter => filter.columnId === column.value),
    checked: column.checked,
  }))
  const allCheckedOptions = allOptions.filter(option => option.checked)
  const allUnCheckedOptions = allOptions.filter(option => !option.checked)
  if (allUnCheckedOptions.length > 0) {
    return [
      ...allCheckedOptions,
      { key: 'unChecked', label: 'Hidden Fields', type: 'header' },
      ...allUnCheckedOptions,
    ]
  }
  return allOptions
}

const options = computed(() => {
  return getOptions()
})

const sortOptions = computed(() => [
  {
    label: 'Sort By:',
    type: 'render',
    render: () =>
      h(
        'div',
        {
          class: 'flex items-center justify-between cursor-auto',
          style: { width: '222px', padding: '4px 8px' },
          onClick: e => {
            e.preventDefault()
            e.stopPropagation()
          },
        },
        [
          h(HLText, { size: 'md' }, ['Sort By:']),
          h(
            HLText,
            { style: { display: 'inline-flex', gap: '4px' }, size: 'md' },
            [
              isAscending.value ? 'Ascending' : 'Descending',
              h(
                'span',
                {
                  class: 'cursor-pointer flex items-center gap-0.5',
                  style: { color: 'var(--primary-600)' },
                  onClick: toggleSort,
                },
                [
                  isAscending.value ? '(A → Z)' : '(Z → A)',
                  h(
                    HLIcon,
                    { size: '14' },
                    { default: isAscending.value ? ArrowUpIcon : ArrowDownIcon }
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    value: 'sort',
  },
  { type: 'divider', value: 'divider' },
  ...getOptions(true),
])

const handleCloseSort = () => {
  selectedSort.value = null
  emit('set-sort', [])
}
const sliceNumber = computed(() => {
  return selectedSort.value ? 1 : 2
})

defineExpose({
  handleAddFilter,
  handleSort,
  toggleSort,
})
</script>
<template>
  <div v-if="selectedSort" class="flex items-center gap-2">
    <slot
      v-if="customFilterDropdownFor.includes(selectedSort.key)"
      name="sort-dropdown"
      :is-ascending="isAscending"
      :sort-options="sortOptions"
      @close="handleCloseSort"
      @toggle-sort="toggleSort"
    >
    </slot>
    <HLTag v-else size="lg" round closable @close="handleCloseSort">
      <template #icon>
        <span style="--n-text-color: var(--primary-600)" @click="toggleSort">
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
        @select="handleSort"
      >
        <HLTag id="filter-tag-group" size="xs" :bordered="false">
          <HLText size="md" weight="medium">
            {{ selectedSort.label }} {{ isAscending ? 'A -> Z' : 'Z -> A' }}
          </HLText>
        </HLTag>
      </HLDropdown>
    </HLTag>
  </div>
  <HLDivider v-if="selectedSort" vertical style="height: 14px"></HLDivider>
  <div v-if="selectedFilters.length" class="flex items-center gap-2">
    <div
      v-for="filter in selectedFilters.slice(0, sliceNumber)"
      :key="filter.columnId"
      class=""
    >
      <slot
        v-if="customFilterDropdownFor.includes(filter.columnId)"
        name="filter-dropdown"
        :column-id="filter.columnId"
        :options="filter.data.options"
        :label="filter.label"
        :show="filter.show"
        @select="handleFilterChange(filter.columnId, $event)"
        @close="handleTagClose(filter.columnId)"
      >
      </slot>
      <TableCRUDDropdown
        v-else
        :options="filter.data.options"
        :label="filter.label"
        :show="filter.show"
        @select="handleFilterChange(filter.columnId, $event)"
        @close="handleTagClose(filter.columnId)"
      />
    </div>
    <div v-if="selectedFilters.length > sliceNumber">
      <HLPopover
        trigger="click"
        style="max-width: 433px"
        :show="popoverShow"
        @clickoutside="popoverShow = undefined"
      >
        <template #trigger>
          <HLTag size="lg" round>
            +{{ selectedFilters.length - sliceNumber }}
          </HLTag>
        </template>
        <div style="display: flex; gap: 4px; padding: 8px; flex-wrap: wrap">
          <div
            v-for="filter in selectedFilters.slice(sliceNumber)"
            :key="filter.columnId"
          >
            <slot
              v-if="customFilterDropdownFor.includes(filter.columnId)"
              name="filter-dropdown"
              :column-id="filter.columnId"
              :options="filter.data.options"
              :label="filter.label"
              :show="filter.show"
              @select="handleFilterChange(filter.columnId, $event)"
              @close="handleTagClose(filter.columnId)"
            >
            </slot>
            <TableCRUDDropdown
              v-else
              :options="filter.data.options"
              :label="filter.label"
              :show="filter.show"
              @select="handleFilterChange(filter.columnId, $event)"
              @close="handleTagClose(filter.columnId)"
            />
          </div>
        </div>
      </HLPopover>
    </div>
  </div>
  <HLDivider
    v-if="selectedFilters.length"
    vertical
    style="height: 14px"
  ></HLDivider>
  <div class="flex items-center gap-2">
    <HLDropdown
      id="add-filter-dropdown"
      :options="options"
      :show-arrow="false"
      show-search-highlight
      show-selected-mark
      multiple
      @select="handleAddFilter"
    >
      <HLTag round size="lg">
        <template #icon>
          <PlusIcon />
        </template>
        Add Filter
      </HLTag>
    </HLDropdown>
    <HLDropdown
      id="add-filter-dropdown"
      :width="240"
      :options="sortOptions"
      :show-arrow="false"
      :multiple="false"
      show-search-highlight
      show-selected-mark
      @select="handleSort"
    >
      <HLTag round size="lg">
        <template #icon>
          <ChevronSelectorVerticalIcon />
        </template>
        Sort
      </HLTag>
    </HLDropdown>
  </div>
</template>
