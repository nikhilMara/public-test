<script setup lang="ts">
import { inject } from 'vue'

const gradients = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const colorGroups = [
  {
    title: 'Base Colors',
    colors: ['base'],
  },
  {
    title: 'Brand Colors',
    colors: ['primary'],
  },
  {
    title: 'Semantic Colors',
    colors: ['error', 'success', 'warning'],
  },
  {
    title: 'Gray Scales',
    colors: [
      'gray-blue',
      'gray-cool',
      'gray-iron',
      'gray-modern',
      'gray-neutral',
      'gray-true',
      'gray-warm',
      'gray',
    ],
  },
  {
    title: 'Blue Variants',
    colors: ['blue-dark', 'blue-light', 'blue', 'cyan', 'indigo'],
  },
  {
    title: 'Purple Variants',
    colors: ['fuchsia', 'purple', 'violet'],
  },
  {
    title: 'Warm Colors',
    colors: ['orange-dark', 'orange', 'pink', 'rose', 'yellow'],
  },
  {
    title: 'Nature Colors',
    colors: ['green-light', 'green', 'moss', 'teal'],
  },
]

const baseColors = {
  white: '#ffffff',
  black: '#000000',
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <template v-for="group in colorGroups" :key="group.title">
      <h3>{{ group.title }}</h3>
      <div v-for="baseColor in group.colors" :key="baseColor">
        <template v-if="baseColor === 'base'">
          <div class="flex gap-4">
            <div class="text-center">
              <div
                :style="{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--base-white)',
                  borderRadius: '4px',
                  marginBottom: '4px',
                  border: '1px solid #e5e7eb',
                }"
              ></div>
              <div class="text-xs text-left">White</div>
              <div class="text-xs text-gray-500">var(--base-white)</div>
            </div>
            <div class="text-center">
              <div
                :style="{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--base-black)',
                  borderRadius: '4px',
                  marginBottom: '4px',
                }"
              ></div>
              <div class="text-xs text-left">Black</div>
              <div class="text-xs text-gray-500">var(--base-black)</div>
            </div>
          </div>
        </template>
        <template v-else>
          <h4 class="text-sm font-medium capitalize">
            {{ baseColor.replace('-', ' ') }}
          </h4>
          <div class="text-xs text-gray-500 pb-4">
            Usage: <code>var(--{{ baseColor }}-{gradient})</code>
          </div>
          <div class="flex gap-4">
            <div
              v-for="gradient in gradients"
              :key="gradient"
              class="text-center"
            >
              <div
                :style="{
                  width: '40px',
                  height: '40px',
                  backgroundColor: `var(--${baseColor}-${gradient})`,
                  borderRadius: '4px',
                  marginBottom: '4px',
                  border: gradient <= 100 ? '1px solid #e5e7eb' : 'none',
                }"
              ></div>
              <div class="text-xs">{{ gradient }}</div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
