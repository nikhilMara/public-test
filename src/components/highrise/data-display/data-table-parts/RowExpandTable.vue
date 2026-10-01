<template>
  <div>
    <HLDataTableWrapper id="full-height-table-wrapper">
      <HLDataTable
        id="full-height-table"
        :columns="modifiedColumns"
        :data="data"
        striped
        ref="tableInstance"
        :expandedRowRenderer="ExpandedRow as any"
      />
      <template #footer>
        <HLPagination
          v-if="tableInstance"
          id="searchable-table-pagination"
          :item-count="tableInstance.table.getFilteredRowModel().rows.length"
          :per-page="tableInstance.table.getState().pagination.pageSize"
          :current-page="
            tableInstance.table.getState().pagination.pageIndex + 1
          "
          :pages-to-display="7"
          :per-page-dropdown-options="paginationOptions"
          size="sm"
          per-page-text="Rows per page"
          @update:per-page="updatePageSize"
          @update:page="
            page => {
              tableInstance.table.setPageIndex(page - 1)
            }
          "
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </template>
    </HLDataTableWrapper>
  </div>
</template>
<script setup lang="ts">
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLDataTable,
  HLDataTableWrapper,
  HLPagination,
} from '@gohighlevel/highrise'
import { h, ref } from 'vue'
import { columns } from './Columns'
import ExpandedRow from './ExpandedRow.vue'
import rows1000 from './rows.json'
const height = ref(600)
const data = ref(
  rows1000.map(row => ({
    ...row,
    expandData: ['This is expanded content for ' + row.firstName],
  }))
)
const modifiedColumns = [
  {
    id: 'expand',
    header: '',
    cellFormatter: ({ row }: { row: any }) => {
      return h(
        HLButton,
        {
          variant: 'ghost',
          size: '3xs',
          id: 'expand-button',
          label: 'Expand',
          onClick: row.getToggleExpandedHandler(),
        },
        { icon: row.getIsExpanded() ? ChevronUpIcon : ChevronDownIcon }
      )
    },
    size: 32,
    meta: {
      align: 'center',
    },
  },
  ...columns,
]
const tableInstance = ref<any>(null)
const paginationOptions = [
  { label: '5', key: 5 },
  { label: '10', key: 10 },
  { label: '20', key: 20 },
  { label: '50', key: 50 },
  { label: '100', key: 100 },
]
const updatePageSize = (size: number) => {
  tableInstance.value.table.setPageSize(size)
}
</script>
