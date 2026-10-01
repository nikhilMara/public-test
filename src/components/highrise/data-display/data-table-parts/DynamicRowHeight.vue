<script setup lang="ts">
import { Star01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLDataTable,
  HLDataTableWrapper,
  HLIcon,
  HLPagination,
  HLProgress,
  HLSpace
} from '@gohighlevel/highrise'
import { h, onMounted, ref } from 'vue'
import rows1000 from './rows.json'

const tableInstance = ref<any>(null)
const data = ref(rows1000)
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
    cellFormatter: ({ row }: { row: any }) => {
      const height = row.original.height
      return h(
        'div',
        {
          style: {
            alignContent: 'center',
            height,
          },
        },
        height
      )
    },
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
const paginationOptions = [
  {
    key: 20,
    label: '20',
  },
  {
    key: 50,
    label: '50',
  },
  {
    key: 100,
    label: '100',
  },
  {
    key: 200,
    label: '200',
  },
  {
    key: 300,
    label: '300',
  },
]
const updatePageSize = (value: number) => {
  tableInstance.value.table?.setPageSize(value)
}

const table = ref<any>(null)
const rowNum = ref(13)
const scrollTo = ()=> {
  tableInstance.value.rowVirtualizer.scrollToIndex(rowNum.value,{behavior:'smooth',align:'center'})
}
onMounted(() => {
  table.value = tableInstance.value.table
})
</script>
<template>
  <HLDataTableWrapper id="data-table-wrapper-default">
    <template #footer>
      <div class="flex justify-between items-center">
        <HLPagination
          v-if="table"
          id="searchable-table-pagination"
          :item-count="table.getFilteredRowModel().rows.length"
          :per-page="table.getState().pagination.pageSize"
          :current-page="table.getState().pagination.pageIndex + 1"
          :pages-to-display="7"
          :per-page-dropdown-options="paginationOptions"
          size="sm"
          per-page-text="Rows per page"
          @update:per-page="updatePageSize"
          @update:page="
            page => {
              table.setPageIndex(page - 1)
            }
          "
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </div>
    </template>
    <HLDataTable
      id="data-table-default"
      :columns="columns"
      :data="data"
      ref="tableInstance"
      row-height="auto"
      max-height="500px"
      striped
      horizontal-borders
    >
    </HLDataTable>
  </HLDataTableWrapper>
</template>
