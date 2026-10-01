<script setup lang="ts">
import {
  HLForm,
  HLFormItem,
  HLInputSlider,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const value = ref([50, 80])
const singleValue = ref(30)
const stepValue = ref([20, 60])

const rules = {
  range: {
    required: true,
    validator: (_: any, value: any) => {
      if (!value) {
        return new Error('Please select a range')
      }
      if (value[0] < 30) {
        return new Error('Minimum value should be at least 30')
      }
      if (value[1] > 90) {
        return new Error('Maximum value should not exceed 90')
      }
      return true
    },
    trigger: ['change', 'blur'],
  },
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <HLInputSlider
          id="input-slider-basic"
          v-model:value="value"
          type="dual"
        />
      </div>

      <!-- Single Handle Mode -->
      <div>
        <h2>Single Handle Mode</h2>
        <HLInputSlider
          id="input-slider-single"
          v-model:value="singleValue"
          type="single"
        />
      </div>

      <!-- With Input Controls -->
      <div>
        <h2>With Input Controls</h2>
        <HLInputSlider
          id="input-slider-input"
          v-model:value="value"
          type="dual"
          showInput
          :min="0"
          :max="100"
        />
      </div>

      <!-- Custom Tooltip Format -->
      <div>
        <h2>Custom Tooltip Format</h2>
        <HLInputSlider
          id="input-slider-tooltip"
          v-model:value="value"
          type="dual"
          :format-tooltip="value => `${value}°C`"
        />
      </div>

      <!-- Step Control -->
      <div>
        <h2>Step Control</h2>
        <HLInputSlider
          id="input-slider-step"
          v-model:value="stepValue"
          type="dual"
          :step="10"
          showInput
          :min="0"
          :max="100"
        />
      </div>

      <!-- Sizes -->
      <div>
        <h2>Sizes</h2>
        <div style="display: flex; flex-direction: column; gap: 2rem">
          <HLInputSlider
            id="input-slider-lg"
            v-model:value="value"
            size="lg"
            showInput
          />
          <HLInputSlider
            id="input-slider-md"
            v-model:value="value"
            size="md"
            showInput
          />
          <HLInputSlider
            id="input-slider-sm"
            v-model:value="value"
            size="sm"
            showInput
          />
          <HLInputSlider
            id="input-slider-xs"
            v-model:value="value"
            size="xs"
            showInput
          />
          <HLInputSlider
            id="input-slider-2xs"
            v-model:value="value"
            size="2xs"
            showInput
          />
          <HLInputSlider
            id="input-slider-3xs"
            v-model:value="value"
            size="3xs"
            showInput
          />
        </div>
      </div>

      <!-- With Hint Text -->
      <div>
        <h2>With Hint Text</h2>
        <HLForm id="input-slider-form">
          <HLFormItem
            id="input-slider-form-item"
            label="Range"
            path="range"
            feedback="Select a range between 0 and 100"
          >
            <HLInputSlider
              id="input-slider-form-input"
              v-model:value="value"
              type="dual"
              showInput
            />
          </HLFormItem>
        </HLForm>
      </div>

      <!-- Disabled State -->
      <div>
        <h2>Disabled State</h2>
        <HLInputSlider
          id="input-slider-disabled"
          v-model:value="value"
          disabled
        />
      </div>
    </HLSpace>
  </div>
</template>
