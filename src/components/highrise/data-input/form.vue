<script setup lang="ts">
import {
  HLButton,
  HLCheckbox,
  HLCheckboxGroup,
  HLForm,
  HLFormItem,
  HLInput,
  HLInputNumber,
  HLInputOtp,
  HLInputPhone,
  HLInputTag,
  HLRadio,
  HLRadioCard,
  HLRadioGroup,
  HLSelect,
  HLSpace,
  HLToggle,
  HLToggleGroup,
} from '@gohighlevel/highrise'
import Joi from 'joi'
import { inject, ref } from 'vue'

const formRef = ref()
const formValue = ref({
  text: null,
  tags: [],
  phone: '9989898987',
  number: null,
  textArea: null,
  otp: null,
  selectValue: null,
  radioGroup: null,
  radioCardGroup: null,
  checkboxGroup: [],
  checkboxCardGroup: null,
  toggleGroup: [true, true],
})

const rules = ref({
  text: {
    required: true,
    message: 'Please enter text input',
    trigger: 'input',
  },
  tags: {
    required: true,
    type: 'array',
    message: 'Please input tags',
    trigger: ['input', 'blur'],
  },
  phone: {
    type: 'number',
    required: true,
    message: 'Please input your phone number',
    trigger: ['input', 'blur'],
  },
  number: {
    type: 'number',
    required: true,
    message: 'Please input a number',
    trigger: 'blur',
  },
  textArea: {
    required: true,
    message: 'Please enter text in the text area',
    trigger: 'blur',
  },
  otp: {
    type: 'number',
    required: true,
    message: 'Please enter the OTP',
    trigger: 'input',
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: 'Please select selectValue',
  },
  radioGroup: {
    required: true,
    message: 'Please select a radio option',
    trigger: 'blur',
  },
  radioCardGroup: {
    required: true,
    message: 'Please select a card option',
    trigger: 'blur',
  },
  checkboxGroup: {
    type: 'array',
    required: true,
    message: 'Please select at least one checkbox',
    trigger: ['change', 'blur'],
  },
  checkboxCardGroup: {
    type: 'array',
    required: true,
    message: 'Please select an option',
    trigger: 'change',
  },
  toggleGroup: {
    required: false,
    message: 'Please toggle the options',
    trigger: 'change',
    validator(rule: any, value: any) {
      return value.filter((v: boolean) => v).length >= 1
    },
  },
})

const onValidate = (e: any) => {
  e.preventDefault()

  formRef?.value?.getForm()?.validate((errors: Array<any> | undefined) => {
    if (!errors) {
      console.log('GUIPG', 'Valid form:', formValue.value)
    } else {
      console.log('GUIPG', 'Validation failed:', errors)
    }
  })
}

const completeOTPHandler = (value: { otp: string; state: string }) => {
  formValue.value.otp = +value.otp
}

const allSizes = ['lg']

// Form validation example with Joi
const formRefValidation = ref()
const formValueValidation = ref({
  name: '',
  age: null,
  address: '',
})

// Track validation status and feedback for each field
const validationStatus = ref({
  name: undefined as 'error' | 'warning' | undefined,
  age: undefined as 'error' | 'warning' | undefined,
  address: undefined as 'error' | 'warning' | undefined,
})

const validationFeedback = ref({
  name: '',
  age: '',
  address: '',
})

const validationSchema = Joi.object({
  name: Joi.string().required().min(2).max(50).messages({
    'string.empty': 'Name is required',
    'string.min': 'Name should be at least 2 characters',
    'string.max': 'Name should be at most 50 characters',
    'any.required': 'Name is required',
  }),
  age: Joi.number().required().min(18).max(100).messages({
    'number.base': 'Age is required',
    'number.min': 'Age should be at least 18',
    'number.max': 'Age should be at most 100',
    'any.required': 'Age is required',
  }),
  address: Joi.string().required().min(10).max(200).messages({
    'string.empty': 'Address is required',
    'string.min': 'Address should be at least 10 characters',
    'string.max': 'Address should be at most 200 characters',
    'any.required': 'Address is required',
  }),
})

interface ValidationResult {
  status: 'error' | 'warning'
  message: string
}

const createValidator = (field: keyof typeof formValueValidation.value) => {
  return async (rule: any, value: any) => {
    const resultSchema = validationSchema.extract(field)
    const result = resultSchema.validate(value)

    if (result.error) {
      const error = result.error.details[0]

      // Check if the error is for empty/required field
      if (
        error.type === 'string.empty' ||
        error.type === 'any.required' ||
        error.type === 'number.base'
      ) {
        validationStatus.value[field] = 'error'
        validationFeedback.value[field] = error.message
        throw new Error(error.message)
      } else {
        // For other validation cases (min/max length, age range), return warning
        validationStatus.value[field] = 'warning'
        validationFeedback.value[field] = error.message
        return {
          status: 'warning',
          message: error.message,
        } as ValidationResult
      }
    }

    // Clear validation status and feedback if valid
    validationStatus.value[field] = undefined
    validationFeedback.value[field] = ''
  }
}

const rulesValidation = {
  name: [{ validator: createValidator('name'), trigger: ['input', 'blur'] }],
  age: [{ validator: createValidator('age'), trigger: ['input', 'blur'] }],
  address: [
    { validator: createValidator('address'), trigger: ['input', 'blur'] },
  ],
}

async function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  try {
    await formRefValidation.value?.validate((errors: any) => {
      if (!errors) {
        console.log('GUIPG', 'Valid form:', formValueValidation.value)
        // Clear all validation statuses and feedback on success
        Object.keys(validationStatus.value).forEach(key => {
          const field = key as keyof typeof validationStatus.value
          validationStatus.value[field] = undefined
          validationFeedback.value[field] = ''
        })
      } else {
        console.log('GUIPG', 'Validation results:', errors)
      }
    })
  } catch (error) {
    console.log('GUIPG', 'Validation failed:', error)
  }
}

// Add restore handler
const handleRestore = () => {
  formRefValidation.value?.restoreValidation()
  // Reset form values
  Object.keys(formValueValidation.value).forEach(key => {
    formValueValidation.value[key as keyof typeof formValueValidation.value] =
      key === 'age' ? null : ''
  })
  // Clear validation states and feedback
  Object.keys(validationStatus.value).forEach(key => {
    const field = key as keyof typeof validationStatus.value
    validationStatus.value[field] = undefined
    validationFeedback.value[field] = ''
  })
}

// Grid Form Example
const gridFormRef = ref()
const gridFormValue = ref({
  firstName: '',
  lastName: '',
  age: null,
  email: '',
  phone: '',
  city: '',
  country: '',
  occupation: '',
})

const countryOptions = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

const gridFormRules = {
  firstName: {
    required: true,
    message: 'Please enter your first name',
    trigger: ['input', 'blur'],
  },
  lastName: {
    required: true,
    message: 'Please enter your last name',
    trigger: ['input', 'blur'],
  },
  age: {
    type: 'number' as const,
    required: true,
    message: 'Please enter your age',
    trigger: ['input', 'blur'],
  },
  email: {
    required: true,
    message: 'Please enter your email',
    trigger: ['input', 'blur'],
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: true,
    message: 'Please enter your phone number',
    trigger: ['input', 'blur'],
  },
  city: {
    required: true,
    message: 'Please enter your city',
    trigger: ['input', 'blur'],
  },
  country: {
    required: true,
    message: 'Please select your country',
    trigger: ['change', 'blur'],
  },
  occupation: {
    required: true,
    message: 'Please enter your occupation',
    trigger: ['input', 'blur'],
  },
}

const countryCode = ref('US')

async function handleGridSubmit(e: MouseEvent) {
  e.preventDefault()
  try {
    await gridFormRef.value?.validate((errors: any) => {
      if (!errors) {
        console.log('GUIPG', 'Form submitted:', gridFormValue.value)
      } else {
        console.log('GUIPG', 'Validation failed:', errors)
      }
    })
  } catch (error) {
    console.log('GUIPG', 'Validation error:', error)
  }
}
const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- All Input Types -->
      <div>
        <h2>All Input Types</h2>
        <p>
          Form input component with input validation rules and validation states
          and feedback texts for each HLFormItem
        </p>
        <HLForm
          v-for="size in allSizes"
          :key="size"
          id="all-inputs-form"
          ref="formRef"
          :rules="rules"
          :model="formValue"
          style="width: 400px"
          :size="size"
        >
          <HLFormItem
            id="all-inputs-text-item"
            label="Name"
            path="text"
            feedback="This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user."
            :feedback-tooltip="true"
          >
            <HLInput
              id="all-inputs-text"
              v-model:model-value="formValue.text"
              placeholder="Input Text"
            />
          </HLFormItem>
          <HLFormItem id="all-inputs-tags-item" label="Input Tags" path="tags">
            <HLInputTag
              id="all-inputs-tags"
              v-model:value="formValue.tags"
              placeholder="Input Age"
            />
          </HLFormItem>
          <HLFormItem
            id="all-inputs-phone-item"
            label="Input Phone"
            path="phone"
            feedback="This is a feedback"
          >
            <HLInputPhone
              id="all-inputs-phone"
              v-model:value="formValue.phone"
              placeholder="Input phone"
            />
          </HLFormItem>
          <HLFormItem
            id="all-inputs-number-item"
            label="Input Number"
            path="number"
          >
            <HLInputNumber
              id="all-inputs-number"
              v-model:value="formValue.number"
              placeholder="Input number"
            />
          </HLFormItem>
          <HLFormItem
            id="all-inputs-textarea-item"
            label="textArea"
            path="textArea"
            feedback="This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user.This is a hint text to help user. This is a hint text to help user.This is a hint text to help user.This is a hint text to help user."
          >
            <HLInput
              id="all-inputs-textarea"
              v-model:model-value="formValue.text"
              placeholder="Input Text"
              type="textarea"
            />
          </HLFormItem>
          <HLFormItem
            id="all-inputs-select-item"
            label="Select"
            path="selectValue"
            feedback="This is a feedback"
          >
            <HLSelect
              id="all-inputs-select"
              v-model:value="formValue.selectValue"
              placeholder="Input select"
            />
          </HLFormItem>
          <HLFormItem
            id="all-inputs-otp-item"
            label="OTP"
            path="otp"
            feedback="This is a feedback"
          >
            <HLInputOtp
              id="all-inputs-otp"
              v-model:value="formValue.otp"
              placeholder="0"
              @on-complete="completeOTPHandler"
            />
          </HLFormItem>
          <HLFormItem
            id="all-inputs-toggle-group-item"
            label="Toggle Group"
            path="toggleGroup"
          >
            <HLToggleGroup
              id="all-inputs-toggle-group"
              placeholder="toggle"
              group-label=""
            >
              <HLSpace id="all-inputs-toggle-group-space">
                <HLToggle
                  id="all-inputs-toggle-1"
                  v-model:value="formValue.toggleGroup[0]"
                  :checked-value="true"
                  :unchecked-value="false"
                  label="Random 1"
                />
                <HLToggle
                  id="all-inputs-toggle-2"
                  v-model:value="formValue.toggleGroup[1]"
                  :checked-value="true"
                  :unchecked-value="false"
                  label="Random 2"
                />
              </HLSpace>
            </HLToggleGroup>
          </HLFormItem>
          <HLFormItem
            id="all-inputs-radio-group-item"
            label="Radio Group"
            path="radioGroup"
          >
            <HLRadioGroup
              id="all-inputs-radio-group"
              v-model:value="formValue.radioGroup"
              placeholder="radio"
            >
              <HLSpace id="all-inputs-radio-group-space">
                <HLRadio id="all-inputs-radio-1" value="radio-1">
                  Steve Smith
                </HLRadio>
                <HLRadio id="all-inputs-radio-2" value="radio-2">
                  Virat Kohli
                </HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </HLFormItem>
          <HLFormItem
            id="all-inputs-radio-card-group-item"
            label="Radio Card Group"
            path="radioCardGroup"
          >
            <HLRadioGroup
              id="all-inputs-radio-card-group"
              v-model:value="formValue.radioCardGroup"
              placeholder="radio"
            >
              <HLSpace id="all-inputs-radio-card-space">
                <HLRadioCard
                  id="all-inputs-radio-card-1"
                  value="radiocard-1"
                  title="Hugo Behean"
                  description="Perfect support dreamer"
                />
                <HLRadioCard
                  id="all-inputs-radio-card-2"
                  value="radiocard-2"
                  title="Koss Vyane"
                  description="School teacher"
                />
              </HLSpace>
            </HLRadioGroup>
          </HLFormItem>
          <HLFormItem
            id="all-inputs-checkbox-group-item"
            label="Checkbox Group"
            path="checkboxCardGroup"
            :tooltip="{ tooltipContent: 'This is a tooltip' }"
          >
            <HLCheckboxGroup
              id="all-inputs-checkbox-group"
              v-model:value="formValue.checkboxCardGroup"
            >
              <HLSpace id="all-inputs-checkbox-group-space">
                <HLCheckbox id="all-inputs-checkbox-1" value="facebook">
                  Facebook
                </HLCheckbox>
                <HLCheckbox id="all-inputs-checkbox-2" value="twitter">
                  Twitter
                </HLCheckbox>
                <HLCheckbox id="all-inputs-checkbox-3" value="instagram">
                  Instagram
                </HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </HLFormItem>
          <HLFormItem>
            <HLButton id="validate-form-button" @click="onValidate">
              Validate Form
            </HLButton>
          </HLFormItem>
        </HLForm>
      </div>

      <!-- Form Validation with Joi -->
      <div>
        <h2>Form Validation</h2>
        <p>
          The HLForm component provides flexible validation capabilities through
          its rules prop. While you can implement validation using various
          approaches, we <strong>strongly recommend</strong> using Joi as the
          validation library.
        </p>
        <HLForm
          ref="formRefValidation"
          :model="formValueValidation"
          :rules="rulesValidation"
          style="width: 400px"
        >
          <HLFormItem
            label="Name"
            path="name"
            required
            :validation-status="validationStatus.name"
            :feedback="validationFeedback.name"
          >
            <HLInput
              id="name"
              v-model:model-value="formValueValidation.name"
              placeholder="Input Name"
            />
          </HLFormItem>
          <HLFormItem
            label="Age"
            path="age"
            required
            :validation-status="validationStatus.age"
            :feedback="validationFeedback.age"
          >
            <HLInputNumber
              id="age"
              v-model:value="formValueValidation.age"
              placeholder="Input Age"
            />
          </HLFormItem>
          <HLFormItem
            label="Address"
            path="address"
            required
            :validation-status="validationStatus.address"
            :feedback="validationFeedback.address"
          >
            <HLInput
              id="address"
              v-model:model-value="formValueValidation.address"
              placeholder="Input Address"
              type="textarea"
            />
          </HLFormItem>
          <HLFormItem>
            <HLSpace>
              <HLButton id="validate" @click="handleValidateClick">
                Validate
              </HLButton>
              <HLButton id="restore" @click="handleRestore" type="default">
                Reset Form
              </HLButton>
            </HLSpace>
          </HLFormItem>
        </HLForm>
      </div>

      <!-- Grid Form Layout -->
      <div>
        <h2>Grid Form Layout</h2>
        <p>
          Form fields arranged in a responsive grid layout. On larger screens,
          fields are displayed in a 2-column grid, and on smaller screens, they
          stack vertically in a single column.
        </p>
        <div>
          <HLForm
            ref="gridFormRef"
            :model="gridFormValue"
            :rules="gridFormRules"
            size="lg"
            style="max-width: 600px"
            class="grid-form"
          >
            <HLFormItem label="First Name" path="firstName">
              <HLInput
                id="grid-first-name"
                v-model:model-value="gridFormValue.firstName"
                placeholder="Enter your first name"
              />
            </HLFormItem>
            <HLFormItem label="Last Name" path="lastName">
              <HLInput
                id="grid-last-name"
                v-model:model-value="gridFormValue.lastName"
                placeholder="Enter your last name"
              />
            </HLFormItem>
            <HLFormItem label="Age" path="age">
              <HLInputNumber
                id="grid-age"
                v-model:value="gridFormValue.age"
                placeholder="Enter your age"
                :min="1"
                :max="120"
              />
            </HLFormItem>
            <HLFormItem
              label="Email"
              path="email"
              feedback="Please enter a valid email address (e.g., user@example.com)"
              :show-feedback-tooltip="true"
              :feedback-line-clamp="2"
            >
              <HLInput
                id="grid-email"
                v-model:model-value="gridFormValue.email"
                placeholder="Enter your email"
                type="email"
              />
            </HLFormItem>
            <HLFormItem label="Phone" path="phone">
              <HLInputPhone
                id="grid-phone"
                v-model:country-code="countryCode"
                v-model:value="gridFormValue.phone"
                placeholder="Enter your phone number"
              />
            </HLFormItem>
            <HLFormItem label="City" path="city">
              <HLInput
                id="grid-city"
                v-model:model-value="gridFormValue.city"
                placeholder="Enter your city"
              />
            </HLFormItem>
            <HLFormItem label="Country" path="country">
              <HLSelect
                id="grid-country"
                v-model:value="gridFormValue.country"
                placeholder="Select your country"
                :options="countryOptions"
              />
            </HLFormItem>
            <HLFormItem label="Occupation" path="occupation">
              <HLInput
                id="grid-occupation"
                v-model:model-value="gridFormValue.occupation"
                placeholder="Enter your occupation"
              />
            </HLFormItem>
            <!-- Submit button spans full width -->
            <div style="grid-column: 1 / -1; margin-top: 16px">
              <HLFormItem>
                <HLButton id="grid-submit" @click="handleGridSubmit">
                  Submit Form
                </HLButton>
              </HLFormItem>
            </div>
          </HLForm>
        </div>
      </div>
    </HLSpace>
  </div>
</template>

<style scoped>
.grid-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--n-form-item-gap, 16px);
}

/* Responsive design for smaller screens */
@media (max-width: 640px) {
  .grid-form {
    grid-template-columns: 1fr;
  }
}
</style>
