<script setup lang="ts">
import { HLBuilderSpace, HLSpace } from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// Basic
const marginValues = ref({
  top: '20px',
  bottom: '20px',
  right: '-100px',
  left: 'auto',
})
const paddingValues = ref({
  top: '2rem',
  bottom: '20px',
  right: '20em',
  left: '20%',
})

// Unit
const marginValuesUnit = ref({
  top: '20px',
  bottom: '20px',
  right: '-100px',
  left: 'auto',
})
const paddingValuesUnit = ref({
  top: '2rem',
  bottom: '20px',
  right: '20em',
  left: '20%',
})

// Specific
const marginValuesSpec = ref({
  top: '20px',
  bottom: '20px',
  right: '-100px',
  left: 'auto',
})
const paddingValuesSpec = ref({
  top: '2rem',
  bottom: '20px',
  right: '20em',
  left: '20%',
})

// Invalid Data
const invalidMarginValues = ref({
  top: '👾',
  bottom: '👾',
  right: '👾',
  left: '👾',
})
const invalidPaddingValues = ref({
  top: '🚀',
  bottom: '0px',
  right: '🚀',
  left: '🚀',
})
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic -->
      <div>
        <h2>Basic</h2>
        <HLBuilderSpace
          :margin-values="marginValues"
          :padding-values="paddingValues"
        />
      </div>

      <!-- Invalid Data -->
      <div>
        <h2>Invalid Data</h2>
        <HLBuilderSpace
          :margin-values="invalidMarginValues"
          :padding-values="invalidPaddingValues"
        />
      </div>

      <!-- Unit Customization -->
      <div>
        <h2>Unit Customization</h2>
        <HLBuilderSpace
          :margin-values="marginValuesUnit"
          :padding-values="paddingValuesUnit"
          :margin-units-config="(['rem', 'em'] as any)"
        />
      </div>

      <!-- Only Specific Directions -->
      <div>
        <h2>Only Specific Directions</h2>
        <HLBuilderSpace
          :margin-values="marginValuesSpec"
          :padding-values="paddingValuesSpec"
          :allowed-margin-directions="['top', 'bottom']"
          :allowed-padding-directions="['right', 'left']"
        />
      </div>
    </HLSpace>
  </div>
</template>
