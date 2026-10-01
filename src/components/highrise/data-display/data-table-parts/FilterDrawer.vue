<script setup lang="ts">
import { MaterialFilterListOffFillIcon } from '@gohighlevel/ghl-icons/24/material/rounded'
import {
  FilterFunnel01Icon,
  Trash01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAdvanceFilter,
  HLAdvanceFilterColumnOption,
  HLAdvanceFilterData,
  HLButton,
  HLDrawer,
  HLDrawerContent,
  HLFormItem,
  HLInput,
  HLModal,
  HLSectionFooter,
  HLSectionFooterItem,
  HLSelect,
  HLTag,
  HLText,
} from '@gohighlevel/highrise'
import { h, nextTick, ref } from 'vue'
import { mongoFilter } from './mongofilter'

const props = defineProps<{
  dataJson: any[]
}>()

const emit = defineEmits<{
  'update:data': [data: any[]]
}>()

// Filter options and filter data
const filterOptions: any = ref([
  {
    label: 'Default',
    value: 'Default',
    data: {
      condition: 'OR',
      rules: [
        {
          condition: 'AND',
          rules: [
            {
              field: null,
              operator: null,
              value: null,
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Nikhil',
    value: 'Nikhil',
    data: {
      condition: 'OR',
      rules: [
        {
          condition: 'AND',
          rules: [
            {
              field: 'firstName',
              operator: 'equal',
              value: 'Nikhil',
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Age',
    value: 'Age',
    data: {
      condition: 'OR',
      rules: [
        {
          condition: 'AND',
          rules: [
            {
              field: 'age',
              operator: 'equal',
              value: 56,
            },
          ],
        },
      ],
    },
  },
])
const filterColumnOptions: HLAdvanceFilterColumnOption[] = [
  { label: 'First Name', value: 'firstName', columnType: 'string' },
  {
    label: 'Last Name',
    value: 'lastName',
    columnType: 'string',
  },
  { label: 'Age', value: 'age', columnType: 'number' },
  {
    label: 'Rating',
    value: 'rating',
    columnType: 'select',
    operatorOptions: [
      {
        type: 'group',
        label: 'Filter by value',
        key: 'Filter by value',
        children: [
          {
            label: 'In',
            value: 'in',
            valueType: 'select',
            props: {
              multiple: true,
              showAvatarInTags: false,
              options: [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
              ],
            },
          },
        ],
      },
      {
        type: 'group',
        label: 'Filter by value',
        key: 'Filter by value',
        children: [
          {
            label: 'Is equal to',
            value: 'equal',
            valueType: 'number',
            props: { min: 1, max: 5 },
          },
        ],
      },
    ],
  },
  {
    label: 'Birthday',
    value: 'DOB',
    columnType: 'date',
  },
]

// Modal and button states
const selectedFilterOption = ref('Default')
let prevSlectedOption: any = null
const isDrawerOpen = ref(false)
const isChangesMade = ref(false)
const showSaveAsModal = ref(false)
const showDeleteFilterModal = ref(false)
const filterName = ref('')
const saveAsInput = ref()
const deleteFilterOption = ref<any>({})
const advanceFilterRef = ref<InstanceType<typeof HLAdvanceFilter> | null>(null)
const filterData = ref(filterOptions.value[0].data as HLAdvanceFilterData)
const filterNameHasError = ref(true)
const saveAsRule = {
  trigger: ['input', 'blur'],
  required: true,
  validator: () => {
    if (!filterName.value) {
      filterNameHasError.value = true
      return new Error('Filter name is Empty')
    }
    if (filterOptions.value.find(option => option.value == filterName.value)) {
      filterNameHasError.value = true
      return new Error('Filter name already exists')
    }
    filterNameHasError.value = false
    return true
  },
  level: 'error',
}
const openAdvancedFilters = () => {
  prevSlectedOption = selectedFilterOption.value
  isDrawerOpen.value = true
}

const hanldeSelect = (value: string, option: any) => {
  selectedFilterOption.value = value
  filterData.value = option.data
}

const handleUpdates = () => {
  isChangesMade.value = true
}

const handleClearFilters = () => {
  filterData.value = {
    condition: 'OR',
    rules: [
      {
        condition: 'AND',
        rules: [
          {
            field: null,
            operator: null,
            value: null,
          },
        ],
      },
    ],
  }
  isChangesMade.value = true
  advanceFilterRef.value?.setFilterData(filterData.value)
}

const handleCancel = () => {
  selectedFilterOption.value = prevSlectedOption
  filterData.value = filterOptions.value.find(
    option => option.value === selectedFilterOption.value
  ).data as HLAdvanceFilterData
  isDrawerOpen.value = false
}

const handleSave = () => {
  filterOptions.value.find(
    option => option.value === selectedFilterOption.value
  ).data = filterData.value
  isDrawerOpen.value = false
  handleApply()
  isChangesMade.value = false
}

const handleApply = () => {
  const result = mongoFilter(filterData.value, props.dataJson) // Your API call or own logic to filter the data
  emit('update:data', result)
  isDrawerOpen.value = false
}

const closeModal = () => {
  filterName.value = ''
  filterNameHasError.value = false
  deleteFilterOption.value = {}
  showSaveAsModal.value = false
  showDeleteFilterModal.value = false
}
const handleSaveAsFilter = () => {
  showSaveAsModal.value = true
  filterNameHasError.value = true
  filterName.value = ''
  nextTick(() => {
    saveAsInput.value?.focus()
  })
}

const handleSaveAs = () => {
  const option = {
    label: filterName.value,
    value: filterName.value,
    data: filterData.value,
  }
  filterOptions.value.push(option)
  selectedFilterOption.value = filterName.value
  closeModal()
}

const deleteFilter = () => {
  filterOptions.value = filterOptions.value.filter(
    op => op.value !== deleteFilterOption.value.value
  )
  selectedFilterOption.value = 'Default'
  hanldeSelect('Default', filterOptions.value[0])
  closeModal()
}
const handleDeleteFilter = (option: any, e: Event) => {
  deleteFilterOption.value = option
  e.stopImmediatePropagation()
  e.preventDefault()
  showDeleteFilterModal.value = true
}
</script>

<template>
  <HLTag
    id="add-filter"
    round
    size="lg"
    :count="
      filterData.rules[0].rules[0].value ? filterData.rules.length : undefined
    "
    @click="openAdvancedFilters"
  >
    <template #icon>
      <FilterFunnel01Icon />
    </template>
    Advanced Filters
  </HLTag>

  <HLDrawer
    id="advanced-filters-drawer"
    v-model:show="isDrawerOpen"
    :defaultWidth="360"
    :maskClosable="false"
  >
    <HLDrawerContent id="advanced-filters-drawer-content">
      <div class="flex justify-between items-center w-full pb-2">
        <HLText size="lg" weight="semibold"> All Filters </HLText>
        <HLButton
          id="clear-filters-button"
          size="xs"
          variant="ghost"
          color="gray"
          :disabled="!filterData.rules[0].rules[0].value"
          @click="handleClearFilters"
        >
          <template #iconLeft>
            <MaterialFilterListOffFillIcon />
          </template>
          Clear Filters
        </HLButton>
      </div>
      <div class="pb-6">
        <HLSelect
          :value="selectedFilterOption"
          size="2xs"
          :option-renderer="
            option =>
              h(
                'div',
                {
                  class: 'flex w-full',
                  style: { justifyContent: 'space-between' },
                },
                [
                  h('span', {}, option.label),
                  h(
                    HLButton,
                    {
                      id: 'delete-filter-button',
                      size: '3xs',
                      onClick: (e: Event) => handleDeleteFilter(option, e),
                      variant: 'ghost',
                      disabled: option.value === 'Default',
                    },
                    { icon: () => h(Trash01Icon) }
                  ),
                ]
              )
          "
          :options="filterOptions"
          @update:value="hanldeSelect"
        />
      </div>
      <HLAdvanceFilter
        ref="advanceFilterRef"
        :key="selectedFilterOption"
        v-model:data="filterData"
        :columnOptions="filterColumnOptions"
        @update:data="handleUpdates"
      />
      <template #footer>
        <div id="footer" class="flex justify-between items-center w-full">
          <HLButton
            id="cancel-button"
            variant="secondary"
            color="gray"
            size="2xs"
            @click="handleCancel"
          >
            Cancel
          </HLButton>
          <div class="flex gap-2">
            <HLButton
              id="save-as-button"
              variant="secondary"
              color="gray"
              size="2xs"
              @click="handleSaveAsFilter"
            >
              Save As
            </HLButton>
            <HLButton
              id="save-button"
              :disabled="!isChangesMade"
              variant="secondary"
              color="blue"
              size="2xs"
              @click="handleSave"
            >
              Save
            </HLButton>
            <HLButton
              id="reset-button"
              variant="primary"
              color="primary"
              size="2xs"
              @click="handleApply"
            >
              Apply
            </HLButton>
          </div>
        </div>
      </template>
    </HLDrawerContent>
  </HLDrawer>

  <!-- Modal for save as filter and delete filter -->
  <HLModal
    id="save-filter-modal"
    v-model:show="showSaveAsModal"
    :footer-divider="true"
    type="success"
    :show-header-icon="false"
  >
    <template #header> Save Filter As </template>
    <HLFormItem label="Filter Name" :rule="saveAsRule">
      <HLInput
        id="filter-name"
        ref="saveAsInput"
        v-model:model-value="filterName"
        size="xs"
        placeholder="Enter filter name"
      />
    </HLFormItem>
    <template #footer>
      <HLSectionFooter id="save-filter-footer">
        <HLSectionFooterItem>
          <HLButton
            id="cancel-button"
            size="xs"
            variant="secondary"
            color="gray"
            @click="closeModal"
          >
            Cancel
          </HLButton>
          <HLButton
            id="save-button"
            size="xs"
            variant="primary"
            color="blue"
            :disabled="filterNameHasError"
            @click="handleSaveAs"
          >
            Save
          </HLButton>
        </HLSectionFooterItem>
      </HLSectionFooter>
    </template>
  </HLModal>
  <HLModal
    id="delete-filter-modal"
    v-model:show="showDeleteFilterModal"
    :footer-divider="true"
    type="error"
  >
    <template #header> Delete {{ deleteFilterOption.label }} </template>
    Are you sure you want to delete this filter?
    {{
      selectedFilterOption == deleteFilterOption.value
        ? 'This filter is currently applied.'
        : ''
    }}
    <template #footer>
      <HLSectionFooter id="delete-filter-footer">
        <HLSectionFooterItem>
          <HLButton
            id="cancel-button"
            size="xs"
            variant="secondary"
            color="gray"
            @click="closeModal"
          >
            Cancel
          </HLButton>
          <HLButton
            id="delete-button"
            size="xs"
            variant="primary"
            color="red"
            @click="deleteFilter"
          >
            Delete
          </HLButton>
        </HLSectionFooterItem>
      </HLSectionFooter>
    </template>
  </HLModal>
</template>
