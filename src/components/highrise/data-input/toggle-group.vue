<script setup lang="ts">
import {
  HLSpace,
  HLToggle,
  HLToggleGroup,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const options = [
  'Whatsapp',
  'SMS',
  'Phone',
  'Linkedin',
  'Instagram',
  'Youtube',
  'Facebook',
]
const allSizes = ['lg', 'md', 'sm', 'xs', '2xs', '3xs']
const active = ref('Whatsapp')

const onClick = (val: any, i: any) => {
  active.value = i
  if (!val) {
    active.value = true
  }
}

const lableClicked = (event: any, i: any) => {
  if (active.value == i) {
    active.value = false
  } else {
    active.value = i
  }
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <div class="flex flex-col gap-4">
          <HLToggleGroup v-for="size in allSizes" :key="size" :size="size">
            <strong>Size: {{ size }}</strong>
            <HLSpace>
              <HLToggle
                v-for="i in options"
                :checkedValue="active"
                :id="'lg-' + i"
                :key="i"
                :value="i"
                :label="i"
                @update:value="val => onClick(val, i)"
                @label:click="eve => lableClicked(eve, i)"
                >{{ i }}</HLToggle
              >
            </HLSpace>
          </HLToggleGroup>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
