<script setup lang="ts">
import { HLDivider, HLSpace } from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Simple Divider -->
      <div>
        <h2>Simple Divider</h2>
        oops
        <HLDivider></HLDivider>
        oops
      </div>

      <!-- With Text -->
      <div>
        <h2>With Text</h2>
        <HLDivider> Center </HLDivider>
        <HLDivider titlePlacement="left"> Left </HLDivider>
        <HLDivider titlePlacement="right"> Right </HLDivider>
      </div>

      <!-- Margins -->
      <div>
        <h2>Margins</h2>
        <p style="justify-self: center; margin: 0">
          oops oops oops oops oops oops oops oops oops oops oops oops oops oops
          oops oops
        </p>
        <HLDivider> With Margins </HLDivider>
        <p style="justify-self: center; margin: 0">
          oops oops oops oops oops oops oops oops oops oops oops oops oops oops
          oops oops
        </p>
        <HLDivider :marginTop="false"> No Top Margin </HLDivider>
        <p style="justify-self: center; margin: 0">
          oops oops oops oops oops oops oops oops oops oops oops oops oops oops
          oops oops
        </p>
        <HLDivider :marginBottom="false"> No Bottom Margin </HLDivider>
        <p style="justify-self: center; margin: 0">
          oops oops oops oops oops oops oops oops oops oops oops oops oops oops
          oops oops
        </p>
      </div>

      <!-- Vertical Divider -->
      <div>
        <h2>Vertical Divider</h2>
        <div style="display: flex; align-items: center; height: 200px">
          Text
          <HLDivider vertical style="height: 150px; margin: 0 8px" />
          Text
        </div>
      </div>

      <!-- Dashed Divider -->
      <div>
        <h2>Dashed Divider</h2>
        Text
        <HLDivider dashed> </HLDivider>
        Text
      </div>
    </HLSpace>
  </div>
</template>
