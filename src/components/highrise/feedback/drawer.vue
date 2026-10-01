<script setup lang="ts">
import { AlertCircleIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLDrawer,
  HLDrawerContent,
  HLSectionFooter,
  HLSectionFooterItem,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'
import Select from '../data-input/select.vue'

const showDefaultDrawer = ref(false)
const showRightDrawer = ref(false)
const showTopDrawer = ref(false)
const showBottomDrawer = ref(false)
const showMaskClosableDrawer = ref(false)
const showCustomHeaderFooterDrawer = ref(false)
const showSizesDrawer = ref({
  sm: false,
  md: false,
  lg: false,
  xl: false,
})

const drawerText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>Drawer component for sliding panels from different directions.</p>
        <HLButton
          @click="showDefaultDrawer = !showDefaultDrawer"
          id="drawer-btn-default"
        >
          Open Default Drawer
        </HLButton>
        <HLDrawer
          id="example-drawer-default"
          v-model:show="showDefaultDrawer"
          :mask-closable="false"
          placement="left"
        >
          <HLDrawerContent
            id="drawer-content-default-header"
            title="Header Title"
            description="Header subtitle"
            :icon="AlertCircleIcon"
            show-header
            closable
          >
            <div class="p-4">
              <p>{{ drawerText }}</p>
            </div>
          </HLDrawerContent>
        </HLDrawer>
      </div>

      <!-- Different Placements -->
      <div>
        <h2>Different Placements</h2>
        <HLSpace>
          <HLButton
            @click="showDefaultDrawer = !showDefaultDrawer"
            id="drawer-btn-left"
          >
            Left Drawer
          </HLButton>
          <HLButton
            @click="showRightDrawer = !showRightDrawer"
            id="drawer-btn-right"
          >
            Right Drawer
          </HLButton>
          <HLButton @click="showTopDrawer = !showTopDrawer" id="drawer-btn-top">
            Top Drawer
          </HLButton>
          <HLButton
            @click="showBottomDrawer = !showBottomDrawer"
            id="drawer-btn-bottom"
          >
            Bottom Drawer
          </HLButton>
        </HLSpace>

        <!-- Placement Drawers -->
        <HLDrawer
          id="example-drawer-right"
          v-model:show="showRightDrawer"
          placement="right"
          :mask-closable="false"
        >
          <template #header>Right Drawer</template>
          <div class="p-4">
            <p>{{ drawerText }}</p>
          </div>
        </HLDrawer>

        <HLDrawer
          id="example-drawer-top"
          v-model:show="showTopDrawer"
          placement="top"
          :mask-closable="false"
        >
          <template #header>Top Drawer</template>
          <div class="p-4">
            <p>{{ drawerText.substring(0, 200) }}...</p>
          </div>
        </HLDrawer>

        <HLDrawer
          id="example-drawer-bottom"
          v-model:show="showBottomDrawer"
          placement="bottom"
          :mask-closable="false"
        >
          <template #header>Bottom Drawer</template>
          <div class="p-4">
            <p>{{ drawerText.substring(0, 200) }}...</p>
          </div>
        </HLDrawer>
      </div>

      <!-- Mask Closable -->
      <div>
        <h2>Mask Closable</h2>
        <p>
          When the mask is closable, the drawer will be closed when the mask is
          clicked.
        </p>
        <HLButton
          @click="showMaskClosableDrawer = !showMaskClosableDrawer"
          id="drawer-mask-closable-btn"
        >
          Open Mask Closable Drawer
        </HLButton>
        <HLDrawer
          id="example-mask-closable-drawer"
          v-model:show="showMaskClosableDrawer"
          maskClosable
        >
          <template #header>Mask Closable Drawer</template>
          <div class="p-4">
            <p>Click outside this drawer to close it.</p>
            <p>{{ drawerText }}</p>
          </div>
        </HLDrawer>
      </div>

      <!-- Custom Header and Footer -->
      <div>
        <h2>Custom Header and Footer</h2>
        <HLButton
          @click="showCustomHeaderFooterDrawer = !showCustomHeaderFooterDrawer"
          id="drawer-custom-btn"
        >
          Open Custom Drawer
        </HLButton>
        <HLDrawer
          id="example-custom-drawer"
          v-model:show="showCustomHeaderFooterDrawer"
          :mask-closable="false"
        >
          <template #header>
            <div class="flex items-center gap-2">
              <span class="text-lg font-semibold">Custom Header</span>
            </div>
          </template>

          <div class="p-4 flex-1">
            <p class="mb-4">
              This drawer has custom header and footer content.
            </p>
            <p>{{ drawerText }}</p>
          </div>

          <template #footer>
            <HLSectionFooter id="drawer-custom-footer">
              <HLSectionFooterItem>
                <HLButton
                  id="drawer-custom-cancel"
                  variant="secondary"
                  @click="showCustomHeaderFooterDrawer = false"
                >
                  Cancel
                </HLButton>
              </HLSectionFooterItem>
              <HLSectionFooterItem>
                <HLButton
                  id="drawer-custom-save"
                  variant="primary"
                  @click="showCustomHeaderFooterDrawer = false"
                >
                  Save Changes
                </HLButton>
              </HLSectionFooterItem>
            </HLSectionFooter>
          </template>
        </HLDrawer>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace>
          <HLButton
            @click="showSizesDrawer.sm = !showSizesDrawer.sm"
            id="drawer-size-sm-btn"
          >
            Small Drawer
          </HLButton>
          <HLButton
            @click="showSizesDrawer.md = !showSizesDrawer.md"
            id="drawer-size-md-btn"
          >
            Drawer with Select
          </HLButton>
          <HLButton
            @click="showSizesDrawer.lg = !showSizesDrawer.lg"
            id="drawer-size-lg-btn"
          >
            Large Drawer
          </HLButton>
          <HLButton
            @click="showSizesDrawer.xl = !showSizesDrawer.xl"
            id="drawer-size-xl-btn"
          >
            Extra Large Drawer
          </HLButton>
        </HLSpace>

        <!-- Size Drawer Components -->
        <HLDrawer
          id="example-drawer-sm"
          v-model:show="showSizesDrawer.sm"
          width="300px"
          :mask-closable="false"
        >
          <template #header>Small Drawer</template>
          <div class="p-4">
            <p>This is a small drawer with limited width.</p>
          </div>
        </HLDrawer>

        <HLDrawer
          id="example-drawer-md"
          v-model:show="showSizesDrawer.md"
          width="500px"
          :mask-closable="false"
        >
        <HLDrawerContent
            id="drawer-content-default-header"
            title="Header Title"
            description="Header subtitle"
            :icon="AlertCircleIcon"
            show-header
            closable
          >
            <div class="p-4">
              <p>{{ drawerText }}</p>
              <div class="p-4">
                <p>{{ drawerText.substring(0, 300) }}...</p>
                <Select />
              </div>
            </div>
          </HLDrawerContent>
        </HLDrawer>

        <HLDrawer
          id="example-drawer-lg"
          v-model:show="showSizesDrawer.lg"
          width="700px"
          :mask-closable="false"
        >
          <template #header>Large Drawer</template>
          <div class="p-4">
            <p>{{ drawerText }}</p>
          </div>
        </HLDrawer>

        <HLDrawer
          id="example-drawer-xl"
          v-model:show="showSizesDrawer.xl"
          width="900px"
          :mask-closable="false"
        >
          <template #header>Extra Large Drawer</template>
          <div class="p-4">
            <p>{{ drawerText }}</p>
            <p class="mt-4">{{ drawerText }}</p>
          </div>
        </HLDrawer>
      </div>

      <!-- No Header -->
      <div>
        <h2>No Header</h2>
        <p>Drawer without header for custom layouts.</p>
        <HLButton
          @click="showDefaultDrawer = !showDefaultDrawer"
          id="drawer-no-header-btn"
        >
          Open No Header Drawer
        </HLButton>
      </div>

      <!-- Closable -->
      <div>
        <h2>Closable Control</h2>
        <p>Control whether the drawer shows a close button.</p>
        <HLSpace>
          <HLButton
            @click="showDefaultDrawer = !showDefaultDrawer"
            id="drawer-closable-btn"
          >
            Closable Drawer
          </HLButton>
          <HLButton
            @click="showRightDrawer = !showRightDrawer"
            id="drawer-not-closable-btn"
          >
            Non-Closable Drawer
          </HLButton>
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
