<script setup lang="ts">
import { MaterialArrowRightIcon } from '@gohighlevel/ghl-icons/24/material/rounded'
import { Columns03Icon, SearchLgIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLCheckbox,
  HLIcon,
  HLInput,
  HLPopover,
  HLTableDragGroup,
  HLText,
} from '@gohighlevel/highrise'
import { computed, h, PropType, ref } from 'vue'

const emit = defineEmits(['column-ordering', 'column-checked'])

const props = defineProps({
  defaultColumnOptions: {
    type: Array as PropType<any[]>,
    required: true,
  },
  columnOptions: {
    type: Array as PropType<any[]>,
    required: true,
  },
})

const styles = {
  '--n-padding': '8px',
  border: '1px solid var(--gray-300)',
  minWidth: '300px',
}

const searchColumns = ref('')
const searchColumnsInput = ref()
const columnPopoverRef = ref()
const isPopoverOpen = ref(false)
const selectOptions = computed(() => {
  return props.columnOptions.filter(column => column.checked)
})

const filteredDefaultColumnOptions = computed(() => {
  const filterOptions = props.defaultColumnOptions.map(option => {
    if (searchColumns.value) {
      if (option.options) {
        option.options.forEach((option: any) => {
          option.show = option.label
            .toLowerCase()
            .includes(searchColumns.value.toLowerCase())
        })
        option.show = option.options.some((option: any) => option.show)
      } else {
        option.show = option.label
          .toLowerCase()
          .includes(searchColumns.value.toLowerCase())
      }
    } else {
      option.show = true
      if (option.options) {
        option.options.forEach((option: any) => {
          option.show = true
        })
      }
    }
    return option
  })
  return filterOptions
})

const handleReorder = (args: any) => {
  emit('column-ordering', args)
}
const handleChecked = (field: string, checked: boolean) => {
  emit('column-checked', field, checked)

  setTimeout(() => {
    columnPopoverRef.value?.syncPosition()
  }, 50)
}

const handleSelectAll = () => {
  props.columnOptions.forEach(column => {
    handleChecked(column.value, true)
  })
}

const handlePopoverUpdate = (show: boolean) => {
  isPopoverOpen.value = show
  if (show) {
    setTimeout(() => {
      searchColumnsInput.value?.focus()
    }, 100)
  }
}

const allOptionsChecked = (options: any[]) => {
  return options.every(option => option.checked)
}

const someOptionsChecked = (options: any[]) => {
  return options.some(option => option.checked)
}

const toggleAllOptions = (options: any[], checked: boolean) => {
  options.forEach(option => {
    if (option.frozen) return
    handleChecked(option.value, checked)
  })
}
function highlightSplit(st1: string, st2: string) {
  const index = st1.toLowerCase().indexOf(st2.toLowerCase())
  if (index === -1) return [st1] // substring not found
  const before = st1.slice(0, index)
  const match = st1.slice(index, index + st2.length)
  const after = st1.slice(index + st2.length)
  return [before, match, after]
}

const highlightSearched = (label: string) => {
  const searchValue = searchColumns.value
  if (!searchValue) {
    return h('span', {}, label)
  }
  const parts = highlightSplit(label, searchValue).map(part => {
    return h(
      'span',
      {
        style: {
          fontWeight:
            part.toLowerCase() === searchValue.toLowerCase()
              ? 'var(--hr-font-weight-bold)'
              : 'var(--hr-font-weight-regular)',
        },
      },
      part
    )
  })
  return h('span', {}, parts)
}
</script>

<template>
  <HLPopover
    ref="columnPopoverRef"
    trigger="click"
    placement="bottom"
    :style="styles"
    :show-arrow="false"
    @update:show="handlePopoverUpdate"
  >
    <template #trigger>
      <HLButton id="column-eye-icon" variant="tertiary" size="xs">
        <template #iconLeft>
          <Columns03Icon />
        </template>
        {{ selectOptions.length }}/{{ columnOptions.length }} Columns
      </HLButton>
    </template>
    <div>
      <HLInput
        id="search-columns"
        ref="searchColumnsInput"
        v-model="searchColumns"
        size="2xs"
        :prefix-icon="SearchLgIcon as any"
      />
      <span class="flex items-center gap-2 justify-between p-2">
        <HLText size="sm"> {{ selectOptions.length }} Fields Selected </HLText>
        <HLButton
          id="select-all-button"
          variant="text"
          size="2xs"
          @click="handleSelectAll"
        >
          Select All ({{ columnOptions.length }})
        </HLButton>
      </span>
      <HLTableDragGroup
        id="column-drag"
        :disabled="searchColumns.length > 0"
        :options="columnOptions.filter(column => column.checked)"
        :search="searchColumns"
        max-height="400px"
        @reorder="handleReorder"
        @update:column-checked="handleChecked"
      />
      <div class="remaining-columns">
        <div v-for="column in filteredDefaultColumnOptions" :key="column.value">
          <div v-if="column.options && column.show">
            <div class="remaining-column--group">
              <span
                class="cursor-pointer inline-flex"
                @click="column.expand = !column.expand"
              >
                <HLIcon :size="18" :class="column.expand ? 'rotate-90' : ''"
                  ><MaterialArrowRightIcon
                /></HLIcon>
              </span>
              <HLCheckbox
                id="remaining-column-checkbox"
                :checked="allOptionsChecked(column.options)"
                :indeterminate="
                  !allOptionsChecked(column.options) &&
                  someOptionsChecked(column.options)
                "
                size="xs"
                @update:checked="toggleAllOptions(column.options, $event)"
              >
                <HLText size="sm"> {{ column.label }} </HLText>
              </HLCheckbox>
            </div>
            <div
              v-for="option in column.options"
              v-show="column.expand"
              :key="option.value"
              class="remaining-column--child-item"
            >
              <HLCheckbox
                v-show="option.show"
                id="remaining-column-checkbox"
                :checked="option.checked"
                :disabled="option.frozen"
                size="xs"
                @update:checked="handleChecked(option.value, $event)"
              >
                <component :is="highlightSearched(option.label)" />
              </HLCheckbox>
            </div>
          </div>
          <div v-else-if="column.show" class="remaining-column--item">
            <HLCheckbox
              id="remaining-column-checkbox"
              :checked="column.checked"
              size="xs"
              @update:checked="handleChecked(column.value, $event)"
            >
              <component :is="highlightSearched(column.label)" />
            </HLCheckbox>
          </div>
        </div>
      </div>
    </div>
  </HLPopover>
</template>
<style lang="scss" scoped>
.remaining-columns {
  display: flex;
  flex-direction: column;
  gap: 2px;
  .remaining-column--item {
    padding: 4px 8px;
  }
  .remaining-column--child-item {
    padding: 4px 12px 4px 30px;
  }
  .remaining-column--group {
    background-color: var(--primary-50);
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
  }
}
</style>
