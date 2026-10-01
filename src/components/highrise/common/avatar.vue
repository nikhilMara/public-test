<script setup lang="ts">
import {
  HLAvatar,
  HLBadge,
  HLInput,
  HLInputNumber,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// Initialize eventLog as a reactive reference
const avatarSize = ref(80)
const badgeSize = ref(24)
const avatarName = ref('Nikhil Mara')
const imageUrl = ref('https://picsum.photos/id/237/200/300')
</script>

<template>
  <div>
    <p>
      Atomic avatar element that displays either an image, initials, or a
      fallback icon.
    </p>

    <div class="!mt-4"></div>
    ## Default
    <div class="!mt-4"></div>
    <button>Hello world</button>

    <HLAvatar id="example-avatar-default">CM</HLAvatar>

    <div class="!mt-4"></div>
    ## All Sizes
    <div class="!mt-4"></div>
    <HLSpace vertical>
      <HLSpace align="center" item-style="display: flex">
        <HLAvatar id="example-avatar-r-2xl" size="2xl">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-xl" size="xl">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-lg" size="lg">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-md" size="md">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-sm" size="sm">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-xs" size="xs">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-2xs" size="2xs">CM</HLAvatar>
        <HLAvatar id="example-avatar-r-3xs" size="3xs">CM</HLAvatar>
      </HLSpace>
      <HLSpace align="center" item-style="display: flex">
        <HLAvatar id="example-avatar-2xl" :round="false" size="2xl"
          >CM</HLAvatar
        >
        <HLAvatar id="example-avatar-xl" :round="false" size="xl">CM</HLAvatar>
        <HLAvatar id="example-avatar-lg" :round="false" size="lg">CM</HLAvatar>
        <HLAvatar id="example-avatar-md" :round="false" size="md">CM</HLAvatar>
        <HLAvatar id="example-avatar-sm" :round="false" size="sm">CM</HLAvatar>
        <HLAvatar id="example-avatar-xs" :round="false" size="xs">CM</HLAvatar>
        <HLAvatar id="example-avatar-2xs" :round="false" size="2xs"
          >CM</HLAvatar
        >
        <HLAvatar id="example-avatar-3xs" :round="false" size="3xs"
          >CM</HLAvatar
        >
      </HLSpace>
    </HLSpace>
    <div class="!mt-4"></div>
    ## Avatar with Initials
    <div class="!mt-4"></div>
    <HLSpace align="center" item-style="display: flex">
      <HLAvatar
        id="example-avatar-initials-2xl"
        size="2xl"
        name="John Doe"
      ></HLAvatar>
      <HLAvatar
        id="example-avatar-initials-xl"
        size="xl"
        name="Alice Smith"
      ></HLAvatar>
      <HLAvatar
        id="example-avatar-initials-lg"
        size="lg"
        name="Robert Johnson"
      ></HLAvatar>
    </HLSpace>
    <HLSpace align="center" item-style="display: flex">
      <HLAvatar
        id="example-avatar-image-2xl"
        size="2xl"
        src="https://picsum.photos/seed/FeB6P/640/480"
        :imgProps="{
          'aria-label':
            'old rusted car in an open field in a cloudy background',
        }"
        @error="() => console.log('GUIPG', 'Image failed to load')"
      />
      <HLAvatar
        id="example-avatar-image-fallback"
        size="2xl"
        src="invalid-url.jpg"
        :imgProps="{
          'aria-label': 'invalid image url',
        }"
        name="John Doe"
      />
    </HLSpace>
    <div class="!mt-4"></div>
    ## Avatar with Status Indicator
    <div class="!mt-4"></div>
    <HLBadge
      size="lg"
      dot
      :offset="[-10, 10]"
      id="example-avatar-indicator-2xl"
    >
      <HLAvatar size="2xl">CM</HLAvatar>
    </HLBadge>

    <div class="!mt-4"></div>
    ## Avatar with Badge
    <div class="flex p-2 gap-2">
      avatar:
      <HLInputNumber v-model:value="avatarSize" id="input-number" />
      Badge:
      <HLInputNumber v-model:value="badgeSize" id="input-number" />
    </div>
    <div class="!mt-4"></div>
    <HLBadge
      size="custom"
      dot
      :offset="[-10, 10]"
      id="example-avatar-indicator-2xl"
    >
      <HLAvatar
        :size="avatarSize"
        src="https://picsum.photos/seed/FeB6P/640/480"
        :imgProps="{
          'aria-label':
            'old rusted car in an open field in a cloudy background',
        }"
      ></HLAvatar>
      <template #value>
        <div
          class="bg-black rounded-full"
          :style="{ width: badgeSize + 'px', height: badgeSize + 'px' }"
        ></div>
      </template>
    </HLBadge>
    <div class="!mt-4"></div>
    <h3>Avatar with Image</h3>
    <div class="flex p-2 gap-2">
      <HLInput
        id="name"
        v-model:model-value="avatarName"
        placeholder="Name"
      ></HLInput>
      <HLInput
        id="image"
        v-model:model-value="imageUrl"
        placeholder="Image URL"
      ></HLInput>
    </div>
    <div class="!mt-4"></div>
    <HLAvatar size="sm" :src="imageUrl" :name="avatarName"></HLAvatar>
  </div>
</template>
