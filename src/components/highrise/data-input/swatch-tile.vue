<script setup lang="ts">
import { HLSpace, HLSwatchTile } from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Square Shape (Default) -->
      <div>
        <h2>Square Shape (Default)</h2>
        <HLSpace style="margin-top: 0.5rem; align-items: center">
          <HLSwatchTile value="#D9D6FE" size="3xs" shape="square" />
          <HLSwatchTile value="#D9D6FE" size="2xs" shape="square" />
          <HLSwatchTile value="#D9D6FE" size="xs" shape="square" />
          <HLSwatchTile value="#D9D6FE" size="sm" shape="square" />
          <HLSwatchTile value="#D9D6FE" size="md" shape="square" />
          <HLSwatchTile value="#D9D6FE" size="lg" shape="square" />
        </HLSpace>
      </div>

      <!-- Round Shape -->
      <div>
        <h2>Round Shape</h2>
        <HLSpace style="margin-top: 0.5rem; align-items: center">
          <HLSwatchTile value="#D9D6FE" size="3xs" shape="circle" />
          <HLSwatchTile value="#D9D6FE" size="2xs" shape="circle" />
          <HLSwatchTile value="#D9D6FE" size="xs" shape="circle" />
          <HLSwatchTile value="#D9D6FE" size="sm" shape="circle" />
          <HLSwatchTile value="#D9D6FE" size="md" shape="circle" />
          <HLSwatchTile value="#D9D6FE" size="lg" shape="circle" />
        </HLSpace>
      </div>

      <!-- Rectangle Shape -->
      <div>
        <h2>Rectangle Shape</h2>
        <HLSpace style="margin-top: 0.5rem; align-items: center">
          <HLSwatchTile value="#D9D6FE" size="3xs" shape="rectangle" />
          <HLSwatchTile value="#D9D6FE" size="2xs" shape="rectangle" />
          <HLSwatchTile value="#D9D6FE" size="xs" shape="rectangle" />
          <HLSwatchTile value="#D9D6FE" size="sm" shape="rectangle" />
          <HLSwatchTile value="#D9D6FE" size="md" shape="rectangle" />
          <HLSwatchTile value="#D9D6FE" size="lg" shape="rectangle" />
        </HLSpace>
      </div>

      <!-- Different Colors and Sizes -->
      <div>
        <h2>Different Colors and Sizes</h2>
        <HLSpace style="margin-top: 0.5rem; align-items: center">
          <HLSwatchTile value="#FF5733" size="3xs" />
          <HLSwatchTile value="#33FF57" size="2xs" />
          <HLSwatchTile value="#3357FF" size="xs" shape="circle" />
          <HLSwatchTile value="#FF5733" size="sm" shape="circle" />
          <HLSwatchTile value="#33FF57" size="md" shape="rectangle" />
          <HLSwatchTile value="#3357FF" size="lg" shape="rectangle" />
        </HLSpace>
      </div>

      <!-- Interactive States -->
      <div>
        <h2>Interactive States</h2>
        <HLSpace style="margin-top: 0.5rem; align-items: center">
          <HLSwatchTile value="#D9D6FE" size="md" />
          <HLSwatchTile value="#D9D6FE" size="md" tabindex="0" />
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
