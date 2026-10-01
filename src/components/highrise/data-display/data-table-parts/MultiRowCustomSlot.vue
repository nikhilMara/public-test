<script setup lang="ts">
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  DataTableColumn,
  HLDataTable,
  HLDataTableWrapper,
  HLIcon,
  HLText,
} from '@gohighlevel/highrise'
import { h, ref } from 'vue'

interface Person {
  id: number
  firstName: string
  lastName: string
  age: number
  progress: number
  rating: number
  DOB: string
  isTableRow?: boolean
  expandData?: Person[]
}
const columns: DataTableColumn<Person>[] = [
  {
    id: 'lastName',
    header: 'Last Name',
    accessorKey: 'lastName',
    size: 250,
    meta: {
      align: 'start',
      headerAlign: 'start',
    },
    cellFormatter: ({ row }) => {
      return h('div', { class: 'flex items-center' }, [
        h('div', { style: { paddingLeft: `${row.depth * 32}px` } }, undefined),
        row.originalSubRows &&
          h(
            'div',
            { style: { paddingRight: `12px` } },
            h(
              HLIcon,
              {
                id: 'expand-button',
                size: '20',
                class: 'cursor-pointer',
                onClick: () => {
                  row.getToggleExpandedHandler()()
                },
              },
              row.getIsExpanded() ? h(ChevronUpIcon) : h(ChevronDownIcon)
            )
          ),
        h(
          HLText,
          {
            size: 'lg',
            weight: 'medium',
          },
          row.original.lastName
        ),
      ])
    },
  },
  {
    id: 'id',
    header: 'ID',
    accessorKey: 'id',
    size: 100,
    cellFormatter: ({ row }) => {
      return row.original.id
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
    },
  },
]

const rowExpandRenderer = (row: any) => {
  return h(
    'div',
    { class: 'bg-red-200 w-full', style: { height: '100px', padding: '10px' } },
    row.data.firstName
  )
}

const data = ref<Person[]>([
  {
    id: 1,
    firstName: 'Mixed',
    lastName: 'Mixed',
    age: 38,
    rating: 5,
    progress: 19,
    DOB: '04/11/1995',
    expandData: [
      {
        id: 7,
        firstName: 'Darius',
        lastName: 'Abshire',
        age: 18,
        rating: 1,
        progress: 37,
        DOB: '27/11/1970',
      },
      {
        id: 22,
        firstName: 'Jayden',
        lastName: 'Padberg',
        age: 55,
        rating: 3,
        progress: 99,
        isTableRow: true,
        DOB: '08/04/1974',
        expandData: [
          {
            id: 25,
            firstName: 'Jayden1',
            lastName: 'Padberg1',
            age: 55,
            rating: 3,
            progress: 99,
            isTableRow: true,
            DOB: '08/04/1974',
          },
        ],
      },
      {
        id: 23,
        firstName: 'Chyna',
        lastName: 'Bruen',
        age: 25,
        rating: 5,
        isTableRow: true,
        progress: 46,
        DOB: '15/11/1997',
      },
      {
        id: 24,
        firstName: 'Shanon',
        lastName: 'Sauer',
        age: 24,
        rating: 3,
        progress: 80,
        DOB: '04/05/1947',
        isTableRow: true,
      },
    ],
  },

  {
    id: 2,
    firstName: 'Custom',
    lastName: 'Custom',
    age: 67,
    rating: 1,
    progress: 0,
    DOB: '16/08/1996',
    expandData: [
      {
        id: 8,
        firstName: 'Damon',
        lastName: 'Frami',
        age: 25,
        rating: 2,
        progress: 37,
        DOB: '2025/10/14',
      },
      {
        id: 9,
        firstName: 'Margret',
        lastName: 'Maggio',
        age: 24,
        rating: 3,
        progress: 60,
        DOB: '2025/08/12',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Expand row',
    lastName: 'Expand row',
    age: 24,
    rating: 3,
    progress: 74,
    DOB: '02/03/1980',
    expandData: [
      {
        isTableRow: true,
        id: 10,
        firstName: 'Jessica1',
        lastName: 'Bailey1',
        age: 24,
        rating: 3,
        progress: 74,
        DOB: '02/03/1980',
        expandData: [
          {
            id: 12,
            firstName: 'Jessica3',
            lastName: 'Bailey3',
            age: 24,
            progress: 74,
            DOB: '02/03/1980',
            isTableRow: true,
            rating: 3,
          },
        ],
      },
      {
        isTableRow: true,
        id: 11,
        firstName: 'Jessica2',
        lastName: 'Bailey2',
        age: 24,
        rating: 3,
        progress: 74,
        DOB: '02/03/1980',
      },
    ],
  },
  {
    id: 4,
    firstName: 'Emmalee',
    lastName: 'Anderson',
    age: 18,
    rating: 2,
    progress: 92,
    DOB: '09/02/1994',
  },
  {
    id: 5,
    firstName: 'Christian',
    lastName: 'Ritchie',
    age: 53,
    rating: 5,
    progress: 100,
    DOB: '08/06/1963',
  },
])
</script>
<template>
  <HLDataTableWrapper
    id="multi-row-customslot-table-wrapper"
    max-width="1000px"
  >
    <HLDataTable
      id="multi-row-customslot-table"
      ref="tableInstance"
      :columns="columns"
      :expandedRowRenderer="rowExpandRenderer"
      :data="data"
      :horizontal-borders="true"
      :vertical-borders="true"
      :row-hover="false"
      :column-hover="false"
      max-height="900px"
      row-height="auto"
    >
    </HLDataTable>
  </HLDataTableWrapper>
</template>
