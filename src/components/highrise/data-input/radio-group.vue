<script setup lang="ts">
import {
  HLRadio,
  HLRadioGroup,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const value = ref('option1')
const disabledValue = ref('option1')
const sizesValue = ref('option1')
const options = [
  'Whatsapp',
  'SMS',
  'Phone',
  'Linkedin',
  'Instagram',
  'Youtube',
  'Facebook',
]

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <div style="display: flex; flex-direction: column; gap: 2rem">
          <!-- LG Size -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">LG Size</div>
            <HLRadioGroup id="radio-group-lg" v-model:value="value">
              <HLSpace id="radio-space-lg" size="lg">
                <HLRadio id="radio-lg-1" value="lg1">Option 1</HLRadio>
                <HLRadio id="radio-lg-2" value="lg2">Option 2</HLRadio>
                <HLRadio id="radio-lg-3" value="lg3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- MD Size -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">MD Size</div>
            <HLRadioGroup id="radio-group-md" v-model:value="value">
              <HLSpace id="radio-space-md" size="md">
                <HLRadio id="radio-md-1" value="md1">Option 1</HLRadio>
                <HLRadio id="radio-md-2" value="md2">Option 2</HLRadio>
                <HLRadio id="radio-md-3" value="md3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- SM Size -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">SM Size</div>
            <HLRadioGroup id="radio-group-sm" v-model:value="value">
              <HLSpace id="radio-space-sm" size="md">
                <HLRadio id="radio-sm-1" value="sm1">Option 1</HLRadio>
                <HLRadio id="radio-sm-2" value="sm2">Option 2</HLRadio>
                <HLRadio id="radio-sm-3" value="sm3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- XS Size -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">XS Size</div>
            <HLRadioGroup id="radio-group-xs" v-model:value="value" size="xs">
              <HLSpace id="radio-space-xs" size="md">
                <HLRadio id="radio-xs-1" value="xs1">Option 1</HLRadio>
                <HLRadio id="radio-xs-2" value="xs2">Option 2</HLRadio>
                <HLRadio id="radio-xs-3" value="xs3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- 2XS Size -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">2XS Size</div>
            <HLRadioGroup id="radio-group-2xs" v-model:value="value" size="2xs">
              <HLSpace id="radio-space-2xs" size="md">
                <HLRadio id="radio-2xs-1" value="2xs1">Option 1</HLRadio>
                <HLRadio id="radio-2xs-2" value="2xs2">Option 2</HLRadio>
                <HLRadio id="radio-2xs-3" value="2xs3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- 3XS Size -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">3XS Size</div>
            <HLRadioGroup id="radio-group-3xs" v-model:value="value" size="3xs">
              <HLSpace id="radio-space-3xs" size="md">
                <HLRadio id="radio-3xs-1" value="3xs1">Option 1</HLRadio>
                <HLRadio id="radio-3xs-2" value="3xs2">Option 2</HLRadio>
                <HLRadio id="radio-3xs-3" value="3xs3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>
        </div>
      </div>

      <!-- Vertical Layout -->
      <div>
        <h2>Vertical Layout</h2>
        <div style="display: flex; flex-direction: column; gap: 2rem">
          <!-- LG Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">LG Size</div>
            <HLRadioGroup id="radio-group-lg-vert" v-model:value="value">
              <HLSpace id="radio-space-lg-vert" size="lg" vertical>
                <HLRadio id="radio-lg-vert-1" value="lg1">Option 1</HLRadio>
                <HLRadio id="radio-lg-vert-2" value="lg2">Option 2</HLRadio>
                <HLRadio id="radio-lg-vert-3" value="lg3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- MD Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">MD Size</div>
            <HLRadioGroup id="radio-group-md-vert" v-model:value="value">
              <HLSpace id="radio-space-md-vert" size="md" vertical>
                <HLRadio id="radio-md-vert-1" value="md1">Option 1</HLRadio>
                <HLRadio id="radio-md-vert-2" value="md2">Option 2</HLRadio>
                <HLRadio id="radio-md-vert-3" value="md3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- SM Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">SM Size</div>
            <HLRadioGroup id="radio-group-sm-vert" v-model:value="value">
              <HLSpace id="radio-space-sm-vert" size="md" vertical>
                <HLRadio id="radio-sm-vert-1" value="sm1">Option 1</HLRadio>
                <HLRadio id="radio-sm-vert-2" value="sm2">Option 2</HLRadio>
                <HLRadio id="radio-sm-vert-3" value="sm3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- XS Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">XS Size</div>
            <HLRadioGroup
              id="radio-group-xs-vert"
              v-model:value="value"
              size="xs"
            >
              <HLSpace id="radio-space-xs-vert" size="md" vertical>
                <HLRadio id="radio-xs-vert-1" value="xs1">Option 1</HLRadio>
                <HLRadio id="radio-xs-vert-2" value="xs2">Option 2</HLRadio>
                <HLRadio id="radio-xs-vert-3" value="xs3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- 2XS Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">2XS Size</div>
            <HLRadioGroup
              id="radio-group-2xs-vert"
              v-model:value="value"
              size="2xs"
            >
              <HLSpace id="radio-space-2xs-vert" size="md" vertical>
                <HLRadio id="radio-2xs-vert-1" value="2xs1">Option 1</HLRadio>
                <HLRadio id="radio-2xs-vert-2" value="2xs2">Option 2</HLRadio>
                <HLRadio id="radio-2xs-vert-3" value="2xs3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>

          <!-- 3XS Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0; font-weight: 600">3XS Size</div>
            <HLRadioGroup
              id="radio-group-3xs-vert"
              v-model:value="value"
              size="3xs"
            >
              <HLSpace id="radio-space-3xs-vert" vertical>
                <HLRadio id="radio-3xs-vert-1" value="3xs1">Option 1</HLRadio>
                <HLRadio id="radio-3xs-vert-2" value="3xs2">Option 2</HLRadio>
                <HLRadio id="radio-3xs-vert-3" value="3xs3">Option 3</HLRadio>
              </HLSpace>
            </HLRadioGroup>
          </div>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
