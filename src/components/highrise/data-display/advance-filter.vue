<script setup lang="ts">
import {
  CalendarIcon,
  ImageUserIcon,
  Mail01Icon,
  Phone01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAdvanceFilter,
  HLAdvanceFilterColumnOption,
  HLAdvanceFilterData,
  HLIcon,
} from '@gohighlevel/highrise'
import { h, inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// Start of Default Usage
const defaultOptions = [
  { label: 'First Name', value: 'first_name', columnType: 'string' },
  {
    label: h('div', { class: 'flex items-center gap-1' }, [
      h(HLIcon, { size: 14 }, Phone01Icon as any),
      'Phone',
    ]),
    value: 'phone',
    columnType: 'string',
  },
  { label: 'Age', value: 'age', columnType: 'number' },
  {
    label: h('div', { class: 'flex items-center gap-1' }, [
      h(HLIcon, { size: 14 }, CalendarIcon as any),
      'Birthday',
    ]),
    value: 'birthday',
    columnType: 'date',
  },
] as HLAdvanceFilterColumnOption[]

const defaultData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'first_name',
          operator: 'contains',
          value: 'ABC',
        },
      ],
    },
  ],
})

const liveDemoData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'first_name',
          operator: 'contains',
          value: 'ABC',
        },
      ],
    },
  ],
})

// Start of Number Column
const numberColumn = [
  { label: 'Age', value: 'age', columnType: 'number' },
] as HLAdvanceFilterColumnOption[]
const numberData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'age',
          operator: 'less_or_equal',
          value: 18,
        },
      ],
    },
  ],
})

const numberCustomizedColumn = [
  {
    label: 'Age',
    value: 'age',
    columnType: 'number',
    operatorOptions: [
      {
        label: 'Is less than',
        value: 'less',
        valueType: 'number',
        props: { min: 10, max: 20 },
      },
      {
        label: 'Is greater than',
        value: 'greater',
        valueType: 'number',
        props: { min: 10, max: 20 },
      },
    ],
  },
] as any[]
const numberCustomizedData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'age',
          operator: 'less',
          value: 18,
        },
      ],
    },
  ],
})

// Start of String Column

const stringColumn = [
  { label: 'First Name', value: 'first_name', columnType: 'string' },
] as HLAdvanceFilterColumnOption[]
const stringData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'first_name',
          operator: 'equal',

          value: 'John',
        },
      ],
    },
  ],
})

const stringCustomizedColumn = [
  {
    label: 'First Name',
    value: 'first_name',
    columnType: 'string',
    operatorOptions: [
      {
        label: 'Is equal to',
        value: 'equal',
        valueType: 'string',
      },
      {
        label: 'Is not equal to',
        value: 'not_equal',
        valueType: 'string',
      },
    ],
  },
] as any[]
const stringCustomizedData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'first_name',
          operator: 'equal',

          value: 'John',
        },
      ],
    },
  ],
})

// Start of Date Column
const dateColumn = [
  { label: 'Birthday', value: 'birthday', columnType: 'date' },
] as HLAdvanceFilterColumnOption[]
const dateData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'birthday',
          operator: 'greater',
          value: 1762799400000,
        },
      ],
    },
  ],
})

const dateCustomizedColumn = [
  {
    label: 'Birthday',
    value: 'birthday',
    columnType: 'date',
    operatorOptions: [
      {
        label: 'Is greater than',
        value: 'greater',
        valueType: 'date',
      },
      {
        label: 'Is less than',
        value: 'less',
        valueType: 'date',
      },
    ],
  },
] as any[]
const dateCustomizedData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'AND',
      rules: [
        {
          field: 'birthday',
          operator: 'greater',
          value: 1762799400000,
        },
      ],
    },
  ],
})

// Start of Mixed Filter Column
const mixedFilterColumn = [
  {
    label: 'Custom Select',
    value: 'custom_select',
    columnType: 'select',
    operatorOptions: [
      {
        type: 'group',
        label: 'Filter by value',
        key: 'Filter by value',
        children: [
          {
            label: 'In',
            value: 'in',
            valueType: 'select',
            props: {
              multiple: true,
              options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ],
            },
          },
        ],
      },
      {
        type: 'group',
        label: 'Filter by Condition',
        key: 'Filter by Condition',
        children: [
          {
            label: 'greater than',
            value: 'greater_than',
            valueType: 'number',
            props: { min: 10, max: 20 },
          },
          {
            label: 'Is between',
            value: 'between',
            valueType: 'numberRange',
            props: { min: 10, max: 20, showInput: true },
          },
        ],
      },
    ],
  },
] as any[]
const mixedFilterData = ref<HLAdvanceFilterData>({
  condition: 'OR',
  rules: [
    {
      condition: 'OR',
      rules: [
        {
          field: 'custom_select',
          operator: 'in',
          value: ['option1', 'option2'],
        },
        {
          field: 'custom_select',
          operator: 'greater_than',
          value: 10,
        },
      ],
    },
  ],
})

// Start of Customized Usage
const customColumnOptions = [
  {
    label: h('div', { class: 'flex items-center gap-1' }, [
      h(HLIcon, { size: 14 }, ImageUserIcon as any),
      'Name',
    ]),
    value: 'name',
    columnType: 'string',
  },
  {
    label: h('div', { class: 'flex items-center gap-1' }, [
      h(HLIcon, { size: 14 }, Mail01Icon as any),
      'Email',
    ]),
    value: 'email',
    columnType: 'string',
  },
  {
    label: h('div', { class: 'flex items-center gap-1' }, [
      h(HLIcon, { size: 14 }, Phone01Icon as any),
      'Phone',
    ]),
    value: 'phone',
    columnType: 'string',
  },
  {
    label: 'Rating',
    value: 'rating',
    columnType: 'select',
    operatorOptions: [
      {
        type: 'group',
        label: 'Filter by value',
        key: 'Filter by value',
        children: [
          {
            label: 'In',
            value: 'in',
            valueType: 'select',
            props: {
              multiple: true,
              options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ],
            },
          },
        ],
      },
      {
        type: 'group',
        label: 'Filter by Condition',
        key: 'Filter by Condition',
        children: [
          {
            label: 'greater than',
            value: 'greater_than',
            valueType: 'number',
            props: { min: 10, max: 20 },
          },
          {
            label: 'less than',
            value: 'less_than',
            valueType: 'number',
            props: { min: 10, max: 20 },
          },
        ],
      },
    ],
  },
  {
    label: 'Age',
    value: 'age',
    columnType: 'number',
    operatorOptions: [
      {
        label: 'Is less than or equal to',
        value: 'less_or_equal',
        valueType: 'number',
        props: { min: 10, max: 20 },
      },
      {
        label: 'Is between',
        value: 'between',
        valueType: 'numberRange',
        props: { min: 10, max: 20, showInput: true },
      },
    ],
  },
  {
    label: h('div', { class: 'flex items-center gap-1' }, [
      h(HLIcon, { size: 14 }, CalendarIcon as any),
      'Birthday',
    ]),
    value: 'birthday',
    columnType: 'date',
  },
  {
    label: 'Custom Select',
    value: 'custom_select',
    columnType: 'select',
    operatorOptions: [
      {
        label: 'Select In',
        value: 'select_in',
        valueType: 'select',
        props: {
          multiple: true,
          options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ],
        },
      },
      { label: 'Number Selection', value: 'not_null', valueType: 'number' },
    ],
  },
] as HLAdvanceFilterColumnOption[]

const customData = ref<HLAdvanceFilterData>({
  condition: 'AND',
  rules: [
    {
      condition: 'OR',
      rules: [
        {
          field: 'name',
          operator: 'equal',
          value: 'Mara',
        },
        {
          field: 'age',
          operator: 'less_or_equal',
          value: 18,
        },
      ],
    },
    {
      condition: 'OR',
      rules: [
        {
          field: 'birthday',
          operator: 'greater',
          value: 1762799400000,
        },
        {
          field: 'age',
          operator: 'equal',
          value: 20,
        },
      ],
    },
  ],
})
</script>

<template>
  <div>
    <h2>Advance Filter</h2>

    <h3>Default Usage</h3>

    <HLAdvanceFilter
      :columnOptions="defaultOptions"
      v-model:data="defaultData"
    />

    <h3>Number Column</h3>
    <div class="flex gap-4 w-full justify-between">
      <div class="w-1/2">
        <h4 class="pb-4">Default Usage</h4>
        <HLAdvanceFilter
          :columnOptions="numberColumn"
          v-model:data="numberData"
        />
      </div>
      <div class="w-1/2">
        <h4 class="pb-4">Customized Usage</h4>
        <HLAdvanceFilter
          :columnOptions="numberCustomizedColumn"
          v-model:data="numberCustomizedData"
        />
      </div>
    </div>

    <h3>String Column</h3>

    <div class="flex gap-4 w-full justify-between">
      <div class="w-1/2">
        <h3 class="pb-4">Default Usage</h3>
        <HLAdvanceFilter
          :columnOptions="stringColumn"
          v-model:data="stringData"
        />
      </div>
      <div class="w-1/2">
        <h3 class="pb-4">Customized Usage</h3>
        <HLAdvanceFilter
          :columnOptions="stringCustomizedColumn"
          v-model:data="stringCustomizedData"
        />
      </div>
    </div>

    <h3>Date Column</h3>

    <div class="flex gap-4 w-full justify-between">
      <div class="w-1/2">
        <h3 class="pb-4">Default Usage</h3>
        <HLAdvanceFilter :columnOptions="dateColumn" v-model:data="dateData" />
      </div>
      <div class="w-1/2">
        <h3 class="pb-4">Customized Usage</h3>
        <HLAdvanceFilter
          :columnOptions="dateCustomizedColumn"
          v-model:data="dateCustomizedData"
        />
      </div>
    </div>

    <h3>Mixed Filter Column</h3>

    <HLAdvanceFilter
      :columnOptions="mixedFilterColumn"
      v-model:data="mixedFilterData"
    />

    <h3>Customized Usage</h3>

    <HLAdvanceFilter
      :columnOptions="customColumnOptions"
      v-model:data="customData"
    />

    <h3>Live Demo</h3>

    <div class="flex gap-4 w-full">
      <div class="w-1/2">
        <HLAdvanceFilter
          :columnOptions="defaultOptions"
          v-model:data="liveDemoData"
        />
      </div>
      <div
        class="w-1/2 p-1"
        style="
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          background-color: var(--primary-25);
        "
      >
        <pre
          >{{ liveDemoData }}
    </pre
        >
      </div>
    </div>
  </div>
</template>
