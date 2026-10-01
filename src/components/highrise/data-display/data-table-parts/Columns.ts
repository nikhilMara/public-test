import { Star01Icon } from '@gohighlevel/ghl-icons/24/outline'
import { HLIcon, HLProgress, HLSpace } from '@gohighlevel/highrise'
import { h } from 'vue'

export const columns: any[] = [
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
