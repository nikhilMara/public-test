<script setup lang="ts">
import { HLDropdown, HLTag, HLText } from '@gohighlevel/highrise'
import { computed, PropType, ref, watch } from 'vue'
const props = defineProps({
  options: {
    type: Array as PropType<any[]>,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  show: {
    type: Boolean,
    default: undefined,
  },
})

const updatedShow = ref(props.show)
watch(
  () => props.show,
  newVal => {
    if (newVal) updatedShow.value = newVal
  },
  { immediate: true }
)

const updateUpdatedShow = (value: boolean) => {
  updatedShow.value = value
}

const emit = defineEmits(['select', 'close'])
const allOptions = computed(() => {
  if (isAllSelected.value) {
    return [
      { label: 'All', key: 'all', selected: isAllSelected.value },
      ...props.options.map(option => ({ ...option, selected: false })),
    ]
  } else {
    return [
      { label: 'All', key: 'all', selected: isAllSelected.value },
      ...props.options.map((option: any) => ({
        ...option,
        selected: selectedArray.value.includes(option.label) ? true : false,
      })),
    ]
  }
})
const isAllSelected = ref(true)
let selectedArray = ref<string[]>([])
const handleSelect = (key: string, option: any) => {
  if (key === 'all') {
    selectedArray.value = []
    isAllSelected.value = true
  } else {
    if (option.selected) {
      selectedArray.value.push(option.label)
    } else {
      selectedArray.value = selectedArray.value.filter(
        item => item !== option.label
      )
    }
    isAllSelected.value = false
  }
  if (selectedArray.value.length === 0) {
    isAllSelected.value = true
  }
  emit('select', selectedArray.value)
}
const handleClose = () => {
  emit('close')
}
</script>
<template>
  <HLDropdown
    id="table-crud-dropdown"
    max-height="300px"
    :options="allOptions"
    :show-arrow="false"
    multiple
    show-selected-mark
    :close-on-select="false"
    :show-search-highlight="true"
    :show="updatedShow"
    @select="handleSelect"
    @update:show="updateUpdatedShow"
  >
    <span :key="selectedArray.length">
      <HLTag size="lg" round closable @close="handleClose">
        {{ label }}
        <HLTag
          id="filter-tag-group"
          :key="selectedArray.length"
          size="xs"
          :bordered="false"
        >
          <HLText size="md" weight="medium">
            {{ isAllSelected ? 'All' : selectedArray[0] }}
            <span v-if="selectedArray.length > 1" :key="selectedArray.length">
              , +{{ selectedArray.length - 1 }}
            </span>
          </HLText>
        </HLTag>
      </HLTag>
    </span>
  </HLDropdown>
</template>
