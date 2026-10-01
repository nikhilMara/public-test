<script setup lang="ts">
import {
  HLButton,
  HLSkeleton,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'
const direction = inject<string>('dir') as 'ltr' | 'rtl'

const loading = ref(true)

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>Skeleton component for showing loading placeholders.</p>
        <HLSkeleton id="basic-skeleton" />
      </div>

      <!-- Different Shapes -->
      <div>
        <h2>Different Shapes</h2>
        <HLSpace vertical>
          <div>
            <h3>Rectangle (Default)</h3>
            <HLSkeleton id="rectangle-skeleton" shape="rectangle" />
          </div>
          <div>
            <h3>Circle</h3>
            <HLSkeleton
              id="circle-skeleton"
              shape="circle"
              width="60px"
              height="60px"
            />
          </div>
          <div>
            <h3>Round</h3>
            <HLSkeleton
              id="round-skeleton"
              shape="round"
              width="100px"
              height="30px"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Small</h3>
            <HLSkeleton id="small-skeleton" width="200px" height="20px" />
          </div>
          <div>
            <h3>Medium</h3>
            <HLSkeleton id="medium-skeleton" width="300px" height="30px" />
          </div>
          <div>
            <h3>Large</h3>
            <HLSkeleton id="large-skeleton" width="400px" height="40px" />
          </div>
        </HLSpace>
      </div>

      <!-- Multiple Lines -->
      <div>
        <h2>Multiple Lines</h2>
        <HLSpace vertical>
          <HLSkeleton id="line1-skeleton" width="100%" height="20px" />
          <HLSkeleton id="line2-skeleton" width="80%" height="20px" />
          <HLSkeleton id="line3-skeleton" width="60%" height="20px" />
        </HLSpace>
      </div>

      <!-- Avatar with Text -->
      <div>
        <h2>Avatar with Text</h2>
        <div class="flex items-start gap-3">
          <HLSkeleton
            id="avatar-skeleton"
            shape="circle"
            width="50px"
            height="50px"
          />
          <div class="flex-1">
            <HLSkeleton id="name-skeleton" width="150px" height="20px" />
            <HLSkeleton
              id="subtitle-skeleton"
              width="100px"
              height="16px"
              style="margin-top: 8px"
            />
          </div>
        </div>
      </div>

      <!-- Card Layout -->
      <div>
        <h2>Card Layout</h2>
        <div class="border rounded-lg p-4 max-w-sm">
          <HLSkeleton id="card-image-skeleton" width="100%" height="200px" />
          <div class="mt-4">
            <HLSkeleton id="card-title-skeleton" width="80%" height="24px" />
            <HLSkeleton
              id="card-subtitle-skeleton"
              width="60%"
              height="16px"
              style="margin-top: 8px"
            />
            <div class="mt-4">
              <HLSkeleton id="card-line1-skeleton" width="100%" height="14px" />
              <HLSkeleton
                id="card-line2-skeleton"
                width="90%"
                height="14px"
                style="margin-top: 6px"
              />
              <HLSkeleton
                id="card-line3-skeleton"
                width="70%"
                height="14px"
                style="margin-top: 6px"
              />
            </div>
            <div class="flex gap-2 mt-4">
              <HLSkeleton
                id="card-btn1-skeleton"
                width="80px"
                height="32px"
                shape="round"
              />
              <HLSkeleton
                id="card-btn2-skeleton"
                width="80px"
                height="32px"
                shape="round"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- List Items -->
      <div>
        <h2>List Items</h2>
        <div class="space-y-4">
          <div
            v-for="i in 3"
            :key="i"
            class="flex items-center gap-3 p-3 border rounded"
          >
            <HLSkeleton
              :id="`list-avatar-${i}-skeleton`"
              shape="circle"
              width="40px"
              height="40px"
            />
            <div class="flex-1">
              <HLSkeleton
                :id="`list-title-${i}-skeleton`"
                width="200px"
                height="18px"
              />
              <HLSkeleton
                :id="`list-desc-${i}-skeleton`"
                width="150px"
                height="14px"
                style="margin-top: 6px"
              />
            </div>
            <HLSkeleton
              :id="`list-action-${i}-skeleton`"
              width="60px"
              height="24px"
              shape="round"
            />
          </div>
        </div>
      </div>

      <!-- Interactive Loading -->
      <div>
        <h2>Interactive Loading</h2>
        <HLButton
          id="toggle-loading-btn"
          @click="toggleLoading"
          style="margin-bottom: 1rem"
        >
          {{ loading ? 'Show Content' : 'Show Skeleton' }}
        </HLButton>

        <div v-if="loading" class="space-y-4">
          <div class="flex items-start gap-3">
            <HLSkeleton
              id="interactive-avatar-skeleton"
              shape="circle"
              width="60px"
              height="60px"
            />
            <div class="flex-1">
              <HLSkeleton
                id="interactive-name-skeleton"
                width="180px"
                height="22px"
              />
              <HLSkeleton
                id="interactive-role-skeleton"
                width="120px"
                height="18px"
                style="margin-top: 6px"
              />
              <HLSkeleton
                id="interactive-email-skeleton"
                width="200px"
                height="16px"
                style="margin-top: 6px"
              />
            </div>
          </div>
          <div class="mt-6">
            <HLSkeleton
              id="interactive-content1-skeleton"
              width="100%"
              height="16px"
            />
            <HLSkeleton
              id="interactive-content2-skeleton"
              width="95%"
              height="16px"
              style="margin-top: 8px"
            />
            <HLSkeleton
              id="interactive-content3-skeleton"
              width="85%"
              height="16px"
              style="margin-top: 8px"
            />
            <HLSkeleton
              id="interactive-content4-skeleton"
              width="75%"
              height="16px"
              style="margin-top: 8px"
            />
          </div>
        </div>

        <div v-else class="space-y-4">
          <div class="flex items-start gap-3">
            <img
              src="https://picsum.photos/60/60"
              aria-label="User"
              class="w-15 h-15 rounded-full"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold">John Doe</h3>
              <p class="text-gray-600">Senior Developer</p>
              <p class="text-sm text-gray-500">john.doe@example.com</p>
            </div>
          </div>
          <div class="mt-6">
            <p>
              This is the actual content that would be shown after loading is
              complete.
            </p>
            <p>
              The skeleton provides a visual placeholder while the real content
              is being fetched.
            </p>
            <p>
              It helps improve the perceived performance of your application.
            </p>
            <p>Users see something immediately instead of a blank screen.</p>
          </div>
        </div>
      </div>

      <!-- Table Skeleton -->
      <div>
        <h2>Table Skeleton</h2>
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-gray-50 p-3 border-b">
            <div class="flex gap-4">
              <HLSkeleton
                id="table-header1-skeleton"
                width="100px"
                height="16px"
              />
              <HLSkeleton
                id="table-header2-skeleton"
                width="150px"
                height="16px"
              />
              <HLSkeleton
                id="table-header3-skeleton"
                width="120px"
                height="16px"
              />
              <HLSkeleton
                id="table-header4-skeleton"
                width="80px"
                height="16px"
              />
            </div>
          </div>
          <div v-for="i in 4" :key="i" class="p-3 border-b last:border-b-0">
            <div class="flex gap-4 items-center">
              <HLSkeleton
                :id="`table-cell1-${i}-skeleton`"
                width="100px"
                height="14px"
              />
              <HLSkeleton
                :id="`table-cell2-${i}-skeleton`"
                width="150px"
                height="14px"
              />
              <HLSkeleton
                :id="`table-cell3-${i}-skeleton`"
                width="120px"
                height="14px"
              />
              <HLSkeleton
                :id="`table-cell4-${i}-skeleton`"
                width="60px"
                height="24px"
                shape="round"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Different Animation Speeds -->
      <div>
        <h2>Different Animation Speeds</h2>
        <HLSpace vertical>
          <div>
            <h3>Slow Animation</h3>
            <HLSkeleton
              id="slow-skeleton"
              width="300px"
              height="20px"
              :animation-duration="3000"
            />
          </div>
          <div>
            <h3>Normal Animation</h3>
            <HLSkeleton id="normal-skeleton" width="300px" height="20px" />
          </div>
          <div>
            <h3>Fast Animation</h3>
            <HLSkeleton
              id="fast-skeleton"
              width="300px"
              height="20px"
              :animation-duration="800"
            />
          </div>
          <div>
            <h3>No Animation</h3>
            <HLSkeleton
              id="static-skeleton"
              width="300px"
              height="20px"
              :animated="false"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Complex Layout -->
      <div>
        <h2>Complex Layout</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <HLSkeleton
              id="complex-title-skeleton"
              width="200px"
              height="28px"
            />
            <div class="flex items-center gap-3">
              <HLSkeleton
                id="complex-avatar-skeleton"
                shape="circle"
                width="40px"
                height="40px"
              />
              <div class="flex-1">
                <HLSkeleton
                  id="complex-author-skeleton"
                  width="120px"
                  height="16px"
                />
                <HLSkeleton
                  id="complex-date-skeleton"
                  width="80px"
                  height="14px"
                  style="margin-top: 4px"
                />
              </div>
            </div>
            <div class="space-y-2">
              <HLSkeleton
                id="complex-line1-skeleton"
                width="100%"
                height="14px"
              />
              <HLSkeleton
                id="complex-line2-skeleton"
                width="95%"
                height="14px"
              />
              <HLSkeleton
                id="complex-line3-skeleton"
                width="88%"
                height="14px"
              />
              <HLSkeleton
                id="complex-line4-skeleton"
                width="92%"
                height="14px"
              />
            </div>
          </div>
          <div>
            <HLSkeleton
              id="complex-image-skeleton"
              width="100%"
              height="250px"
            />
            <div class="flex gap-2 mt-3">
              <HLSkeleton
                id="complex-tag1-skeleton"
                width="60px"
                height="24px"
                shape="round"
              />
              <HLSkeleton
                id="complex-tag2-skeleton"
                width="80px"
                height="24px"
                shape="round"
              />
              <HLSkeleton
                id="complex-tag3-skeleton"
                width="70px"
                height="24px"
                shape="round"
              />
            </div>
          </div>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
