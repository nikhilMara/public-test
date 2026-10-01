<script setup lang="ts">
import { MessageQuestionCircleIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLCheckbox,
  HLForm,
  HLFormItem,
  HLIcon,
  HLInput,
  HLInputPhone,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const phone = ref('8454031669')
const phone2 = ref('8454031669')
const phone3 = ref('8454031669')
const phone4 = ref('8454031669')
const phone5 = ref('8454031669')
const phone6 = ref('8454031669')
const phone7 = ref('8454031669')
const phone8 = ref('8454031669')
const phone9 = ref('8454031669')

const countryCode = ref('IN')
const countryCode2 = ref('IN')
const countryCode3 = ref('IN')
const countryCode4 = ref('IN')
const countryCode5 = ref('IN')
const countryCode6 = ref('IN')
const countryCode7 = ref('IN')
const countryCode8 = ref('IN')
const countryCode9 = ref('IN')

const isFormPhoneValid = ref(true)

// Format examples with different initial values
const nationalPhone = ref('')
const nationalCountryCode = ref('US')
const internationalPhone = ref('')
const internationalCountryCode = ref('US')

const displayNationalFormat = ref('(415) 555-2671')
const displayInternationalFormat = ref('+1 415 555 2671')

const handleNationalFormat = (formattedPhone: string) => {
  displayNationalFormat.value = formattedPhone
}

const handleInternationalFormat = (formattedPhone: string) => {
  displayInternationalFormat.value = formattedPhone
}

// Event logging example
const eventLog = ref<Array<{ event: string; timestamp: string }>>([])
const addEventLog = (event: string) => {
  eventLog.value.unshift({ event, timestamp: new Date().toLocaleTimeString() })
  // Keep only last 5 events
  if (eventLog.value.length > 5) {
    eventLog.value.pop()
  }
}

const formRef = ref()

const rules = {
  phone: {
    required: true,
    validator(_: any, updatedPhone: string) {
      if (isFormPhoneValid.value) return true
      if (!updatedPhone) {
        return new Error('Phone number is required')
      }
      if (/[a-zA-Z]/g.test(updatedPhone)) {
        return new Error('Phone number can only contain numbers')
      }
      if (!isFormPhoneValid.value) {
        return new Error('Please enter a valid phone number')
      }
    },
    trigger: ['input', 'blur', 'change', 'focus'],
  },
}
const dropdownHeight = ref('300px')

// Inline Phone Input Controls
const inlinePhoneValue = ref('8454031669')
const inlinePhoneCountryCode = ref('US')
const inlinePhoneProps = ref({
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

// Country code constants for inline examples
const US = ref('US')
const GB = ref('GB')
const CA = ref('CA')

// Event handlers for inline phone components
const handleInlinePhoneConfirm = (value: string) => {
  console.log('Inline phone confirmed:', value)
  addEventLog('inline-phone-confirm')
}

const handleInlinePhoneCancel = (originalValue: string) => {
  console.log('Inline phone cancelled, reverted to:', originalValue)
  addEventLog('inline-phone-cancel')
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Inline Phone Input Examples -->
      <div>
        <h2>Inline Phone Input Examples</h2>
        <p>
          Inline phone inputs that can be edited directly without separate edit
          modes.
        </p>

        <!-- Inline Phone Input Controls -->
        <div
          style="
            background: #f5f5f5;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
          "
        >
          <h3>Inline Phone Input Controls</h3>
          <div
            style="
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 12px;
            "
          >
            <HLCheckbox v-model:checked="inlinePhoneProps.inline">
              Inline Mode
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.showInlineCTA">
              Show CTA Buttons
            </HLCheckbox>
            <HLCheckbox
              v-model:checked="inlinePhoneProps.showInlineBottomBorder"
            >
              Show Bottom Border
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.showSavedIcon">
              Show Saved Icon
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.autofocus">
              Auto Focus
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.disabled">
              Disabled
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.readonly">
              Read Only
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.clearable">
              Clearable
            </HLCheckbox>
            <HLCheckbox v-model:checked="inlinePhoneProps.loading">
              Loading
            </HLCheckbox>
          </div>
        </div>

        <!-- Inline Phone Input Examples -->
        <HLSpace vertical>
          <div>
            <h3>Basic Inline Phone Input</h3>
            <HLInputPhone
              v-model:value="inlinePhoneValue"
              v-model:countryCode="inlinePhoneCountryCode"
              v-bind="inlinePhoneProps"
              placeholder="Click to edit phone..."
              @confirm="handleInlinePhoneConfirm"
              @cancel="handleInlinePhoneCancel"
            />
          </div>

          <div>
            <h3>Inline Phone Input with Icon</h3>
            <HLInputPhone
              v-model:value="inlinePhoneValue"
              v-model:countryCode="inlinePhoneCountryCode"
              v-bind="inlinePhoneProps"
              placeholder="Click to edit phone..."
              @confirm="handleInlinePhoneConfirm"
              @cancel="handleInlinePhoneCancel"
            >
              <template #suffix>
                <HLIcon aria-label="Message Question Circle Icon">
                  <MessageQuestionCircleIcon class="w-4" />
                </HLIcon>
              </template>
            </HLInputPhone>
          </div>

          <div>
            <h3>Inline Phone Input - Different Sizes</h3>
            <HLSpace vertical>
              <div>
                <strong>Large (lg):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="inlinePhoneCountryCode"
                  v-bind="inlinePhoneProps"
                  size="lg"
                  placeholder="Large inline phone input"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
              <div>
                <strong>Medium (md):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="inlinePhoneCountryCode"
                  v-bind="inlinePhoneProps"
                  size="md"
                  placeholder="Medium inline phone input"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
              <div>
                <strong>Small (sm):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="inlinePhoneCountryCode"
                  v-bind="inlinePhoneProps"
                  size="sm"
                  placeholder="Small inline phone input"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
              <div>
                <strong>Extra Small (xs):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="inlinePhoneCountryCode"
                  v-bind="inlinePhoneProps"
                  size="xs"
                  placeholder="Extra small inline phone input"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
            </HLSpace>
          </div>

          <div>
            <h3>Inline Phone Input - Different Countries</h3>
            <HLSpace vertical>
              <div>
                <strong>United States (US):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="US"
                  v-bind="inlinePhoneProps"
                  placeholder="US phone number"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
              <div>
                <strong>United Kingdom (GB):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="GB"
                  v-bind="inlinePhoneProps"
                  placeholder="UK phone number"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
              <div>
                <strong>Canada (CA):</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="CA"
                  v-bind="inlinePhoneProps"
                  placeholder="Canadian phone number"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
            </HLSpace>
          </div>

          <div>
            <h3>Inline Phone Input - Format Types</h3>
            <HLSpace vertical>
              <div>
                <strong>National Format:</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="inlinePhoneCountryCode"
                  v-bind="inlinePhoneProps"
                  format="national"
                  placeholder="National format"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
              <div>
                <strong>International Format:</strong>
                <HLInputPhone
                  v-model:value="inlinePhoneValue"
                  v-model:countryCode="inlinePhoneCountryCode"
                  v-bind="inlinePhoneProps"
                  format="international"
                  placeholder="International format"
                  @confirm="handleInlinePhoneConfirm"
                  @cancel="handleInlinePhoneCancel"
                />
              </div>
            </HLSpace>
          </div>

          <!-- Event Testing -->
          <div>
            <h3>Event Testing</h3>
            <HLSpace vertical>
              <HLInputPhone
                v-model:value="inlinePhoneValue"
                v-model:countryCode="inlinePhoneCountryCode"
                v-bind="inlinePhoneProps"
                placeholder="Type to test events"
                @input="addEventLog('input')"
                @change="addEventLog('change')"
                @focus="addEventLog('focus')"
                @blur="addEventLog('blur')"
                @keydown="addEventLog('keydown')"
                @keyup="addEventLog('keyup')"
                @confirm="handleInlinePhoneConfirm"
                @cancel="handleInlinePhoneCancel"
                @clear="addEventLog('clear')"
                @select="addEventLog('select')"
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

      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>
          A component for inputting and validating international phone numbers
          with country code selection
        </p>
        <HLInputPhone
          id="input-phone-basic"
          v-model:countryCode="countryCode"
          v-model:value="phone"
        />
      </div>

      <!-- With Icon -->
      <div>
        <h2>With Icon</h2>
        <HLInputPhone
          id="input-phone-icon"
          v-model:countryCode="countryCode2"
          v-model:value="phone2"
        >
          <template #suffix>
            <HLIcon
              id="input-phone-icon-question"
              aria-label="Message Question Circle Icon"
            >
              <MessageQuestionCircleIcon class="w-4" />
            </HLIcon>
          </template>
        </HLInputPhone>
      </div>

      <!-- Sizes -->
      <div>
        <h2>Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Large (lg)</h3>
            <HLInputPhone
              id="input-phone-size-lg"
              size="lg"
              placeholder="Large size"
              v-model:countryCode="countryCode3"
              v-model:value="phone3"
            />
          </div>
          <div>
            <h3>Medium (md)</h3>
            <HLInputPhone
              id="input-phone-size-md"
              size="md"
              placeholder="Medium size"
              v-model:countryCode="countryCode4"
              v-model:value="phone4"
            />
          </div>
          <div>
            <h3>Small (sm)</h3>
            <HLInputPhone
              id="input-phone-size-sm"
              size="sm"
              placeholder="Small size"
              v-model:countryCode="countryCode5"
              v-model:value="phone5"
            />
          </div>
          <div>
            <h3>Extra Small (xs)</h3>
            <HLInputPhone
              id="input-phone-size-xs"
              size="xs"
              placeholder="Extra small size"
              v-model:countryCode="countryCode6"
              v-model:value="phone6"
            />
          </div>
          <div>
            <h3>2x Extra Small (2xs)</h3>
            <HLInputPhone
              id="input-phone-size-2xs"
              size="2xs"
              placeholder="2x Extra small size"
              v-model:countryCode="countryCode7"
              v-model:value="phone7"
            />
          </div>
          <div>
            <h3>3x Extra Small (3xs)</h3>
            <HLInputPhone
              id="input-phone-size-3xs"
              size="3xs"
              placeholder="3x Extra small size"
              v-model:countryCode="countryCode8"
              v-model:value="phone8"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Disabled State -->
      <div>
        <h2>Disabled State</h2>
        <HLInputPhone id="input-phone-disabled" disabled />
      </div>

      <!-- With Disabled Country Picker -->
      <div>
        <h2>With Disabled Country Picker</h2>
        <HLInputPhone
          id="input-phone-no-country"
          disableCountryPicker
          v-model:value="phone8"
        />
      </div>

      <!-- Format Types -->
      <div>
        <h2>Format Types</h2>
        <HLSpace vertical>
          <div>
            <p class="text-sm text-gray-500 mb-2">
              National format: {{ displayNationalFormat }}
            </p>
            <HLInputPhone
              id="input-phone-national"
              v-model:countryCode="nationalCountryCode"
              v-model:value="nationalPhone"
              format="national"
              placeholder="Try typing: 4155552671"
              @nationalFormat="handleNationalFormat"
            />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">
              International format: {{ displayInternationalFormat }}
            </p>
            <HLInputPhone
              id="input-phone-international"
              v-model:countryCode="internationalCountryCode"
              v-model:value="internationalPhone"
              format="international"
              placeholder="Try typing: 4155552671"
              @internationalFormat="handleInternationalFormat"
            />
          </div>
        </HLSpace>
      </div>

      <!-- With Form Validation -->
      <div>
        <h2>With Form Validation</h2>
        <HLForm
          id="input-phone-form"
          ref="formRef"
          :rules="rules"
          :model="{ phone: phone9 }"
        >
          <HLFormItem id="input-phone-form-item" path="phone">
            <HLInputPhone
              id="input-phone-form-input"
              v-model:countryCode="countryCode9"
              v-model:value="phone9"
              @isValid="isFormPhoneValid = $event"
            />
          </HLFormItem>
        </HLForm>
      </div>

      <!-- Event Testing -->
      <div>
        <h2>Event Testing</h2>
        <p>
          This example shows how to test various input events. Try the
          following:
        </p>
        <ul class="text-sm text-gray-600 mb-4">
          <li>
            • Type a number and click the clear icon (×) to test the clear event
          </li>
          <li>• Select text in the input to test the select event</li>
          <li>
            • Type a long number to make the input scrollable and scroll to test
            the scroll-to event
          </li>
        </ul>
        <HLSpace vertical>
          <HLInputPhone
            id="input-phone-events"
            v-model:countryCode="countryCode"
            v-model:value="phone"
            placeholder="Test events here..."
            @clear="addEventLog('Clear event triggered')"
            @select="addEventLog('Select event triggered')"
            @scrollTo="addEventLog('Scroll event triggered')"
          />
          <div class="text-sm">
            <p class="font-bold mb-2">Event Log:</p>
            <div v-if="eventLog.length === 0" class="text-gray-500">
              No events logged yet. Try the actions above.
            </div>
            <div
              v-for="(log, index) in eventLog"
              :key="index"
              class="text-gray-700"
            >
              {{ log.timestamp }}: {{ log.event }}
            </div>
          </div>
        </HLSpace>
      </div>

      <!-- With Dropdwon Height -->
      <div>
        <h2>With Dropdwon Height</h2>
        <HLSpace vertical>
          <HLInput
            id="input-phone-dropdown-height-input"
            v-model:model-value="dropdownHeight"
            label="Dropdown Height"
          />
          <HLInputPhone
            id="input-phone-dropdown-height"
            v-model:countryCode="countryCode"
            v-model:value="phone"
            :dropdown-height="dropdownHeight"
          />
        </HLSpace>
      </div>

      <!-- Autocomplete -->
      <div>
        <h2>Autocomplete</h2>
        <HLSpace vertical>
          <div>
            <h3>Autocomplete Enabled (default)</h3>
            <HLInputPhone
              id="input-phone-autocomplete-on"
              v-model:countryCode="countryCode"
              v-model:value="phone"
              :autocomplete="true"
            />
          </div>
          <div>
            <h3>Autocomplete Disabled</h3>
            <HLInputPhone
              id="input-phone-autocomplete-off"
              v-model:countryCode="countryCode"
              v-model:value="phone"
              :autocomplete="false"
            />
          </div>
          <div>
            <h3>Full width country picker</h3>
            <HLInputPhone
              id="input-phone-autocomplete-off"
              v-model:countryCode="countryCode"
              v-model:value="phone"
              full-width-country-picker
            />
          </div>
        </HLSpace>
      </div>

      <!-- Different Country Codes -->
      <div>
        <h2>Different Country Codes</h2>
        <p>Examples with different default country codes:</p>
        <HLSpace vertical>
          <div>
            <h3>United States (US)</h3>
            <HLInputPhone
              id="input-phone-us"
              v-model:countryCode="countryCode"
              v-model:value="phone"
            />
          </div>
          <div>
            <h3>United Kingdom (GB)</h3>
            <HLInputPhone
              id="input-phone-gb"
              v-model:value="phone2"
              :countryCode="'GB'"
            />
          </div>
          <div>
            <h3>Canada (CA)</h3>
            <HLInputPhone
              id="input-phone-ca"
              v-model:value="phone3"
              :countryCode="'CA'"
            />
          </div>
          <div>
            <h3>Australia (AU)</h3>
            <HLInputPhone
              id="input-phone-au"
              v-model:value="phone4"
              :countryCode="'AU'"
            />
          </div>
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
