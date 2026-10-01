<script setup lang="ts">
import {
  defaultColorSections,
  HLAlert,
  HLButton,
  HLColorPicker,
  HLSpace,
  HLSwatchTile,
  HLText,
  useHLNotification,
  type HLColorPickerSections,
  type HLColorSwatch,
} from '@gohighlevel/highrise'
import { h, inject, ref } from 'vue'
const colorRef = ref('#26a6a6')

const tooltipTypesColorpickerSections: HLColorPickerSections[] = [
  {
    key: 'custom1',
    label: 'Show Name',
    swatches: [
      {
        value: '#22C55E',
        value8: '#22C55EFF',
        alpha: 100,
        label: 'Success Green',
      },
      {
        value: '#16A34A',
        value8: '#16A34AFF',
        alpha: 100,
        label: 'Forest Green',
      },
      {
        value: '#15803D',
        value8: '#15803DFF',
        alpha: 100,
        label: 'Deep Green',
      },
      {
        value: '#166534',
        value8: '#166534FF',
        alpha: 100,
        label: 'Dark Green',
      },
      {
        value: '#14532D',
        value8: '#14532DFF',
        alpha: 100,
        label: 'Pine Green',
      },
      {
        value: '#14532D',
        value8: '#14532DFE',
        alpha: 99,
        label: 'Pine Green v2',
        custom: '{{ customValues.pine.green.v2 }}',
      },
    ],
    showAddButton: true,
    showEyeDropper: true,
    showTransparentSwatch: true,
    showTooltip: 'name',
    editable: true,
  },
  {
    key: 'custom2',
    label: 'Show Value',
    swatches: [
      {
        value: '#3B82F6',
        value8: '#3B82F6FF',
        alpha: 100,
        label: 'Primary Blue',
      },
      {
        value: '#2563EB',
        value8: '#2563EBFF',
        alpha: 100,
        label: 'Royal Blue',
      },
      {
        value: '#1D4ED8',
        value8: '#1D4ED8FF',
        alpha: 100,
        label: 'Deep Blue',
      },
      {
        value: '#1E40AF',
        value8: '#1E40AFFF',
        alpha: 100,
        label: 'Navy Blue',
      },
      {
        value: '#1E3A8A',
        value8: '#1E3A8AFF',
        alpha: 100,
        label: 'Dark Blue',
      },
      {
        value: '#1E3A8A',
        value8: '#1E3A8AFE',
        alpha: 99,
        label: 'Dark Blue v2',
        custom:
          '{{ customValues.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2.darkBlue.v2 }}',
      },
    ],
    showAddButton: true,
    showEyeDropper: true,
    showTransparentSwatch: true,
    showTooltip: 'value',
    editable: true,
  },
  {
    key: 'custom3',
    label: 'Show Both',
    swatches: [
      {
        value: '#EF4444',
        value8: '#EF4444FF',
        alpha: 100,
        label: 'Bright Red',
      },
      {
        value: '#DC2626',
        value8: '#DC2626FF',
        alpha: 100,
        label: 'Fire Red',
      },
      {
        value: '#B91C1C',
        value8: '#B91C1CFF',
        alpha: 100,
        label: 'Ruby Red',
      },
      {
        value: '#991B1B',
        value8: '#991B1BFF',
        alpha: 100,
        label: 'Dark Red',
      },
      {
        value: '#7F1D1D',
        value8: '#7F1D1DFF',
        alpha: 100,
        label: 'Deep Red',
      },
      {
        value: '#7F1D1D',
        value8: '#7F1D1DFE',
        alpha: 99,
        label: 'Deep Red v2',
        custom:
          '{{ customValues.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2.deepRed.v2 }}',
      },
    ],
    showAddButton: true,
    showEyeDropper: true,
    showTransparentSwatch: true,
    showTooltip: 'both',
    editable: true,
  },
]

const shapeSizeExampleSections: HLColorPickerSections[] = [
  {
    key: 'custom4',
    label: 'Show Name',
    swatches: [
      {
        value: '#22C55E',
        value8: '#22C55EFF',
        alpha: 100,
        label: 'Success Green',
        overrideTileShape: 'circle',
      },
      {
        value: '#16A34A',
        value8: '#16A34AFF',
        alpha: 100,
        label: 'Forest Green',
      },
      {
        value: '#15803D',
        value8: '#15803DFF',
        alpha: 100,
        label: 'Deep Green',
        overrideTileShape: 'rectangle',
      },
      {
        value: '#166534',
        value8: '#166534FF',
        alpha: 100,
        label: 'Dark Green',
      },
      {
        value: '#14532D',
        value8: '#14532DFF',
        alpha: 100,
        label: 'Pine Green',
      },
    ],
    showAddButton: true,
    showEyeDropper: true,
    showTransparentSwatch: true,
    showTooltip: 'name',
    editable: true,
    overrideTileShape: 'rectangle',
  },
  {
    key: 'custom5',
    label: 'Show Value',
    swatches: [
      {
        value: '#3B82F6',
        value8: '#3B82F6FF',
        alpha: 100,
        label: 'Primary Blue',
      },
      {
        value: '#2563EB',
        value8: '#2563EBFF',
        alpha: 100,
        label: 'Royal Blue',
      },
      {
        value: '#1D4ED8',
        value8: '#1D4ED8FF',
        alpha: 100,
        label: 'Deep Blue',
      },
      {
        value: '#1E40AF',
        value8: '#1E40AFFF',
        alpha: 100,
        label: 'Navy Blue',
      },
      {
        value: '#1E3A8A',
        value8: '#1E3A8AFF',
        alpha: 100,
        label: 'Dark Blue',
      },
    ],
    showAddButton: true,
    showEyeDropper: true,
    showTransparentSwatch: true,
    showTooltip: 'value',
    editable: true,
  },
]

const notification = useHLNotification()

function openNotification(
  action: 'add' | 'edit' | 'delete' | 'reset',
  sectionKey: string,
  sectionIndex: number,
  value: string | HLColorSwatch,
  editorDeleteIndex?: number
) {
  const mergedValue = typeof value === 'string' ? value : JSON.stringify(value)
  const message =
    action === 'add'
      ? 'A new swatch has been added'
      : action === 'edit'
        ? 'A swatch has been edited'
        : action === 'delete'
          ? 'A swatch has been deleted'
          : 'A swatch has been reset'
  const color = action === 'add' ? 'green' : action === 'edit' ? 'blue' : 'red'
  const n = notification.create({
    content: () =>
      h(
        HLAlert,
        {
          closable: true,
          color,
          id: 'swatch-notification-alert',
          width: '720px',
          onClose: () => {
            n.destroy()
          },
        },
        {
          default: () =>
            h(
              'div',
              {
                class: 'flex flex-col gap-2',
              },
              [
                h(
                  HLText,
                  {
                    size: 'xl',
                    weight: 'bold',
                  },
                  () => message
                ),
                h(
                  HLText,
                  {
                    size: 'md',
                    weight: 'medium',
                  },
                  () => `Section: ${sectionKey}`
                ),
                h(
                  HLText,
                  {
                    size: 'md',
                    weight: 'medium',
                  },
                  () => `Section Index: ${sectionIndex}`
                ),
                h(
                  HLText,
                  {
                    size: 'md',
                    weight: 'medium',
                  },
                  () => `Value: ${mergedValue}`
                ),
                h(
                  HLText,
                  {
                    size: 'md',
                    weight: 'medium',
                  },
                  () => `Swatch Index: ${editorDeleteIndex ?? 'N/A'}`
                ),
                h(HLSwatchTile, {
                  value: typeof value === 'string' ? value : value.value8,
                  shape: 'rectangle',
                  size: 'lg',
                }),
              ]
            ),
        }
      ),
    duration: 10000,
  })
}

const handleSwatchAdd = (
  sectionKey: string,
  sectionIndex: number,
  value: string | HLColorSwatch
) => {
  console.log('handleSwatchAdd: ', sectionKey, sectionIndex, value)
  openNotification('add', sectionKey, sectionIndex, value)
}

const handleSwatchEdit = (
  sectionKey: string,
  sectionIndex: number,
  editIndex: number,
  value: string | HLColorSwatch
) => {
  console.log('handleSwatchEdit: ', sectionKey, sectionIndex, editIndex, value)
  openNotification('edit', sectionKey, sectionIndex, value, editIndex)
}

const handleSwatchDelete = (
  sectionKey: string,
  sectionIndex: number,
  deleteIndex: number,
  value: string | HLColorSwatch
) => {
  console.log(
    'handleSwatchDelete: ',
    sectionKey,
    sectionIndex,
    deleteIndex,
    value
  )
  openNotification('delete', sectionKey, sectionIndex, value, deleteIndex)
}

const handleSwatchReset = (
  sectionKey: string,
  sectionIndex: number,
  resetIndex: number,
  value: string | HLColorSwatch
) => {
  console.log(
    'handleSwatchReset: ',
    sectionKey,
    sectionIndex,
    resetIndex,
    value
  )
  openNotification('reset', sectionKey, sectionIndex, value, resetIndex)
}

const handleCustomUpdate = (type: string, ...args: any[]) => {
  console.log(`${type}: `, ...args)
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>
          A versatile color picker component that supports swatches, custom
          colors, and various picker formats.
        </p>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <div>
            <h3>Swatch Type</h3>
            <HLColorPicker
              id="basic-color-picker"
              :swatches="[
                {
                  key: 'brand',
                  label: 'Brand Colors',
                  swatches: [
                    'var(--primary-200)',
                    'var(--primary-500)',
                    'var(--primary-800)',
                  ],
                  showAddButton: false,
                  showTooltip: 'value',
                },
              ]"
            />
          </div>
          <div>
            <h3>Picker Type</h3>
            <HLColorPicker id="basic-color-picker-2" type="picker" />
          </div>
          <p class="py-2">Inline Picker</p>

          <div
            class="hr-inline-cp-container w-[340px] p-3"
            style="border: 2px solid #aaaaaa; border-radius: 8px"
          >
            <HLColorPicker
              id="basic-color-picker-3"
              type="inline-picker"
              :value="colorRef"
              @select="(color: string) => (colorRef = color)"
            />
          </div>
          <p class="py-2"></p>
          <div class="pt-2 flex items-center gap-2">
            <span> selected color from inline-picker: </span>
            <span
              class="w-4 h-4 rounded-lg inline-flex"
              :style="{ backgroundColor: colorRef }"
            ></span>
          </div>
        </div>
      </div>

      <!-- Empty States -->
      <div>
        <h2>Empty States</h2>
        <HLColorPicker
          id="empty-color-picker"
          :swatches="[
            {
              key: 'brand',
              label: 'Brand Colors',
              swatches: [],
              showAddButton: false,
              showTooltip: 'value',
            },
            {
              key: 'default',
              label: 'Default Colors',
              swatches: [],
              showAddButton: true,
              showTransparentSwatch: true,
              showEyeDropper: true,
              showTooltip: 'both',
            },
            {
              key: 'custom',
              label: 'Custom Colors',
              swatches: [],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
          ]"
        />
      </div>

      <!-- More Swatches -->
      <div>
        <h2>More Swatches</h2>
        <HLColorPicker
          id="more-swatches-color-picker"
          :swatches="[
            {
              key: 'brand',
              label: 'Brand Colors',
              swatches: [
                'var(--primary-500)',
                'var(--primary-600)',
                'var(--primary-700)',
                'var(--primary-800)',
                'var(--primary-900)',
              ],
              showAddButton: false,
              showTooltip: 'value',
            },
            {
              key: 'default',
              label: 'Default Colors',
              swatches: [
                'var(--gray-100)',
                'var(--gray-200)',
                'var(--gray-300)',
                'var(--gray-400)',
                'var(--gray-500)',
              ],
              showAddButton: true,
              showTransparentSwatch: true,
              showEyeDropper: true,
              showTooltip: 'both',
            },
            {
              key: 'custom',
              label: 'Custom Colors',
              swatches: [
                'var(--green-100)',
                'var(--green-200)',
                'var(--green-300)',
                'var(--green-400)',
                'var(--green-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
            {
              key: 'blues',
              label: 'Blues',
              swatches: [
                'var(--indigo-100)',
                'var(--indigo-200)',
                'var(--indigo-300)',
                'var(--indigo-400)',
                'var(--indigo-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
            {
              key: 'pinks',
              label: 'Pinks',
              swatches: [
                'var(--pink-100)',
                'var(--pink-200)',
                'var(--pink-300)',
                'var(--pink-400)',
                'var(--pink-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
          ]"
        />
      </div>

      <!-- CRUD Operations on Swatches -->
      <div>
        <h2>CRUD Operations on Swatches</h2>
        <p>
          Look out for notifications based on CRUD operations performed on the
          swatches!
        </p>
        <HLColorPicker
          id="crud-operations-color-picker"
          :swatches="[
            {
              key: 'brand',
              label: 'Brand Colors',
              swatches: [
                'var(--primary-500)',
                'var(--primary-600)',
                'var(--primary-700)',
                'var(--primary-800)',
                'var(--primary-900)',
              ],
              showAddButton: false,
              showTooltip: 'value',
            },
            {
              key: 'default',
              label: 'Default Colors',
              swatches: [
                'var(--gray-100)',
                'var(--gray-200)',
                'var(--gray-300)',
                'var(--gray-400)',
                'var(--gray-500)',
              ],
              showAddButton: true,
              showTransparentSwatch: true,
              showEyeDropper: true,
              showTooltip: 'both',
            },
            {
              key: 'custom',
              label: 'Custom Colors',
              swatches: [
                'var(--green-100)',
                'var(--green-200)',
                'var(--green-300)',
                'var(--green-400)',
                'var(--green-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
            {
              key: 'blues',
              label: 'Blues',
              swatches: [
                'var(--indigo-100)',
                'var(--indigo-200)',
                'var(--indigo-300)',
                'var(--indigo-400)',
                'var(--indigo-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
            {
              key: 'pinks',
              label: 'Pinks',
              swatches: [
                'var(--pink-100)',
                'var(--pink-200)',
                'var(--pink-300)',
                'var(--pink-400)',
                'var(--pink-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
          ]"
          @select="(...args) => handleCustomUpdate('select', args)"
          @swatch:add="handleSwatchAdd"
          @swatch:delete="handleSwatchDelete"
          @swatch:edit="handleSwatchEdit"
          @swatch:reset="handleSwatchReset"
          @update:show="(...args) => handleCustomUpdate('update:show', args)"
          @update:swatches="
            (...args) => handleCustomUpdate('update:swatches', args)
          "
        />
      </div>

      <!-- Default Swatches -->
      <div>
        <h2>Default Swatches</h2>
        <HLColorPicker
          id="default-swatches-color-picker"
          :width="394"
          :swatches="[
            {
              key: 'brand',
              label: 'Brand Colors',
              swatches: [
                'var(--primary-500)',
                'var(--primary-600)',
                'var(--primary-700)',
                'var(--primary-800)',
                'var(--primary-900)',
              ],
              showAddButton: false,
              showTooltip: 'value',
            },
            ...defaultColorSections,
            {
              key: 'custom',
              label: 'Custom Colors',
              swatches: [
                'var(--green-100)',
                'var(--green-200)',
                'var(--green-300)',
                'var(--green-400)',
                'var(--green-500)',
              ],
              showAddButton: true,
              showEyeDropper: true,
              showTooltip: 'name',
              editable: true,
            },
          ]"
        />
      </div>

      <!-- Tooltip Types -->
      <div>
        <h2>Tooltip Types</h2>
        <p>
          The showTooltip property controls what information is displayed when
          hovering over a color swatch. It has four possible values:
        </p>
        <ul>
          <li><strong>name:</strong> Shows only the color's label</li>
          <li>
            <strong>value:</strong> Shows only the color value and alpha
            percentage
          </li>
          <li>
            <strong>both:</strong> Shows both the name and value information
          </li>
          <li><strong>false:</strong> No tooltip will appear</li>
        </ul>
        <HLColorPicker
          id="tooltip-types-color-picker"
          :width="392"
          :swatches="tooltipTypesColorpickerSections"
        />
      </div>

      <!-- Different Swatch Shapes -->
      <div>
        <h2>Different Swatch Shapes</h2>
        <HLColorPicker
          id="shapes-color-picker"
          swatch-size="3xs"
          :width="392"
          :swatches="shapeSizeExampleSections"
        />
      </div>

      <!-- Custom Trigger -->
      <div>
        <h2>Custom Trigger</h2>
        <HLColorPicker
          id="custom-trigger-color-picker"
          :width="394"
          :swatches="[
            {
              key: 'custom',
              label: 'Custom Colors',
              swatches: [
                'var(--green-100)',
                'var(--green-200)',
                'var(--green-300)',
                'var(--green-400)',
                'var(--green-500)',
              ],
            },
          ]"
          placement="top"
        >
          <template #trigger>
            <HLButton
              id="custom-trigger-color-picker-button"
              size="sm"
              variant="secondary"
              color="blue"
            >
              Select Color
            </HLButton>
          </template>
        </HLColorPicker>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Swatch Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Large (lg)</h3>
            <HLColorPicker
              id="size-lg-color-picker"
              swatch-size="lg"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>Medium (md)</h3>
            <HLColorPicker
              id="size-md-color-picker"
              swatch-size="md"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>Small (sm)</h3>
            <HLColorPicker
              id="size-sm-color-picker"
              swatch-size="sm"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>Extra Small (xs)</h3>
            <HLColorPicker
              id="size-xs-color-picker"
              swatch-size="xs"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>2x Extra Small (2xs)</h3>
            <HLColorPicker
              id="size-2xs-color-picker"
              swatch-size="2xs"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>3x Extra Small (3xs)</h3>
            <HLColorPicker
              id="size-3xs-color-picker"
              swatch-size="3xs"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Different Shapes -->
      <div>
        <h2>Different Swatch Shapes</h2>
        <HLSpace vertical>
          <div>
            <h3>Square</h3>
            <HLColorPicker
              id="shape-square-color-picker"
              swatch-shape="square"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Square Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>Circle</h3>
            <HLColorPicker
              id="shape-circle-color-picker"
              swatch-shape="circle"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Circle Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
          <div>
            <h3>Rectangle</h3>
            <HLColorPicker
              id="shape-rectangle-color-picker"
              swatch-shape="rectangle"
              :swatches="[
                {
                  key: 'colors',
                  label: 'Rectangle Colors',
                  swatches: [
                    '#FF0000',
                    '#00FF00',
                    '#0000FF',
                    '#FFFF00',
                    '#FF00FF',
                  ],
                },
              ]"
            />
          </div>
        </HLSpace>
      </div>

      <p class="py-2">Custom Add Button</p>
      <HLColorPicker
        id="basic-color-picker"
        :width="394"
        :swatches="tooltipTypesColorpickerSections"
      >
        <template #swatchAddButton="{ sectionKey, sectionIndex }">
          <HLButton
            :id="`${sectionKey}-${sectionIndex}`"
            size="3xs"
            color="blue"
            variant="secondary"
          >
            {{ sectionIndex }}. {{ sectionKey }}
          </HLButton>
        </template>
      </HLColorPicker>
    </HLSpace>
  </div>
</template>
