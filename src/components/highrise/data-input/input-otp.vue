<script setup lang="ts">
import {
  HLInputOtp,
  HLInputSize,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

// Store OTP values for different examples
const otpValues = {
  basic: ref(''),
  custom: ref(''),
  separator: ref(''),
  disabled: ref(''),
  error: ref(''),
  sizes: {
    lg: ref(''),
    md: ref(''),
    sm: ref(''),
    xs: ref(''),
    '2xs': ref(''),
    '3xs': ref(''),
  },
}

// Available sizes for OTP input
const availableSizes: HLInputSize[] = ['lg', 'md', 'sm', 'xs', '2xs', '3xs']

// Handle OTP completion
const handleComplete = (
  id: string,
  value: { otp: string; state: 'completed' }
) => {
  console.log(`OTP completed for ${id}:`, value)
  if (id in otpValues) {
    otpValues[id as keyof typeof otpValues] = value.otp as any
  } else if (id in otpValues.sizes) {
    otpValues.sizes[id as keyof typeof otpValues.sizes] = value.otp as any
  }
}

// Handle OTP change
const handleChange = (id: string, value: string) => {
  console.log(`OTP changed for ${id}:`, value)
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
console.log('direction', direction)
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Example -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic OTP Input</h3>
        <HLInputOtp
          id="basic"
          :fields="6"
          @on-complete="(value: any) => handleComplete('basic', value)"
          @on-change="(value: any) => handleChange('basic', value)"
        />
        <HLText v-if="otpValues.basic" size="sm" class="mt-2" type="text">
          Entered OTP: {{ otpValues.basic }}
        </HLText>
      </div>

      <!-- Custom Fields Example -->
      <div>
        <h3 class="text-lg font-semibold mb-2">
          4-Digit OTP with Custom Placeholder
        </h3>
        <HLInputOtp
          id="custom"
          :fields="4"
          placeholder="#"
          @on-complete="(value: any) => handleComplete('custom', value)"
          @on-change="(value: any) => handleChange('custom', value)"
        />
        <HLText v-if="otpValues.custom" size="sm" class="mt-2" type="text">
          Entered OTP: {{ otpValues.custom }}
        </HLText>
      </div>

      <!-- Separator Example -->
      <div>
        <h3 class="text-lg font-semibold mb-2">OTP with Separator</h3>
        <HLInputOtp
          id="separator"
          :fields="6"
          :separator-position="3"
          @on-complete="(value: any) => handleComplete('separator', value)"
          @on-change="(value: any) => handleChange('separator', value)"
        />
        <HLText v-if="otpValues.separator" size="sm" class="mt-2" type="text">
          Entered OTP: {{ otpValues.separator }}
        </HLText>
      </div>

      <!-- Disabled Example -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Disabled OTP Input</h3>
        <HLInputOtp
          id="disabled"
          :fields="4"
          disabled
          @on-complete="(value: any) => handleComplete('disabled', value)"
          @on-change="(value: any) => handleChange('disabled', value)"
        />
      </div>

      <!-- Error State Example -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Error State OTP Input</h3>
        <HLInputOtp
          id="error"
          :fields="4"
          status="error"
          @on-complete="(value: any) => handleComplete('error', value)"
          @on-change="(value: any) => handleChange('error', value)"
        />
        <HLText v-if="otpValues.error" size="sm" class="mt-2" type="text">
          Entered OTP: {{ otpValues.error }}
        </HLText>
      </div>

      <!-- Different Sizes Example -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Different Sizes</h3>
        <HLSpace vertical>
          <div v-for="size in availableSizes" :key="size">
            <HLText size="sm" class="mb-2" type="text">Size: {{ size }}</HLText>
            <HLInputOtp
              :id="size"
              :fields="4"
              :size="size"
              @on-complete="(value: any) => handleComplete(size, value)"
              @on-change="(value: any) => handleChange(size, value)"
            />
            <HLText
              v-if="otpValues.sizes[size]"
              size="sm"
              class="mt-2"
              type="text"
            >
              Entered OTP: {{ otpValues.sizes[size] }}
            </HLText>
          </div>
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 2rem;
}

h3 {
  color: var(--gray-900);
}
</style>
