<script lang="ts" setup>
import { defineComponent } from 'vue'
import { Props } from './types'

defineComponent({
  name: 'HButton'
})

defineProps<Props>()
</script>
<template>
  <button class="btn" :class="`btn--${type}`">this is a button</button>
</template>
<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn--primary {
  background-color: #007bff;
  color: white;
}
.btn--secondary {
  background-color: #6c757d;
  color: white;
}
</style>
