<script setup lang="ts">
import { inject } from 'vue'
import AlertContent from './alert-content.vue'

const direction = inject<string>('dir')
</script>

<template>
  <div>
    <AlertContent />
  </div>
</template>
