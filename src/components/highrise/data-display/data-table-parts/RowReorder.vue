<script setup lang="ts">
import {
  HLDataTable,
  HLDataTableWrapper,
  HLInputNumber,
} from '@gohighlevel/highrise'
import { ref } from 'vue'
import { columns } from './Columns'
import data from './rows.json'
const tableInstance = ref<any>(null)
const restriction = ref(2)
</script>
<template>
  <div>
    <div class="p-2">
      <HLInputNumber v-model:value="restriction" id="restriction-input" />
    </div>
    <HLDataTableWrapper id="row-reorder-table-wrapper">
      <HLDataTable
        ref="tableInstance"
        id="row-reorder-table"
        :columns="columns"
        :data="data"
        row-reordering
        :restrict-row-reordering-upto="restriction"
      />
    </HLDataTableWrapper>
  </div>
</template>
