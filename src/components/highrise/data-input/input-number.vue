<script setup lang="ts">
import {
  HLInput,
  HLInputNumber,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const basicValue = ref<number>(0)
const customStepValue = ref(100)
const formattedValue = ref(1000)
const precisionValue = ref(3.14)
const rangeValue = ref(5)
const value = ref()
const percentageValue = ref(50)
const customValue = ref(100)
const fontsize = ref('20px')
const fontweight = ref(700)

const formatNumber = (value: any) => {
  if (value === null) return ''
  return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const parseNumber = (input: any) => {
  const parsed = Number(input.replace(/[^\d.-]/g, ''))
  return isNaN(parsed) ? null : parsed
}

const parsePercentage = (input: any) => {
  // Remove % symbol and whitespace
  const cleaned = input.replace(/%|\s/g, '')
  const parsed = Number(cleaned)
  // Return null if not a valid number or out of range
  if (isNaN(parsed) || parsed < 0 || parsed > 100) return null
  return parsed
}

const formatPercentage = (value: any) => {
  if (value === null) return ''
  return `${value}%`
}

const logEvent = (eventName: string, value: any) => {
  console.log(`Event: ${eventName}`, { value })
}

const handlePrecisionUpdate = (value: any) => {
  logEvent('precisionUpdate', value)
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <HLInputNumber
          v-model:value="basicValue"
          id="basic-example"
          :show-button="true"
          @update:value="(val: number | null) => logEvent('update:value', val)"
          @input="(val: number | null) => logEvent('input', val)"
        >
          <template #minus-icon>
            <NaiveUiMinusIcon />
          </template>
          <template #add-icon>
            <NaiveUiPlusIcon />
          </template>
        </HLInputNumber>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace style="margin-top: 0.5rem; align-items: center">
          <HLInputNumber
            v-model:value="value"
            id="size-3xs"
            size="3xs"
            placeholder="3xs size"
            :show-button="true"
          />
          <HLInputNumber
            v-model:value="value"
            id="size-2xs"
            size="2xs"
            placeholder="2xs size"
            :show-button="true"
          />
          <HLInputNumber
            v-model:value="value"
            id="size-xs"
            size="xs"
            placeholder="xs size"
            :show-button="true"
          />
        </HLSpace>
        <HLSpace style="margin-top: 1.5rem; align-items: center">
          <HLInputNumber
            v-model:value="value"
            id="size-sm"
            size="sm"
            placeholder="sm size"
            :show-button="true"
          />
          <HLInputNumber
            v-model:value="value"
            id="size-md"
            size="md"
            placeholder="md size"
            :show-button="true"
          />
          <HLInputNumber
            v-model:value="value"
            id="size-lg"
            size="lg"
            placeholder="lg size"
            :show-button="true"
          />
        </HLSpace>
      </div>

      <!-- Text Alignment -->
      <div>
        <h2>Text Alignment</h2>
        <HLSpace style="margin-top: 1.5rem; align-items: center">
          <HLInputNumber
            v-model:value="value"
            id="text-align-start"
            text-align="start"
            :show-button="false"
          />
          <HLInputNumber
            v-model:value="value"
            id="text-align-center"
            text-align="center"
            :show-button="false"
          />
          <HLInputNumber
            v-model:value="value"
            id="text-align-end"
            text-align="end"
            :show-button="false"
          />
        </HLSpace>
      </div>

      <!-- With Precision -->
      <div>
        <h2>With Precision</h2>
        <HLInputNumber
          v-model:value="precisionValue"
          id="precision-example"
          :precision="2"
          :show-button="true"
          @update:value="(val: number | null) => logEvent('update:value', val)"
          @input="(val: number | null) => logEvent('input', val)"
        />
      </div>

      <!-- With Min/Max Range -->
      <div>
        <h2>With Min/Max Range</h2>
        <HLInputNumber
          v-model:value="rangeValue"
          id="range-example"
          :min="0"
          :max="10"
          :show-button="true"
        />
      </div>

      <!-- Custom Step -->
      <div>
        <h2>Custom Step</h2>
        <HLInputNumber
          v-model:value="customStepValue"
          id="step-example"
          :step="10"
          :show-button="true"
        />
      </div>

      <!-- Custom Format -->
      <div>
        <h2>Custom Format</h2>
        <HLInputNumber
          v-model:value="formattedValue"
          id="format-example"
          :format="formatNumber"
          :parse="parseNumber"
          :show-button="true"
        />
      </div>

      <!-- Custom Parse Function -->
      <div>
        <h2>Custom Parse Function</h2>
        <HLInputNumber
          v-model:value="percentageValue"
          id="parse-example"
          :parse="parsePercentage"
          :format="formatPercentage"
          :min="0"
          :max="100"
          placeholder="Enter percentage"
          :show-button="true"
        />
      </div>

      <!-- Custom Parse Function -->
      <div>
        <h2>Custom Font</h2>
        <div
          class="flex p-2 gap-2"
          style="
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            margin-bottom: 1rem;
          "
        >
          Control Inputs:
          <HLInput
            id="font-size-example"
            v-model:modelValue="fontsize"
          ></HLInput>
          <HLInputNumber
            id="font-weight-example"
            v-model:value="fontweight"
          ></HLInputNumber>
        </div>

        <HLInputNumber
          v-model:value="customValue"
          id="parse-example"
          :min="0"
          :max="100"
          placeholder="Enter value"
          :show-button="true"
          :font-size="fontsize"
          :font-weight="fontweight + ''"
        />
      </div>
    </HLSpace>
  </div>
</template>
