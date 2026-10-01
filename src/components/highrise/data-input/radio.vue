<script setup lang="ts">
import {
  HLFormItem,
  HLRadio,
  HLRadioGroup,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const uncheckedValue = ref('')
const checkedValue = ref('checked-md')
const disabledValue = ref('')
const disabledCheckedValue = ref('disabled-checked-md')
const errorValue = ref('')
const onlyIconValue = ref('')

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Unchecked -->
      <div>
        <h2>Unchecked</h2>
        <HLRadioGroup id="radio-unchecked-group" v-model:value="uncheckedValue">
          <HLSpace style="margin-top: 0.5rem" justify="start" align="center">
            <HLRadio id="radio-unchecked-3xs" size="3xs" value="unchecked-3xs"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-unchecked-2xs" size="2xs" value="unchecked-2xs"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-unchecked-xs" size="xs" value="unchecked-xs"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-unchecked-sm" size="sm" value="unchecked-sm"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-unchecked-md" size="md" value="unchecked-md"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-unchecked-lg" size="lg" value="unchecked-lg"
              >Radio Label</HLRadio
            >
          </HLSpace>
        </HLRadioGroup>
      </div>

      <!-- Checked -->
      <div>
        <h2>Checked</h2>
        <HLRadioGroup id="radio-checked-group" v-model:value="checkedValue">
          <HLSpace
            style="margin-top: 0.5rem; align-items: center"
            justify="start"
            align="center"
          >
            <HLRadio id="radio-checked-3xs" size="3xs" value="checked-3xs"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-checked-2xs" size="2xs" value="checked-2xs"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-checked-xs" size="xs" value="checked-xs"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-checked-sm" size="sm" value="checked-sm"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-checked-md" size="md" value="checked-md"
              >Radio Label</HLRadio
            >
            <HLRadio id="radio-checked-lg" size="lg" value="checked-lg"
              >Radio Label</HLRadio
            >
          </HLSpace>
        </HLRadioGroup>
      </div>

      <!-- Disabled - Unchecked -->
      <div>
        <h2>Disabled - Unchecked</h2>
        <HLRadioGroup
          id="radio-disabled-unchecked-group"
          v-model:value="disabledValue"
        >
          <HLSpace
            style="margin-top: 0.5rem; align-items: center"
            justify="start"
            align="center"
          >
            <HLRadio
              id="radio-disabled-unchecked-3xs"
              disabled
              size="3xs"
              value="disabled-3xs"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-unchecked-2xs"
              disabled
              size="2xs"
              value="disabled-2xs"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-unchecked-xs"
              disabled
              size="xs"
              value="disabled-xs"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-unchecked-sm"
              disabled
              size="sm"
              value="disabled-sm"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-unchecked-md"
              disabled
              size="md"
              value="disabled-md"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-unchecked-lg"
              disabled
              size="lg"
              value="disabled-lg"
              >Radio Label</HLRadio
            >
          </HLSpace>
        </HLRadioGroup>
      </div>

      <!-- Disabled - Checked -->
      <div>
        <h2>Disabled - Checked</h2>
        <HLRadioGroup
          id="radio-disabled-checked-group"
          v-model:value="disabledCheckedValue"
        >
          <HLSpace
            style="margin-top: 0.5rem; align-items: center"
            justify="start"
            align="center"
          >
            <HLRadio
              id="radio-disabled-checked-3xs"
              disabled
              size="3xs"
              value="disabled-checked-3xs"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-checked-2xs"
              disabled
              size="2xs"
              value="disabled-checked-2xs"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-checked-xs"
              disabled
              size="xs"
              value="disabled-checked-xs"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-checked-sm"
              disabled
              size="sm"
              value="disabled-checked-sm"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-checked-md"
              disabled
              size="md"
              value="disabled-checked-md"
              >Radio Label</HLRadio
            >
            <HLRadio
              id="radio-disabled-checked-lg"
              disabled
              size="lg"
              value="disabled-checked-lg"
              >Radio Label</HLRadio
            >
          </HLSpace>
        </HLRadioGroup>
      </div>

      <!-- Error state -->
      <div>
        <h2>Error State</h2>
        <HLRadioGroup id="radio-error-group" v-model:value="errorValue">
          <HLSpace
            style="margin-top: 0.5rem; align-items: center"
            justify="start"
            align="center"
          >
            <HLFormItem id="radio-error-form-3xs" validation-status="error">
              <HLRadio id="radio-error-3xs" size="3xs" value="error-3xs"
                >Remember me</HLRadio
              >
            </HLFormItem>
            <HLFormItem id="radio-error-form-2xs" validation-status="error">
              <HLRadio id="radio-error-2xs" size="2xs" value="error-2xs"
                >Remember me</HLRadio
              >
            </HLFormItem>
            <HLFormItem id="radio-error-form-xs" validation-status="error">
              <HLRadio id="radio-error-xs" size="xs" value="error-xs"
                >Remember me</HLRadio
              >
            </HLFormItem>
            <HLFormItem id="radio-error-form-sm" validation-status="error">
              <HLRadio id="radio-error-sm" size="sm" value="error-sm"
                >Remember me</HLRadio
              >
            </HLFormItem>
            <HLFormItem id="radio-error-form-md" validation-status="error">
              <HLRadio id="radio-error-md" size="md" value="error-md"
                >Remember me</HLRadio
              >
            </HLFormItem>
            <HLFormItem id="radio-error-form-lg" validation-status="error">
              <HLRadio id="radio-error-lg" size="lg" value="error-lg"
                >Remember me</HLRadio
              >
            </HLFormItem>
          </HLSpace>
        </HLRadioGroup>
      </div>

      <!-- Only Icon -->
      <div>
        <h2>Only Icon</h2>
        <HLRadioGroup id="radio-only-icon-group" v-model:value="onlyIconValue">
          <HLSpace style="margin-top: 0.5rem" justify="start" align="center">
            <HLRadio
              id="radio-only-icon-3xs"
              size="3xs"
              onlyIcon
              value="icon-3xs"
              aria-label="icon-3xs"
            ></HLRadio>
            <HLRadio
              id="radio-only-icon-2xs"
              size="2xs"
              onlyIcon
              value="icon-2xs"
              aria-label="icon-2xs"
            ></HLRadio>
            <HLRadio
              id="radio-only-icon-xs"
              size="xs"
              onlyIcon
              value="icon-xs"
              aria-label="icon-xs"
            ></HLRadio>
            <HLRadio
              id="radio-only-icon-sm"
              size="sm"
              onlyIcon
              value="icon-sm"
              aria-label="icon-sm"
            ></HLRadio>
            <HLRadio
              id="radio-only-icon-md"
              size="md"
              onlyIcon
              value="icon-md"
              aria-label="icon-md"
            ></HLRadio>
            <HLRadio
              id="radio-only-icon-lg"
              size="lg"
              onlyIcon
              value="icon-lg"
              aria-label="icon-lg"
            ></HLRadio>
          </HLSpace>
        </HLRadioGroup>
      </div>
    </HLSpace>
  </div>
</template>
