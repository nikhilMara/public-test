<script setup lang="ts">
import {
  ArrowDownIcon,
  ArrowUpIcon,
  FilterLinesIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import { HLButton, HLIcon, HLPopover } from '@gohighlevel/highrise'
import { Ref, ref } from 'vue'

const emit = defineEmits(['setSort', 'clearFilter', 'applyClick', 'resetSort'])
const filterIconColor = ref('var(--gray-400)')
const props = withDefaults(
  defineProps<{
    id: string
    sortedColumn: Ref<string | null>
    columnName: string
    isFilterApplied: boolean
    showSort?: boolean
    sortDir: Ref<'asc' | 'desc' | null>
  }>(),
  {
    showSort: true,
  }
)

function handleClear() {
  filterIconColor.value = 'var(--gray-400)'
  emit('clearFilter', props.columnName)
}
function handleApply() {
  filterIconColor.value = 'var(--primary-600)'
  emit('applyClick', props.columnName)
}
function handleShow(show: boolean) {
  if (show) {
    filterIconColor.value = 'var(--primary-600)'
  } else if (!props.isFilterApplied) {
    filterIconColor.value = 'var(--gray-400)'
  }
}
function toggleSort() {
  if (props.sortDir.value == 'asc') {
    emit('setSort', props.columnName, true)
  } else if (props.sortDir.value == 'desc') {
    emit('resetSort', props.columnName)
  }
}
</script>
<template>
  <div>
    <HLIcon
      v-if="sortedColumn.value == columnName"
      size="14"
      color="var(--primary-600)"
      style="cursor: pointer"
      :aria-label="
        sortDir.value == 'asc' ? 'Arrow Up Icon' : 'Arrow Down Icon'
      "
      @click="toggleSort()"
    >
      <ArrowUpIcon v-if="sortDir.value == 'asc'" />
      <ArrowDownIcon v-if="sortDir.value == 'desc'" />
    </HLIcon>
    <HLPopover
      :id="id"
      trigger="click"
      placement="bottom-end"
      :show-arrow="false"
      @show="handleShow"
    >
      <template #trigger>
        <HLIcon
          size="14"
          :color="filterIconColor"
          aria-label="Filter Lines Icon"
          @click.stop
        >
          <FilterLinesIcon />
        </HLIcon>
      </template>
      <template #default>
        <slot></slot>
      </template>
      <template #footer>
        <div class="flex gap-2 justify-end p-2">
          <HLButton
            :id="`${id}-filter-clear`"
            variant="ghost"
            color="gray"
            size="3xs"
            @click="handleClear"
          >
            Clear
          </HLButton>
          <HLButton
            :id="`${id}-filter-apply`"
            variant="ghost"
            color="blue"
            size="3xs"
            @click="handleApply"
          >
            Apply
          </HLButton>
        </div>
      </template>
    </HLPopover>
  </div>
</template>
