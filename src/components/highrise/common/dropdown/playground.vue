<script setup lang="ts">
import { CheckVerified01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLDropdown,
  HLInput,
  HLTag,
  HLToggle,
  HLTooltip,
} from '@gohighlevel/highrise'
import { computed, h, ref } from 'vue'

// Common options that will be used in both basic and tree mode examples
const baseOptions = [
  {
    key: 'option1',
    label: 'Placeholder',
    description: 'Send out this post to the selected social channels/accounts.',
    descriptionIcon: CheckVerified01Icon,
  },
  {
    key: 'disabled_header',
    label: 'Disabled Options (Editable)',
    type: 'header',
  },
]

const options = computed(() => [
  ...baseOptions,
  ...parsedDisabledOptions.value,
  {
    key: 'option2',
    label: 'Parent',
    type: 'icon',
    icon: CheckVerified01Icon,
    iconPlacement: 'left',
    children: [
      {
        key: 'option2-1',
        label: 'Child 1',
        children: [
          {
            key: 'option2-1-1',
            label: 'Grandchild 1',
            type: 'icon',
            icon: CheckVerified01Icon,
            iconPlacement: 'left',
            children: [
              {
                key: 'option2-1-1-1',
                label: 'Great Grandchild 1',
              },
              {
                key: 'child4',
                label: 'Child 4',
                render: () =>
                  h('div', { class: 'w-full bg-gray-200 h-8 animate-pulse' }),
              },
              {
                key: 'option2-1-1-2',
                label: 'Great Grandchild 2',
              },
              {
                key: 'option2-1-1-3',
                label: 'Great Grandchild 3',
              },
              {
                key: 'option2-1-1-4',
                label: 'Great Grandchild 4',
              },
              {
                key: 'option2-1-1-5',
                label: 'Great Grandchild 5',
              },
              {
                key: 'option2-1-1-6',
                label: 'Great Grandchild 6',
              },
            ],
          },
        ],
      },
      {
        key: 'option2-2',
        label: 'Child 2',
      },
      {
        key: 'option2-3',
        label: 'Child 3',
      },
      {
        key: 'option2-4',
        label: 'Child 4',
      },
      {
        key: 'option2-5',
        label: 'Child 5',
      },
      {
        key: 'option2-6',
        label: 'Child 6',
      },
      {
        key: 'option2-7',
        label: 'Child 7',
      },
    ],
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
    key: 'option8',
    label: 'Option 8',
    type: 'render',
    render: () =>
      h(
        HLTooltip,
        {
          trigger: 'hover',
          variant: 'dark',
          placement: 'top',
          width: 200,
          to: 'body',
        },
        {
          trigger: () =>
            h(
              'div',
              {
                class:
                  'flex items-center gap-4 py-2 px-3.5 justify-between cursor-pointer hover:bg-gray-100',
              },
              [
                h(
                  'div',
                  { class: 'w-[calc(100%-36px)] flex items-center gap-2' },
                  [
                    h(
                      'div',
                      {
                        class:
                          '!w-5 !h-5 min-w-5 min-h-5 text-gray-500 object-icon-wrapper',
                      },
                      [h(CheckVerified01Icon, { class: '!w-4 !h-4' })]
                    ),
                    h('span', { class: 'flex-1 text-sm truncate' }, 'Option 8'),
                  ]
                ),
                h(CheckVerified01Icon, {
                  class: '!w-4 !h-4 !min-w-4 !min-h-4 text-primary-500',
                }),
              ]
            ),
          default: () => h('div', {}, 'Tooltip content for Option 8'),
        }
      ),
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
])

const disabledOptionsJson = ref(`[
  {
    "key": "disabled_option",
    "label": "Disabled Option",
    "description": "This option is disabled",
    "disabled": true
  },
  {
    "key": "group_with_disabled",
    "label": "Group with Disabled Child",
    "type": "icon",
    "icon": CheckVerified01Icon,
    "iconPlacement": "left",
    "children": [
      {
        "key": "normal_child",
        "label": "Normal Child",
        "description": "This is a normal option"
      },
      {
        "key": "disabled_child",
        "label": "Disabled Child",
        "description": "This child is disabled",
        "disabled": true
      }
    ]
  }
]`)

const parsedDisabledOptions = computed(() => {
  try {
    return JSON.parse(disabledOptionsJson.value)
  } catch (e) {
    return []
  }
})

const isValidJson = computed(() => {
  try {
    JSON.parse(disabledOptionsJson.value)
    return true
  } catch (e) {
    return false
  }
})

const clearableInSearch = ref(false)
const resetTreeOnChange = ref(false)
const treeMode = ref(false)
const closeOnSelect = ref(false)
const searchPlaceholder = ref('Search...')
const searchValue = ref('')
const maxHeight = ref(200)
</script>

<template>
  <div>
    <h2>Playground</h2>

    <!-- Controls -->
    <div class="flex gap-2 mb-4">
      <HLToggle v-model:value="clearableInSearch" label="Clearable in search" />
      <HLToggle
        v-model:value="resetTreeOnChange"
        label="Reset tree on change"
      />
      <HLToggle v-model:value="treeMode" label="Tree mode" />
      <HLToggle v-model:value="closeOnSelect" label="Close on select" />
    </div>
    <HLInput
      id="search-placeholder-input"
      v-model:model-value="searchPlaceholder"
      placeholder="Search Placeholder"
    />
    <HLInput
      id="search-value-input"
      v-model:model-value="searchValue"
      placeholder="Search Value"
    />
    <HLInput
      id="max-height-input"
      v-model:model-value="maxHeight"
      placeholder="Max Height"
    />
    <!-- Disabled Options Editor -->
    <div class="mb-4">
      <h3 class="text-sm font-medium mb-2">Edit Disabled Options</h3>
      <div class="flex gap-4">
        <div class="flex-1">
          <textarea
            v-model="disabledOptionsJson"
            :class="[
              'w-full p-2 font-mono text-sm border rounded',
              isValidJson ? 'border-green-500' : 'border-red-500',
            ]"
            rows="10"
            placeholder="Edit JSON for disabled options..."
          />
          <p
            class="text-xs mt-1"
            :class="isValidJson ? 'text-green-600' : 'text-red-600'"
          >
            {{ isValidJson ? 'Valid JSON' : 'Invalid JSON' }}
          </p>
        </div>
      </div>
    </div>
    <HLDropdown
      id="play-ground-dropdown"
      trigger="click"
      placement="bottom"
      :options="options"
      :clearable-in-search="clearableInSearch"
      :reset-tree-on-change="resetTreeOnChange"
      :tree-mode="treeMode"
      :close-on-select="closeOnSelect"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValue"
      :max-height="treeMode ? `${maxHeight}px` : undefined"
      @update:search-value="searchValue = $event"
    >
      <HLButton id="play-ground-dropdown-btn">Open Dropdown</HLButton>
    </HLDropdown>
  </div>
</template>
