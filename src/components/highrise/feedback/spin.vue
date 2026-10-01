<script setup lang="ts">
import { HLButton, HLSpace, HLSpin } from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const loading = ref(false)
const delayedLoading = ref(false)

const startLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}

const startDelayedLoading = () => {
  delayedLoading.value = true
  setTimeout(() => {
    delayedLoading.value = false
  }, 5000)
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>Spin component for indicating loading state.</p>
        <HLSpin id="basic-spin" />
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace align="center">
          <div class="text-center">
            <h4>Small</h4>
            <HLSpin id="small-spin" size="sm" />
          </div>
          <div class="text-center">
            <h4>Medium</h4>
            <HLSpin id="medium-spin" size="md" />
          </div>
          <div class="text-center">
            <h4>Large</h4>
            <HLSpin id="large-spin" size="lg" />
          </div>
        </HLSpace>
      </div>

      <!-- With Content -->
      <div>
        <h2>With Content</h2>
        <HLSpin id="content-spin" :spinning="true">
          <div class="p-8 bg-gray-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Loading Content</h3>
            <p>This content is being overlaid with a loading spinner.</p>
            <p>The spinner will show over this content while loading.</p>
          </div>
        </HLSpin>
      </div>

      <!-- Interactive Loading -->
      <div>
        <h2>Interactive Loading</h2>
        <HLSpace vertical>
          <HLButton
            id="start-loading-btn"
            @click="startLoading"
            :disabled="loading"
          >
            {{ loading ? 'Loading...' : 'Start Loading (3s)' }}
          </HLButton>
          <HLSpin id="interactive-spin" :spinning="loading">
            <div class="p-6 bg-blue-50 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Interactive Content</h3>
              <p>Click the button above to see the loading state.</p>
              <p>This content will be covered by the spinner during loading.</p>
            </div>
          </HLSpin>
        </HLSpace>
      </div>

      <!-- Custom Description -->
      <div>
        <h2>Custom Description</h2>
        <HLSpace vertical>
          <div>
            <h3>With Description</h3>
            <HLSpin
              id="description-spin"
              description="Loading data..."
              :spinning="true"
            >
              <div class="p-6 bg-green-50 rounded-lg h-32">
                <p>Content with loading description</p>
              </div>
            </HLSpin>
          </div>
          <div>
            <h3>Custom Description</h3>
            <HLSpin
              id="custom-description-spin"
              description="Please wait while we process your request..."
              :spinning="true"
            >
              <div class="p-6 bg-yellow-50 rounded-lg h-32">
                <p>Content with custom description</p>
              </div>
            </HLSpin>
          </div>
        </HLSpace>
      </div>

      <!-- Delayed Loading -->
      <div>
        <h2>Delayed Loading</h2>
        <p>Spinner with delay to prevent flickering on fast operations.</p>
        <HLButton
          id="delayed-loading-btn"
          @click="startDelayedLoading"
          :disabled="delayedLoading"
        >
          {{ delayedLoading ? 'Loading...' : 'Start Delayed Loading (5s)' }}
        </HLButton>
        <HLSpin id="delayed-spin" :spinning="delayedLoading" :delay="500">
          <div class="p-6 bg-purple-50 rounded-lg mt-4">
            <h3 class="text-lg font-semibold mb-2">Delayed Loading</h3>
            <p>This spinner has a 500ms delay before showing.</p>
            <p>This prevents flickering on fast operations.</p>
          </div>
        </HLSpin>
      </div>

      <!-- Different States -->
      <div>
        <h2>Different States</h2>
        <HLSpace vertical>
          <div>
            <h3>Not Spinning</h3>
            <HLSpin id="not-spinning" :spinning="false">
              <div class="p-4 bg-gray-100 rounded">
                <p>This content is not loading.</p>
              </div>
            </HLSpin>
          </div>
          <div>
            <h3>Spinning</h3>
            <HLSpin id="spinning" :spinning="true">
              <div class="p-4 bg-gray-100 rounded">
                <p>This content is loading.</p>
              </div>
            </HLSpin>
          </div>
        </HLSpace>
      </div>

      <!-- Standalone Spinners -->
      <div>
        <h2>Standalone Spinners</h2>
        <p>Spinners without content overlay.</p>
        <HLSpace>
          <div class="text-center">
            <HLSpin id="standalone-sm" size="sm" />
            <p class="text-sm mt-2">Small</p>
          </div>
          <div class="text-center">
            <HLSpin id="standalone-md" size="md" />
            <p class="text-sm mt-2">Medium</p>
          </div>
          <div class="text-center">
            <HLSpin id="standalone-lg" size="lg" />
            <p class="text-sm mt-2">Large</p>
          </div>
        </HLSpace>
      </div>

      <!-- Custom Spinner -->
      <div>
        <h2>Custom Spinner</h2>
        <p>Spinner with custom indicator.</p>
        <HLSpin id="custom-spinner" :spinning="true">
          <template #indicator>
            <div class="animate-pulse">
              <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
          </template>
          <div class="p-6 bg-indigo-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Custom Spinner</h3>
            <p>
              This uses a custom loading indicator instead of the default
              spinner.
            </p>
          </div>
        </HLSpin>
      </div>

      <!-- Multiple Loading States -->
      <div>
        <h2>Multiple Loading States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HLSpin
            id="card1-spin"
            :spinning="true"
            description="Loading user data..."
          >
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h4 class="font-semibold">User Profile</h4>
              <p class="text-sm text-gray-600">Loading user information...</p>
            </div>
          </HLSpin>

          <HLSpin id="card2-spin" :spinning="false">
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h4 class="font-semibold">Settings</h4>
              <p class="text-sm text-gray-600">Settings loaded successfully.</p>
            </div>
          </HLSpin>

          <HLSpin id="card3-spin" :spinning="true" size="sm">
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h4 class="font-semibold">Notifications</h4>
              <p class="text-sm text-gray-600">Fetching notifications...</p>
            </div>
          </HLSpin>

          <HLSpin id="card4-spin" :spinning="true" description="Syncing...">
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h4 class="font-semibold">Data Sync</h4>
              <p class="text-sm text-gray-600">Synchronizing with server...</p>
            </div>
          </HLSpin>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
