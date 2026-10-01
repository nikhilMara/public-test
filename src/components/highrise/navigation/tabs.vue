<template>
  <div>
    <HLTabs id="tabs-demo" ref="tabsDemoRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
        We support multiple payment methods including credit cards, digital
        wallets, and bank transfers. Our system ensures fast, reliable
        transactions with real-time confirmation and detailed receipts.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services! We offer a comprehensive suite of home
        services designed to make your life easier and more comfortable. Our
        services include:
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings to create the perfect automated
        environment. Our intuitive interface lets you: All settings are
        instantly synced across your devices, ensuring seamless control whether
        you're home or away. Our smart home platform adapts to your lifestyle
        while prioritizing security and energy efficiency.
      </HLTabPane>
      <HLTabPane name="pin" tab="Pin">
        Pin locations on your interactive map for easy reference and navigation.
        Our advanced mapping system allows you to: Whether you're planning a
        trip, marking business locations, or creating a custom tour guide, our
        pin system helps you keep track of all your important places efficiently
        and intuitively.
      </HLTabPane>
    </HLTabs>

    <HLTabs id="tabs-segment" type="segment" ref="tabsSegmentRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
        We support multiple payment methods including credit cards, digital
        wallets, and bank transfers. Our system ensures fast, reliable
        transactions with real-time confirmation and detailed receipts.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services! We offer a comprehensive suite of home
        services designed to make your life easier and more comfortable. Our
        services include:
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings to create the perfect automated
        environment. Our intuitive interface lets you: All settings are
        instantly synced across your devices, ensuring seamless control whether
        you're home or away. Our smart home platform adapts to your lifestyle
        while prioritizing security and energy efficiency.
      </HLTabPane>
      <HLTabPane name="pin" tab="Pin">
        Pin locations on your interactive map for easy reference and navigation.
        Our advanced mapping system allows you to: Whether you're planning a
        trip, marking business locations, or creating a custom tour guide, our
        pin system helps you keep track of all your important places efficiently
        and intuitively.
      </HLTabPane>
    </HLTabs>

    <h2>Sidebar Variants</h2>
    <HLTabs id="tabs-demo" sidebar placement="left" ref="tabsSidebarLeftRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
        We support multiple payment methods including credit cards, digital
        wallets, and bank transfers. Our system ensures fast, reliable
        transactions with real-time confirmation and detailed receipts.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services! We offer a comprehensive suite of home
        services designed to make your life easier and more comfortable. Our
        services include:
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings to create the perfect automated
        environment. Our intuitive interface lets you: All settings are
        instantly synced across your devices, ensuring seamless control whether
        you're home or away. Our smart home platform adapts to your lifestyle
        while prioritizing security and energy efficiency.
      </HLTabPane>
      <HLTabPane name="pin" tab="Pin">
        Pin locations on your interactive map for easy reference and navigation.
        Our advanced mapping system allows you to: Whether you're planning a
        trip, marking business locations, or creating a custom tour guide, our
        pin system helps you keep track of all your important places efficiently
        and intuitively.
      </HLTabPane>
    </HLTabs>

    <HLTabs
      id="tabs-segment"
      type="segment"
      placement="left"
      sidebar
      ref="tabsSegmentSidebarRef"
    >
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
        We support multiple payment methods including credit cards, digital
        wallets, and bank transfers. Our system ensures fast, reliable
        transactions with real-time confirmation and detailed receipts.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services! We offer a comprehensive suite of home
        services designed to make your life easier and more comfortable. Our
        services include:
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings to create the perfect automated
        environment. Our intuitive interface lets you: All settings are
        instantly synced across your devices, ensuring seamless control whether
        you're home or away. Our smart home platform adapts to your lifestyle
        while prioritizing security and energy efficiency.
      </HLTabPane>
      <HLTabPane name="pin" tab="Pin">
        Pin locations on your interactive map for easy reference and navigation.
        Our advanced mapping system allows you to: Whether you're planning a
        trip, marking business locations, or creating a custom tour guide, our
        pin system helps you keep track of all your important places efficiently
        and intuitively.
      </HLTabPane>
    </HLTabs>

    <div v-for="size in allSizes" :key="size" class="mb-6">
      <div style="padding-bottom: 8px">
        <strong>{{ size }}</strong>
      </div>
      <HLTabs :id="'tabs-' + size" type="segment" :size="size as HLTabsSize">
        <HLTabPane name="payment" tab="Payment">
          Experience seamless payment processing with our secure payment
          gateway.
        </HLTabPane>
        <HLTabPane name="home" tab="Home">
          Welcome to our Home Services!
        </HLTabPane>
        <HLTabPane name="configure" tab="Configure">
          Configure your smart home settings
        </HLTabPane>
        <HLTabPane name="pin" tab="Pin">
          Pin locations on your interactive map
        </HLTabPane>
      </HLTabs>
    </div>

    <HLTabs id="tabs-icons" ref="tabsIconsRef">
      <HLTabPane
        name="payment"
        :tab="
          renderTabWithIcon({
            iconOnly: false,
            tab: 'Payment',
            icon: CreditCard01Icon,
            tabSize: 'md' as HLTabsSize,
          })
        "
      >
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane
        name="configure"
        :tab="
          renderTabWithIcon({
            iconOnly: false,
            tab: 'Configure',
            icon: Tool02Icon,
            tabSize: 'md' as HLTabsSize,
          })
        "
      >
        Configure your smart home settings
      </HLTabPane>
      <HLTabPane
        name="pin"
        :tab="
          renderTabWithIcon({
            iconOnly: false,
            tab: 'Pin',
            icon: Pin02Icon,
            tabSize: 'md' as HLTabsSize,
          })
        "
      >
        Pin locations on your interactive map
      </HLTabPane>
    </HLTabs>

    <HLTabs id="tabs-left" placement="left" ref="tabsLeftRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>

    <HLTabs id="tabs-active" default-value="home" ref="tabsActiveRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>

    <HLTabs id="tabs-disabled" ref="tabsDisabledRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home" disabled>
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>

    <HLTabs
      id="tabs-arrows"
      :value="selValue"
      @update:value="updateValue"
      ref="tabsArrowsRef"
    >
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home">
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
      <template #prefix>
        <HLIcon class="m-auto px-2 w-auto" aria-label="Arrow Left Icon">
          <ArrowLeftIcon class="cursor-pointer" @click="handleClick()" />
        </HLIcon>
      </template>
      <template #suffix>
        <HLIcon class="m-auto px-2 w-auto" aria-label="Arrow Right Icon">
          <ArrowRightIcon class="cursor-pointer" @click="handleClick(false)" />
        </HLIcon>
      </template>
    </HLTabs>

    <HLTabs
      type="segment"
      placement="top"
      :max-visible-tabs="4"
      ref="tabsMaxVisibleRef"
    >
      <HLTabPane
        v-for="(tab, index) in tabArray"
        :key="index"
        :name="tab.name"
        :tab="tab.tab"
      >
        {{ tab.tab }}, {{ tab.name }}
      </HLTabPane>
      <template #overflow>
        <HLButton id="tabs-dropdown-button" size="3xs" variant="ghost">
          <template #icon>
            <DotsHorizontalIcon />
          </template>
        </HLButton>
      </template>
      <template #add-tab>
        <HLButton id="custom-slot-button" size="3xs" variant="ghost">
          <template #icon><PlusIcon /></template>
        </HLButton>
      </template>
      <template #end-actions>
        <HLButton id="end-slot-button" size="xs" variant="ghost">
          <template #iconLeft><PlaceholderIcon /></template>
          share
        </HLButton>
      </template>
      <template #custom-slot>
        <div
          id="custom-slot-content"
          class="w-full flex justify-center"
          style="backgroundcolor: var(--gray-100); border-radius: 4px"
        >
          <HLText size="md" weight="semibold">Custom Slot</HLText>
        </div>
      </template>
    </HLTabs>

    <br />
    <h4>Theme</h4>
    <HLTabs id="Tabs-offset" theme="primary" ref="tabsThemePrimaryRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home" disabled>
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>
    <br />
    <HLTabs id="Tabs-offset" theme="neutral" ref="tabsThemeNeutralRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home" disabled>
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>

    <br />
    <h4>Offset</h4>
    <div class="p-2">
      <HLInputNumber id="offset-input" v-model:value="offsetValue" />
    </div>
    <HLTabs id="Tabs-offset" :offSet="offsetValue + 'px'" ref="tabsOffsetRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home" disabled>
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>
    <br />
    <h4>No Border</h4>
    <HLTabs id="no-border" no-border ref="tabsNoBorderRef">
      <HLTabPane name="payment" tab="Payment">
        Experience seamless payment processing with our secure payment gateway.
      </HLTabPane>
      <HLTabPane name="home" tab="Home" disabled>
        Welcome to our Home Services!
      </HLTabPane>
      <HLTabPane name="configure" tab="Configure">
        Configure your smart home settings
      </HLTabPane>
    </HLTabs>

    <br />
    <h4>Custom Font Size</h4>
    <HLTabs ref="tabsCustomFontRef">
      <HLTabPane name="payment" :tab="tabRender('Payment')"
        >Payment with custom font size</HLTabPane
      >
      <HLTabPane name="home" :tab="tabRender('Home')"
        >Home with custom font size</HLTabPane
      >
      <HLTabPane name="configure" :tab="tabRender('Configure')"
        >Configure with custom font size</HLTabPane
      >
      <HLTabPane name="pin" :tab="tabRender('Pin')"
        >Pin with custom font size</HLTabPane
      >
      <HLTabPane name="song" :tab="tabRender('Song')"
        >Song with custom font size</HLTabPane
      >
    </HLTabs>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CreditCard01Icon,
  DotsHorizontalIcon,
  Pin02Icon,
  PlaceholderIcon,
  PlusIcon,
  Tool02Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLIcon,
  HLInputNumber,
  HLTabPane,
  HLTabs,
  HLText,
  renderTabWithIcon,
  type HLTabsSize,
} from '@gohighlevel/highrise'
import {
  computed,
  h,
  inject,
  nextTick,
  ref,
  watch,
  type ComputedRef,
} from 'vue'

const directionInjected = inject<ComputedRef<'ltr' | 'rtl'> | string>('dir')
const direction = computed(() =>
  typeof directionInjected === 'string'
    ? directionInjected
    : (directionInjected as ComputedRef<'ltr' | 'rtl'>).value
)

// Refs for HLTabs instances
const tabsDemoRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsSegmentRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsSidebarLeftRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsSegmentSidebarRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsIconsRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsLeftRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsActiveRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsDisabledRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsArrowsRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsMaxVisibleRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsThemePrimaryRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsThemeNeutralRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsOffsetRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsNoBorderRef = ref<InstanceType<typeof HLTabs> | null>(null)
const tabsCustomFontRef = ref<InstanceType<typeof HLTabs> | null>(null)

// Collect all tab refs
const allTabRefs = [
  tabsDemoRef,
  tabsSegmentRef,
  tabsSidebarLeftRef,
  tabsSegmentSidebarRef,
  tabsIconsRef,
  tabsLeftRef,
  tabsActiveRef,
  tabsDisabledRef,
  tabsArrowsRef,
  tabsMaxVisibleRef,
  tabsThemePrimaryRef,
  tabsThemeNeutralRef,
  tabsOffsetRef,
  tabsNoBorderRef,
  tabsCustomFontRef,
]

// Watch for direction changes and sync bar positions
watch(
  direction,
  async () => {
    await nextTick()
    allTabRefs.forEach(tabRef => {
      if (tabRef.value && typeof tabRef.value.syncBarPosition === 'function') {
        tabRef.value.syncBarPosition()
      }
    })
  },
  { immediate: false }
)

const tabRender = (tabName: string) => {
  return h(HLText, { size: '2xl', weight: 'regular' }, tabName)
}
const activeTab = ref('1')
const handleTabChange = (tabKey: string) => {
  activeTab.value = tabKey
}
const allSizes = ['sm', 'md', 'lg', 'xl', '2xl']
const offsetValue = ref(5)
const tabKeys = ['home', 'payment', 'configure']

const tabArray = [
  {
    name: 'payment',
    tab: 'Payment',
  },
  {
    name: 'home',
    tab: 'Home',
  },
  {
    name: 'configure',
    tab: 'Configure',
  },
]

const selValue = ref('payment')
const handleClick = (increment = true) => {
  const len = tabKeys.length
  const index = tabKeys.indexOf(selValue.value)
  const newIndex =
    index + (increment ? 1 : -1) < 0
      ? len - 1 // loop around in reverse
      : (index + (increment ? 1 : -1)) % len // loop around
  selValue.value = tabKeys[newIndex]
}
const updateValue = (newVal: string) => {
  selValue.value = newVal
}
</script>
