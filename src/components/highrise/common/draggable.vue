<script setup lang="ts">
import {
  HLDraggableElement,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <HLDraggableElement id="draggable-default">
          <template #content>
            <div>Visual structure for draggable content</div>
          </template>
        </HLDraggableElement>
      </div>

      <!-- Handler Positions -->
      <div>
        <h2>Handler Positions</h2>
        <div class="space-y-4">
          <HLDraggableElement id="draggable-left" handler-position="left">
            <template #content>
              <div>Left handler</div>
            </template>
          </HLDraggableElement>
          <HLDraggableElement id="draggable-right" handler-position="right">
            <template #content>
              <div>Right handler</div>
            </template>
          </HLDraggableElement>
          <HLDraggableElement id="draggable-top" handler-position="top">
            <template #content>
              <div>Top handler</div>
            </template>
          </HLDraggableElement>
          <HLDraggableElement id="draggable-bottom" handler-position="bottom">
            <template #content>
              <div>Bottom handler</div>
            </template>
          </HLDraggableElement>
        </div>
      </div>

      <!-- Visual States -->
      <div>
        <h2>Visual States</h2>
        <div class="space-y-4">
          <HLDraggableElement id="draggable-disabled" disabled>
            <template #content>
              <div>Disabled state</div>
            </template>
          </HLDraggableElement>
          <HLDraggableElement id="draggable-dragging" :is-dragging="true">
            <template #content>
              <div>Visual feedback for dragging state</div>
            </template>
          </HLDraggableElement>
          <HLDraggableElement id="draggable-droppable" :is-droppable="true">
            <template #content>
              <div>Visual feedback for droppable state</div>
            </template>
          </HLDraggableElement>
        </div>
      </div>

      <!-- Custom Handler Icon -->
      <div>
        <h2>Custom Handler Icon</h2>
        <HLDraggableElement id="draggable-custom-icon">
          <template #icon>
            <div class="p-2">↕️</div>
          </template>
          <template #content>
            <div>Custom drag handler icon</div>
          </template>
        </HLDraggableElement>
      </div>
    </HLSpace>
  </div>
</template>
