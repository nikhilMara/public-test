<script setup lang="ts">
import { Star01Icon, User01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  DataTableColumn,
  HLDataTable,
  HLDataTableWrapper,
  HLIcon,
  HLProgress,
  HLSpace,
} from '@gohighlevel/highrise'
import { h, inject } from 'vue'
import AdvanceFilterTable from './data-table-parts/AdvanceFilterTable.vue'
import ColumnFilterTable from './data-table-parts/ColumnFilterTable.vue'
import DynamicRowHeight from './data-table-parts/DynamicRowHeight.vue'
import FullHeight from './data-table-parts/FullHeight.vue'
import MultiRowCustomSlot from './data-table-parts/MultiRowCustomSlot.vue'
import MultiRowExpandTable from './data-table-parts/MultiRowExpandTable.vue'
import ResponsiveWidthTable from './data-table-parts/ResponsiveWidthTable.vue'
import RowExpandTable from './data-table-parts/RowExpandTable.vue'
import RowReorder from './data-table-parts/RowReorder.vue'
import ScrollToIndex from './data-table-parts/ScrollToIndex.vue'
import TableWithCRUD from './data-table-parts/TableWithCRUD.vue'

interface DataRow {
  id: string
  firstName: string
  lastName: string
  age: number
  progress: number
  rating: number
  status: string
  department: string
  salary: number
  DOB: string
}

// Sample data for demonstration
const commonData: DataRow[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    progress: 50,
    rating: 4,
    status: 'Active',
    department: 'Engineering',
    salary: 95000,
    DOB: '2014-01-01',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    progress: 75,
    rating: 3,
    status: 'Inactive',
    department: 'Marketing',
    salary: 75000,
    DOB: '2024-01-01',
  },
  {
    id: '3',
    firstName: 'Jim',
    lastName: 'Beam',
    age: 40,
    progress: 25,
    rating: 2,
    status: 'Active',
    department: 'Sales',
    salary: 85000,
    DOB: '2024-01-01',
  },
  {
    id: '4',
    firstName: 'Alice',
    lastName: 'Cooper',
    age: 35,
    progress: 90,
    rating: 5,
    status: 'Active',
    department: 'Engineering',
    salary: 120000,
    DOB: '1989-02-15',
  },
]

// Basic columns
const basicColumns: DataTableColumn<DataRow>[] = [
  {
    id: 'id',
    header: 'ID',
    accessorKey: 'id',
    size: 80,
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
      align: 'start',
      headerAlign: 'start',
    },
  },
  {
    id: 'age',
    header: 'Age',
    accessorKey: 'age',
    sortingFn: 'alphanumeric',
    size: 80,
    meta: {
      align: 'end',
      headerAlign: 'end',
    },
  },
  {
    id: 'progress',
    header: { text: 'Progress', icon: h(User01Icon) },
    accessorKey: 'progress',
    sortingFn: 'alphanumeric',
    size: 300,
    cellFormatter: row => {
      return h(HLProgress, {
        id: `progress-${row.row.original.id}`,
        percentage: row.row.original.progress,
        type: 'line',
        dashboardSize: 'sm',
        valuePlacement: 'outside',
      })
    },
    meta: {
      align: 'center',
      headerAlign: 'start',
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
    cellFormatter: ({ row }) => {
      const rating = row.original.rating
      const stars: any[] = []
      for (let i = 0; i < 5; i++) {
        const fill = i < rating ? 'var(--primary-600)' : 'var(--gray-400)'
        stars.push(h(HLIcon, { size: '16', color: fill }, Star01Icon as any))
      }
      return h(
        HLSpace,
        { align: 'center', wrapItem: false, size: 4 },
        { default: () => stars }
      )
    },
  },
  {
    id: 'DOB',
    accessorKey: 'DOB',
    meta: {
      align: 'end',
      headerAlign: 'end',
    },
    size: 200,
    header: 'DOB',
  },
]

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <h2>Basic Table</h2>
    <HLDataTableWrapper id="basic-table-wrapper">
      <HLDataTable
        id="basic-table"
        :columns="basicColumns"
        :data="commonData"
      />
    </HLDataTableWrapper>
    <h2>Responsive Width Table</h2>
    <ResponsiveWidthTable />
    <hr />
    <h2>Column Filter Table</h2>
    <ColumnFilterTable />
    <hr />
    <h2>Dynamic Row Height</h2>
    <DynamicRowHeight />
    <h2>Scroll to row</h2>
    <ScrollToIndex />
    <hr />
    <h2>Full Height Table</h2>
    <FullHeight />
    <hr />
    <h2>Row Expand Table</h2>
    <RowExpandTable />
    <hr />
    <h2>Row Reorder Table</h2>
    <RowReorder />
    <hr />
    <h2>Multi Row Expand Table</h2>
    <MultiRowExpandTable />
    <hr />
    <h2>Multi Row Custom Slot Table</h2>
    <MultiRowCustomSlot />
    <hr />
    <h2>Table With CRUD</h2>
    <TableWithCRUD />
    <h2>Advance Filter Table</h2>
    <AdvanceFilterTable />
  </div>
</template>
