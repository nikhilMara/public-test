<template>
  <HLToggle
    :label="`Tabs Type: ${tabType}`"
    checkedValue="line"
    uncheckedValue="segment"
    v-model:value="tabType"
    @update:value="val => (tabType = val)"
  />
  <div class="h-[36rem] bg-gray-100 py-4 px-2">
    <HLSidebarContainer
      ref="sidebarContainerRef"
      id="default-sidebar"
      sidebarWidth="320px"
      v-model:collapsed="collapsedRef"
    >
      <div class="p-4 h-full">
        <h1 class="m-0">Sample Sidebar-adjacent Content</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
      <template #tabs>
        <HLTabs
          :id="`just-tabs-demo-${$props.id}`"
          ref="tabsRef"
          v-model:value="selectedTab"
          sidebar
          :type="tabType as HLTabsType"
          :size="$attrs.tabSize as HLTabsSize"
          trigger="manual"
        >
          <HLTab
            name="configure-tab"
            tab-key="configure"
            tab="Configure"
            icon-only
            @click="handleTabClick('configure-tab')"
          >
            <HLIcon :size="18" aria-label="Credit Card Icon">
              <CreditCard01Icon />
            </HLIcon>
          </HLTab>
          <HLTab
            name="payment-tab"
            tab-key="payment"
            tab="Payment"
            icon-only
            @click="handleTabClick('payment-tab')"
          >
            <HLIcon :size="18" aria-label="Tool Icon">
              <Tool02Icon />
            </HLIcon>
          </HLTab>
          <HLTab
            name="pin-tab"
            tab-key="pin"
            tab="Pin"
            icon-only
            @click="handleTabClick('pin-tab')"
          >
            <HLIcon :size="18" aria-label="Pin Icon">
              <Pin02Icon />
            </HLIcon>
          </HLTab>
        </HLTabs>
      </template>
      <template #sidebar-content>
        <div class="p-4 flex flex-col gap-4 bg-white h-full justify-between">
          <HLHeaderLite
            id="header-lite-sidebar"
            title="Dragon Ball"
            subtitle="Last updated 2m ago"
            size="lg"
            :closable="true"
            @update:close="handleClose"
          />
          <div v-if="selectedTab === 'configure-tab'" class="h-full">
            <div style="font-weight: 700">Configure Tab Content</div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div v-else-if="selectedTab === 'payment-tab'" class="h-full">
            <div style="font-weight: 700">Payment Tab Content</div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div v-else-if="selectedTab === 'pin-tab'" class="h-full">
            <div style="font-weight: 700">Pin Tab Content</div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <HLSectionFooter
            id="footer-1"
            :top-padding="false"
            :bottom-padding="false"
            :horizontal-padding="false"
          >
            <HLSectionFooterItem justify="start">
              <HLButton
                id="btn-1"
                size="2xs"
                variant="text"
                link
                @click="handleClose"
                >Learn more</HLButton
              >
            </HLSectionFooterItem>
            <HLSectionFooterItem justify="end">
              <HLButton
                id="secondary"
                size="2xs"
                variant="secondary"
                @click="handleClose"
              >
                Cancel
              </HLButton>
              <HLButton
                id="primary"
                size="2xs"
                variant="primary"
                color="blue"
                @click="handleClose"
              >
                Save
              </HLButton>
            </HLSectionFooterItem>
          </HLSectionFooter>
        </div>
      </template>
    </HLSidebarContainer>
  </div>
</template>

<script setup lang="ts">
import {
  HLButton,
  HLHeaderLite,
  HLIcon,
  HLSectionFooter,
  HLSectionFooterItem,
  HLSidebarContainer,
  HLTab,
  HLTabs,
  HLToggle,
} from '@gohighlevel/highrise'

import {
  CreditCard01Icon,
  Pin02Icon,
  Tool02Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import { reactive, ref } from 'vue'

const tabType = ref('line')
const overlayPopoverProps = reactive({
  show: false,
  'on-clickoutside': () => {
    overlayPopoverProps.show = false
  },
})

const sidebarContainerRef = ref(null)
const selectedTab = ref('configure-tab')

const collapsedRef = ref(true)
const tabsRef = ref(null)

const handleTabClick = (tab: string) => {
  if (selectedTab.value === tab) collapsedRef.value = !collapsedRef.value
  else collapsedRef.value = false
  selectedTab.value = tab
  tabsRef.value?.syncBarPosition(tab)
}

const handleClose = () => {
  sidebarContainerRef.value?.inline?.closeSidebar()
}
</script>
