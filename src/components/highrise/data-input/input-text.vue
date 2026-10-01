<script setup lang="ts">
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  ChevronDownIcon,
  Copy05Icon,
  Mail01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLCheckbox,
  HLDropdown,
  HLFormItem,
  HLIcon,
  HLInput,
  HLInputGroup,
  HLInputGroupLabel,
  HLInputNumber,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const fontWeightValue = ref(700)
const fontSizeValue = ref(20)
const inputModelValue = ref('')
const inputModelValue2 = ref('asdfg')

// Grapheme Count
const graphemeInputValue = ref('')
const graphemeInlineValue = ref('Edit me 👨‍👩‍👧‍👦')

// Counts user-perceived characters (graphemes) so emoji / combining marks count as one.
// Falls back to code-point length where Intl.Segmenter is unavailable.
const countGraphemes = (value: string) => {
  const intl = Intl as typeof Intl & { Segmenter?: any }
  if (typeof Intl !== 'undefined' && intl.Segmenter) {
    return [...new intl.Segmenter().segment(value)].length
  }
  return [...value].length
}
const options = [
  {
    key: 'option1',
    label: 'Option 1',
  },
  {
    key: 'option2',
    label: 'Option 2',
  },
  {
    key: 'option3',
    label: 'Option 3',
  },
  {
    key: 'option4',
    label: 'Option 4',
  },
]
const isDropdownOpen = ref(false)
const value = ref('Option 1')
const dropdownInputValue = ref('')

const selectedValue = (selectedOption: any) => {
  console.log('selectedValue called with:', selectedOption)

  if (
    selectedOption &&
    typeof selectedOption === 'object' &&
    selectedOption.label
  ) {
    value.value = selectedOption.label
  } else if (typeof selectedOption === 'string') {
    // Handle case where selectedOption is just a string
    value.value = selectedOption
  }
  isDropdownOpen.value = false
}

const showDropdown = (val: boolean) => {
  isDropdownOpen.value = val
}

// Add eventLog ref and handler for event testing
const eventLog = ref<any[]>([])
const addEventLog = (event: string) => {
  eventLog.value.unshift({
    event,
    timestamp: new Date().toLocaleTimeString(),
  })
  // Keep only last 5 events
  if (eventLog.value.length > 5) {
    eventLog.value.pop()
  }
}

// Inline Input Controls
const inlineInputValue = ref('Click to edit this inline input')
const inlineInputProps = ref({
  inline: true,
  showInlineCTA: false,
  showInlineBottomBorder: true,
  showSavedIcon: false,
  autofocus: false,
  disabled: false,
  readonly: false,
  clearable: false,
  loading: false,
})

// Event handlers for inline components
const handleInlineConfirm = (value: string) => {
  console.log('Inline input confirmed:', value)
  addEventLog('inline-confirm')
}

const handleInlineCancel = (originalValue: string) => {
  console.log('Inline input cancelled, reverted to:', originalValue)
  addEventLog('inline-cancel')
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>
<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>Basic text input with two-way binding and placeholder text.</p>
        <HLInput
          v-model:modelValue="inputModelValue"
          id="example-input-text"
          placeholder="Enter text..."
        />
      </div>

      <!-- Grapheme Count -->
      <div>
        <h2>Grapheme Count</h2>
        <p>
          Counts user-perceived characters (graphemes) so emoji and combining
          marks count as one. Try typing an emoji like 👨‍👩‍👧‍👦.
        </p>
        <HLInput
          v-model:modelValue="graphemeInputValue"
          id="example-input-text-grapheme"
          placeholder="Type some text or emoji..."
        />
        <p>Graphemes: {{ countGraphemes(graphemeInputValue) }}</p>
      </div>

      <!-- Inline Input Examples -->
      <div>
        <h2>Inline Input Examples</h2>

        <!-- Inline Input Controls -->
        <div
          style="
            background: #f5f5f5;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
          "
        >
          <h3>Inline Input Controls</h3>
          <div
            style="
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 12px;
            "
          >
            <HLCheckbox v-model:checked="inlineInputProps.inline">
              Inline Mode
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.showInlineCTA">
              Show CTA Buttons
            </HLCheckbox>
            <HLCheckbox
              v-model:checked="inlineInputProps.showInlineBottomBorder"
            >
              Show Bottom Border
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.showSavedIcon">
              Show Saved Icon
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.autofocus">
              Auto Focus
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.disabled">
              Disabled
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.readonly">
              Read Only
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.clearable">
              Clearable
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlineInputProps.loading">
              Loading
            </HLCheckbox>
          </div>
        </div>

        <!-- Inline Input Examples -->
        <HLSpace vertical>
          <div>
            <h3>Basic Inline Input</h3>
            <HLInput
              v-model:modelValue="inlineInputValue"
              v-bind="inlineInputProps"
              placeholder="Click to edit..."
              @confirm="handleInlineConfirm"
              @cancel="handleInlineCancel"
            />
          </div>

          <div>
            <h3>Inline Input with Prefix Icon</h3>
            <HLInput
              v-model:modelValue="inlineInputValue"
              v-bind="inlineInputProps"
              placeholder="Click to edit..."
              @confirm="handleInlineConfirm"
              @cancel="handleInlineCancel"
            >
              <template #prefix>
                <HLIcon aria-label="Mail Icon">
                  <Mail01Icon />
                </HLIcon>
              </template>
            </HLInput>
          </div>

          <div>
            <h3>Inline Input with Suffix Icon</h3>
            <HLInput
              v-model:modelValue="inlineInputValue"
              v-bind="inlineInputProps"
              placeholder="Click to edit..."
              @confirm="handleInlineConfirm"
              @cancel="handleInlineCancel"
            >
              <template #suffix>
                <HLIcon aria-label="Copy Icon">
                  <Copy05Icon />
                </HLIcon>
              </template>
            </HLInput>
          </div>

          <div>
            <h3>Inline Input with Grapheme Count</h3>
            <p>
              Counts graphemes so emoji and combining marks count as one. Try
              editing in an emoji like 👨‍👩‍👧‍👦.
            </p>
            <HLInput
              v-model:modelValue="graphemeInlineValue"
              id="example-inline-input-grapheme"
              v-bind="inlineInputProps"
              placeholder="Click to edit..."
              @confirm="handleInlineConfirm"
              @cancel="handleInlineCancel"
            />
            <p>Graphemes: {{ countGraphemes(graphemeInlineValue) }}</p>
          </div>

          <div>
            <h3>Inline Input - Different Sizes</h3>
            <HLSpace vertical>
              <div>
                <strong>Large (lg):</strong>
                <HLInput
                  v-model:modelValue="inlineInputValue"
                  v-bind="inlineInputProps"
                  size="lg"
                  placeholder="Large inline input"
                  @confirm="handleInlineConfirm"
                  @cancel="handleInlineCancel"
                />
              </div>
              <div>
                <strong>Medium (md):</strong>
                <HLInput
                  v-model:modelValue="inlineInputValue"
                  v-bind="inlineInputProps"
                  size="md"
                  placeholder="Medium inline input"
                  @confirm="handleInlineConfirm"
                  @cancel="handleInlineCancel"
                />
              </div>
              <div>
                <strong>Small (sm):</strong>
                <HLInput
                  v-model:modelValue="inlineInputValue"
                  v-bind="inlineInputProps"
                  size="sm"
                  placeholder="Small inline input"
                  @confirm="handleInlineConfirm"
                  @cancel="handleInlineCancel"
                />
              </div>
              <div>
                <strong>Extra Small (xs):</strong>
                <HLInput
                  v-model:modelValue="inlineInputValue"
                  v-bind="inlineInputProps"
                  size="xs"
                  placeholder="Extra small inline input"
                  @confirm="handleInlineConfirm"
                  @cancel="handleInlineCancel"
                />
              </div>
            </HLSpace>
          </div>
        </HLSpace>
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <p>Available size variants from largest (lg) to smallest (3xs).</p>
        <HLSpace vertical>
          <div>
            <h3>Large (lg)</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-input-text-lg"
              size="lg"
              placeholder="Large input"
            />
          </div>
          <div>
            <h3>Medium (md)</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-input-text-md"
              size="md"
              placeholder="Medium input"
            />
          </div>
          <div>
            <h3>Small (sm)</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-input-text-sm"
              size="sm"
              placeholder="Small input"
            />
          </div>
          <div>
            <h3>Extra Small (xs)</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-input-text-xs"
              size="xs"
              placeholder="Extra small input"
            />
          </div>
          <div>
            <h3>2x Extra Small (2xs)</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-input-text-2xs"
              size="2xs"
              placeholder="2x Extra small input"
            />
          </div>
          <div>
            <h3>3x Extra Small (3xs)</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-input-text-3xs"
              size="3xs"
              placeholder="3x Extra small input"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Text Align -->
      <div>
        <h2>Text Align</h2>
        <p>Control text alignment within the input field.</p>
        <HLSpace vertical>
          <div>
            <h3>Left Aligned</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              text-align="start"
              placeholder="Left aligned"
            />
          </div>
          <div>
            <h3>Center Aligned</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              text-align="center"
              placeholder="Center aligned"
            />
          </div>
          <div>
            <h3>Right Aligned</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              text-align="end"
              placeholder="Right aligned"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Prefix -->
      <div>
        <h2>Prefix</h2>
        <p>Add content before the input text.</p>
        <HLSpace vertical>
          <HLInput
            v-model:modelValue="inputModelValue"
            id="example-input-text-prefix"
            placeholder="Enter amount"
          >
            <template #prefix>$</template>
          </HLInput>
          <HLInput
            v-model:modelValue="inputModelValue"
            placeholder="Enter email"
          >
            <template #prefix>
              <HLIcon aria-label="Mail Icon">
                <Mail01Icon />
              </HLIcon>
            </template>
          </HLInput>
        </HLSpace>
      </div>

      <!-- Suffix -->
      <div>
        <h2>Suffix</h2>
        <p>Add content after the input text.</p>
        <HLSpace vertical>
          <HLInput
            v-model:modelValue="inputModelValue"
            id="example-input-text-suffix"
            placeholder="Enter percentage"
          >
            <template #suffix>%</template>
          </HLInput>
          <HLInput
            v-model:modelValue="inputModelValue"
            placeholder="Enter text to copy"
          >
          <template #suffix>
            <HLIcon aria-label="Copy Icon">
                <Copy05Icon />
              </HLIcon>
            </template>
          </HLInput>
        </HLSpace>
      </div>

      <!-- States -->
      <div>
        <h2>States</h2>
        <HLSpace vertical>
          <div>
            <h3>Disabled</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              disabled
              placeholder="Disabled input"
            />
          </div>
          <div>
            <h3>Loading</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              loading
              placeholder="Loading input"
            />
          </div>
          <div>
            <h3>Readonly</h3>
            <HLInput
              v-model:modelValue="inputModelValue2"
              readonly
              placeholder="Readonly input"
            />
          </div>
          <div>
            <h3>Clearable</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              clearable
              placeholder="Clearable input"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Validation States -->
      <div>
        <h2>Validation States</h2>
        <HLSpace vertical>
          <div>
            <h3>Error State</h3>
            <HLFormItem validation-status="error" feedback="This is a feedback">
              <HLInput
                v-model:modelValue="inputModelValue"
                status="error"
                placeholder="Error input"
              >
                <template #suffix>
                  <HLIcon aria-label="Alert Circle Icon">
                    <AlertCircleIcon />
                  </HLIcon>
                </template>
              </HLInput>
            </HLFormItem>
          </div>
          <div>
            <h3>Warning State</h3>
            <HLFormItem
              validation-status="warning"
              feedback="This is a feedback"
            >
              <HLInput
                v-model:modelValue="inputModelValue"
                status="warning"
                placeholder="Warning input"
              >
                <template #suffix>
                  <HLIcon aria-label="Alert Triangle Icon">
                    <AlertTriangleIcon />
                  </HLIcon>
                </template>
              </HLInput>
            </HLFormItem>
          </div>
        </HLSpace>
      </div>

      <!-- Input Types -->
      <div>
        <h2>Input Types</h2>
        <HLSpace vertical>
          <div>
            <h3>Password</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              type="password"
              placeholder="Enter password"
              show-password-on="mousedown"
            />
          </div>
          <div>
            <h3>Email</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div>
            <h3>Number</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              type="number"
              placeholder="Enter number"
            />
          </div>
          <div>
            <h3>Search</h3>
            <HLInput
              v-model:modelValue="inputModelValue"
              type="search"
              placeholder="Search..."
            />
          </div>
        </HLSpace>
      </div>

      <div>
        <h2>Custom Fonts</h2>
        <HLInput
          id="example-input-text-custom-fonts"
          v-model:modelValue="inputModelValue"
          placeholder="Custom fonts"
          font-size="20px"
          font-weight="700"
        />
        <br />
        <div class="grid grid-cols-2 gap-2 pb-2">
          <HLInputNumber
            id="example-input-text-custom-fonts-2"
            v-model:value="fontWeightValue"
            :min="100"
            :max="900"
            :step="100"
            :show-button="true"
            placeholder="Font Weight"
          />
          <HLInputNumber
            id="example-input-text-custom-fonts-2"
            v-model:value="fontSizeValue"
            :min="10"
            :max="20"
            :step="1"
            :show-button="true"
            placeholder="Font Size"
          />
        </div>
        <HLInput
          id="example-input-text-custom-fonts-2"
          v-model:modelValue="inputModelValue"
          placeholder="Custom fonts"
          :font-size="fontSizeValue + 'px'"
          :font-weight="fontWeightValue + ''"
        />
      </div>

      <!-- Event Testing -->
      <div>
        <h2>Event Testing</h2>
        <HLSpace vertical>
          <HLInput
            v-model:modelValue="inputModelValue"
            placeholder="Type to test events"
            @input="addEventLog('input')"
            @change="addEventLog('change')"
            @focus="addEventLog('focus')"
            @blur="addEventLog('blur')"
            @keydown="addEventLog('keydown')"
            @keyup="addEventLog('keyup')"
          />
          <div v-if="eventLog.length > 0">
            <h4>Recent Events:</h4>
            <ul>
              <li v-for="log in eventLog" :key="log.timestamp">
                {{ log.event }} at {{ log.timestamp }}
              </li>
            </ul>
          </div>
        </HLSpace>
      </div>

      <!-- Input Groups -->
      <div>
        <h2>Input Groups</h2>
        <HLSpace vertical>
          <div>
            <h3>With Label</h3>
            <HLInputGroup>
              <HLInputGroupLabel>Label</HLInputGroupLabel>
              <HLInput
                v-model:modelValue="inputModelValue"
                placeholder="Enter text"
              />
            </HLInputGroup>
          </div>
          <div>
            <h3>With Button</h3>
            <HLInputGroup>
              <HLInput
                v-model:modelValue="inputModelValue"
                placeholder="Enter text"
              />
              <HLButton type="primary">Submit</HLButton>
            </HLInputGroup>
          </div>
          <div>
            <h3>With Dropdown</h3>
            <HLInputGroup>
              <HLInput
                v-model:modelValue="dropdownInputValue"
                placeholder="Enter text"
              />
              <HLDropdown
                :options="options"
                :show="isDropdownOpen"
                @select="selectedValue"
                @update:show="showDropdown"
              >
                <HLButton>
                  {{ value }}
                  <template #icon-right>
                    <ChevronDownIcon />
                  </template>
                </HLButton>
              </HLDropdown>
            </HLInputGroup>
          </div>
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
