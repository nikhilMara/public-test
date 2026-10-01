<script setup lang="ts">
import {
  Atom02Icon,
  Image01Icon,
  InfoHexagonIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import { ref } from 'vue'

import viteIcon from '@/assets/vite.svg'
import {
  HLCheckbox,
  HLFormItem,
  HLInput,
  HLSpace,
  HLText,
  HLTile,
} from '@gohighlevel/highrise'

// Example state
const isSelected = ref(false)
const isDisabled = ref(false)
const tileLabel = ref('Mail')

// Example handlers
const handleTileClick = (id: string) => {
  console.log(`Tile ${id} clicked`)
}

const handleTileFocus = (id: string) => {
  console.log(`Tile ${id} focused`)
}

const handleTileBlur = (id: string) => {
  console.log(`Tile ${id} blurred`)
}
</script>

<template>
  <div class="tile-examples">
    <div class="example-section">
      <HLText type="text" size="lg" weight="semibold">
        Single Tile Example
      </HLText>
      <HLSpace>
        <HLFormItem
          label="Selected"
          class="pg-form-item"
          id="selected-form-item"
          :labelProps="{ id: 'selected-form-item__label' }"
        >
          <HLCheckbox
            v-model:checked="isSelected"
            id="selected-checkbox"
            aria-labelledby="selected-form-item__label"
          />
        </HLFormItem>
        <HLFormItem
          label="Disabled"
          class="pg-form-item"
          id="disabled-form-item"
          :labelProps="{ id: 'disabled-form-item__label' }"
        >
          <HLCheckbox
            v-model:checked="isDisabled"
            id="disabled-checkbox"
            aria-labelledby="disabled-form-item__label"
          />
        </HLFormItem>
        <HLFormItem label="Label" class="pg-form-item">
          <HLInput
            id="label-input"
            v-model="tileLabel"
            placeholder="Enter tile label"
            size="sm"
            class="label-input"
          />
        </HLFormItem>
      </HLSpace>

      <HLTile
        id="single-tile"
        :label="tileLabel"
        :icon="Atom02Icon"
        :selected="isSelected"
        :disabled="isDisabled"
        @click="handleTileClick('single-tile')"
        @focus="handleTileFocus('single-tile')"
        @blur="handleTileBlur('single-tile')"
      />
    </div>

    <div class="example-section">
      <HLText type="text" size="lg" weight="semibold"
        >Multiple Tiles Example</HLText
      >
      <HLSpace>
        <HLTile
          id="tile-1"
          label="Mail"
          :icon="Atom02Icon"
          :selected="isSelected"
          :disabled="isDisabled"
          @click="handleTileClick('tile-1')"
        />
        <HLTile
          id="tile-2"
          label="Image"
          :icon="Image01Icon"
          :selected="isSelected"
          :disabled="isDisabled"
          @click="handleTileClick('tile-2')"
        />
        <HLTile
          id="tile-3"
          label="Info"
          :icon="InfoHexagonIcon"
          :selected="isSelected"
          :disabled="isDisabled"
          @click="handleTileClick('tile-3')"
        />
        <HLTile
          id="tile-4"
          label="This is a very long info"
          :icon="Image01Icon"
          :selected="isSelected"
          :disabled="isDisabled"
          @click="handleTileClick('tile-4')"
        />
      </HLSpace>
    </div>

    <div class="example-section">
      <HLText type="text" size="lg" weight="semibold"
        >Custom Icon Slot Example</HLText
      >
      <HLSpace>
        <HLTile
          id="tile-5"
          label="Vite"
          :selected="isSelected"
          :disabled="isDisabled"
          @click="handleTileClick('tile-5')"
        >
          <template #icon>
            <img :src="viteIcon" class="h-[20px]" aria-label="Vite logo" />
          </template>
        </HLTile>
        <HLTile
          id="tile-6"
          label="Overflow Example"
          :selected="isSelected"
          :disabled="isDisabled"
          @click="handleTileClick('tile-6')"
        >
          <template #icon>
            <img :src="viteIcon" class="h-[100px]" aria-label="Vite logo overflow" />
          </template>
        </HLTile>
      </HLSpace>
    </div>

    <div class="example-section">
      <HLText type="text" size="lg" weight="semibold"
        >Custom Content Example</HLText
      >
      <HLTile
        id="custom-tile"
        customClass="custom-tile"
        :selected="isSelected"
        :disabled="isDisabled"
        @click="handleTileClick('custom-tile')"
      >
        <template #content>
          <p>This is an example of custom content</p>
        </template>
      </HLTile>
    </div>
  </div>
</template>

<style scoped>
.tile-examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.example-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Custom tile style example */
.custom-tile {
  padding: 8px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: var(--primary-700) !important;
  border: 1px solid red !important;
}

.label-input {
  width: 200px;
  margin-left: 8px;
}

.custom-tile:not(.disabled) {
  cursor: pointer;
}
.custom-tile.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  background-color: var(--gray-100) !important;
  border-color: var(--gray-200) !important;
  color: var(--gray-400) !important;
}
.custom-tile:not(.disabled):hover {
  box-shadow:
    0px 4px 8px 1px rgba(227, 176, 176, 0.974),
    0px 8px 16px 1px rgba(227, 176, 176, 0.974) !important;
}

.custom-tile:not(.disabled):active {
  border-color: var(--gray-400) !important;
}

.custom-tile p {
  margin: 0;
  font-size: 0.675rem !important;
  text-align: center !important;
}
</style>
<style>
.pg-form-item {
  @apply flex items-center space-x-2;
}
.pg-form-item label.hr-form-item-label {
  padding-bottom: 0 !important;
}
</style>
