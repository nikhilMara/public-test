<template>
  <div>
    <!-- Default Example -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Default</h2>

      <div class="flex items-center gap-4">
        <HLProgressInline :percentage="60" type="pie" />
        <HLProgressInline :percentage="60" type="donut" />
      </div>
    </section>

    <!-- Status Colors -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Status Colors</h2>
      <div class="space-y-4">
        <!-- Pie Status Variants -->
        <div class="flex items-center gap-6 flex-wrap">
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="60" type="pie" status="default" />
            <span class="text-xs text-gray-600">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="90" type="pie" status="success" />
            <span class="text-xs text-gray-600">Success</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="25" type="pie" status="error" />
            <span class="text-xs text-gray-600">Error</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="50" type="pie" status="warning" />
            <span class="text-xs text-gray-600">Warning</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="70" type="pie" status="info" />
            <span class="text-xs text-gray-600">Info</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="40" type="pie" status="neutral" />
            <span class="text-xs text-gray-600">Neutral</span>
          </div>
        </div>

        <!-- Donut Status Variants -->
        <div class="flex items-center gap-6 flex-wrap">
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="60" type="donut" status="default" />
            <span class="text-xs text-gray-600">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="90" type="donut" status="success" />
            <span class="text-xs text-gray-600">Success</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="25" type="donut" status="error" />
            <span class="text-xs text-gray-600">Error</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="50" type="donut" status="warning" />
            <span class="text-xs text-gray-600">Warning</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="70" type="donut" status="info" />
            <span class="text-xs text-gray-600">Info</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline :percentage="40" type="donut" status="neutral" />
            <span class="text-xs text-gray-600">Neutral</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Colors -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Custom Colors</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4 flex-wrap">
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline
              :percentage="65"
              type="pie"
              color="var(--purple-600)"
              rail-color="var(--purple-200)"
            />
            <span class="text-xs text-gray-600">Custom Fill</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <HLProgressInline
              :percentage="75"
              type="donut"
              color="var(--purple-600)"
              rail-color="var(--purple-200)"
            />
            <span class="text-xs text-gray-600">Custom Rail Color</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Animated Example -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Animated Example</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <HLProgressInline
            :percentage="animatedPercentage"
            type="pie"
            status="info"
          />
          <HLProgressInline
            :percentage="animatedPercentage"
            type="donut"
            status="success"
          />
          <span class="text-sm font-medium">{{ animatedPercentage }}%</span>
        </div>
        <div class="flex gap-2">
          <button
            class="px-3 py-1 text-sm font-medium text-white bg-primary-600 rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            @click="handleStartAnimation"
          >
            Start
          </button>
          <button
            class="px-3 py-1 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            @click="handleStopAnimation"
          >
            Stop
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { HLProgressInline } from '@gohighlevel/highrise'
import { inject, onUnmounted, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// For animated example
const animatedPercentage = ref(25)
const intervalId = ref<NodeJS.Timeout | null>(null)

function handleStartAnimation() {
  if (intervalId.value !== null) return

  intervalId.value = setInterval(() => {
    animatedPercentage.value += 5
    if (animatedPercentage.value >= 100) {
      animatedPercentage.value = 0
    }
  }, 200)
}

function handleStopAnimation() {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

// Cleanup interval on component unmount
onUnmounted(() => {
  handleStopAnimation()
})
</script>

<style scoped>
.progress-inline-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>
