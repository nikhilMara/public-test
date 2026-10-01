<script setup lang="ts">
import {
  HLButton,
  HLButtonGroup,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

import { UserPlus01Icon } from '@gohighlevel/ghl-icons/24/outline'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <HLButtonGroup>
          <HLButton id="group-1">Button 1</HLButton>
          <HLButton id="group-2">Button 2</HLButton>
          <HLButton id="group-3">Button 3</HLButton>
        </HLButtonGroup>
      </div>

      <!-- Primary Buttons -->
      <div>
        <h2>Primary Buttons</h2>
        <HLButtonGroup>
          <HLButton id="primary-blue" color="blue" variant="primary"
            >Blue</HLButton
          >
          <HLButton id="primary-green" color="green" variant="primary"
            >Green</HLButton
          >
          <HLButton id="primary-gray" color="gray" variant="primary"
            >Gray</HLButton
          >
          <HLButton id="primary-orange" color="orange" variant="primary"
            >Orange</HLButton
          >
          <HLButton id="primary-red" color="red" variant="primary"
            >Red</HLButton
          >
        </HLButtonGroup>
      </div>

      <!-- Secondary Buttons -->
      <div>
        <h2>Secondary Buttons</h2>
        <HLButtonGroup>
          <HLButton id="secondary-blue" color="blue">Blue</HLButton>
          <HLButton id="secondary-green" color="green">Green</HLButton>
          <HLButton id="secondary-gray" color="gray">Gray</HLButton>
          <HLButton id="secondary-orange" color="orange">Orange</HLButton>
          <HLButton id="secondary-red" color="red">Red</HLButton>
        </HLButtonGroup>
      </div>

      <!-- Tertiary Buttons -->
      <div>
        <h2>Tertiary Buttons</h2>
        <HLButtonGroup>
          <HLButton id="tertiary-blue" color="blue" variant="tertiary"
            >Blue</HLButton
          >
          <HLButton id="tertiary-green" color="green" variant="tertiary"
            >Green</HLButton
          >
          <HLButton id="tertiary-gray" color="gray" variant="tertiary"
            >Gray</HLButton
          >
          <HLButton id="tertiary-orange" color="orange" variant="tertiary"
            >Orange</HLButton
          >
          <HLButton id="tertiary-red" color="red" variant="tertiary"
            >Red</HLButton
          >
        </HLButtonGroup>
      </div>

      <!-- Ghost Buttons -->
      <div>
        <h2>Ghost Buttons</h2>
        <HLButtonGroup>
          <HLButton id="ghost-blue" color="blue" variant="ghost">Blue</HLButton>
          <HLButton id="ghost-green" color="green" variant="ghost"
            >Green</HLButton
          >
          <HLButton id="ghost-gray" color="gray" variant="ghost">Gray</HLButton>
          <HLButton id="ghost-orange" color="orange" variant="ghost"
            >Orange</HLButton
          >
          <HLButton id="ghost-red" color="red" variant="ghost">Red</HLButton>
        </HLButtonGroup>
      </div>

      <!-- Text Buttons -->
      <div>
        <h2>Text Buttons</h2>
        <HLButtonGroup class="flex gap-3">
          <HLButton id="text-blue" color="blue" variant="text">Blue</HLButton>
          <HLButton id="text-green" color="green" variant="text"
            >Green</HLButton
          >
          <HLButton id="text-gray" color="gray" variant="text">Gray</HLButton>
          <HLButton id="text-orange" color="orange" variant="text"
            >Orange</HLButton
          >
          <HLButton id="text-red" color="red" variant="text">Red</HLButton>
        </HLButtonGroup>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace vertical>
          <div class="flex gap-4">
            <div class="inline-flex">Large</div>
            <HLButtonGroup class="inline-flex content-start">
              <HLButton id="size-lg-1" size="lg" color="blue">Left</HLButton>
              <HLButton id="size-lg-2" size="lg" color="blue">Middle</HLButton>
              <HLButton id="size-lg-3" size="lg" color="blue">Right</HLButton>
            </HLButtonGroup>
          </div>
          <div class="flex gap-4">
            <div class="inline-flex">Medium</div>
            <HLButtonGroup class="inline-flex content-start">
              <HLButton id="size-md-1" size="md" color="green">Left</HLButton>
              <HLButton id="size-md-2" size="md" color="green">Middle</HLButton>
              <HLButton id="size-md-3" size="md" color="green">Right</HLButton>
            </HLButtonGroup>
          </div>
          <div class="flex gap-4">
            <div class="inline-flex">Small</div>
            <HLButtonGroup class="inline-flex content-start">
              <HLButton id="size-sm-1" size="sm" color="orange">Left</HLButton>
              <HLButton id="size-sm-2" size="sm" color="orange"
                >Middle</HLButton
              >
              <HLButton id="size-sm-3" size="sm" color="orange">Right</HLButton>
            </HLButtonGroup>
          </div>
          <div class="flex gap-4">
            <div class="inline-flex">Extra Small</div>
            <HLButtonGroup class="inline-flex w-[50%] content-start">
              <HLButton id="size-xs-1" size="xs" color="red">Left</HLButton>
              <HLButton id="size-xs-2" size="xs" color="red">Middle</HLButton>
              <HLButton id="size-xs-3" size="xs" color="red">Right</HLButton>
            </HLButtonGroup>
          </div>
          <div class="flex gap-4">
            <div class="inline-flex">Double Extra Small</div>
            <HLButtonGroup class="inline-flex content-start">
              <HLButton id="size-2xs-1" size="2xs" color="blue">Left</HLButton>
              <HLButton id="size-2xs-2" size="2xs" color="blue"
                >Middle</HLButton
              >
              <HLButton id="size-2xs-3" size="2xs" color="blue">Right</HLButton>
            </HLButtonGroup>
          </div>
          <div class="flex gap-4">
            <div class="inline-flex">Triple Extra Small</div>
            <HLButtonGroup class="inline-flex content-start">
              <HLButton id="size-3xs-1" size="3xs" color="blue">Left</HLButton>
              <HLButton id="size-3xs-2" size="3xs" color="blue"
                >Middle</HLButton
              >
              <HLButton id="size-3xs-3" size="3xs" color="blue">Right</HLButton>
            </HLButtonGroup>
          </div>
        </HLSpace>
      </div>

      <!-- With Icons -->
      <div>
        <h2>With Icons</h2>
        <HLButtonGroup>
          <HLButton id="icon-left" color="blue">
            <template #iconLeft>
              <UserPlus01Icon class="w-3" />
            </template>
            Left Icon
          </HLButton>
          <HLButton id="icon-right" color="blue">
            Right Icon
            <template #iconRight>
              <UserPlus01Icon class="w-3" />
            </template>
          </HLButton>
          <HLButton id="icon-only" color="blue">
            <template #icon>
              <UserPlus01Icon class="w-3" />
            </template>
          </HLButton>
        </HLButtonGroup>
      </div>

      <!-- Disabled and Loading States -->
      <div>
        <h2>Disabled and Loading States</h2>
        <HLSpace vertical>
          <HLButtonGroup>
            <HLButton id="disabled-1" color="blue" disabled>Disabled</HLButton>
            <HLButton id="disabled-2" color="green" disabled>Disabled</HLButton>
            <HLButton id="disabled-3" color="red" disabled>Disabled</HLButton>
          </HLButtonGroup>
          <HLButtonGroup>
            <HLButton id="loading-1" color="blue" loading>Loading</HLButton>
            <HLButton id="loading-2" color="green" loading>Loading</HLButton>
            <HLButton id="loading-3" color="red" loading>Loading</HLButton>
          </HLButtonGroup>
        </HLSpace>
      </div>

      <!-- Mixed Variants -->
      <div>
        <h2>Mixed Variants</h2>
        <HLButtonGroup>
          <HLButton id="mixed-primary" color="blue" variant="primary"
            >Primary</HLButton
          >
          <HLButton id="mixed-secondary" color="blue">Secondary</HLButton>
          <HLButton id="mixed-tertiary" color="blue" variant="tertiary"
            >Tertiary</HLButton
          >
          <HLButton id="mixed-ghost" color="blue" variant="ghost"
            >Ghost</HLButton
          >
        </HLButtonGroup>
      </div>
    </HLSpace>
  </div>
</template>
