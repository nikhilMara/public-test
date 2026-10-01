<script setup lang="ts">
import { UserPlus01Icon } from '@gohighlevel/ghl-icons/24/outline'
import { HLIcon, HLSpace } from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <HLIcon
          id="example-icon"
          size="28"
          color="#26a6a6"
          aria-label="User Plus Icon"
          ><UserPlus01Icon
        /></HLIcon>
      </div>
    </HLSpace>
  </div>
</template>
