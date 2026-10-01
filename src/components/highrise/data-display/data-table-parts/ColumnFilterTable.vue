<script setup lang="ts">
import {
  BarChartCircle01Icon,
  Star01Icon,
  UserCircleIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  DataTableColumn,
  HLDataTable,
  HLDataTableWrapper,
  HLIcon,
  HLProgress,
  HLSpace,
} from '@gohighlevel/highrise'
import { h, ref } from 'vue'
import NameFilter from './NameFilter.vue'
import data from './rows.json'

const sortedColumn = ref<string | null>(null)
const sortDir = ref<'asc' | 'desc' | null>(null)
const tableInstance = ref<any>(null)
const columns: DataTableColumn[] = [
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
    header: {
      text: 'First Name',
      icon: h(UserCircleIcon),
      filterComponent: h(NameFilter, {
        onSetFilter: setFilter,
        onClearFilter: clearFilter,
        onSetSort: setSort,
        sortedColumn,
        sortDir,
        id: 'first-name-filter',
        onResetSort: resetSort,
      }),
    },
    sortingFn: 'alphanumeric',
    accessorKey: 'firstName',
    size: 150,
    meta: {
      align: 'start',
    },
  },
  {
    id: 'age',
    header: {
      text: 'Age',
      icon: h(BarChartCircle01Icon),
      //   filterComponent: h(AgeFilter, {
      //     onSetFilter: setFilter,
      //     onClearFilter: clearFilter,
      //     onSetSort: setSort,
      //     sortedColumn,
      //     sortDir,
      //     id: 'age-filter',
      //     onResetSort: resetSort,
      //   }),
    },
    accessorKey: 'age',
    sortingFn: 'alphanumeric',
    meta: {
      align: 'end',
      headerAlign: 'end',
    },
  },
  {
    id: 'progress',
    header: 'Progress',
    accessorKey: 'progress',
    sortingFn: 'alphanumeric',
    size: 250,
    cellFormatter: ({ row }: any) => {
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
    cellFormatter: ({ row }: any) => {
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
      align: 'end',
      headerAlign: 'end',
    },
    header: 'DOB',
  },
]

function setSort(id: string, dir: boolean) {
  sortedColumn.value = id
  sortDir.value = dir ? 'desc' : 'asc'
  tableInstance.value?.table.setSorting([{ id, desc: dir }])
}
function resetSort() {
  sortedColumn.value = null
  sortDir.value = null
  tableInstance.value?.table.setSorting([])
}
function setFilter(id: string, filterFn: any, value: any) {
  const column = tableInstance.value?.table.getColumn(id)
  column.columnDef.filterFn = filterFn
  column.setFilterValue(value)
}
function clearFilter(id: string) {
  const column = tableInstance.value?.table.getColumn(id)
  column.setFilterValue(undefined)
}
function updateColumnClicked(columnId: string) {
  console.log(columnId)
  if (!sortDir.value) {
    setSort(columnId, false)
    return
  }
  if (sortDir.value == 'asc') {
    setSort(columnId, true)
  } else {
    resetSort()
  }
}
</script>
<template>
  <HLDataTableWrapper id="column-filter-table-wrapper">
    <HLDataTable
      ref="tableInstance"
      id="column-filter-table"
      :columns="columns"
      :data="data"
      @update:column-clicked="updateColumnClicked"
    />
  </HLDataTableWrapper>
</template>
