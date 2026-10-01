<script setup lang="ts">
import { CheckVerified01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLCheckbox,
  HLDropdown,
  HLDropdownOption,
  HLInputNumber,
  HLSpace,
  HLSpin,
  HLTag,
  HLToggle,
} from '@gohighlevel/highrise'
import { computed, h, inject, onMounted, ref } from 'vue'
import playground from './dropdown/playground.vue'

// Common options that will be used in both basic and tree mode examples
const options:HLDropdownOption[] = [
  {
    key: 'option1',
    label: 'Placeholder',
    description: 'Send out this post to the selected social channels/accounts.',
    descriptionIcon: CheckVerified01Icon,
    disabled: true,
  },
  {
    key: 'header',
    label: 'Actions',
    type: 'header',
  },
  {
    key: 'option2',
    label: 'Nested Options',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      {
        key: 'option2-1',
        label: 'Option 2-1',
        icon: () => h(CheckVerified01Icon),
        iconPlacement: 'left',
      },
      {
        key: 'option2-2',
        label: 'Option 2-2',
        icon: () => h(CheckVerified01Icon),
        iconPlacement: 'right',
      },
    ],
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    key: 'locations',
    label: 'Locations',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      {
        key: 'usa',
        label: 'USA',
        type: 'avatar',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
        infoText: '+1',
      },
      {
        key: 'india',
        label: 'India',
        type: 'avatar',
        src: 'path/to/india-flag.png',
        infoText: '+91',
        description: 'Multiple time zones',
      },
    ],
  },
  {
    key: 'custom',
    label: 'Custom Rendering',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      {
        key: 'loading',
        label: 'Loading State',
        type: 'render',
        render: () =>
          h('div', { class: 'w-full bg-gray-200 h-8 animate-pulse' }),
      },
      {
        key: 'stats',
        label: 'Statistics',
        titleRightSlot: () =>
          h(
            HLTag,
            { id: 'dropdown-tag', size: 'sm', round: true, variant: 'error' },
            { default: () => '2% increase' }
          ),
      },
    ],
  },
]

const maxHeight = ref(400)
const isShowSearch = ref(true)

const optionsForScroll:HLDropdownOption[] = [
  {
    key: 'option1',
    label: 'Placeholder',
    description: 'Send out this post to the selected social channels/accounts.',
    descriptionIcon: CheckVerified01Icon,
  },
  {
    key: 'header',
    label: 'Actions',
    type: 'header',
  },
  {
    key: 'option2',
    label: 'Nested Options',
    type: 'icon',
    icon: () => h(CheckVerified01Icon),
    iconPlacement: 'left',
    children: [
      {
        key: 'option2-1',
        label: 'Option 2-1',
        icon: () => h(CheckVerified01Icon),
        iconPlacement: 'left',
      },
      {
        key: 'option2-2',
        label: 'Option 2-2',
        icon: () => h(CheckVerified01Icon),
        iconPlacement: 'right',
      },
      {
        key: 'option2-3',
        label: 'Option 2-3',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
      {
        key: 'option2-4',
        label: 'Option 2-4',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
      {
        key: 'option2-5',
        label: 'Option 2-5',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
      {
        key: 'option2-6',
        label: 'Option 2-6',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
      {
        key: 'option2-7',
        label: 'Option 2-7',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
      {
        key: 'option2-8',
        label: 'Option 2-8',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
      {
        key: 'option2-9',
        label: 'Option 2-9',
        icon: () => h(CheckVerified01Icon),
        description: 'This is a description',
        iconPlacement: 'right',
      },
    ],
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    key: 'locations',
    label: 'Locations',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      {
        key: 'usa',
        label: 'USA',
        type: 'avatar',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
        infoText: '+1',
      },
      {
        key: 'india',
        label: 'India',
        type: 'avatar',
        src: 'path/to/india-flag.png',
        infoText: '+91',
        description: 'Multiple time zones',
      },
    ],
  },
  {
    key: 'custom',
    label: 'Custom Rendering',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      {
        key: 'loading',
        label: 'Loading State',
        type: 'render',
        render: () =>
          h('div', { class: 'w-full bg-gray-200 h-8 animate-pulse' }),
      },
      {
        key: 'stats',
        label: 'Statistics',
        titleRightSlot: () =>
          h(
            HLTag,
            { id: 'dropdown-tag', size: 'sm', round: true, variant: 'error' },
            { default: () => '2% increase' }
          ),
      },
    ],
  },
  {
    key: 'option5',
    label: 'Option 5',
    description: 'This is a description',
  },
  {
    key: 'option6',
    label: 'Option 6',
    description: 'This is a description',
  },
  {
    key: 'option7',
    label: 'Option 7',
    description: 'This is a description',
  },
  {
    key: 'option8',
    label: 'Option 8',
    description: 'This is a description',
  },
  {
    key: 'option9',
    label: 'Option 9',
    description: 'This is a description',
  },
]

// Custom search example setup
const searchQuery = ref('')
const isLoading = ref(false)

const allOptions:HLDropdownOption[] = [
  {
    key: 'fruits',
    label: 'Fruits',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      { key: 'apple', label: 'Apple', description: 'Red and sweet' },
      { key: 'banana', label: 'Banana', description: 'Yellow and creamy' },
      { key: 'orange', label: 'Orange', description: 'Citrus fruit' },
    ],
  },
  {
    key: 'vegetables',
    label: 'Vegetables',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'right',
    children: [
      { key: 'carrot', label: 'Carrot', description: 'Orange and crunchy' },
      { key: 'broccoli', label: 'Broccoli', description: 'Green and healthy' },
      { key: 'potato', label: 'Potato', description: 'Starchy vegetable' },
    ],
  },
]

const filteredOptions = computed(() => {
  if (!searchQuery.value) return allOptions

  const searchLower = searchQuery.value.toLowerCase()

  return allOptions
    .map(group => {
      const matchingChildren = group.children?.filter(
        item =>
          item.label?.toLowerCase().includes(searchLower) ||
          item.description?.toLowerCase().includes(searchLower)
      )

      if (!matchingChildren?.length) return null

      return {
        ...group,
        children: matchingChildren,
      }
    })
    .filter(Boolean) as HLDropdownOption[]
})

let searchTimeout: NodeJS.Timeout | null = null
const handleSearch = (value: string) => {
  if (searchTimeout) clearTimeout(searchTimeout)
  isLoading.value = true

  searchTimeout = setTimeout(() => {
    searchQuery.value = value
    isLoading.value = false
  }, 300)
}

const resetTreeState = ref(false)

const handleScroll = (event: Event) => {
  console.log('handleScroll', event)
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// Single text options for examples
const singleTextOptions = [
  { key: 'option1', label: 'Option 1' },
  { key: 'option2', label: 'Option 2' },
  { key: 'option3', label: 'Option 3' },
]

// Infinite Loading Example - State
const infiniteLoadingOptions = ref<any[]>([])
const infiniteLoadingIsLoading = ref(false)
const infiniteLoadingPage = ref(1)
const infiniteLoadingHasMore = ref(true)

const generateInfiniteItems = (start: number, count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    key: `item-${start + index}`,
    label: `Item ${start + index}`,
    value: `${start + index}`,
    description: `Description for item ${start + index}`,
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
  }))
}

const loadMoreInfiniteItems = async () => {
  if (infiniteLoadingIsLoading.value || !infiniteLoadingHasMore.value) return
  
  infiniteLoadingIsLoading.value = true
  
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Load 20 items per page
    const newItems = generateInfiniteItems((infiniteLoadingPage.value - 1) * 20 + 1, 20)
    infiniteLoadingOptions.value = [...infiniteLoadingOptions.value, ...newItems]
    
    infiniteLoadingPage.value += 1
    infiniteLoadingHasMore.value = infiniteLoadingPage.value < 6 // 5 pages total (100 items)
  } finally {
    infiniteLoadingIsLoading.value = false
  }
}

const handleInfiniteScroll = async (e: Event) => {
  const target = e.target as HTMLElement
  const { scrollTop, scrollHeight, clientHeight } = target
  if (scrollHeight - scrollTop - clientHeight < 50) {
    await loadMoreInfiniteItems()
  }
}

onMounted(() => {
  loadMoreInfiniteItems()
})

// Children max height options for SubmenuHeight example
const childrenMaxHeightOptions = [
  {
    key: 'parent1',
    label: 'Parent 1',
    childrenMaxHeight: '200px', // Custom max height for this submenu
    children: Array.from({ length: 15 }, (_, i) => ({
      key: `parent1-child-${i + 1}`,
      label: `Child ${i + 1}`,
    })),
  },
  {
    key: 'parent2',
    label: 'Parent 2 - Multi-Level Nesting',
    childrenMaxHeight: '150px', // First level submenu max height
    children: [
      {
        key: 'parent2-child1',
        label: 'Level 2',
        childrenMaxHeight: '200px',
        children: Array.from({ length: 20 }, (_, i) => ({
          // Many children to make it scrollable
          key: `parent5-child1-grandchild-${i + 1}`,
          label: `Grandchild ${i + 1}`,
        })),
      },
      {
        key: 'parent2-child2',
        label: 'Level 2 - Has Cascade + Scroll',
        childrenMaxHeight: '150px',
        children: Array.from({ length: 15 }, (_, i) => ({
          key: `parent5-child2-grandchild-${i + 1}`,
          label: `Grandchild ${i + 1}`,
        })),
      },
      {
        key: 'parent2-child3',
        label: 'Level 2 - Has Cascade + Scroll + Level 3',
        childrenMaxHeight: '180px', // Second level scrollable
        children: [
          {
            key: 'parent2-child3-level3',
            label: 'Level 3 - Deeply Nested',
            childrenMaxHeight: '120px', // Third level submenu max height
            children: Array.from({ length: 10 }, (_, i) => ({
              key: `parent2-child3-level3-greatgrandchild-${i + 1}`,
              label: `Great Grandchild ${i + 1}`,
            })),
          },
          {
            key: 'parent2-child3-regular',
            label: 'Level 3 Regular Item',
          },
        ],
      },
      {
        key: 'parent2-child4',
        label: 'Level 2 - Regular Child (No Cascade)',
      },
    ],
  },
]

const handleSubmenuSelect = (key: string, option: any) => {
  console.log('Selected:', key, option)
}

const handleHeaderFooterSelect = (key: string, option: any) => {
  console.log('Selected:', key, option)
}

const handleHeaderFooterSearchUpdate = (value: string) => {
  console.log('Search value updated:', value)
}

const handleHeaderFooterClickOutside = (event: Event) => {
  console.log('Clicked outside:', event)
}

const handleHeaderFooterMouseEnter = (event: Event) => {
  console.log('Mouse enter:', event)
}

const handleHeaderFooterMouseLeave = (event: Event) => {
  console.log('Mouse leave:', event)
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <playground />
      <div>
        <h2>Basic Usage with close on select false</h2>
        <HLDropdown
          id="basic-dropdown"
          trigger="click"
          placement="bottom"
          :options="options"
          :close-on-select="false"
        >
          <HLButton id="basic-dropdown-btn" size="sm">Basic Dropdown</HLButton>
        </HLDropdown>
      </div>
      <HLCheckbox id="dckd" v-model:checked="resetTreeState" label="Reset Tree State" />
      <!-- Dropdown Tree -->
      <div>
        <h2>Dropdown Tree</h2>
        <HLDropdown
          id="tree-dropdown"
          trigger="click"
          placement="bottom"
          :options="options"
          tree-mode
          show-search
          :width="280"
          :resetTreeOnChange="resetTreeState"
        >
          <HLButton id="tree-dropdown-btn" size="sm">Dropdown Tree</HLButton>
        </HLDropdown>
      </div>

      <!-- Custom Search -->
      <div>
        <h2>Custom Search</h2>
        <HLDropdown
          id="custom-search-dropdown"
          trigger="click"
          placement="bottom"
          :options="filteredOptions"
          show-search
          :width="280"
          @search="handleSearch"
        >
          <HLButton id="custom-search-btn" size="sm">Custom Search</HLButton>
        </HLDropdown>
      </div>

      <!-- Custom Render -->
      <div>
        <h2>Custom Render</h2>
        <HLDropdown
          id="custom-render-dropdown"
          trigger="click"
          placement="bottom"
          :options="[
            {
              key: 'custom-content',
              label: 'Custom Content',
              type: 'render',
              render: () =>
                h('div', { class: 'flex flex-col gap-2 p-2' }, [
                  h('div', { class: 'text-sm font-medium' }, 'Custom Content'),
                  h(
                    'div',
                    { class: 'text-xs text-gray-500' },
                    'This is a fully custom rendered option'
                  ),
                  h('div', { class: 'mt-2 flex items-center gap-2' }, [
                    h('div', { class: 'w-2 h-2 rounded-full bg-green-500' }),
                    h('span', { class: 'text-xs' }, 'Active'),
                  ]),
                ]),
            },
          ]"
        >
          <HLButton id="custom-render-btn" size="sm">Custom Render</HLButton>
        </HLDropdown>
      </div>
      <div>
        <h2>Basic Usage with clearable in search and close on select false</h2>
        <HLDropdown
          id="basic-dropdown"
          trigger="click"
          placement="bottom"
          :options="options"
          :clearable-in-search="true"
          :close-on-select="false"
        >
          <HLButton id="basic-dropdown-btn" size="sm">Basic Dropdown</HLButton>
        </HLDropdown>
      </div>
      <div>
        <h2>Usage with scroll</h2>
        <HLToggle v-model:value="isShowSearch" label="Show Search" />
        <HLInputNumber
          id="max-height-input"
          v-model:value="maxHeight"
          label="Max Height"
        />
        <br />
        <HLDropdown
          id="basic-dropdown"
          trigger="click"
          placement="bottom"
          :options="optionsForScroll"
          :show-search="isShowSearch"
          :max-height="`${maxHeight}px`"
          :clearable-in-search="true"
          :tree-mode="true"
          @scroll="handleScroll"
        >
          <HLButton id="basic-dropdown-btn" size="sm">Basic Dropdown</HLButton>
        </HLDropdown>
      </div>

      <!-- Infinite Loading -->
      <div>
        <h2>Infinite Loading</h2>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="font-size: 14px; color: var(--gray-600);">
            Infinite scrolling example (scroll down to load more items)
          </div>
          <HLDropdown
            id="infinite-loading-dropdown"
            trigger="click"
            placement="bottom"
            :options="infiniteLoadingOptions"
            max-height="300px"
            :show-search="false"
            @scroll="handleInfiniteScroll"
          >
            <HLButton id="infinite-loading-btn" size="sm">
              Open Dropdown ({{ infiniteLoadingOptions.length }} items)
            </HLButton>
            <template #loader>
              <div
                v-if="infiniteLoadingIsLoading || infiniteLoadingHasMore"
                style="padding: 8px; text-align: center;"
              >
                <HLSpin v-if="infiniteLoadingIsLoading" id="infinite-loading-spin" size="sm" />
              </div>
            </template>
          </HLDropdown>
        </div>
      </div>

      <!-- Submenu Height -->
      <div>
        <h2>Submenu Height with Multi-Level Nesting</h2>
        <HLDropdown
          id="submenu-height-dropdown"
          trigger="hover"
          placement="bottom"
          :options="childrenMaxHeightOptions"
          max-height="300px"
          :show-search="false"
          @select="handleSubmenuSelect"
        >
          <HLButton id="submenu-height-btn" size="sm">
            Dropdown with Multi-Level Nesting & Scroll
          </HLButton>
        </HLDropdown>
      </div>

      <!-- With Header And Footer -->
      <div>
        <h2>With Header and Footer</h2>
        <HLDropdown
          id="header-footer-dropdown"
          trigger="click"
          placement="bottom"
          :options="singleTextOptions"
          @select="handleHeaderFooterSelect"
          @update:searchValue="handleHeaderFooterSearchUpdate"
          @clickoutside="handleHeaderFooterClickOutside"
          @mouseenter="handleHeaderFooterMouseEnter"
          @mouseleave="handleHeaderFooterMouseLeave"
        >
          <HLButton id="header-footer-btn" size="sm">Dropdown with Header & Footer</HLButton>
          <template #header>
            <div class="p-2 bg-gray-200">Header</div>
          </template>
          <template #footer>
            <div class="p-2 bg-gray-200">Footer</div>
          </template>
        </HLDropdown>
      </div>
    </HLSpace>
  </div>
</template>
