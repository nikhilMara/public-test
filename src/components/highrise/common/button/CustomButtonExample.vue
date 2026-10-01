<template>
  <HLText type="display">Custom Button Example</HLText>
  <HLSpace align="center" justify="center">
    <HLSpace align="center">
      <HLButton
        id="custom-color-button-primary"
        :color="inputColorValue"
        variant="primary"
        >Custom Color Primary</HLButton
      >
      <HLButton
        id="custom-color-button-secondary"
        :color="inputColorValue"
        variant="secondary"
        >Custom Color Secondary</HLButton
      >
      <HLButton
        id="custom-color-button-tertiary"
        :color="inputColorValue"
        variant="tertiary"
        >Custom Color Tertiary</HLButton
      >
    </HLSpace>
    <HLSpace align="center">
      <HLButton
        id="custom-color-button-ghost"
        :color="inputColorValue"
        variant="ghost"
        >Custom Color Ghost</HLButton
      >
      <HLButton
        id="custom-color-button-text"
        :color="inputColorValue"
        variant="text"
        >Custom Color Text</HLButton
      >
      <HLButton
        id="custom-color-button-text-link"
        :color="inputColorValue"
        variant="text"
        link
        >Custom Color Link</HLButton
      >
    </HLSpace>
  </HLSpace>
  <div class="my-4"></div>
  <HLInput id="button-color-value-input" v-model:modelValue="inputColorValue" />
</template>
<script setup lang="ts">
import { HLButton, HLInput, HLSpace, HLText } from '@gohighlevel/highrise'
import { ref } from 'vue'

const inputColorValue = ref('#26a6a6')
</script>
