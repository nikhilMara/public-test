<script setup lang="ts">
import { MaterialIdentityPlatformIcon } from '@gohighlevel/ghl-icons/24/material/rounded'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Star01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLDataTable,
  HLDataTableWrapper,
  HLIcon,
  HLProgress,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { h, ref } from 'vue'

const data = [
  {
    id: 1,
    firstName: 'Jerel',
    lastName: 'Rath',
    age: 38,
    rating: 5,
    status: 'vilicus',
    progress: 19,
    toggle: false,
    DOB: '2025/11/04',
    expandData: [
      {
        id: 7,
        firstName: 'Darius',
        lastName: 'Abshire',
        age: 18,
        rating: 1,
        status: 'neque',
        progress: 37,
        toggle: false,
        DOB: '2025/11/27',
        expandData: [
          {
            id: 22,
            firstName: 'Jayden',
            lastName: 'Padberg',
            age: 55,
            rating: 3,
            status: 'cumque',
            progress: 99,
            toggle: false,
            DOB: '2024/04/08',
            expandData: [
              {
                id: 33,
                firstName: 'Ressie',
                lastName: 'Graham',
                age: 24,
                rating: 3,
                status: 'coniecto',
                progress: 60,
                toggle: false,
                DOB: '2001/01/13',
              },
              {
                id: 34,
                firstName: 'Waino',
                lastName: 'Rodriguez',
                age: 33,
                rating: 4,
                status: 'varietas',
                progress: 34,
                toggle: false,
                DOB: '2025/03/14',
              },
              {
                id: 35,
                firstName: 'Kody',
                lastName: 'Bernhard',
                age: 20,
                rating: 5,
                status: 'stillicidium',
                progress: 99,
                toggle: false,
                DOB: '2025/06/24',
              },
            ],
          },
          {
            id: 23,
            firstName: 'Chyna',
            lastName: 'Bruen',
            age: 25,
            rating: 5,
            status: 'laboriosam',
            progress: 46,
            toggle: false,
            DOB: '2025/11/15',
          },
          {
            id: 24,
            firstName: 'Shanon',
            lastName: 'Sauer',
            age: 24,
            rating: 3,
            status: 'dolor',
            progress: 80,
            toggle: true,
            DOB: '2024/05/04',
          },
        ],
      },
      {
        id: 8,
        firstName: 'Damon',
        lastName: 'Frami',
        age: 25,
        rating: 2,
        status: 'corona',
        progress: 37,
        toggle: false,
        DOB: '2025/10/14',
      },
      {
        id: 9,
        firstName: 'Margret',
        lastName: 'Maggio',
        age: 24,
        rating: 3,
        status: 'voluptatem',
        progress: 60,
        toggle: true,
        DOB: '2025/08/12',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Avery',
    lastName: 'Pagac',
    age: 67,
    rating: 1,
    status: 'candidus',
    progress: 0,
    toggle: false,
    DOB: '2025/08/16',
  },
  {
    id: 3,
    firstName: 'Jessica',
    lastName: 'Bailey',
    age: 24,
    rating: 3,
    status: 'dens',
    progress: 74,
    toggle: true,
    DOB: '2025/03/02',
  },
  {
    id: 4,
    firstName: 'Emmalee',
    lastName: 'Anderson',
    age: 18,
    rating: 2,
    status: 'cognatus',
    progress: 92,
    toggle: true,
    DOB: '2025/02/09',
  },
  {
    id: 5,
    firstName: 'Christian',
    lastName: 'Ritchie',
    age: 53,
    rating: 5,
    status: 'strenuus',
    progress: 100,
    toggle: true,
    DOB: '2025/06/08',
  },
]
const modifiedColumns: any = [
  {
    id: 'lastName',
    header: 'Last Name ',
    columns: [
      {
        id: 'lastName',
        header: ' ',
        accessorKey: 'lastName',
        size: 250,
        meta: {
          align: 'left',
          headerAlign: 'left',
        },
        cellFormatter: ({ row }) => {
          return h('div', { class: 'flex items-center' }, [
            h('div', { style: { paddingLeft: `${row.depth * 32}px` } }, null),
            row.originalSubRows &&
              h(
                'div',
                { style: { paddingRight: `12px` } },
                h(
                  HLIcon as any,
                  {
                    id: 'expand-button',
                    size: '20',
                    class: 'cursor-pointer',
                    onClick: () => {
                      row.getToggleExpandedHandler()()
                    },
                  } as any,
                  row.getIsExpanded() ? ChevronUpIcon : ChevronDownIcon
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
    ],
  },
  {
    id: 'info',
    header: {
      text: 'Info',
      icon: MaterialIdentityPlatformIcon,
    },
    columns: [
      {
        id: 'firstName',
        header: 'First Name',
        sortingFn: 'alphanumeric',
        accessorKey: 'firstName',
        size: 200,
        meta: {
          align: 'start',
          headerAlign: 'start',
        },
      },
      {
        id: 'age',
        header: 'Age',
        accessorKey: 'age',
        filterFn: 'greaterThan',
        sortingFn: 'alphanumeric',

        meta: {
          align: 'end',
          headerAlign: 'end',
        },
      },
    ],
    meta: {
      headerAlign: 'start',
    },
  },
  {
    id: 'DOB',
    header: 'DOB',
    columns: [
      {
        id: 'DOB',
        accessorKey: 'DOB',
        meta: {
          align: 'end',
          headerAlign: 'end',
        },
        size: 200,
        header: ' ',
      },
    ],
  },
  {
    id: 'progress',
    header: 'Progress',
    columns: [
      {
        id: 'progress',
        header: ' ',
        accessorKey: 'progress',
        sortingFn: 'alphanumeric',
        size: 300,
        cellFormatter: ({ row }) => {
          return h(HLProgress, {
            id: 'progress',
            percentage: row.original.progress,
            type: 'line',
            dashboardSize: 'sm',
            valuePlacement: 'outside',
          })
        },
      },
    ],
  },
  {
    id: 'rating',
    header: 'Rating',
    columns: [
      {
        id: 'rating',
        accessorKey: 'rating',
        size: 200,
        header: ' ',
        meta: {
          headerAlign: 'start',
        },
        cellFormatter: ({ row }) => {
          const rating = row.original.rating
          const stars: any[] = []
          for (let i = 0; i < 5; i++) {
            const fill = i < rating ? 'var(--primary-600)' : 'var(--gray-400)'
            stars.push(
              h(HLIcon, { size: '16', color: fill }, Star01Icon as any)
            )
          }
          return h(
            HLSpace,
            { align: 'center', wrapItem: false, size: 4 },
            { default: () => stars }
          )
        },
      },
    ],
  },
]
const tableInstance = ref<any>(null)
</script>

<template>
  <div>
    <HLDataTableWrapper id="full-height-table-wrapper">
      <HLDataTable
        id="full-height-table"
        :columns="modifiedColumns"
        :data="data"
        striped
        ref="tableInstance"
      />
    </HLDataTableWrapper>
  </div>
</template>
