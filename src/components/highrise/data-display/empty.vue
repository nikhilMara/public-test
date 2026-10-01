<script setup lang="ts">
import {
  Building01Icon,
  Building02Icon,
  PlusIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import { HLEmpty, HLSpace } from '@gohighlevel/highrise'
import { inject } from 'vue'

const handlePositiveClick = () => {
  console.log('Positive action clicked')
}

const handleNegativeClick = () => {
  console.log('Negative action clicked')
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default Empty State -->
      <div>
        <h2>Default Empty State</h2>
        <HLEmpty
          id="default-empty"
          title="No Project"
          description="Your search 'Landing page design' did not match any projects. Please try again."
          positive-text="New Project"
          negative-text="Clear Search"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Predefined Icon -->
      <div>
        <h2>With Predefined Icon</h2>
        <HLEmpty
          id="icon-empty"
          title="No Project"
          description="Your search 'Landing page design' did not match any projects. Please try again."
          size="lg"
          positive-text="New Project"
          negative-text="Clear Search"
          icon="warning"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Info Icon -->
      <div>
        <h2>With Info Icon</h2>
        <HLEmpty
          id="info-empty"
          title="No Data Available"
          description="There are currently no records to display. Try refreshing or adding new content."
          size="md"
          positive-text="Add Content"
          negative-text="Refresh"
          icon="info"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Success Icon -->
      <div>
        <h2>With Success Icon</h2>
        <HLEmpty
          id="success-empty"
          title="All Tasks Completed"
          description="Great job! You've completed all your tasks for today."
          size="lg"
          positive-text="Add New Task"
          negative-text="View Archive"
          icon="success"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Error Icon -->
      <div>
        <h2>With Error Icon</h2>
        <HLEmpty
          id="error-empty"
          title="Failed to Load Data"
          description="We encountered an error while loading your data. Please try again."
          size="md"
          positive-text="Retry"
          negative-text="Contact Support"
          icon="error"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Custom Icon -->
      <div>
        <h2>With Custom Icon</h2>
        <HLEmpty
          id="custom-icon-empty"
          title="No Project"
          description="Your search 'Landing page design' did not match any projects. Please try again."
          size="lg"
          positive-text="New Project"
          negative-text="Clear Search"
          :custom-icon="Building01Icon"
          custom-icon-color="var(--indigo-600)"
          custom-icon-bg-color="var(--indigo-100)"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Different Custom Icon Colors -->
      <div>
        <h2>Custom Icon with Different Colors</h2>
        <HLEmpty
          id="custom-icon-colors-empty"
          title="No Buildings Found"
          description="No buildings match your current search criteria. Try adjusting your filters."
          size="md"
          positive-text="Add Building"
          negative-text="Reset Filters"
          :custom-icon="Building02Icon"
          custom-icon-color="var(--green-600)"
          custom-icon-bg-color="var(--green-100)"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Custom Header -->
      <div>
        <h2>With Custom Header</h2>
        <HLEmpty
          id="custom-header-empty"
          title="No Project"
          description="Your search 'Landing page design' did not match any projects. Please try again."
          size="lg"
          positive-text="New Project"
          negative-text="Clear Search"
          icon="default"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        >
          <template #header>
            <div class="flex items-center gap-2">
              <div
                class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
              >
                <Building02Icon class="w-4 h-4 text-gray-600" />
              </div>
              <p class="text-xl font-medium">Custom Header</p>
            </div>
          </template>
        </HLEmpty>
      </div>

      <!-- Empty State with Larger Custom Header -->
      <div>
        <h2>Custom Header with Larger Icon</h2>
        <HLEmpty
          id="large-custom-header-empty"
          title="No Projects Available"
          description="You haven't created any projects yet. Start by creating your first project."
          size="lg"
          positive-text="Create Project"
          negative-text="Learn More"
          icon="default"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        >
          <template #header>
            <div
              class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100"
            >
              <Building01Icon class="w-8 h-8 text-blue-600" />
            </div>
          </template>
        </HLEmpty>
      </div>

      <!-- Empty State with Custom Actions -->
      <div>
        <h2>With Custom Actions</h2>
        <HLEmpty
          id="custom-actions-empty"
          title="No Project"
          description="Your search 'Landing page design' did not match any projects. Please try again."
          size="lg"
        >
          <template #actions>
            <div
              class="flex items-center gap-2 border-2 border-gray-300 border-solid rounded-xl px-4 cursor-pointer hover:bg-gray-200"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
              >
                <Building02Icon class="w-4 h-4 text-gray-600" />
              </div>
              <p class="text-xl font-medium">Custom Action</p>
            </div>
          </template>
        </HLEmpty>
      </div>

      <!-- Small Size Empty State -->
      <div>
        <h2>Small Size</h2>
        <HLEmpty
          id="small-empty"
          title="No Results"
          description="No items found matching your search."
          size="sm"
          positive-text="Add Item"
          negative-text="Clear"
          icon="default"
          @positive-click="handlePositiveClick"
          @negative-click="handleNegativeClick"
        />
      </div>

      <!-- Empty State with Loader -->
      <div>
        <h2>With Loader Icon</h2>
        <HLEmpty
          id="loader-empty"
          title="Loading Content"
          description="Please wait while we load your data..."
          size="md"
          positive-text=""
          negative-text=""
          icon="loader"
        />
      </div>

      <!-- Empty State without Action Buttons -->
      <div>
        <h2>Without Action Buttons</h2>
        <HLEmpty
          id="no-actions-empty"
          title="Coming Soon"
          description="This feature is currently under development and will be available soon."
          size="lg"
          icon="info"
        />
      </div>

      <!-- Empty State with Only Positive Action -->
      <div>
        <h2>Single Action Button</h2>
        <HLEmpty
          id="single-action-empty"
          title="Welcome to Your Dashboard"
          description="Get started by creating your first project."
          size="lg"
          positive-text="Get Started"
          :positive-icon="PlusIcon"
          icon="success"
          @positive-click="handlePositiveClick"
        />
      </div>
    </HLSpace>
  </div>
</template>
