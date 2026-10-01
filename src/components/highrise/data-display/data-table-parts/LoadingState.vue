<script setup lang="ts">
import { Star01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLDataTable,
  HLDataTableWrapper,
  HLIcon,
  HLInputNumber,
  HLProgress,
  HLSpace,
  HLToggle,
} from '@gohighlevel/highrise'
import { h, ref } from 'vue'
import rows1000 from './rows.json'
const loadingState = ref(true)
const skeletonRows = ref(4)
const columns: any[] = [
  {
    id: 'id',
    header: 'ID',
    accessorKey: 'id',
    size: 100,
    meta: {
      headerAlign: 'start',
    },
  },
  {
    id: 'firstName',
    header: 'First Name',
    sortingFn: 'alphanumeric',
    accessorKey: 'firstName',
    size: 150,
    meta: {
      align: 'left',
      headerAlign: 'left',
    },
  },
  {
    id: 'age',
    header: 'Age',
    accessorKey: 'age',
    sortingFn: 'alphanumeric',
    meta: {
      align: 'right',
      headerAlign: 'right',
    },
  },
  {
    id: 'progress',
    header: 'Progress',
    accessorKey: 'progress',
    sortingFn: 'alphanumeric',
    size: 250,
    cellFormatter: ({ row }: { row: any }) => {
      return h(HLProgress, {
        id: 'progress',
        percentage: row.original.progress,
        type: 'line',
        dashboardSize: 'sm',
        valuePlacement: 'outside',
      })
    },
    meta: {
      headerAlign: 'center',
    },
  },
  {
    id: 'rating',
    accessorKey: 'rating',
    size: 200,
    header: 'Rating',
    meta: {
      headerAlign: 'start',
    },
    cellFormatter: ({ row }: { row: any }) => {
      const rating = row.original.rating
      const stars = []
      for (let i = 0; i < 5; i++) {
        const fill = i < rating ? 'var(--primary-600)' : 'var(--gray-400)'
        stars.push(h(HLIcon, { size: 16, color: fill }, Star01Icon as any))
      }
      return h(HLSpace, { align: 'center', wrapItem: false, size: 4 }, stars)
    },
  },
  {
    id: 'DOB',
    accessorKey: 'DOB',
    meta: {
      align: 'right',
    },
    header: 'DOB',
  },
]
const data = ref(rows1000)
</script>
<template>
  <div>
    <div>Table with Loading State</div>
    <span class="flex items-center gap-2 p-2">
      <HLToggle id="loading-state-toggle" v-model:value="loadingState" /> Toggle
      me to see loading state with
      <HLInputNumber
        id="skeleton-rows-input"
        v-model:value="skeletonRows"
        :min="1"
        :max="100"
        :step="1"
      />
      skeleton rows</span
    >
    <HLDataTableWrapper id="loading-state-table-wrapper" max-width="100%">
      <HLDataTable
        id="loading-state-table"
        :columns="columns"
        :data="data"
        :loading="{ status: loadingState, skeletonRows: skeletonRows }"
      >
        <template #no-data> NO DATA </template>
      </HLDataTable>
    </HLDataTableWrapper>
  </div>
</template>
