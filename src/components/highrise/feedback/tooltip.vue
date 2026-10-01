<script setup lang="ts">
import {
  HLButton,
  HLSpace,
  HLTooltip,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <!-- <ClientOnly> -->
  <div>
    <HLSpace vertical>
      <h2>Basic Usage</h2>
      <p>Tooltip component for displaying helpful information on hover.</p>
      <HLTooltip id="basic-tooltip">
        <template #trigger>
          <HLButton id="basic-tooltip-trigger">Hover me</HLButton>
        </template>
        <p>This is a basic tooltip</p>
      </HLTooltip>
    </HLSpace>
  </div>
  <!-- </ClientOnly> -->
</template>
