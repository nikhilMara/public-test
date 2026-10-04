<script setup lang="ts">
import {
  DataTableColumn,
  HLDataTable,
  HLDataTableWrapper,
  HLInputNumber,
} from '@gohighlevel/highrise'
import { ref } from 'vue'

// Sample data for demonstration
const commonData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
const basicColumns: DataTableColumn[] = [
  {
    id: 'age',
    header: 'Fix',
    accessorKey: 'age',
    sortingFn: 'alphanumeric',
    size: 0,
    minSize: 40,
    maxSize: 40,
    meta: {
      align: 'start',
      headerAlign: 'start',
    },
  },
  {
    id: 'firstName',
    header: 'Name',
    sortingFn: 'alphanumeric',
    accessorKey: 'firstName',
    size: 20,
    minSize: 60,
    maxSize: 140,
    meta: {
      align: 'start',
      headerAlign: 'start',
    },
  },
  {
    id: 'rating',
    accessorKey: 'rating',
    header: 'Rating',
    size: 30,
    minSize: 90,
    maxSize: 210,
    meta: {
      align: 'center',
      headerAlign: 'center',
    },
  },
  {
    id: 'DOB',
    accessorKey: 'DOB',
    size: 50,
    minSize: 150,
    maxSize: 350,
    meta: {
      align: 'end',
      headerAlign: 'end',
    },
    header: 'DOB',
  },
]

const tableWidth = ref(360)
</script>

<template>
  max is 758px, min is 362px
  <HLInputNumber v-model:value="tableWidth" id="table-width" />
  <div
    class="flex flex-col gap-4 p-2"
    :style="{ width: `${tableWidth}px` }"
  >
    <HLDataTableWrapper
      id="basic-table-wrapper"
      max-width="740px"
      :responsive-column-width="true"
    >
      <HLDataTable
        id="basic-table"
        :columns="basicColumns"
        :data="commonData"
        :horizontal-borders="true"
        :vertical-borders="true"
        max-height="900px"
      />
    </HLDataTableWrapper>
  </div>
</template>
