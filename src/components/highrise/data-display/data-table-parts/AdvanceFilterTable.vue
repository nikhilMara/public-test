<script setup lang="ts">
import { HLDataTable, HLDataTableWrapper, HLEmpty } from '@gohighlevel/highrise'
import { h, ref } from 'vue'
import FilterDrawer from './FilterDrawer.vue'
import dataJson from './rowsSample.json'

const globalFilter = ref('')
const tableInstance = ref<{ table: any }>()
const data = ref(dataJson) // your data
// Global filter change handler
const handleGlobalFilterChange = (value: string) => {
  globalFilter.value = value
  tableInstance.value?.table?.setGlobalFilter(value)
}

const columns: any = [
  {
    id: 'firstName',
    header: {
      text: 'First Name',
    },
    sortingFn: 'alphanumeric',
    accessorKey: 'firstName',
    size: 100,
    meta: {
      align: 'left',
      headerAlign: 'left',
    },
  },
  {
    id: 'lastName',
    header: {
      text: 'Last Name',
    },
    accessorKey: 'lastName',
    sortingFn: 'alphanumeric',
    size: 100,
    meta: {
      align: 'left',
      headerAlign: 'left',
    },
  },
  {
    id: 'age',
    header: {
      text: 'Age',
    },
    accessorKey: 'age',
    sortingFn: 'alphanumeric',
    size: 100,
    meta: {
      align: 'right',
      headerAlign: 'right',
    },
  },
  {
    id: 'rating',
    accessorKey: 'rating',
    header: {
      text: 'Rating',
    },
    size: 100,
    meta: {
      align: 'center',
      headerAlign: 'start',
    },
  },
  {
    id: 'DOB',
    accessorKey: 'DOB',
    size: 100,
    meta: {
      align: 'right',
    },
    header: {
      text: 'Date',
    },
    cellFormatter: ({ row }: { row: any }) => {
      return h(
        'div',
        { style: { textAlign: 'right' } },
        new Date(row.original.DOB).toLocaleDateString()
      )
    },
  },
]

const handleDataUpdate = (updatedData: any[]) => {
  data.value = updatedData
}
</script>

<template>
  <div style="height: calc(100vh - 62px)">
    <HLDataTableWrapper
      id="data-table-wrapper-default"
      max-width="1000px"
      :show-global-search="true"
      :show-header="true"
      :global-filter="globalFilter"
      responsive-column-width
      @update:global-filter="handleGlobalFilterChange"
    >
      <template #header-content-left>
        <FilterDrawer :dataJson="dataJson" @update:data="handleDataUpdate" />
      </template>
      <template #header-content-right> </template>
      <HLDataTable
        id="data-table-default"
        ref="tableInstance"
        :data="data"
        :columns="columns"
      >
        <template #no-data>
          <HLEmpty
            id="empty-state"
            size="md"
            title="No data available to display. This is a placeholder slot"
            description="This is a placeholder"
            positive-text="Refresh"
            negative-text="Try again"
            icon="info"
          />
        </template>
      </HLDataTable>
    </HLDataTableWrapper>
  </div>
</template>
