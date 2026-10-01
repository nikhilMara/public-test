<script setup lang="ts">
import {
  CheckVerified01Icon,
  Edit01Icon,
  Mail01Icon,
  MessageDotsCircleIcon,
  PhoneIcon,
  User01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLCheckbox,
  HLDrawer,
  HLDrawerContent,
  HLIcon,
  HLInput,
  HLInputNumber,
  HLSelect,
  HLSpace,
  HLTag,
  HLToggle,
} from '@gohighlevel/highrise'
import { h, inject, ref } from 'vue'
import InfiniteScroll from './select-examples/Infinite-scroll.vue'
import RemoteSearch from './select-examples/remote-search.vue'

const resetMenuOnOptionsChange = ref(false)
const showDrawer = ref(false)
const selectedValue = ref(null)
const multipleValue = ref([])
const showInlineCTA = ref(false)
const show = ref(false)

// Truncation example
const truncateEnabled = ref(true)
const maxWidthNumber = ref(100)
const sampleSelectText = ref(
  'This is a very long option text that will be truncated if it exceeds the max width'
)

const handleChange = (value: any) => {
  selectedValue.value = value
}

const handleMultipleChange = (value: any) => {
  multipleValue.value = value
}

const options = [
  {
    type: 'group',
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Drive My Car',
        value: 'song1',
        description: 'Drive My Car.ogg',
        tagColor: 'blue',
      },
      {
        label: 'Norwegian Wood',
        value: 'song2',
        description: 'Norwegian Wood.ogg',
        tagColor: 'green',
      },
      {
        label: "Everybody's Got Something to Hide Except Me and My Monkey",
        value: 'song0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.',
        tagColor: 'blue',
      },
      {
        label: "You Won't See",
        value: 'song3',
        description: "You Won't See.ogg",
        disabled: true,
        tagColor: 'gray',
      },
    ],
  },
  {
    type: 'group',
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        value: 'Two Of Us',
        tagColor: 'purple',
      },
      {
        label: 'Dig A Pony',
        value: 'Dig A Pony',
        description: 'Dig A Pony.avi',
        tagColor: 'orange',
      },
      {
        label: 'I Me Mine',
        value: 'I Me Mine',
        description: 'I Me Mine.mp3',
        tagColor: 'red',
      },
    ],
  },
]

const customOptions = [
  {
    type: 'group',
    label: 'Header',
    key: 'custom-group',
    children: [
      {
        label: "Everybody's Got Something to Hide Except Me and My Monkey",
        value: 'song0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.',
        backgroundColor: 'var(--blue-50)',
        color: 'var(--blue-700)',
      },
      { type: 'divider' },
      {
        value: 'song1',
        backgroundColor: 'var(--green-50)',
        color: 'var(--green-700)',
        label: h('div', { class: 'flex items-center gap-2' }, [
          h('div', 'Custom Render'),
          h(
            HLTag,
            { id: 'dropdown-tag', size: 'sm', round: true, variant: 'error' },
            { default: () => '2% increase' }
          ),
        ]),
        tagRenderer: 'Custom Tag',
      },
      {
        label: 'Norwegian Wood',
        value: 'song2',
        description: h(
          HLSpace,
          { wrapItem: false, align: 'center' },
          {
            default: () => [
              h(
                HLIcon,
                { size: 'sm' },
                { default: () => h(CheckVerified01Icon) }
              ),
              h(
                'span',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              ),
            ],
          }
        ),
        backgroundColor: 'var(--purple-50)',
        color: 'var(--purple-700)',
      },
    ],
  },
]

// Story demonstrating tagProps object functionality
const tagPropsObjectOptions = [
  {
    label: 'Default Tag',
    value: 'default-1',
  },
  {
    label: 'Custom Color Tag',
    value: 'color-1',
    tagProps: {
      color: 'success',
    },
  },
  {
    label: 'Rounded Tag',
    value: 'rounded-1',
    tagProps: {
      round: true,
      color: 'primary',
    },
  },
  {
    label: 'Interactive Tag',
    value: 'interactive-1',
    tagProps: {
      interactive: true,
      color: 'warning',
    },
  },
  {
    label: 'Disabled Tag',
    value: 'disabled-1',
    tagProps: {
      disabled: true,
      color: 'gray',
    },
  },
  {
    label: 'Non-closable Tag',
    value: 'non-closable-1',
    tagProps: {
      closable: false,
      color: 'error',
    },
  },
  {
    label: 'Tag with Count',
    value: 'count-1',
    tagProps: {
      count: 5,
      color: 'blue',
    },
  },
  {
    label: 'Tag with Dropdown',
    value: 'dropdown-1',
    tagProps: {
      dropdown: 'close',
      color: 'purple',
    },
  },
  {
    label: 'Truncated Tag',
    value: 'truncated-1',
    tagProps: {
      truncate: true,
      maxWidth: 100,
      color: 'indigo',
    },
  },
  {
    label: 'Custom Size Tag',
    value: 'size-1',
    tagProps: {
      size: 'lg',
      color: 'pink',
    },
  },
  {
    label: 'Tag with Custom Avatar',
    value: 'avatar-1',
    tagProps: {
      color: 'blue',
      avatarProps: {
        size: 'xs',
        objectFit: 'cover',
        round: true,
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
        indicator: true,
        name: 'Custom Avatar',
      },
    },
  },
  {
    label: 'Tag with Custom Name (No Image)',
    value: 'avatar-2',
    tagProps: {
      color: 'green',
      avatarProps: {
        size: 'sm',
        objectFit: 'contain',
        round: false,
        indicator: false,
        name: 'Custom Name Override', // This will show initials since no src
      },
    },
  },
  {
    label: 'Tag with Image (Name Ignored)',
    value: 'avatar-3',
    tagProps: {
      color: 'purple',
      avatarProps: {
        size: 'sm',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
        name: 'This Name Will Be Ignored', // This will be ignored because src is provided
      },
    },
  },
]

const showSavedMark = ref(false)

const handleConfirm = () => {
  show.value = false
  showInlineCTA.value = false
  showSavedMark.value = true
  setTimeout(() => {
    showSavedMark.value = false
  }, 2000)
}

const handleCancel = () => {
  selectedValue.value = null
  show.value = false
  showInlineCTA.value = false
}

const handleUpdateShow = (value: boolean) => {
  show.value = value
  showInlineCTA.value = true
}

const showDropdownMenu = ref(false)

// Textarea options management - now includes tagProps options
const textareaOptions = ref(JSON.stringify(tagPropsObjectOptions, null, 2))
const parsedOptions = ref(tagPropsObjectOptions)
const parseError = ref('')

// TagProps textarea management
const textareaTagPropsOptions = ref(
  JSON.stringify(tagPropsObjectOptions, null, 2)
)
const parsedTagPropsOptions = ref(tagPropsObjectOptions)
const tagPropsParseError = ref('')

const parseTextareaOptions = () => {
  try {
    const parsed = JSON.parse(textareaOptions.value)
    parsedOptions.value = parsed
    parseError.value = ''
  } catch (error) {
    parseError.value = `Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`
  }
}

const resetToDefault = () => {
  textareaOptions.value = JSON.stringify(tagPropsObjectOptions, null, 2)
  parsedOptions.value = tagPropsObjectOptions
  parseError.value = ''
}

const parseTagPropsOptions = () => {
  try {
    const parsed = JSON.parse(textareaTagPropsOptions.value)
    parsedTagPropsOptions.value = parsed
    tagPropsParseError.value = ''
  } catch (error) {
    tagPropsParseError.value = `Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`
  }
}

const resetTagPropsToDefault = () => {
  textareaTagPropsOptions.value = JSON.stringify(tagPropsObjectOptions, null, 2)
  parsedTagPropsOptions.value = tagPropsObjectOptions
  tagPropsParseError.value = ''
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Options Editor -->
      <div>
        <h2>Options Editor</h2>
        <p>Edit the JSON below to modify the select options:</p>
        <HLInput
          type="textarea"
          v-model:modelValue="textareaOptions"
          placeholder="Enter JSON options..."
          :rows="10"
          style="font-family: monospace; font-size: 12px"
        />
        <HLSpace style="margin-top: 8px">
          <HLButton @click="parseTextareaOptions" type="primary" size="sm">
            Apply Changes
          </HLButton>
          <HLButton @click="resetToDefault" size="sm">
            Reset to Default
          </HLButton>
        </HLSpace>
        <div
          v-if="parseError"
          style="color: red; margin-top: 8px; font-size: 14px"
        >
          {{ parseError }}
        </div>
      </div>

      <!-- Default Select -->
      <div>
        <h2>Default Select (Using Parsed Options)</h2>
        <HLSelect
          :options="parsedOptions"
          :value="selectedValue"
          @update:value="handleChange"
          :multiple="true"
          id="select-default"
        />
      </div>

      <!-- With Icon -->
      <div>
        <h2>With Icon</h2>
        <HLSelect
          type="avatar"
          :options="options"
          :value="selectedValue"
          @update:value="handleChange"
          id="select-avatar"
        >
          <template #icon>
            <div class="hr-select-menu-placeholder-icon">
              <User01Icon />
            </div>
          </template>
        </HLSelect>
      </div>

      <!-- Searchable Select -->
      <div>
        <h2>Searchable Select with show prop</h2>
        <HLToggle v-model:value="showDropdownMenu" label="Show Search" />
        <HLSelect
          filterable
          showSearchIcon
          :show="showDropdownMenu"
          :options="options"
          :value="selectedValue"
          @update:value="handleChange"
          id="select-searchable"
        />
      </div>

      <!-- Multiple Selection -->
      <div>
        <h2>Multiple Selection</h2>
        <HLSelect
          multiple
          type="avatar"
          filterable
          showSearchIcon
          :options="options"
          :value="multipleValue"
          @update:value="handleMultipleChange"
          id="select-multiple"
        />
      </div>

      <!-- Multiple Selection with Avatar -->
      <div>
        <h2>Multiple Selection with Avatar</h2>
        <HLSelect
          multiple
          type="avatar"
          filterable
          showSearchIcon
          :options="options"
          :value="multipleValue"
          @update:value="handleMultipleChange"
          id="select-multiple-avatar"
          :showAvatarInTags="true"
        />
      </div>

      <!-- Inline Select Variants -->
      <div>
        <h2>Inline Select Variants</h2>

        <!-- Default Inline -->
        <div style="margin-bottom: 1rem">
          <h3>Default Inline</h3>
          <HLSelect
            :options="options"
            :value="selectedValue"
            @update:value="handleChange"
            :inline="true"
            size="sm"
            id="select-inline"
          />
        </div>

        <!-- Inline with CTA -->
        <div style="margin-bottom: 1rem">
          <h3>Inline with CTA with Saved Mark</h3>
          <HLSelect
            :options="options"
            :value="selectedValue"
            @update:value="handleChange"
            :inline="true"
            :showInlineCTA="showInlineCTA"
            :filterable="true"
            size="sm"
            id="select-inline-cta"
            @handleConfirm="handleConfirm"
            @handleCancel="handleCancel"
            @update:show="handleUpdateShow"
            :showSavedMark="showSavedMark"
          >
            <template #edit-actions>
              <HLIcon
                aria-label="Edit Icon"
                @click="console.log('edit', $event)"
                ><Edit01Icon
              /></HLIcon>
              <HLIcon
                aria-label="Phone Icon"
                color="var(--success-600)"
                @click="console.log('phone', $event)"
                ><PhoneIcon
              /></HLIcon>
              <HLIcon
                aria-label="Mail Icon"
                @click="console.log('mail', $event)"
                ><Mail01Icon
              /></HLIcon>
              <HLIcon
                aria-label="Message Dots Circle Icon"
                @click="console.log('message', $event)"
                ><MessageDotsCircleIcon
              /></HLIcon>
            </template>
          </HLSelect>
        </div>

        <!-- Inline with Bottom Border -->
        <div style="margin-bottom: 1rem">
          <h3>Inline with Bottom Border</h3>
          <HLSelect
            :options="options"
            :value="selectedValue"
            @update:value="handleChange"
            :inline="true"
            :showInlineBottomBorder="true"
            size="sm"
            id="select-inline-border"
          />
        </div>

        <!-- Rounded Tags -->
        <div style="margin-bottom: 1rem">
          <h3>Rounded Tags</h3>
          <HLSelect
            :options="options"
            :value="multipleValue"
            @update:value="handleMultipleChange"
            :inline="true"
            :multiple="true"
            type="avatar"
            :filterable="true"
            :showSearchIcon="true"
            :roundedTags="true"
            size="sm"
            id="select-rounded-tags"
          />
        </div>

        <!-- Disabled Inline Select -->
        <div style="margin-bottom: 1rem">
          <h3>Disabled Inline Select</h3>
          <HLSelect
            :options="options"
            :value="selectedValue"
            @update:value="handleChange"
            :inline="true"
            :disabled="true"
            size="sm"
            id="select-inline-disabled"
          />
        </div>
      </div>

      <!-- Custom Options -->
      <div>
        <h2>Custom Options</h2>
        <HLSelect
          :options="customOptions"
          :value="selectedValue"
          @update:value="handleChange"
          id="select-custom"
        />
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Large</h3>
            <HLSelect
              :options="options"
              :value="selectedValue"
              @update:value="handleChange"
              size="lg"
              id="select-lg"
            />
          </div>
          <div>
            <h3>Medium (Default)</h3>
            <HLSelect
              :options="options"
              :value="selectedValue"
              @update:value="handleChange"
              size="md"
              id="select-md"
            />
          </div>
          <div>
            <h3>Small</h3>
            <HLSelect
              :options="options"
              :value="selectedValue"
              @update:value="handleChange"
              size="sm"
              id="select-sm"
            />
          </div>
        </HLSpace>
      </div>

      <!-- States -->
      <div>
        <h2>States</h2>
        <HLSpace vertical>
          <div>
            <h3>Disabled</h3>
            <HLSelect
              :options="options"
              :value="selectedValue"
              @update:value="handleChange"
              :disabled="true"
              id="select-disabled"
            />
          </div>
          <div>
            <h3>Loading</h3>
            <HLSelect
              :options="options"
              :value="selectedValue"
              @update:value="handleChange"
              :loading="true"
              id="select-loading"
            />
          </div>
          <div>
            <h3>Error State</h3>
            <HLSelect
              :options="options"
              :value="selectedValue"
              @update:value="handleChange"
              status="error"
              id="select-error"
            />
          </div>
          <div>
            <h3>Infinite Scroll</h3>
            <HLCheckbox
              v-model:checked="resetMenuOnOptionsChange"
              label="Reset Menu On Options Change"
            />
            <InfiniteScroll
              :reset-menu-on-options-change="resetMenuOnOptionsChange"
            />
          </div>
          <div>
            <h3>Remote Search</h3>
            <HLCheckbox
              v-model:checked="resetMenuOnOptionsChange"
              label="Reset Menu On Options Change"
            />
            <RemoteSearch
              :reset-menu-on-options-change="resetMenuOnOptionsChange"
            />
          </div>
          <div>
            <h3>Select inside Drawer</h3>
            <HLButton id="select-inside-drawer-btn" @click="showDrawer = true"
              >Open Drawer</HLButton
            >
            <HLDrawer id="select-inside-drawer" v-model:show="showDrawer">
              <HLDrawerContent id="select-inside-drawer-content">
                <p>This is a select inside a drawer</p>
                <RemoteSearch
                  id="select-inside-drawer-remote-search"
                  :reset-menu-on-options-change="resetMenuOnOptionsChange"
                />
              </HLDrawerContent>
            </HLDrawer>
          </div>
        </HLSpace>
      </div>
      <!-- Truncation Example -->
      <div>
        <p>Truncation Example</p>
        <HLSpace vertical>
          <HLCheckbox
            v-model:checked="truncateEnabled"
            label="Enable Truncation"
          />
          <HLInputNumber
            v-model:value="maxWidthNumber"
            placeholder="Enter max width"
          />
          <HLSelect
            :options="[
              {
                label: sampleSelectText,
                value: 'long-option',
              },
              {
                label: 'Normal Option',
                value: 'normal-option',
              },
            ]"
            :multiple="true"
            :value="selectedValue"
            @update:value="handleChange"
            :allow-tag-truncation="truncateEnabled"
            :max-tag-width="maxWidthNumber"
            id="truncation-example"
          />
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
