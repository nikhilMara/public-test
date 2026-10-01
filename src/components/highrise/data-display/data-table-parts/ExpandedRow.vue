<script lang="ts" setup>
defineProps({
  data: String,
})
</script>
<template>
  <div style="padding: 8px; text-align: center; background-color: var(--gray-300)">
    {{ data }}
  </div>
</template>
