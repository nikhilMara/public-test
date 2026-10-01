<script setup lang="ts">
import {
  HLCheckbox,
  HLCheckboxGroup,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const value = ref(['option1'])
const disabledValue = ref(['option1'])
const sizesValue = ref(['lg1', 'md1', 'sm1', 'xs1', '2xs1', '3xs1'])

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <HLCheckboxGroup id="example-group" v-model:value="value">
          <HLSpace>
            <HLCheckbox id="option1" value="option1">Option 1</HLCheckbox>
            <HLCheckbox id="option2" value="option2">Option 2</HLCheckbox>
            <HLCheckbox id="option3" value="option3">Option 3</HLCheckbox>
          </HLSpace>
        </HLCheckboxGroup>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <!-- Large Size -->
          <div>
            <div style="margin: 0.5rem 0">Large (lg):</div>
            <HLCheckboxGroup
              id="lg-size-group"
              v-model:value="sizesValue"
              size="lg"
            >
              <HLSpace>
                <HLCheckbox id="lg1" value="lg1">Option 1</HLCheckbox>
                <HLCheckbox id="lg2" value="lg2">Option 2</HLCheckbox>
                <HLCheckbox id="lg3" value="lg3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- Medium Size -->
          <div>
            <div style="margin: 0.5rem 0">Medium (md):</div>
            <HLCheckboxGroup
              id="md-size-group"
              v-model:value="sizesValue"
              size="md"
            >
              <HLSpace>
                <HLCheckbox id="md1" value="md1">Option 1</HLCheckbox>
                <HLCheckbox id="md2" value="md2">Option 2</HLCheckbox>
                <HLCheckbox id="md3" value="md3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- Small Size -->
          <div>
            <div style="margin: 0.5rem 0">Small (sm):</div>
            <HLCheckboxGroup
              id="sm-size-group"
              v-model:value="sizesValue"
              size="sm"
            >
              <HLSpace>
                <HLCheckbox id="sm1" value="sm1">Option 1</HLCheckbox>
                <HLCheckbox id="sm2" value="sm2">Option 2</HLCheckbox>
                <HLCheckbox id="sm3" value="sm3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- Extra Small Size -->
          <div>
            <div style="margin: 0.5rem 0">Extra Small (xs):</div>
            <HLCheckboxGroup
              id="xs-size-group"
              v-model:value="sizesValue"
              size="xs"
            >
              <HLSpace>
                <HLCheckbox id="xs1" value="xs1">Option 1</HLCheckbox>
                <HLCheckbox id="xs2" value="xs2">Option 2</HLCheckbox>
                <HLCheckbox id="xs3" value="xs3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- 2x Small Size -->
          <div>
            <div style="margin: 0.5rem 0">2x Small (2xs):</div>
            <HLCheckboxGroup
              id="2xs-size-group"
              v-model:value="sizesValue"
              size="2xs"
            >
              <HLSpace>
                <HLCheckbox id="2xs1" value="2xs1">Option 1</HLCheckbox>
                <HLCheckbox id="2xs2" value="2xs2">Option 2</HLCheckbox>
                <HLCheckbox id="2xs3" value="2xs3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- 3x Small Size -->
          <div>
            <div style="margin: 0.5rem 0">3x Small (3xs):</div>
            <HLCheckboxGroup
              id="3xs-size-group"
              v-model:value="sizesValue"
              size="3xs"
            >
              <HLSpace>
                <HLCheckbox id="3xs1" value="3xs1">Option 1</HLCheckbox>
                <HLCheckbox id="3xs2" value="3xs2">Option 2</HLCheckbox>
                <HLCheckbox id="3xs3" value="3xs3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>
        </div>
      </div>

      <!-- Vertical Layout -->
      <div>
        <h2>Vertical Layout</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <!-- Large Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0">Large (lg):</div>
            <HLCheckboxGroup
              id="lg-vertical-group"
              v-model:value="sizesValue"
              size="lg"
            >
              <HLSpace vertical>
                <HLCheckbox id="lg-vert1" value="lg1">Option 1</HLCheckbox>
                <HLCheckbox id="lg-vert2" value="lg2">Option 2</HLCheckbox>
                <HLCheckbox id="lg-vert3" value="lg3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- Medium Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0">Medium (md):</div>
            <HLCheckboxGroup
              id="md-vertical-group"
              v-model:value="sizesValue"
              size="md"
            >
              <HLSpace vertical>
                <HLCheckbox id="md-vert1" value="md1">Option 1</HLCheckbox>
                <HLCheckbox id="md-vert2" value="md2">Option 2</HLCheckbox>
                <HLCheckbox id="md-vert3" value="md3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- Small Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0">Small (sm):</div>
            <HLCheckboxGroup
              id="sm-vertical-group"
              v-model:value="sizesValue"
              size="sm"
            >
              <HLSpace vertical>
                <HLCheckbox id="sm-vert1" value="sm1">Option 1</HLCheckbox>
                <HLCheckbox id="sm-vert2" value="sm2">Option 2</HLCheckbox>
                <HLCheckbox id="sm-vert3" value="sm3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- Extra Small Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0">Extra Small (xs):</div>
            <HLCheckboxGroup
              id="xs-vertical-group"
              v-model:value="sizesValue"
              size="xs"
            >
              <HLSpace vertical>
                <HLCheckbox id="xs-vert1" value="xs1">Option 1</HLCheckbox>
                <HLCheckbox id="xs-vert2" value="xs2">Option 2</HLCheckbox>
                <HLCheckbox id="xs-vert3" value="xs3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- 2x Small Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0">2x Small (2xs):</div>
            <HLCheckboxGroup
              id="2xs-vertical-group"
              v-model:value="sizesValue"
              size="2xs"
            >
              <HLSpace vertical>
                <HLCheckbox id="2xs-vert1" value="2xs1">Option 1</HLCheckbox>
                <HLCheckbox id="2xs-vert2" value="2xs2">Option 2</HLCheckbox>
                <HLCheckbox id="2xs-vert3" value="2xs3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>

          <!-- 3x Small Size Vertical -->
          <div>
            <div style="margin: 0.5rem 0">3x Small (3xs):</div>
            <HLCheckboxGroup
              id="3xs-vertical-group"
              v-model:value="sizesValue"
              size="3xs"
            >
              <HLSpace vertical>
                <HLCheckbox id="3xs-vert1" value="3xs1">Option 1</HLCheckbox>
                <HLCheckbox id="3xs-vert2" value="3xs2">Option 2</HLCheckbox>
                <HLCheckbox id="3xs-vert3" value="3xs3">Option 3</HLCheckbox>
              </HLSpace>
            </HLCheckboxGroup>
          </div>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
