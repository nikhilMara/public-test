<script setup lang="ts">
import { CalendarIcon, ClockIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLDatePicker,
  HLForm,
  HLFormItem,
  HLSpace,
} from '@gohighlevel/highrise'
import { computed, inject, nextTick, ref, watch } from 'vue'

// Test controls
interface EmittedEvent {
  event: string
  value: unknown
  timestamp: string
}

const DATE_FORMATS = {
  // Common date formats
  SHORT_DATE: 'dd / MM / yyyy',
  ISO_DATE: 'yyyy - MM - dd',
  SLASH_DATE: 'yyyy/MM/dd',
  SLASH_DATE_SHORT: 'yy/MM/dd',

  // Month formats
  MONTH_NUMERIC: 'MM/yyyy',
  MONTH_NAME: 'MMMM yyyy',
  MONTH_SHORT_NAME: 'MMM yyyy',

  // Year formats
  YEAR: 'yyyy',

  // Week formats
  WEEK: 'yyyy-ww',
  GHL_DATE: 'MMMM dd, yyyy',
  GHL_DATE_SHORT: 'MMM d, yyyy',
} as const

type DatePickerType = 'date' | 'month' | 'year' | 'week' | 'daterange'

const testType = ref<DatePickerType>('date')
const testFormat = ref<string>(DATE_FORMATS.SHORT_DATE)
const testMinYear = ref<number | null>(2018)
const testMaxYear = ref<number | null>(2025)

// Applied year range for the test DatePicker
const appliedMinYear = ref<number | null>(2018)
const appliedMaxYear = ref<number | null>(2025)
const datePickerKey = ref<number>(0) // Key to force re-render

const testValue = ref<number | null | [number, number]>(null)
const testDefaultValue = ref<number | [number, number] | null>(1183135260000)

// Helper function to format timestamp for display
const formatTimestamp = (timestamp: number) => {
  return new Date(timestamp).toLocaleString()
}

// Computed to check if there are unapplied changes
const hasUnappliedChanges = computed(() => {
  return (
    testMinYear.value !== appliedMinYear.value ||
    testMaxYear.value !== appliedMaxYear.value
  )
})

// Function to apply year range and force re-render
const applyYearRange = () => {
  appliedMinYear.value = testMinYear.value
  appliedMaxYear.value = testMaxYear.value
  datePickerKey.value += 1 // Force re-render by changing key
  logEmit('apply-year-range', {
    minYear: appliedMinYear.value,
    maxYear: appliedMaxYear.value,
  })
}

// Computed properties for date range inputs
const startDate = computed({
  get: () => (Array.isArray(testValue.value) ? testValue.value[0] : null),
  set: (value: number | null) => {
    if (value === null) return
    testValue.value = Array.isArray(testValue.value)
      ? [value, testValue.value[1]]
      : [value, value]
  },
})

const endDate = computed({
  get: () => (Array.isArray(testValue.value) ? testValue.value[1] : null),
  set: (value: number | null) => {
    if (value === null) return
    testValue.value = Array.isArray(testValue.value)
      ? [testValue.value[0], value]
      : [value, value]
  },
})

// Watch for type changes to update value formats
watch(testType, (newType: DatePickerType) => {
  // Handle default value
  if (newType === 'daterange') {
    // Convert single value to range if needed
    if (testDefaultValue.value === null) {
      testDefaultValue.value = [Date.now(), Date.now()]
    } else if (!Array.isArray(testDefaultValue.value)) {
      testDefaultValue.value = [testDefaultValue.value, testDefaultValue.value]
    }
  } else {
    // Convert range to single value if needed
    if (Array.isArray(testDefaultValue.value)) {
      testDefaultValue.value = testDefaultValue.value[0] || null
    }
  }

  // Handle value
  if (newType === 'daterange') {
    // Convert single value to range if needed
    if (testValue.value === null) {
      testValue.value = [Date.now(), Date.now()]
    } else if (!Array.isArray(testValue.value)) {
      testValue.value = [testValue.value, testValue.value]
    }
  } else {
    // Convert range to single value if needed
    if (Array.isArray(testValue.value)) {
      testValue.value = testValue.value[0] || null
    }
  }
})
const showTestControls = ref<boolean>(false)
const emittedEvents = ref<EmittedEvent[]>([])

// Log emitted events
const logEmit = (eventName: string, value: unknown): void => {
  emittedEvents.value.unshift({
    event: eventName,
    value,
    timestamp: new Date().toLocaleTimeString(),
  })
  // Keep only last 5 events
  if (emittedEvents.value.length > 5) {
    emittedEvents.value.pop()
  }
}

const panelDate = ref<number | null>(null)
const shortcuts = {
  Yesterday: () => Date.now() - 24 * 60 * 60 * 1000,
  'My Anniversary': () => 1715020800000,
  'GHL Birthday': () => 1522540800,
}

const isOpen = ref(false)
const selectedValue = ref(null)
const handleUpdateValue = (value: any) => {
  selectedValue.value = value
}

const disabledDates = (timestamp: number) => {
  const date = new Date(timestamp).getDate()
  return date < 15
}

const times = ref([
  { label: 'Morning', selected: false },
  { label: 'Afternoon', selected: false },
  { label: 'Evening', selected: false },
])

const categories = ref([
  { label: 'Meeting', selected: false },
  { label: 'Event', selected: false },
  { label: 'Task', selected: false },
])

// Panel mode example data
const selectedMeetingTime = ref('')
const meetingTimeSlots = [
  '9:00 AM - 10:00 AM',
  '10:30 AM - 11:30 AM',
  '1:00 PM - 2:00 PM',
  '2:30 PM - 3:30 PM',
  '4:00 PM - 5:00 PM',
]

const handlePanelDateChange = (value: any) => {
  console.log('value', value)
  selectedMeetingTime.value = new Date(value).toLocaleDateString() // Reset time selection when date changes
}

const selectMeetingTime = (time: string) => {
  selectedMeetingTime.value = time
}

// Form Example
interface FormInstance {
  validate: () => Promise<void>
  clearValidation: () => void
}

const formRef = ref<FormInstance | null>(null)
const formModel = ref({
  dueDate: null as number | null,
  title: 'Sample Task',
})

const formRules = {
  dueDate: [
    {
      required: true,
      validator: (_rule: any, value: any): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
          if (!value) {
            reject(new Error('Please select a due date'))
            return
          }

          // Check if date is in the future
          const selectedDate = new Date(value)
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          if (selectedDate < today) {
            reject(new Error('Due date must be in the future'))
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
      message: 'Please enter a task title',
      trigger: ['blur', 'change'],
    },
  ],
} as const

const handleDateChange = (value: number | null) => {
  formModel.value.dueDate = value
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
    alert('Form validation passed!')
  } catch (error) {
    console.error('Validation failed:', error)
  }
}

const handleReset = () => {
  formModel.value.dueDate = null
  formModel.value.title = 'Sample Task'
  formRef.value?.clearValidation()
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
const locale = inject<any>('locale', ref('en-US'))
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Test Controls -->
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="flex items-center gap-2 mb-4">
          <h2 class="text-lg font-semibold">Test Controls</h2>
          <HLButton
            id="toggle-controls-btn"
            size="xs"
            @click="showTestControls = !showTestControls"
          >
            {{ showTestControls ? 'Hide' : 'Show' }} Controls
          </HLButton>
        </div>

        <div v-if="showTestControls" class="space-y-4">
          <!-- Type Control -->
          <div>
            <h3 class="text-sm font-medium mb-2">Type</h3>
            <div class="flex gap-2 flex-wrap">
              <HLButton
                v-for="type in ['date', 'month', 'year', 'week', 'daterange']"
                :key="type"
                :id="`type-${type}-btn`"
                size="xs"
                :variant="testType === type ? 'primary' : 'secondary'"
                @click="testType = type as DatePickerType"
              >
                {{ type }}
              </HLButton>
            </div>
          </div>

          <!-- Format Control -->
          <div>
            <h3 class="text-sm font-medium mb-2">Format</h3>
            <div class="grid grid-cols-2 gap-2">
              <select
                v-model="testFormat"
                class="border rounded px-2 py-1 text-sm"
              >
                <optgroup label="Common Date Formats">
                  <option :value="DATE_FORMATS.SHORT_DATE">
                    Short Date ({{ DATE_FORMATS.SHORT_DATE }})
                  </option>
                  <option :value="DATE_FORMATS.ISO_DATE">
                    ISO Date ({{ DATE_FORMATS.ISO_DATE }})
                  </option>
                  <option :value="DATE_FORMATS.SLASH_DATE">
                    Slash Date ({{ DATE_FORMATS.SLASH_DATE }})
                  </option>
                  <option :value="DATE_FORMATS.SLASH_DATE_SHORT">
                    Short Slash Date ({{ DATE_FORMATS.SLASH_DATE_SHORT }})
                  </option>
                </optgroup>
                <optgroup label="Month Formats">
                  <option :value="DATE_FORMATS.MONTH_NUMERIC">
                    Numeric Month ({{ DATE_FORMATS.MONTH_NUMERIC }})
                  </option>
                  <option :value="DATE_FORMATS.MONTH_NAME">
                    Month Name ({{ DATE_FORMATS.MONTH_NAME }})
                  </option>
                  <option :value="DATE_FORMATS.MONTH_SHORT_NAME">
                    Short Month Name ({{ DATE_FORMATS.MONTH_SHORT_NAME }})
                  </option>
                </optgroup>
                <optgroup label="Year Format">
                  <option :value="DATE_FORMATS.YEAR">
                    Year ({{ DATE_FORMATS.YEAR }})
                  </option>
                </optgroup>
                <optgroup label="Week Format">
                  <option :value="DATE_FORMATS.WEEK">
                    Week ({{ DATE_FORMATS.WEEK }})
                  </option>
                </optgroup>
                <optgroup label="GHL Formats">
                  <option :value="DATE_FORMATS.GHL_DATE">
                    GHL Date ({{ DATE_FORMATS.GHL_DATE }})
                  </option>
                  <option :value="DATE_FORMATS.GHL_DATE_SHORT">
                    GHL Short Date ({{ DATE_FORMATS.GHL_DATE_SHORT }})
                  </option>
                </optgroup>
              </select>
            </div>
          </div>

          <!-- Value Control -->
          <div>
            <h3 class="text-sm font-medium mb-2">Test Value</h3>
            <template v-if="testType === 'daterange'">
              <!-- Date Range Values -->
              <div class="space-y-2">
                <div>
                  <div class="text-xs text-gray-500 mb-1">Start Date</div>
                  <div class="flex gap-2 items-center">
                    <input
                      v-model="startDate"
                      type="number"
                      class="border rounded px-2 py-1 flex-1"
                      placeholder="Start timestamp"
                    />
                    <HLButton
                      id="set-start-now-btn"
                      size="xs"
                      @click="
                        testValue =
                          Array.isArray(testValue) && testValue[1] !== null
                            ? [Date.now(), testValue[1]]
                            : [Date.now(), Date.now()]
                      "
                    >
                      Set to Now
                    </HLButton>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{
                      Array.isArray(testValue) && testValue[0]
                        ? formatTimestamp(testValue[0])
                        : 'Not set'
                    }}
                  </div>
                </div>
                <div>
                  <div class="text-xs text-gray-500 mb-1">End Date</div>
                  <div class="flex gap-2 items-center">
                    <input
                      v-model="endDate"
                      type="number"
                      class="border rounded px-2 py-1 flex-1"
                      placeholder="End timestamp"
                    />
                    <HLButton
                      id="set-end-now-btn"
                      size="xs"
                      @click="
                        testValue =
                          Array.isArray(testValue) && testValue[0] !== null
                            ? [testValue[0], Date.now()]
                            : [Date.now(), Date.now()]
                      "
                    >
                      Set to Now
                    </HLButton>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{
                      Array.isArray(testValue) && testValue[1]
                        ? formatTimestamp(testValue[1])
                        : 'Not set'
                    }}
                  </div>
                </div>
                <div class="flex gap-2">
                  <HLButton
                    id="set-both-now-btn"
                    size="xs"
                    @click="testValue = [Date.now(), Date.now()]"
                  >
                    Set Both to Now
                  </HLButton>
                  <HLButton
                    id="set-next-week-btn"
                    size="xs"
                    variant="secondary"
                    @click="
                      testValue = [
                        Date.now(),
                        Date.now() + 7 * 24 * 60 * 60 * 1000,
                      ]
                    "
                  >
                    Set to Next Week
                  </HLButton>
                  <HLButton
                    id="clear-range-btn"
                    size="xs"
                    variant="secondary"
                    @click="testValue = null"
                  >
                    Clear
                  </HLButton>
                </div>
              </div>
            </template>
            <template v-else>
              <!-- Single Date Value -->
              <div class="space-y-2">
                <div class="flex gap-2 items-center">
                  <input
                    v-model="testValue"
                    type="number"
                    class="border rounded px-2 py-1 flex-1"
                    placeholder="Enter timestamp"
                  />
                  <HLButton
                    id="set-single-now-btn"
                    size="xs"
                    @click="testValue = Date.now()"
                  >
                    Set to Now
                  </HLButton>
                  <HLButton
                    id="clear-single-btn"
                    size="xs"
                    variant="secondary"
                    @click="testValue = null"
                  >
                    Clear
                  </HLButton>
                </div>
                <div class="text-xs text-gray-500">
                  {{
                    typeof testValue === 'number'
                      ? formatTimestamp(testValue)
                      : 'Not set'
                  }}
                </div>
              </div>
            </template>
          </div>
          {{ testMinYear }}
          {{ testMaxYear }}
          <!-- Min Year Control -->
          <div>
            <h3 class="text-sm font-medium mb-2">Min Year</h3>
            <input
              v-model.number="testMinYear"
              type="number"
              class="border rounded px-2 py-1 w-full"
              placeholder="Enter year"
            />
          </div>
          <!-- Max Year Control -->
          <div>
            <h3 class="text-sm font-medium mb-2">Max Year</h3>
            <input
              v-model.number="testMaxYear"
              type="number"
              class="border rounded px-2 py-1 w-full"
              placeholder="Enter year"
            />
          </div>

          <!-- Apply Year Range Button -->
          <div>
            <HLButton
              id="apply-year-range-btn"
              size="sm"
              :variant="hasUnappliedChanges ? 'primary' : 'secondary'"
              @click="applyYearRange"
            >
              {{
                hasUnappliedChanges
                  ? 'Apply Year Range to Test DatePicker'
                  : 'Year Range Applied'
              }}
            </HLButton>
            <div
              class="text-xs mt-1"
              :class="hasUnappliedChanges ? 'text-orange-600' : 'text-gray-500'"
            >
              <div>
                Applied: {{ appliedMinYear || 'None' }} -
                {{ appliedMaxYear || 'None' }}
              </div>
              <div v-if="hasUnappliedChanges" class="text-orange-600">
                Pending: {{ testMinYear || 'None' }} -
                {{ testMaxYear || 'None' }}
              </div>
            </div>
          </div>

          <!-- Default Value Control -->
          <div>
            <h3 class="text-sm font-medium mb-2">Test Default Value</h3>
            <template v-if="testType === 'daterange'">
              <!-- Date Range Default Values -->
              <div class="space-y-2">
                <div>
                  <div class="text-xs text-gray-500 mb-1">Start Date</div>
                  <div class="flex gap-2 items-center">
                    <input
                      v-model="(testDefaultValue as [number, number])[0]"
                      type="number"
                      class="border rounded px-2 py-1 flex-1"
                      placeholder="Start timestamp"
                    />
                    <HLButton
                      size="xs"
                      @click="
                        testDefaultValue = Array.isArray(testDefaultValue)
                          ? [Date.now(), testDefaultValue[1]]
                          : [Date.now(), Date.now()]
                      "
                    >
                      Set to Now
                    </HLButton>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{
                      Array.isArray(testDefaultValue) && testDefaultValue[0]
                        ? formatTimestamp(testDefaultValue[0])
                        : 'Not set'
                    }}
                  </div>
                </div>
                <div>
                  <div class="text-xs text-gray-500 mb-1">End Date</div>
                  <div class="flex gap-2 items-center">
                    <input
                      v-model="(testDefaultValue as [number, number])[1]"
                      type="number"
                      class="border rounded px-2 py-1 flex-1"
                      placeholder="End timestamp"
                    />
                    <HLButton
                      size="xs"
                      @click="
                        testDefaultValue = Array.isArray(testDefaultValue)
                          ? [testDefaultValue[0], Date.now()]
                          : [Date.now(), Date.now()]
                      "
                    >
                      Set to Now
                    </HLButton>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{
                      Array.isArray(testDefaultValue) && testDefaultValue[1]
                        ? formatTimestamp(testDefaultValue[1])
                        : 'Not set'
                    }}
                  </div>
                </div>
                <div class="flex gap-2">
                  <HLButton
                    size="xs"
                    @click="testDefaultValue = [Date.now(), Date.now()]"
                  >
                    Set Both to Now
                  </HLButton>
                  <HLButton
                    size="xs"
                    variant="secondary"
                    @click="
                      testDefaultValue = [
                        Date.now(),
                        Date.now() + 7 * 24 * 60 * 60 * 1000,
                      ]
                    "
                  >
                    Set to Next Week
                  </HLButton>
                </div>
              </div>
            </template>
            <template v-else>
              <!-- Single Date Default Value -->
              <div class="space-y-2">
                <div class="flex gap-2 items-center">
                  <input
                    v-model="testDefaultValue"
                    type="number"
                    class="border rounded px-2 py-1 flex-1"
                    placeholder="Enter timestamp"
                  />
                  <HLButton
                    id="set-default-now-btn"
                    size="xs"
                    @click="testDefaultValue = Date.now()"
                  >
                    Set to Now
                  </HLButton>
                </div>
                <div class="text-xs text-gray-500">
                  {{
                    typeof testDefaultValue === 'number'
                      ? formatTimestamp(testDefaultValue)
                      : 'Not set'
                  }}
                </div>
              </div>
            </template>
          </div>

          <!-- Event Log -->
          <div>
            <h3 class="text-sm font-medium mb-2">Event Log</h3>
            <div class="bg-white p-2 rounded border max-h-40 overflow-auto">
              <div
                v-for="(event, index) in emittedEvents"
                :key="index"
                class="text-sm mb-2"
              >
                <span class="text-gray-500">{{ event.timestamp }}</span>
                <span class="font-medium ml-2">{{ event.event }}</span>
                <pre class="text-xs bg-gray-50 p-1 mt-1 rounded">{{
                  JSON.stringify(event.value, null, 2)
                }}</pre>
              </div>
              <div
                v-if="emittedEvents.length === 0"
                class="text-gray-500 text-sm"
              >
                No events logged yet
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Test DatePicker -->
      <div>
        <h2>Test DatePicker</h2>
        <HLDatePicker
          :key="datePickerKey"
          v-model:value="testValue"
          :defaultValue="testDefaultValue"
          :type="testType"
          :format="testFormat"
          :min-year="appliedMinYear"
          :max-year="appliedMaxYear"
          clearable
          showCTA
          @update:value="(val: number | null) => logEmit('update:value', val)"
          @update:formatted-value="
            (val: string) => logEmit('update:formatted-value', val)
          "
          @update:show="(val: boolean) => logEmit('update:show', val)"
          @next-month="() => logEmit('next-month', null)"
          @prev-month="() => logEmit('prev-month', null)"
          @next-year="() => logEmit('next-year', null)"
          @prev-year="() => logEmit('prev-year', null)"
          @confirm="
            (val: string, raw: number | null) =>
              logEmit('confirm', { formatted: val, raw })
          "
          @clear="() => logEmit('clear', null)"
          @cancel="
            (val: string, raw: number | null) =>
              logEmit('cancel', { formatted: val, raw })
          "
          @focus="() => logEmit('focus', null)"
          @blur="() => logEmit('blur', null)"
        />
      </div>

      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>A simple date picker with default settings:</p>
        <HLDatePicker id="date-picker-with-default" type="date" clearable />
      </div>

      <!-- With Custom Format -->
      <div>
        <h2>With Custom Format</h2>
        <p>
          Format the date picker to display the date in a custom format.
          Supported formats are listed in Date Formats documentation.
        </p>
        <HLDatePicker
          id="date-picker-with-custom-format"
          type="date"
          format="dd - MM - yyyy"
          clearable
        />
      </div>

      <!-- With CTA buttons -->
      <div>
        <h2>With CTA Buttons</h2>
        <p>Date picker with confirm and clear action buttons:</p>
        <HLDatePicker id="date-picker-with-cta" type="date" clearable showCTA />
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Large (lg)</h3>
            <HLDatePicker id="date-picker-lg" size="lg" />
          </div>
          <div>
            <h3>Medium (md)</h3>
            <HLDatePicker id="date-picker-md" size="md" />
          </div>
          <div>
            <h3>Small (sm)</h3>
            <HLDatePicker id="date-picker-sm" size="sm" />
          </div>
          <div>
            <h3>Extra Small (xs)</h3>
            <HLDatePicker id="date-picker-xs" size="xs" />
          </div>
          <div>
            <h3>2x Extra Small (2xs)</h3>
            <HLDatePicker id="date-picker-2xs" size="2xs" />
          </div>
          <div>
            <h3>3x Extra Small (3xs)</h3>
            <HLDatePicker id="date-picker-3xs" size="3xs" />
          </div>
        </HLSpace>
      </div>

      <!-- Month Picker -->
      <div>
        <h2>Month Picker</h2>
        <HLDatePicker
          id="date-picker-with-month-picker"
          type="month"
          clearable
          format="MM/yyyy"
        />
      </div>

      <!-- Year Picker -->
      <div>
        <h2>Year Picker</h2>
        <HLSpace vertical>
          <div>
            <h3>Year Grid</h3>
            <HLDatePicker
              id="date-picker-with-year-grid"
              type="year"
              clearable
              yearGrid
            />
          </div>
          <div>
            <h3>Year Scroll</h3>
            <HLDatePicker
              id="date-picker-with-year-scroll"
              type="year"
              clearable
            />
          </div>
        </HLSpace>
      </div>

      <!-- With Shortcuts -->
      <div>
        <h2>With Shortcuts</h2>
        <p>Add quick selection options:</p>
        <HLDatePicker
          id="date-picker-with-shortcuts"
          type="date"
          :shortcuts="shortcuts"
          showCTA
        />
      </div>

      <!-- Date Range Selection -->
      <div>
        <h2>Date Range Selection</h2>
        <HLDatePicker
          id="date-picker-range"
          type="daterange"
          clearable
          :placeholder="['Start date', 'End date']"
        />
      </div>

      <!-- Custom Prefix Icon -->
      <div>
        <h2>Custom Prefix Icon</h2>
        <p>You might want to use different icon for the prefix.</p>
        <HLDatePicker id="date-picker-custom-prefix" type="date">
          <template #prefix>
            <div class="hr-input__prefix-icon">
              <ClockIcon />
            </div>
          </template>
        </HLDatePicker>
      </div>

      <!-- Custom Trigger -->
      <div>
        <h2>Custom Trigger</h2>
        <HLDatePicker
          id="date-picker-custom-trigger"
          type="date"
          v-model:show="isOpen"
          @update:value="handleUpdateValue"
        >
          <template #trigger>
            <HLButton
              id="date-picker-trigger-button"
              size="md"
              variant="primary"
              color="blue"
              @click="isOpen = !isOpen"
            >
              <template #iconLeft>
                <CalendarIcon />
              </template>
              {{
                selectedValue
                  ? new Date(selectedValue).toLocaleDateString()
                  : 'Select a date'
              }}
            </HLButton>
          </template>
        </HLDatePicker>
      </div>

      <!-- Disabled Dates -->
      <div>
        <h2>Disabled Dates</h2>
        <p>
          You can disable specific dates using the isDateDisabled prop. In this
          example, all dates before the 15th of each month are disabled.
        </p>
        <HLDatePicker
          id="date-picker-with-disabled-dates"
          type="date"
          :isDateDisabled="disabledDates"
        />
      </div>

      <!-- Using Side Content Panels -->
      <div>
        <h2>Using Side Content Panels</h2>
        <p>
          The DatePicker component supports left and right slots that can be
          used to add additional content beside the calendar.
        </p>
        <HLDatePicker id="date-picker-with-side-content" type="date" showCTA>
          <template #left>
            <div class="flex flex-col gap-2">
              <h3 class="text-sm font-semibold text-gray-700">Time of Day</h3>
              <div class="flex flex-col gap-1">
                <HLButton
                  v-for="timeItem in times"
                  :key="timeItem.label"
                  :id="`time-${timeItem.label.toLowerCase()}-btn`"
                  size="2xs"
                  :variant="timeItem.selected ? 'primary' : 'secondary'"
                  @click="timeItem.selected = !timeItem.selected"
                >
                  {{ timeItem.label }}
                </HLButton>
              </div>
            </div>
          </template>
          <template #right>
            <div class="flex flex-col gap-2">
              <h3 class="text-sm font-semibold text-gray-700">Category</h3>
              <div class="flex flex-col gap-1">
                <HLButton
                  v-for="category in categories"
                  :key="category.label"
                  :id="`category-${category.label.toLowerCase()}-btn`"
                  size="2xs"
                  :variant="category.selected ? 'primary' : 'secondary'"
                  @click="category.selected = !category.selected"
                >
                  {{ category.label }}
                </HLButton>
              </div>
            </div>
          </template>
        </HLDatePicker>
      </div>

      <!-- States -->
      <div>
        <h2>States</h2>
        <HLSpace vertical>
          <div>
            <h3>Disabled</h3>
            <HLDatePicker id="date-picker-disabled" type="date" disabled />
          </div>
          <div>
            <h3>Error State</h3>
            <HLDatePicker id="date-picker-error" type="date" status="error" />
          </div>
          <div>
            <h3>Warning State</h3>
            <HLDatePicker
              id="date-picker-warning"
              type="date"
              status="warning"
            />
          </div>
        </HLSpace>
      </div>

      <!-- With Default Value -->
      <div>
        <h2>With Default Value</h2>
        <p>Date picker with a pre-selected default value:</p>
        <HLDatePicker
          id="date-picker-default-value"
          type="date"
          :defaultValue="defaultValue"
          clearable
        />
      </div>

      <!-- Auto Complete Off -->
      <div>
        <h2>Auto Complete Off</h2>
        <p>Date picker with browser autocomplete disabled:</p>
        <HLDatePicker
          id="date-picker-no-autocomplete"
          type="date"
          :autoCompleteOff="true"
        />
      </div>
      <!-- Panel Mode Example -->
      <div>
        <h2>Panel Mode</h2>
        <p>
          Panel mode renders just the calendar without the input wrapper,
          perfect for embedded calendar experiences:
        </p>

        <!-- Quick Schedule Demo -->
        <div class="bg-blue-100 rounded-lg shadow-sm border p-4 w-1/2">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-gray-700">
              Meeting Scheduler
            </h3>
            <div class="text-sm text-gray-500">
              {{
                selectedMeetingTime
                  ? `Selected: ${selectedMeetingTime}`
                  : 'Choose a time slot'
              }}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Calendar Panel -->
            <div>
              <HLDatePicker
                id="panel-mode-demo"
                v-model="panelDate"
                type="date"
                :panel="true"
                @update:value="handlePanelDateChange"
              />
            </div>

            <!-- Meeting Time Slots -->
            <div class="flex flex-col gap-2">
              <h4 class="text-sm font-medium text-gray-700">Available Times</h4>
              <div class="space-y-1">
                <HLButton
                  v-for="timeSlot in meetingTimeSlots"
                  :key="timeSlot"
                  size="2xs"
                  :variant="
                    selectedMeetingTime === timeSlot ? 'primary' : 'secondary'
                  "
                  @click="selectMeetingTime(timeSlot)"
                  class="w-full justify-start"
                >
                  {{ timeSlot }}
                </HLButton>
              </div>
            </div>
          </div>
        </div>
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
            <HLFormItem label="Due Date" path="dueDate">
              <HLDatePicker
                id="form-due-date-picker"
                v-model:value="formModel.dueDate"
                type="date"
                placeholder="Select due date"
                format="MMMM dd, yyyy"
                clearable
                showCTA
                @update:value="handleDateChange"
              />
            </HLFormItem>

            <div class="flex gap-2 mt-4">
              <HLButton
                id="form-submit-btn"
                type="primary"
                @click="handleSubmit"
                >Submit</HLButton
              >
              <HLButton
                id="form-reset-btn"
                variant="secondary"
                @click="handleReset"
                >Reset</HLButton
              >
            </div>
          </HLForm>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
