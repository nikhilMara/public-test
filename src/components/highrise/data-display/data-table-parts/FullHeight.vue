<template>
  <div>
    <div class="p-2">
      <HLInputGroup>
        <HLInputNumber
          id="full-height-table-input"
          v-model:value="height"
          size="sm"
        />
        <HLInputGroupLabel id="input-group-basic-label-1">px</HLInputGroupLabel>
      </HLInputGroup>
    </div>
    <div :style="{ height: `${height}px` }">
      <HLDataTableWrapper id="full-height-table-wrapper" fill-parent-height>
        <HLDataTable
          id="full-height-table"
          :columns="columns"
          :data="data"
          striped
          ref="tableInstance"
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
  </div>
</template>
<script setup lang="ts">
import {
  HLDataTable,
  HLDataTableWrapper,
  HLInputGroup,
  HLInputGroupLabel,
  HLInputNumber,
  HLPagination,
} from '@gohighlevel/highrise'
import { ref } from 'vue'
import { columns } from './Columns'
import rows1000 from './rows.json'
const height = ref(600)
const data = ref(rows1000)
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
