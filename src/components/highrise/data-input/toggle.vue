<script setup lang="ts">
import { HLSpace, HLToggle } from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
const value = ref(false)
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Unchecked -->
      <div>
        <h2>Unchecked</h2>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-unchecked-3xs"
            v-model:value="value"
            size="3xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-unchecked-2xs"
            v-model:value="value"
            size="2xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-unchecked-xs"
            v-model:value="value"
            size="xs"
            label="Toggle Label"
          />
        </HLSpace>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-unchecked-sm"
            v-model:value="value"
            size="sm"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-unchecked-md"
            v-model:value="value"
            size="md"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-unchecked-lg"
            v-model:value="value"
            size="lg"
            label="Toggle Label"
          />
        </HLSpace>
      </div>

      <!-- Checked -->
      <div>
        <h2>Checked</h2>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-checked-3xs"
            v-model:value="value1"
            size="3xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-checked-2xs"
            v-model:value="value1"
            size="2xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-checked-xs"
            v-model:value="value1"
            size="xs"
            label="Toggle Label"
          />
        </HLSpace>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-checked-sm"
            v-model:value="value1"
            size="sm"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-checked-md"
            v-model:value="value1"
            size="md"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-checked-lg"
            v-model:value="value1"
            size="lg"
            label="Toggle Label"
          />
        </HLSpace>
      </div>

      <!-- Disabled - Unchecked -->
      <div>
        <h2>Disabled - Unchecked</h2>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-disabled-unchecked-3xs"
            :value="false"
            disabled
            size="3xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-unchecked-2xs"
            :value="false"
            disabled
            size="2xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-unchecked-xs"
            :value="false"
            disabled
            size="xs"
            label="Toggle Label"
          />
        </HLSpace>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-disabled-unchecked-sm"
            :value="false"
            disabled
            size="sm"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-unchecked-md"
            :value="false"
            disabled
            size="md"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-unchecked-lg"
            :value="false"
            disabled
            size="lg"
            label="Toggle Label"
          />
        </HLSpace>
      </div>

      <!-- Disabled - Checked -->
      <div>
        <h2>Disabled - Checked</h2>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-disabled-checked-3xs"
            :value="true"
            disabled
            checked
            size="3xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-checked-2xs"
            :value="true"
            disabled
            checked
            size="2xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-checked-xs"
            :value="true"
            disabled
            checked
            size="xs"
            label="Toggle Label"
          />
        </HLSpace>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-disabled-checked-sm"
            :value="true"
            disabled
            checked
            size="sm"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-checked-md"
            :value="true"
            disabled
            checked
            size="md"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-disabled-checked-lg"
            :value="true"
            disabled
            checked
            size="lg"
            label="Toggle Label"
          />
        </HLSpace>
      </div>

      <!-- Error - Checked -->
      <div>
        <h2>Error - Checked</h2>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-error-checked-3xs"
            v-model:value="value3"
            variant="error"
            checked
            size="3xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-checked-2xs"
            v-model:value="value3"
            variant="error"
            checked
            size="2xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-checked-xs"
            v-model:value="value3"
            variant="error"
            checked
            size="xs"
            label="Toggle Label"
          />
        </HLSpace>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-error-checked-sm"
            v-model:value="value3"
            variant="error"
            checked
            size="sm"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-checked-md"
            v-model:value="value3"
            variant="error"
            checked
            size="md"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-checked-lg"
            v-model:value="value3"
            variant="error"
            checked
            size="lg"
            label="Toggle Label"
          />
        </HLSpace>
      </div>

      <!-- Error - Unchecked -->
      <div>
        <h2>Error - Unchecked</h2>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-error-unchecked-3xs"
            v-model:value="value4"
            variant="error"
            size="3xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-unchecked-2xs"
            v-model:value="value4"
            variant="error"
            size="2xs"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-unchecked-xs"
            v-model:value="value4"
            variant="error"
            size="xs"
            label="Toggle Label"
          />
        </HLSpace>
        <HLSpace style="margin-top: 5px" align="center" justify="flex-start">
          <HLToggle
            id="toggle-error-unchecked-sm"
            v-model:value="value4"
            variant="error"
            size="sm"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-unchecked-md"
            v-model:value="value4"
            variant="error"
            size="md"
            label="Toggle Label"
          />
          <HLToggle
            id="toggle-error-unchecked-lg"
            v-model:value="value4"
            variant="error"
            size="lg"
            label="Toggle Label"
          />
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
