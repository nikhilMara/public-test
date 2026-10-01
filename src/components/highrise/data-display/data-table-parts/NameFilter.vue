<script setup lang="ts">
import { CheckIcon, SearchSmIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAccordion,
  HLAccordionItem,
  HLButton,
  HLCheckbox,
  HLCheckboxGroup,
  HLIcon,
  HLInput,
  HLSelect,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { nextTick, Ref, ref } from 'vue'
import FilterCompoent from './FilterComponent.vue'

const emit = defineEmits(['setSort', 'setFilter', 'clearFilter', 'resetSort'])
const filterIconColor = ref('var(--gray-400)')
const nameInputValue = ref('')
const isFilterApplied = ref(false)
defineProps<{
  id: string
  sortedColumn: Ref<string | null>
  sortDir: Ref<'asc' | 'desc' | null>
}>()
const dropdownOptions = [
  {
    value: 'none',
    label: 'None',
    inputCount: 0,
  },
  {
    value: 'isEmpty',
    label: 'Is Empty',
    inputCount: 0,
  },
  {
    value: 'isNotEmpty',
    label: 'Is Not Empty',
    inputCount: 0,
  },
  {
    value: 'contains',
    label: 'Text contains',
    inputCount: 1,
  },
  {
    value: 'notContains',
    label: 'Text does not contain',
    inputCount: 1,
  },
  {
    value: 'startsWith',
    label: 'Text starts with',
    inputCount: 1,
  },
  {
    value: 'endsWith',
    label: 'Text ends with',
    inputCount: 1,
  },
  {
    value: 'equals',
    label: 'Text is exactly',
    inputCount: 1,
  },
]

const selectedDropdownOption = ref(dropdownOptions[0])

const handleSort = (dir: 'asc' | 'desc') => {
  emit('setSort', 'firstName', dir == 'desc')
}
function handleResetSort() {
  emit('resetSort', 'firstName')
}
function handleClear() {
  nameInputValue.value = ''
  isFilterApplied.value = false
  filterIconColor.value = 'var(--gray-400)'
  checkboxValue.value = []
  emit('clearFilter', 'firstName')
}
function handleApply() {
  if (checkboxValue.value.length) {
    emit('setFilter', 'firstName', 'containsInArray', checkboxValue.value)
    isFilterApplied.value = true
    filterIconColor.value = 'var(--primary-600)'
    return
  }
  if (selectedDropdownOption.value.value === 'none') {
    handleClear()
    return
  }
  isFilterApplied.value = true
  filterIconColor.value = 'var(--primary-600)'
  emit(
    'setFilter',
    'firstName',
    selectedDropdownOption.value.value,
    nameInputValue.value
  )
}
const checkboxOptions = [
  { label: '(Blank)', value: '' },
  { label: 'Mark', value: 'Mark' },
  { label: 'Jhon', value: 'Jhon' },
  { label: 'Abdul', value: 'Abdul' },
  { label: 'Victor', value: 'Victor' },
]
const checkboxValue = ref<string[]>([])
const checkboxInputValue = ref('')
const nameInputValueRef = ref<any>(null)
const updateSelectedDropdownOption = (key: string, option: any) => {
  selectedDropdownOption.value = option
  nextTick(() => {
    if (option.inputCount) {
      nameInputValueRef.value?.focus()
    }
  })
}
</script>
<template>
  <FilterCompoent
    :id="`${id}-name-filter`"
    column-name="firstName"
    :sorted-column="sortedColumn"
    :is-filter-applied="isFilterApplied"
    :sort-dir="sortDir"
    @reset-sort="handleResetSort"
    @set-sort="handleSort"
    @clear-filter="handleClear"
    @apply-click="handleApply"
  >
    <div class="p-2 flex flex-col gap-2">
      <div
        class="data-table-filter-item flex"
        :sort-selected="
          sortedColumn.value == 'firstName' && sortDir.value == 'asc'
        "
        :class="{
          'sort-selected':
            sortedColumn.value == 'firstName' && sortDir.value == 'asc',
        }"
        @click="handleSort('asc')"
      >
        <HLText size="md" :weight="'medium'">Sort Ascending A-Z </HLText>
        <HLIcon
          v-if="sortedColumn.value == 'firstName' && sortDir.value == 'asc'"
          size="16"
          color="var(--primary-700)"
          aria-label="Check Icon"
        >
          <CheckIcon />
        </HLIcon>
      </div>
      <div
        class="data-table-filter-item flex"
        :class="{
          'sort-selected':
            sortedColumn.value == 'firstName' && sortDir.value == 'desc',
        }"
        @click="handleSort('desc')"
      >
        <HLText size="md" :weight="'medium'">Sort Descending Z-A </HLText>
        <HLIcon
          v-if="sortedColumn.value == 'firstName' && sortDir.value == 'desc'"
          size="16"
          color="var(--primary-700)"
          aria-label="Check Icon"
        >
          <CheckIcon />
        </HLIcon>
      </div>
      <HLAccordion size="sm" :border="false" :zero-padding="true">
        <HLAccordionItem
          id="1"
          title="Filter by Condition"
          name="1"
          size="sm"
          :hover-effect="false"
        >
          <div class="flex flex-col gap-1 pt-1">
            <HLSelect
              id="select-default"
              size="xs"
              :options="dropdownOptions"
              :value="selectedDropdownOption.value"
              :option-height="26"
              @update:value="updateSelectedDropdownOption"
            ></HLSelect>
            <HLInput
              v-if="selectedDropdownOption.inputCount"
              id="name-filter"
              ref="nameInputValueRef"
              v-model:model-value="nameInputValue"
              placeholder="Filter by name"
              size="xs"
              clearable
              @update:value="nameInputValue = $event"
            />
          </div>
        </HLAccordionItem>
      </HLAccordion>

      <HLAccordion
        size="sm"
        :border="false"
        :zero-padding="true"
        :default-expanded-names="['1']"
      >
        <HLAccordionItem
          id="1"
          title="Filter by Values"
          name="1"
          :hover-effect="false"
        >
          <div class="flex flex-col gap-2 pt-2">
            <HLSpace :size="12" align="center" :wrap-item="false">
              <HLButton
                id="select-all-checkbox"
                size="3xs"
                variant="text"
                color="blue"
                @click="checkboxValue = checkboxOptions.map(i => i.value)"
              >
                Select All {{ checkboxOptions.length }}
              </HLButton>
              <HLButton
                id="select-all-checkbox"
                size="3xs"
                variant="text"
                color="gray"
                @click="checkboxValue = []"
              >
                Clear
              </HLButton>
              <HLText size="xs" :weight="'medium'" style="margin-left: auto"
                >Displaying {{ checkboxOptions.length }}</HLText
              >
            </HLSpace>
            <HLInput
              id="name-filter"
              v-model:model-value="checkboxInputValue"
              :prefix-icon="SearchSmIcon as any"
              placeholder="Filter by placeholder"
              size="2xs"
              clearable
              @update:value="checkboxInputValue = $event"
            />
            <HLCheckboxGroup
              id="checkbox-group-1"
              :value="checkboxValue"
              size="xs"
              style="padding: 4px"
              @update:value="e => (checkboxValue = e as string[])"
            >
              <HLSpace :vertical="true">
                <HLCheckbox
                  v-for="(i, index) in checkboxOptions.filter(i =>
                    i.label.includes(checkboxInputValue)
                  )"
                  :id="`${id}-checkbox-${index}`"
                  :key="index"
                  :value="i.value"
                  size="xs"
                >
                  {{ i.label }}
                </HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>
        </HLAccordionItem>
      </HLAccordion>
    </div>
  </FilterCompoent>
</template>
