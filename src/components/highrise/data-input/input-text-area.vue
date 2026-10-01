<script setup lang="ts">
import {
  HLCheckbox,
  HLInput,
  HLInputNumber,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const inputModelValue = ref('')
const fontWeightValue = ref(700)
const fontSizeValue = ref(20)

// Grapheme Count
const graphemeTextareaValue = ref('')

// Counts user-perceived characters (graphemes) so emoji / combining marks count as one.
// Falls back to code-point length where Intl.Segmenter is unavailable.
const countGraphemes = (value: string) => {
  const intl = Intl as typeof Intl & { Segmenter?: any }
  if (typeof Intl !== 'undefined' && intl.Segmenter) {
    return [...new intl.Segmenter().segment(value)].length
  }
  return [...value].length
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

// Inline Textarea Controls
const inlineTextareaValue = ref(
  'This is a sample inline textarea. Click to edit and see the ellipsis behavior when the content is long.'
)
const textAreaProps = {
  inputProps: {
    'aria-label': 'this is a textarea',
  },
}

const inlineTextareaProps = ref({
  inline: true,
  showInlineCTA: false,
  showInlineBottomBorder: true,
  showSavedIcon: false,
  autofocus: false,
  disabled: false,
  readonly: false,
  clearable: false,
  loading: false,
  rows: 3,
  type: 'textarea' as const,
})

// Event handlers for inline components
const handleTextareaConfirm = (value: string) => {
  console.log('Inline textarea confirmed:', value)
  addEventLog('textarea-confirm')
}

const handleTextareaCancel = (originalValue: string) => {
  console.log('Inline textarea cancelled, reverted to:', originalValue)
  addEventLog('textarea-cancel')
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Inline Textarea Examples -->
      <div>
        <h2>Inline Textarea Examples</h2>
        <p>Inline textareas with ellipsis behavior for long content.</p>

        <!-- Inline Textarea Controls -->
        <div
          style="
            background: #f5f5f5;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
          "
        >
          <h3>Inline Textarea Controls</h3>
          <div
            style="
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 12px;
            "
          >
            <HLCheckbox
              id="inline-mode-checkbox"
              v-model:checked="inlineTextareaProps.inline"
            >
              Inline Mode
            </HLCheckbox>
            <HLCheckbox
              id="show-cta-checkbox"
              v-model:checked="inlineTextareaProps.showInlineCTA"
            >
              Show CTA Buttons
            </HLCheckbox>
            <HLCheckbox
              id="show-bottom-border-checkbox"
              v-model:checked="inlineTextareaProps.showInlineBottomBorder"
            >
              Show Bottom Border
            </HLCheckbox>
            <HLCheckbox
              id="show-saved-icon-checkbox"
              v-model:checked="inlineTextareaProps.showSavedIcon"
            >
              Show Saved Icon
            </HLCheckbox>
            <HLCheckbox
              id="autofocus-checkbox"
              v-model:checked="inlineTextareaProps.autofocus"
            >
              Auto Focus
            </HLCheckbox>
            <HLCheckbox
              id="disabled-checkbox"
              v-model:checked="inlineTextareaProps.disabled"
            >
              Disabled
            </HLCheckbox>
            <HLCheckbox
              id="readonly-checkbox"
              v-model:checked="inlineTextareaProps.readonly"
            >
              Read Only
            </HLCheckbox>
            <HLCheckbox
              id="clearable-checkbox"
              v-model:checked="inlineTextareaProps.clearable"
            >
              Clearable
            </HLCheckbox>
            <HLCheckbox
              id="loading-checkbox"
              v-model:checked="inlineTextareaProps.loading"
            >
              Loading
            </HLCheckbox>
          </div>
          <div style="margin-top: 12px">
            <label style="display: flex; align-items: center; gap: 8px">
              <span>Rows:</span>
              <input
                type="number"
                v-model="inlineTextareaProps.rows"
                aria-label="rows"
                min="1"
                max="10"
                style="width: 60px; padding: 4px"
              />
            </label>
          </div>
        </div>

        <!-- Inline Textarea Examples -->
        <HLSpace vertical>
          <div>
            <h3>Basic Inline Textarea</h3>
            <HLInput
              id="basic-inline-textarea"
              v-model:modelValue="inlineTextareaValue"
              v-bind="{ ...inlineTextareaProps, ...textAreaProps }"
              placeholder="Click to edit..."
              @confirm="handleTextareaConfirm"
              @cancel="handleTextareaCancel"
            />
          </div>

          <div>
            <h3>Inline Textarea with Long Content</h3>
            <HLInput
              id="long-content-inline-textarea"
              v-model:modelValue="inlineTextareaValue"
              v-bind="{ ...inlineTextareaProps, ...textAreaProps }"
              placeholder="Click to edit long content..."
              @confirm="handleTextareaConfirm"
              @cancel="handleTextareaCancel"
            />
          </div>

          <div>
            <h3>Inline Textarea - Different Sizes</h3>
            <HLSpace vertical>
              <div>
                <strong>Large (lg) - 2 rows:</strong>
                <HLInput
                  id="large-inline-textarea"
                  v-model:modelValue="inlineTextareaValue"
                  v-bind="{ ...inlineTextareaProps, size: 'lg', rows: 2, ...textAreaProps }"
                  placeholder="Large inline textarea"
                  @confirm="handleTextareaConfirm"
                  @cancel="handleTextareaCancel"
                />
              </div>
              <div>
                <strong>Medium (md) - 3 rows:</strong>
                <HLInput
                  id="medium-inline-textarea"
                  v-model:modelValue="inlineTextareaValue"
                  v-bind="{
                    ...inlineTextareaProps,
                    size: 'md',
                    rows: 3,
                    type: 'textarea' as const,
                    ...textAreaProps,
                  }"
                  placeholder="Medium inline textarea"
                  @confirm="handleTextareaConfirm"
                  @cancel="handleTextareaCancel"
                />
              </div>
              <div>
                <strong>Small (sm) - 1 row:</strong>
                <HLInput
                  id="small-inline-textarea"
                  v-model:modelValue="inlineTextareaValue"
                  v-bind="{
                    ...inlineTextareaProps,
                    size: 'sm',
                    rows: 1,
                    type: 'textarea' as const,
                    ...textAreaProps,
                  }"
                  placeholder="Small inline textarea"
                  @confirm="handleTextareaConfirm"
                  @cancel="handleTextareaCancel"
                />
              </div>
            </HLSpace>
          </div>
          <!-- Event Testing -->
          <div>
            <h3>Event Testing</h3>
            <HLSpace vertical>
              <HLInput
                id="event-testing-textarea"
                v-model:modelValue="inlineTextareaValue"
                v-bind="{ ...inlineTextareaProps, type: 'textarea' as const, ...textAreaProps }"
                placeholder="Type to test events"
                @input="addEventLog('input')"
                @change="addEventLog('change')"
                @focus="addEventLog('focus')"
                @blur="addEventLog('blur')"
                @keydown="addEventLog('keydown')"
                @keyup="addEventLog('keyup')"
                @confirm="handleTextareaConfirm"
                @cancel="handleTextareaCancel"
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
        </HLSpace>
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <div>
            <h4 style="margin-bottom: 0.5rem">lg</h4>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-text-area-lg"
              size="lg"
              v-bind="textAreaProps"
              type="textarea"
            />
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem">md</h4>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-text-area-md"
              size="md"
              v-bind="textAreaProps"
              type="textarea"
            />
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem">sm</h4>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-text-area-sm"
              size="sm"
              v-bind="textAreaProps"
              type="textarea"
            />
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem">xs</h4>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-text-area-xs"
              size="xs"
              v-bind="textAreaProps"
              type="textarea"
            />
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem">2xs</h4>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-text-area-2xs"
              size="2xs"
              v-bind="textAreaProps"
              type="textarea"
            />
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem">3xs</h4>
            <HLInput
              v-model:modelValue="inputModelValue"
              id="example-text-area-3xs"
              size="3xs"
              v-bind="textAreaProps"
              type="textarea"
            />
          </div>
        </div>
      </div>

      <!-- Grapheme Count -->
      <div>
        <h2>Grapheme Count</h2>
        <p>
          Counts user-perceived characters (graphemes) so emoji and combining
          marks count as one. Try typing an emoji like 👨‍👩‍👧‍👦.
        </p>
        <HLInput
          v-model:modelValue="graphemeTextareaValue"
          id="example-text-area-grapheme"
          size="md"
          v-bind="textAreaProps"
          type="textarea"
          placeholder="Type some text or emoji..."
        />
        <p>Graphemes: {{ countGraphemes(graphemeTextareaValue) }}</p>
      </div>

      <!-- Show Count with Max Limit -->
      <div>
        <h2>Show Count with Max Limit</h2>
        <HLInput
          v-model:modelValue="inputModelValue"
          id="example-text-area-count"
          size="md"
          v-bind="textAreaProps"
              type="textarea"
          showCount
          :maxlength="100"
        />
      </div>

      <div>
        <h2>Custom Fonts</h2>
        <HLInput
          id="example-input-text-custom-fonts"
          v-model:modelValue="inputModelValue"
          v-bind="textAreaProps"
              type="textarea"
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
          v-bind="textAreaProps"
              type="textarea"
          placeholder="Custom fonts"
          :font-size="fontSizeValue + 'px'"
          :font-weight="fontWeightValue + ''"
        />
      </div>

      <!-- Disabled -->
      <div>
        <h2>Disabled</h2>
        <HLInput
          v-model:modelValue="inputModelValue"
          id="example-text-area-disabled"
          size="md"
          v-bind="textAreaProps"
              type="textarea"
          disabled
        />
      </div>

      <!-- Loading -->
      <div>
        <h2>Loading</h2>
        <HLInput
          v-model:modelValue="inputModelValue"
          id="example-text-area-loading"
          size="md"
          v-bind="textAreaProps"
              type="textarea"
          loading
        />
      </div>

      <!-- Readonly -->
      <div>
        <h2>Readonly</h2>
        <HLInput
          :modelValue="'This is read only text'"
          id="example-text-area-readonly"
          size="md"
          v-bind="textAreaProps"
              type="textarea"
          readonly
        />
      </div>

      <!-- Clearable -->
      <div>
        <h2>Clearable</h2>
        <HLInput
          v-model:modelValue="inputModelValue"
          id="example-text-area-clearable"
          size="md"
          v-bind="textAreaProps"
              type="textarea"
          clearable
        />
      </div>

      <!-- showCount -->
      <div>
        <h2>Show Count</h2>
        <HLInput
          v-model:modelValue="inputModelValue"
          id="example-text-area-show-count"
          size="md"
          v-bind="textAreaProps"
              type="textarea"
          showCount
        />
      </div>
    </HLSpace>
  </div>
</template>
