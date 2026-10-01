<script setup lang="ts">
import { HLCheckbox, HLSpace } from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
const value = ref(false)
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Unchecked -->
      <div>
        <h2>Unchecked</h2>
        <HLSpace style="margin-top: 0.5rem" align="center">
          <HLCheckbox id="unchecked-3xs" size="3xs" v-model:checked="value"
            >Remember me - 3xs</HLCheckbox
          >
          <HLCheckbox id="unchecked-2xs" size="2xs" v-model:checked="value"
            >Remember me - 2xs</HLCheckbox
          >
          <HLCheckbox id="unchecked-xs" size="xs" v-model:checked="value"
            >Remember me - xs</HLCheckbox
          >
          <HLCheckbox id="unchecked-sm" size="sm" v-model:checked="value"
            >Remember me - sm</HLCheckbox
          >
          <HLCheckbox id="unchecked-md" size="md" v-model:checked="value"
            >Remember me - md</HLCheckbox
          >
          <HLCheckbox id="unchecked-lg" size="lg" v-model:checked="value"
            >Remember me - lg</HLCheckbox
          >
        </HLSpace>
      </div>

      <!-- Checked -->
      <div>
        <h2>Checked</h2>
        <HLSpace style="margin-top: 0.5rem" align="center">
          <HLCheckbox id="checked-3xs" checked size="3xs"
            >Remember me - 3xs</HLCheckbox
          >
          <HLCheckbox id="checked-2xs" checked size="2xs"
            >Remember me - 2xs</HLCheckbox
          >
          <HLCheckbox id="checked-xs" checked size="xs"
            >Remember me - xs</HLCheckbox
          >
          <HLCheckbox id="checked-sm" checked size="sm"
            >Remember me - sm</HLCheckbox
          >
          <HLCheckbox id="checked-md" checked size="md"
            >Remember me - md</HLCheckbox
          >
          <HLCheckbox id="checked-lg" checked size="lg"
            >Remember me - lg</HLCheckbox
          >
        </HLSpace>
      </div>

      <!-- Indeterminate -->
      <div>
        <h2>Indeterminate</h2>
        <HLSpace style="margin-top: 0.5rem" align="center">
          <HLCheckbox id="indeterminate-3xs" indeterminate size="3xs"
            >Remember me - 3xs</HLCheckbox
          >
          <HLCheckbox id="indeterminate-2xs" indeterminate size="2xs"
            >Remember me - 2xs</HLCheckbox
          >
          <HLCheckbox id="indeterminate-xs" indeterminate size="xs"
            >Remember me - xs</HLCheckbox
          >
          <HLCheckbox id="indeterminate-sm" indeterminate size="sm"
            >Remember me - sm</HLCheckbox
          >
          <HLCheckbox id="indeterminate-md" indeterminate size="md"
            >Remember me - md</HLCheckbox
          >
          <HLCheckbox id="indeterminate-lg" indeterminate size="lg"
            >Remember me - lg</HLCheckbox
          >
        </HLSpace>
      </div>

      <!-- Disabled - Unchecked -->
      <div>
        <h2>Disabled - Unchecked</h2>
        <HLSpace style="margin-top: 0.5rem" align="center">
          <HLCheckbox id="disabled-unchecked-3xs" disabled size="3xs"
            >Remember me - 3xs</HLCheckbox
          >
          <HLCheckbox id="disabled-unchecked-2xs" disabled size="2xs"
            >Remember me - 2xs</HLCheckbox
          >
          <HLCheckbox id="disabled-unchecked-xs" disabled size="xs"
            >Remember me - xs</HLCheckbox
          >
          <HLCheckbox id="disabled-unchecked-sm" disabled size="sm"
            >Remember me - sm</HLCheckbox
          >
          <HLCheckbox id="disabled-unchecked-md" disabled size="md"
            >Remember me - md</HLCheckbox
          >
          <HLCheckbox id="disabled-unchecked-lg" disabled size="lg"
            >Remember me - lg</HLCheckbox
          >
        </HLSpace>
      </div>

      <!-- Disabled - Checked -->
      <div>
        <h2>Disabled - Checked</h2>
        <HLSpace style="margin-top: 0.5rem" align="center">
          <HLCheckbox id="disabled-checked-3xs" disabled checked size="3xs"
            >Remember me - 3xs</HLCheckbox
          >
          <HLCheckbox id="disabled-checked-2xs" disabled checked size="2xs"
            >Remember me - 2xs</HLCheckbox
          >
          <HLCheckbox id="disabled-checked-xs" disabled checked size="xs"
            >Remember me - xs</HLCheckbox
          >
          <HLCheckbox id="disabled-checked-sm" disabled checked size="sm"
            >Remember me - sm</HLCheckbox
          >
          <HLCheckbox id="disabled-checked-md" disabled checked size="md"
            >Remember me - md</HLCheckbox
          >
          <HLCheckbox id="disabled-checked-lg" disabled checked size="lg"
            >Remember me - lg</HLCheckbox
          >
        </HLSpace>
      </div>

      <!-- Disabled - Indeterminate -->
      <div>
        <h2>Disabled - Indeterminate</h2>
        <HLSpace style="margin-top: 0.5rem" align="center">
          <HLCheckbox
            id="disabled-indeterminate-3xs"
            disabled
            indeterminate
            size="3xs"
            >Remember me - 3xs</HLCheckbox
          >
          <HLCheckbox
            id="disabled-indeterminate-2xs"
            disabled
            indeterminate
            size="2xs"
            >Remember me - 2xs</HLCheckbox
          >
          <HLCheckbox
            id="disabled-indeterminate-xs"
            disabled
            indeterminate
            size="xs"
            >Remember me - xs</HLCheckbox
          >
          <HLCheckbox
            id="disabled-indeterminate-sm"
            disabled
            indeterminate
            size="sm"
            >Remember me - sm</HLCheckbox
          >
          <HLCheckbox
            id="disabled-indeterminate-md"
            disabled
            indeterminate
            size="md"
            >Remember me - md</HLCheckbox
          >
          <HLCheckbox
            id="disabled-indeterminate-lg"
            disabled
            indeterminate
            size="lg"
            >Remember me - lg</HLCheckbox
          >
        </HLSpace>
      </div>

      <!-- With Label -->
      <div>
        <h2>With Label</h2>
        <div
          class="flex"
          style="max-width: 200px; border: 1px solid red; padding: 1rem"
        >
          <HLCheckbox id="with-label" size="md" v-model:checked="value"
            >Remember me - md Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit eum odit doloremque aliquid repudiandae veritatis
            expedita cupiditate a consectetur amet explicabo voluptate fugit,
            impedit pariatur voluptas quam eveniet dicta obcaecati!</HLCheckbox
          >
        </div>
      </div>
    </HLSpace>
  </div>
</template>
