<script setup lang="ts">
import { CalendarIcon, InfoCircleIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLCheckbox,
  HLForm,
  HLFormItem,
  HLIcon,
  HLInput,
  HLInputNumber,
  HLSelect,
  HLSpace,
  HLTimePicker,
} from '@gohighlevel/highrise'
import { format } from 'date-fns'
import { computed, inject, nextTick, ref } from 'vue'

interface FormInstance {
  validate: () => Promise<void>
  clearValidation: () => void
}

const time = ref<number | undefined>(undefined)
const time2 = ref<number | undefined>(undefined)
const time3 = ref<number | undefined>(undefined)
const time4 = ref<number | undefined>(undefined)
const time5 = ref<number | undefined>(undefined)
const time7 = ref<number | undefined>(undefined)
const time8 = ref<number | undefined>(undefined)
const defaultTime = 1183135260000

// Form Example
const formRef = ref<FormInstance | null>(null)
const formModel = ref({
  meetingTime: Date.now(), // Initialize with current time
  title: 'Team Meeting',
})

// Form validation rules
const formRules = {
  meetingTime: [
    {
      validator: (_rule: any, value: any): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
          if (!value) {
            reject(new Error('Please select a meeting time'))
            return
          }

          // Parse the timestamp value
          const date = new Date(value)
          const hours = date.getHours()
          const minutes = date.getMinutes()
          const selectedTime = hours * 60 + minutes // Convert to minutes

          // Business hours validation (9 AM to 5 PM)
          const businessStart = 9 * 60 // 9 AM in minutes
          const businessEnd = 17 * 60 // 5 PM in minutes

          if (selectedTime < businessStart || selectedTime > businessEnd) {
            reject(new Error('Please select a time between 9 AM and 5 PM'))
            return
          }

          resolve()
        })
      },
      trigger: ['blur', 'change'],
    },
  ],
  title: [
    {
      required: true,
      message: 'Please enter a meeting title',
      trigger: ['blur', 'change'],
    },
  ],
}

// Event handlers
const handleTimeChange = (value: number | null) => {
  formModel.value.meetingTime = value || Date.now()
  // Trigger validation
  nextTick(async () => {
    try {
      await formRef.value?.validate()
    } catch (error) {
      // Validation failed, but that's expected behavior
      // The form will show the error messages automatically
      console.debug('Form validation failed:', error)
    }
  })
}

const handleSubmit = async () => {
  try {
    await formRef.value?.validate()
    console.log('Form submitted:', formModel.value)
    alert('Meeting scheduled successfully!')
  } catch (error) {
    console.error('Validation failed:', error)
  }
}

const handleReset = () => {
  // Set to noon of current day
  const now = new Date()
  now.setHours(12, 0, 0, 0)
  formModel.value.meetingTime = now.getTime()
  formModel.value.title = 'Team Meeting'
  formRef.value?.clearValidation()
}

// Type definition for timezone
interface HLTimezone {
  label: string
  value: string
  default?: boolean
}

// Event tracking
const events = ref<string[]>([])
const addEvent = (event: string) => {
  events.value = [event, ...events.value].slice(0, 5) // Keep last 5 events
}

const formatTime = (value: number | null) => {
  if (value === null) return 'none'
  return new Date(value).toLocaleTimeString()
}

const formatTimezone = (timezone: HLTimezone | null) => {
  if (timezone === null) return 'none'
  return `${timezone.label} (${timezone.value})`
}

const shortcuts = {
  Now: () => Date.now(),
  'Start of Day': () => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date.getTime()
  },
  'End of Day': () => {
    const date = new Date()
    date.setHours(23, 59, 59, 999)
    return date.getTime()
  },
}

// Format options for disabled times example
const formatOptions = [
  { label: 'HH:mm:ss (24-hour with seconds)', value: 'HH:mm:ss' },
  { label: 'HH:mm (24-hour)', value: 'HH:mm' },
  { label: 'hh:mm:ss a (12-hour with seconds)', value: 'hh:mm:ss a' },
  { label: 'hh:mm a (12-hour)', value: 'hh:mm a' },
  { label: 'H:mm (24-hour, no leading zero)', value: 'H:mm' },
  { label: 'h:mm a (12-hour, no leading zero)', value: 'h:mm a' },
]

// Helper function to format time objects
const formatTimeObject = (timeObj: {
  hour: number
  minute: number
  second: number
}) => {
  return `${timeObj.hour.toString().padStart(2, '0')}:${timeObj.minute.toString().padStart(2, '0')}:${timeObj.second.toString().padStart(2, '0')}`
}

// Disabled Times Example State
const disabledTimeFormat = ref('HH:mm:ss')
const showDisabledAMPM = ref(false)
const disabledHoursInput = ref('')
const disabledMinutesInput = ref('')
const disabledSecondsInput = ref('')
const useMinuteInterval = ref(false)
const useSecondInterval = ref(false)
const minuteInterval = ref(15)
const secondInterval = ref(10)

// TimePicker state for disabled times example
const disabledTimeValue = ref<number | undefined>(undefined)
const disabledTimeFormattedValue = ref<string | undefined>(undefined)
const disabledTimeAMPM = ref<'AM' | 'PM'>('AM')
const disabledTimeFallbackEvents = ref<Array<any>>([])

// Computed properties for disabled times
const is12HourFormat = computed(() => /h/.test(disabledTimeFormat.value))
const showSeconds = computed(() => /s/.test(disabledTimeFormat.value))

const disabledTimeReadable = computed(() => {
  if (!disabledTimeValue.value) return 'No time selected'
  return format(new Date(disabledTimeValue.value), 'PPpp')
})

// Helper functions for parsing input strings
const parseTimeRanges = (input: string, min: number, max: number): number[] => {
  const result = new Set<number>()
  const ranges = input.split(',').map(r => r.trim())

  for (const range of ranges) {
    if (!range) continue

    const parts = range.split('-').map(p => parseInt(p.trim()))
    if (parts.length === 1) {
      const num = parts[0]
      if (!isNaN(num) && num >= min && num <= max) {
        result.add(num)
      }
    } else if (parts.length === 2) {
      const [start, end] = parts
      if (!isNaN(start) && !isNaN(end) && start >= min && end <= max) {
        for (let i = start; i <= end; i++) {
          result.add(i)
        }
      }
    }
  }

  return Array.from(result).sort((a, b) => a - b)
}

// Disabled time functions
const disabledHours = ref<number[]>([])
const disabledMinutes = ref<number[]>([])
const disabledSeconds = ref<number[]>([])

const updateDisabledHours = (input: string) => {
  const max = is12HourFormat.value ? 12 : 23
  disabledHoursInput.value = input
  nextTick(() => {
    disabledHours.value = parseTimeRanges(
      input,
      is12HourFormat.value ? 1 : 0,
      max
    )
  })
}

const updateDisabledMinutes = (input: string) => {
  disabledMinutesInput.value = input
  nextTick(() => {
    disabledMinutes.value = parseTimeRanges(input, 0, 59)
  })
}

const updateDisabledSeconds = (input: string) => {
  disabledSecondsInput.value = input
  nextTick(() => {
    disabledSeconds.value = parseTimeRanges(input, 0, 59)
  })
}

// Disabled functions for TimePicker
const hourDisabledFunction = computed(() => {
  if (disabledHours.value.length === 0) return undefined
  return (hour: number) => disabledHours.value.includes(hour)
})

const minuteDisabledFunction = computed(() => {
  if (useMinuteInterval.value) {
    return (minute: number) => minute % minuteInterval.value !== 0
  }
  if (disabledMinutes.value.length === 0) return undefined
  return (minute: number) => disabledMinutes.value.includes(minute)
})

const secondDisabledFunction = computed(() => {
  if (useSecondInterval.value) {
    return (second: number) => second % secondInterval.value !== 0
  }
  if (disabledSeconds.value.length === 0) return undefined
  return (second: number) => disabledSeconds.value.includes(second)
})

// Event handlers for disabled times
const handleDisabledTimeFallback = (fallbackInfo: any) => {
  disabledTimeFallbackEvents.value.unshift({
    ...fallbackInfo,
    timestamp: new Date().toLocaleTimeString(),
  })

  // Keep only last 10 events
  if (disabledTimeFallbackEvents.value.length > 10) {
    disabledTimeFallbackEvents.value = disabledTimeFallbackEvents.value.slice(
      0,
      10
    )
  }
}

const clearDisabledTimeFallbackEvents = () => {
  disabledTimeFallbackEvents.value = []
}

// Preset functions
const applyPreset = (preset: string) => {
  clearDisabledTimes()

  switch (preset) {
    case 'businessHours':
      // Only allow 9-17 hours
      updateDisabledHours(is12HourFormat.value ? '1-8,10-12' : '0-8,18-23')
      break

    case 'evenHours':
      // Only allow even hours
      updateDisabledHours(
        is12HourFormat.value ? '1,3,5,7,9,11' : '1,3,5,7,9,11,13,15,17,19,21,23'
      )
      break

    case 'quarterHours':
      // Only allow quarter hours (0, 15, 30, 45 minutes)
      useMinuteInterval.value = true
      minuteInterval.value = 15
      break

    case 'noWeekends':
      // Disable late night hours (22-6)
      updateDisabledHours(is12HourFormat.value ? '10-12,1-6' : '22-23,0-6')
      break
  }
}

const clearDisabledTimes = () => {
  disabledHoursInput.value = ''
  disabledMinutesInput.value = ''
  disabledSecondsInput.value = ''
  disabledHours.value = []
  disabledMinutes.value = []
  disabledSeconds.value = []
  useMinuteInterval.value = false
  useSecondInterval.value = false
  minuteInterval.value = 15
  secondInterval.value = 10
}

const timezones = [
  {
    label: 'Pacific Standard Time',
    value: 'America/Los_Angeles',
    default: true,
  },
  { label: 'Mountain Standard Time', value: 'America/Denver' },
  { label: 'Central Standard Time', value: 'America/Chicago' },
  { label: 'Eastern Standard Time', value: 'America/New_York' },
  { label: 'Greenwich Mean Time', value: 'Europe/London' },
  { label: 'Central European Time', value: 'Europe/Paris' },
  { label: 'Japan Standard Time', value: 'Asia/Tokyo' },
  { label: 'Australian Eastern Time', value: 'Australia/Sydney' },
]

const direction = inject<string>('dir') as 'ltr' | 'rtl'
const locale = inject<any>('locale', ref('en-US'))
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>Basic time picker with 24-hour format:</p>
        <HLTimePicker
          id="time-picker-basic"
          v-model:value="time"
          format="HH:mm:ss"
        />
      </div>

      <!-- With Custom Prefix and Suffix -->
      <div>
        <h2>With Custom Prefix and Suffix</h2>
        <p>Using both prefix and suffix slots to add custom icons:</p>
        <HLTimePicker
          id="time-picker-prefix-suffix"
          v-model:value="time2"
          format="HH:mm:ss"
        >
          <template #prefix>
            <HLIcon id="time-picker-prefix-icon" aria-label="Calendar Icon">
              <CalendarIcon />
            </HLIcon>
          </template>
          <template #suffix>
            <HLIcon id="time-picker-suffix-icon" aria-label="Info Circle Icon">
              <InfoCircleIcon />
            </HLIcon>
          </template>
        </HLTimePicker>
      </div>

      <!-- With AM/PM and Timezone -->
      <div>
        <h2>With AM/PM and Timezone</h2>
        <p>Time picker with 12-hour format and timezone selection:</p>
        <HLTimePicker
          id="time-picker-ampm-timezone"
          v-model:value="time3"
          format="hh:mm a"
          :showAMPM="true"
          :timezones="timezones"
          @update:value="
            (val: number | null) =>
              addEvent(`Value updated: ${formatTime(val)}`)
          "
          @update:formatted-value="
            (val: string | null) =>
              addEvent(`Formatted value: ${val || 'none'}`)
          "
          @update:confirm="
            (val: number | null) => addEvent(`Confirmed: ${formatTime(val)}`)
          "
          @update:clear="
            (val: number | null) => addEvent(`Cleared: ${formatTime(val)}`)
          "
          @update:timezone="
            (timezone: HLTimezone | null) =>
              addEvent(`Timezone updated: ${formatTimezone(timezone)}`)
          "
          @update:ampm="
            (ampm: 'AM' | 'PM') => addEvent(`AM/PM updated: ${ampm}`)
          "
        />
        <div
          class="event-tracker"
          style="
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid #eee;
            border-radius: 4px;
          "
        >
          <h3>Event Tracker</h3>
          <p>Last 5 events (newest first):</p>
          <div
            v-if="events.length === 0"
            style="color: #666; font-style: italic"
          >
            No events yet. Try interacting with the time picker above.
          </div>
          <ul v-else style="list-style: none; padding: 0; margin: 0">
            <li
              v-for="(event, index) in events"
              :key="index"
              style="
                padding: 0.5rem;
                background: #f5f5f5;
                margin-bottom: 0.5rem;
                border-radius: 4px;
              "
            >
              {{ event }}
            </li>
          </ul>
        </div>
      </div>

      <!-- With Shortcuts -->
      <div>
        <h2>With Shortcuts</h2>
        <p>Time picker with predefined time shortcuts:</p>
        <HLTimePicker
          id="time-picker-shortcuts"
          v-model:value="time4"
          :shortcuts="shortcuts"
        />
      </div>

      <!-- Without CTA (Action Buttons) -->
      <div>
        <h2>Without CTA (Action Buttons)</h2>
        <p>Time picker without confirm and clear buttons:</p>
        <HLTimePicker
          id="time-picker-no-cta"
          v-model:value="time5"
          :showCTA="false"
        />
      </div>
      <!-- With AutoClose -->
      <div>
        <h2>With AutoClose</h2>
        <p>Time picker with auto close:</p>
        <HLTimePicker
          id="time-picker-auto-close"
          v-model:value="time5"
          :showCTA="false"
          :autoClose="true"
        />
      </div>

      <!-- Form Integration Example -->
      <div>
        <h2>Form Integration Example</h2>
        <div class="flex flex-col gap-4">
          <HLForm
            ref="formRef"
            :model="formModel"
            :rules="formRules"
            label-placement="top"
            size="md"
            class="max-w-md"
          >
            <HLFormItem label="Meeting Time" path="meetingTime">
              <HLTimePicker
                id="form-time-picker"
                v-model:value="formModel.meetingTime"
                clearable
                format="HH:mm"
                :placeholder="{ time: 'Select meeting time' }"
                @update:value="handleTimeChange"
              />
            </HLFormItem>
          </HLForm>
        </div>
      </div>

      <!-- With Custom Placeholders -->
      <div>
        <h2>With Custom Placeholders</h2>
        <p>
          Time picker with custom placeholder text for time, timezone, and AM/PM
          selectors:
        </p>
        <HLTimePicker
          id="time-picker-custom-placeholders"
          v-model:value="time7"
          format="hh:mm a"
          :showAMPM="true"
          :timezones="timezones"
          :placeholder="{
            time: 'Enter time',
            timezone: 'Choose your timezone',
          }"
        />
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Large (lg)</h3>
            <HLTimePicker id="time-picker-lg" v-model:value="time" size="lg" />
          </div>
          <div>
            <h3>Medium (md)</h3>
            <HLTimePicker id="time-picker-md" v-model:value="time" size="md" />
          </div>
          <div>
            <h3>Small (sm)</h3>
            <HLTimePicker id="time-picker-sm" v-model:value="time" size="sm" />
          </div>
          <div>
            <h3>Extra Small (xs)</h3>
            <HLTimePicker id="time-picker-xs" v-model:value="time" size="xs" />
          </div>
          <div>
            <h3>2x Extra Small (2xs)</h3>
            <HLTimePicker
              id="time-picker-2xs"
              v-model:value="time"
              size="2xs"
            />
          </div>
          <div>
            <h3>3x Extra Small (3xs)</h3>
            <HLTimePicker
              id="time-picker-3xs"
              v-model:value="time"
              size="3xs"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Different Formats -->
      <div>
        <h2>Different Formats</h2>
        <HLSpace vertical>
          <div>
            <h3>24-hour format (HH:mm:ss)</h3>
            <HLTimePicker
              id="time-picker-24h"
              v-model:value="time"
              format="HH:mm:ss"
            />
          </div>
          <div>
            <h3>12-hour format (hh:mm a)</h3>
            <HLTimePicker
              id="time-picker-12h"
              v-model:value="time"
              format="hh:mm a"
              :showAMPM="true"
            />
          </div>
          <div>
            <h3>Hours and minutes only (HH:mm)</h3>
            <HLTimePicker
              id="time-picker-hm"
              v-model:value="time"
              format="HH:mm"
            />
          </div>
          <div>
            <h3>Custom format (h:mm a)</h3>
            <HLTimePicker
              id="time-picker-custom"
              :showCTA="false"
              v-model:value="time"
              format="h:mm a"
              :showAMPM="true"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Disabled States -->
      <div>
        <h2>Disabled States</h2>
        <HLSpace vertical>
          <div>
            <h3>Fully Disabled</h3>
            <HLTimePicker
              id="time-picker-disabled"
              v-model:value="time"
              :disabled="true"
            />
          </div>
          <div>
            <h3>Partial Disabled</h3>
            <HLTimePicker
              id="time-picker-partial-disabled"
              v-model:value="time"
              :showAMPM="true"
              :timezones="timezones"
              :disabled="false"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Status States -->
      <div>
        <h2>Status States</h2>
        <HLSpace vertical>
          <div>
            <h3>Success</h3>
            <HLTimePicker
              id="time-picker-success"
              v-model:value="time"
              status="success"
            />
          </div>
          <div>
            <h3>Error</h3>
            <HLTimePicker
              id="time-picker-error"
              v-model:value="time"
              status="error"
            />
          </div>
          <div>
            <h3>Warning</h3>
            <HLTimePicker
              id="time-picker-warning"
              v-model:value="time"
              status="warning"
            />
          </div>
        </HLSpace>
      </div>

      <!-- With Default Value -->
      <div>
        <h2>With Default Value</h2>
        <p>Time picker with a pre-selected default time:</p>
        <HLTimePicker
          id="time-picker-default-value"
          v-model:value="time8"
          :defaultValue="defaultTime"
        />
      </div>

      <!-- Custom Width -->
      <div>
        <h2>Custom Width</h2>
        <HLSpace vertical>
          <div>
            <h3>Custom Time Input Width</h3>
            <HLTimePicker
              id="time-picker-custom-time-width"
              v-model:value="time"
              :timeInputWidth="200"
              :showAMPM="true"
            />
          </div>
          <div>
            <h3>Custom AM/PM Selector Width</h3>
            <HLTimePicker
              id="time-picker-custom-ampm-width"
              v-model:value="time"
              :showAMPM="true"
              :ampmSelectWidth="100"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Complex Example -->
      <div>
        <h2>Complex Example</h2>
        <p>Time picker with all features enabled:</p>
        <HLTimePicker
          id="time-picker-complex"
          v-model:value="time2"
          format="hh:mm:ss a"
          :showAMPM="true"
          :timezones="timezones"
          :shortcuts="shortcuts"
          :showCTA="true"
          size="md"
          :placeholder="{
            time: 'Select time',
            timezone: 'Select timezone',
          }"
        >
          <template #prefix>
            <HLIcon id="time-picker-complex-prefix" aria-label="Calendar Icon">
              <CalendarIcon />
            </HLIcon>
          </template>
          <template #suffix>
            <HLIcon
              id="time-picker-complex-suffix"
              aria-label="Info Circle Icon"
            >
              <InfoCircleIcon />
            </HLIcon>
          </template>
        </HLTimePicker>
      </div>

      <!-- Disabled Times Example -->
      <div>
        <h2>Disabled Times Example</h2>
        <p>
          Configure disabled hours, minutes, and seconds using functions and
          intervals:
        </p>

        <!-- Side-by-side Layout -->
        <div class="side-by-side-container">
          <div class="demo-side">
            <!-- TimePicker Demo -->
            <div class="demo-section sticky-demo">
              <h3>🎯 Live TimePicker Demo</h3>
              <div class="timepicker-container">
                <HLTimePicker
                  :key="timePickerKey"
                  id="disabled-time-picker"
                  v-model:value="disabledTimeValue"
                  v-model:formatted-value="disabledTimeFormattedValue"
                  v-model:ampm="disabledTimeAMPM"
                  :format="disabledTimeFormat"
                  :show-a-m-p-m="showDisabledAMPM"
                  :is-hour-disabled="hourDisabledFunction"
                  :is-minute-disabled="minuteDisabledFunction"
                  :is-second-disabled="secondDisabledFunction"
                  :shortcuts="shortcuts"
                  :placeholder="{ time: 'Select time' }"
                  @update:fallback="handleDisabledTimeFallback"
                />
              </div>

              <!-- Current Values Display -->
              <div class="values-display">
                <h4>Current Values:</h4>
                <div class="value-item">
                  <strong>Selected Time (timestamp):</strong>
                  {{ disabledTimeValue }}
                </div>
                <div class="value-item">
                  <strong>Formatted Value:</strong>
                  {{ disabledTimeFormattedValue }}
                </div>
                <div class="value-item">
                  <strong>AM/PM:</strong> {{ disabledTimeAMPM }}
                </div>
                <div class="value-item">
                  <strong>Readable Time:</strong> {{ disabledTimeReadable }}
                </div>
              </div>

              <!-- Fallback Events Display -->
              <div
                v-if="disabledTimeFallbackEvents.length > 0"
                class="fallback-events"
              >
                <h4>Fallback Events:</h4>
                <div class="events-list">
                  <div
                    v-for="(event, index) in disabledTimeFallbackEvents"
                    :key="index"
                    class="event-item"
                    :class="event.reason"
                  >
                    <div class="event-header">
                      <strong>{{ event.reason }}</strong>
                      <span class="event-time">{{ event.timestamp }}</span>
                    </div>
                    <div class="event-message">{{ event.message }}</div>
                    <div v-if="event.requestedValue" class="event-details">
                      <span
                        >Requested:
                        {{ formatTimeObject(event.requestedValue) }}</span
                      >
                      <span v-if="event.fallbackValue">
                        → Fallback: {{ formatTimeObject(event.fallbackValue) }}
                      </span>
                    </div>
                  </div>
                </div>
                <HLButton
                  id="clear-fallback-events"
                  size="xs"
                  variant="secondary"
                  @click="clearDisabledTimeFallbackEvents"
                >
                  Clear Events
                </HLButton>
              </div>
            </div>
          </div>
          <!-- Left Side: Configuration Panel -->
          <div class="config-side">
            <div class="config-panel">
              <h3>⚙️ Configuration</h3>

              <!-- Basic Settings -->
              <div class="config-group">
                <h4>Basic Settings</h4>
                <div class="config-row">
                  <div class="config-item">
                    <label class="config-label">Time Format:</label>
                    <HLSelect
                      id="disabled-time-format"
                      v-model:value="disabledTimeFormat"
                      :options="formatOptions"
                      style="width: 220px"
                    />
                  </div>
                  <div class="config-item">
                    <HLCheckbox
                      id="disabled-show-ampm"
                      v-model:checked="showDisabledAMPM"
                    >
                      Show AM/PM
                    </HLCheckbox>
                  </div>
                </div>
              </div>

              <!-- Time Unit Configuration -->
              <div class="config-group">
                <h4>Time Unit Configuration</h4>

                <!-- Hours -->
                <div class="time-unit-section">
                  <h5>🕐 Hours</h5>
                  <div class="config-description">
                    Enter hours to disable ({{
                      is12HourFormat ? '1-12' : '0-23'
                    }}, comma-separated or ranges):
                  </div>
                  <HLInput
                    id="disabled-hours-input"
                    v-model:model-value="disabledHoursInput"
                    placeholder="e.g., 1,2,3 or 0-5,22-23"
                    @update:model-value="updateDisabledHours"
                    class="config-input"
                  />
                </div>

                <!-- Minutes -->
                <div class="time-unit-section">
                  <h5>⏰ Minutes</h5>
                  <div class="minute-config">
                    <div class="interval-option">
                      <HLCheckbox
                        id="use-minute-interval"
                        v-model:checked="useMinuteInterval"
                      >
                        Use Interval (only allow multiples)
                      </HLCheckbox>
                      <HLInputNumber
                        v-if="useMinuteInterval"
                        id="minute-interval"
                        v-model:value="minuteInterval"
                        :min="1"
                        :max="30"
                        class="interval-input"
                        placeholder="Interval"
                      />
                    </div>
                    <div v-if="!useMinuteInterval" class="manual-option">
                      <div class="config-description">
                        Enter minutes to disable (0-59, comma-separated or
                        ranges):
                      </div>
                      <HLInput
                        id="disabled-minutes-input"
                        v-model:model-value="disabledMinutesInput"
                        placeholder="e.g., 0,15,30,45 or 0-15,45-59"
                        @update:model-value="updateDisabledMinutes"
                        class="config-input"
                      />
                    </div>
                  </div>
                </div>

                <!-- Seconds -->
                <div v-if="showSeconds" class="time-unit-section">
                  <h5>⏱️ Seconds</h5>
                  <div class="second-config">
                    <div class="interval-option">
                      <HLCheckbox
                        id="use-second-interval"
                        v-model:checked="useSecondInterval"
                      >
                        Use Interval (only allow multiples)
                      </HLCheckbox>
                      <HLInputNumber
                        v-if="useSecondInterval"
                        id="second-interval"
                        v-model:value="secondInterval"
                        :min="1"
                        :max="30"
                        class="interval-input"
                        placeholder="Interval"
                      />
                    </div>
                    <div v-if="!useSecondInterval" class="manual-option">
                      <div class="config-description">
                        Enter seconds to disable (0-59, comma-separated or
                        ranges):
                      </div>
                      <HLInput
                        id="disabled-seconds-input"
                        v-model:model-value="disabledSecondsInput"
                        placeholder="e.g., 0,30 or 0-15,45-59"
                        @update:model-value="updateDisabledSeconds"
                        class="config-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Presets -->
              <div class="config-group">
                <h4>🚀 Quick Presets</h4>
                <div class="preset-buttons">
                  <HLButton
                    id="business-hours"
                    size="sm"
                    @click="applyPreset('businessHours')"
                  >
                    Business Hours Only (9-17)
                  </HLButton>
                  <HLButton
                    id="even-hours"
                    size="sm"
                    @click="applyPreset('evenHours')"
                  >
                    Even Hours Only
                  </HLButton>
                  <HLButton
                    id="quarter-hours"
                    size="sm"
                    @click="applyPreset('quarterHours')"
                  >
                    Quarter Hours Only
                  </HLButton>
                  <HLButton
                    id="no-weekends"
                    size="sm"
                    @click="applyPreset('noWeekends')"
                  >
                    No Late Night (22-6)
                  </HLButton>
                  <HLButton
                    id="clear-all"
                    size="sm"
                    variant="secondary"
                    @click="clearDisabledTimes"
                  >
                    Clear All
                  </HLButton>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side: TimePicker Demo and Status -->
        </div>
      </div>
    </HLSpace>
  </div>
</template>

<style scoped>
/* Side-by-side layout */
.side-by-side-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.config-side {
  flex: 1;
  min-width: 0; /* Allows flex item to shrink below content size */
}

.demo-side {
  flex: 0 0 60%; /* Fixed width for demo side */
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

/* Responsive design */
@media (max-width: 1200px) {
  .side-by-side-container {
    flex-direction: column;
  }

  .demo-side {
    position: static;
    flex: 1;
    max-height: none;
    overflow-y: visible;
  }
}

.config-panel {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid #e9ecef;
}

.config-panel h3 {
  margin: 0 0 1.5rem 0;
  color: #495057;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 0.5rem;
}

.config-group {
  background: #fff;
  padding: 1.25rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #e9ecef;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.config-group h4 {
  margin: 0 0 1rem 0;
  color: #343a40;
  font-size: 1.1rem;
  font-weight: 600;
}

.config-row {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.config-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.config-label {
  font-weight: 500;
  color: #495057;
  min-width: 100px;
}

.time-unit-section {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 4px solid #007bff;
}

.time-unit-section h5 {
  margin: 0 0 0.75rem 0;
  color: #495057;
  font-size: 1rem;
  font-weight: 600;
}

.config-description {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.config-input {
  width: 100%;
  max-width: 400px;
}

.interval-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.interval-input {
  width: 100px;
}

.manual-option {
  margin-top: 0.75rem;
}

.minute-config,
.second-config {
  display: flex;
  flex-direction: column;
}

.preset-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.demo-section {
  background: #fff;
  padding: 1.5rem;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.sticky-demo {
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.demo-section h3 {
  margin: 0 0 1rem 0;
  color: #495057;
  font-size: 1.2rem;
  font-weight: 600;
}

.timepicker-container {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
}

.values-display,
.config-status {
  background: #f8f9fa;
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 1px solid #e9ecef;
}

.values-display h4,
.config-status h4 {
  margin: 0 0 1rem 0;
  color: #495057;
  font-size: 1.1rem;
  font-weight: 600;
}

.value-item,
.status-item {
  margin: 0.75rem 0;
  padding: 0.5rem;
  background: #fff;
  border-radius: 4px;
  border-left: 3px solid #007bff;
}

.fallback-events {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.fallback-events h4 {
  margin: 0 0 1rem 0;
  color: #856404;
}

.events-list {
  max-height: 300px;
  overflow-y: auto;
}

.event-item {
  background: #fff;
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 6px;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.event-time {
  font-size: 0.8rem;
  color: #6c757d;
}

.event-message {
  color: #495057;
  margin-bottom: 0.5rem;
}

.event-details {
  font-size: 0.9rem;
  color: #6c757d;
  display: flex;
  gap: 1rem;
}
</style>
