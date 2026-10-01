<script setup lang="ts">
import { Copy01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLForm,
  HLFormItem,
  HLInput,
  HLInputGroup,
  HLInputGroupLabel,
  HLSelect,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const value = ref('')
const size = ref('medium')
const args = {}
const options = [
  {
    label: 'Drive My Car',
    value: 'song1',
  },
  {
    label: 'Norwegian Wood',
    value: 'song2',
  },
  {
    label: "You Won't See",
    value: 'song3',
  },
]

async function onCopyClick() {
  await navigator.clipboard.writeText(value.value)
  alert('copied data to clipboard')
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <div class="example-container">
          <HLInputGroup id="input-group-basic" :size="size" v-bind="args">
            <HLInputGroupLabel id="input-group-basic-label-1"
              >https://www.</HLInputGroupLabel
            >
            <HLInput id="input-group-basic-input" v-model:model-value="value" />
            <HLInputGroupLabel id="input-group-basic-label-2"
              >.com</HLInputGroupLabel
            >
          </HLInputGroup>
        </div>
      </div>

      <!-- Dropdown with Input -->
      <div>
        <h2>Dropdown with Input</h2>
        <div class="example-container">
          <HLInputGroup
            id="input-group-dropdown"
            v-bind="args"
            style="max-width: 400px"
          >
            <HLSelect
              id="input-group-dropdown-select"
              :options="options"
            ></HLSelect>
            <HLInput
              id="input-group-dropdown-input"
              v-model:model-value="value"
            />
          </HLInputGroup>
        </div>
      </div>

      <!-- Input and Button -->
      <div>
        <h2>Input and Button</h2>
        <div class="example-container">
          <HLInputGroup
            id="input-group-copy"
            v-bind="args"
            style="max-width: 400px"
          >
            <HLInput id="input-group-copy-input" v-model:model-value="value" />
            <HLButton id="input-group-copy-button" @click="onCopyClick"
              ><Copy01Icon class="w-6" />&nbsp;Copy</HLButton
            >
          </HLInputGroup>
        </div>
      </div>

      <!-- Input Group with Form Validation -->
      <div>
        <h2>Input Group with Form Validation</h2>
        <div class="example-container">
          <HLForm>
            <HLFormItem
              id="input-group-form"
              label="Website URL"
              validation-status="error"
              feedback="Enter your website URL"
            >
              <HLInputGroup id="input-group-form-basic">
                <HLInputGroupLabel id="input-group-form-label-1"
                  >https://www.</HLInputGroupLabel
                >
                <HLInput
                  id="input-group-form-input"
                  v-model:model-value="value"
                />
                <HLInputGroupLabel id="input-group-form-label-2"
                  >.com</HLInputGroupLabel
                >
              </HLInputGroup>
            </HLFormItem>
          </HLForm>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
