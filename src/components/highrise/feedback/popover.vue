<script setup lang="ts">
import { HLButton, HLPopover } from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <!-- <ClientOnly> -->
  <div>
    <HLPopover id="basic-popover" trigger="click">
      <template #trigger>
        <HLButton id="basic-popover-trigger">Click me</HLButton>
      </template>
      <div class="p-4">
        <p>This is the popover content!</p>
      </div>
    </HLPopover>
  </div>
  <!-- </ClientOnly> -->
</template>
