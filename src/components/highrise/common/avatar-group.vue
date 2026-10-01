<script setup lang="ts">
import { PlusIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAvatarGroup,
  type HLAvatarProps,
} from '@gohighlevel/highrise'

import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const options = [
  {
    name: 'Zenin Toji',
    imgProps: { 'aria-label': 'Zenin Toji' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/02/jujutsu-kaisen-toji.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
    offset: [-6, 36],
    size: 'xs',
    color: 'red',
    border: true,
  },
  {
    name: 'Itadori Yuuji',
    imgProps: { 'aria-label': 'Itadori Yuuji' },
    src: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/04/jujutsu-kaisen-jin-itadori-family-tree.png',
    objectFit: 'cover',
    offset: [-6, 36],
    size: 'xs',
    color: 'green',
    border: true,
  },
  {
    name: 'Gojo Satoru',
    imgProps: { 'aria-label': 'Gojo Satoru' },
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
    offset: [-6, 36],
    size: 'xs',
    color: 'blue',
    border: true,
  },
]

const optionsForScroll: Partial<HLAvatarProps>[] = [
  {
    name: 'Nico Robin',
    imgProps: { 'aria-label': 'Nico Robin' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/10/Monster-Hunter-World-Hadouken-Only-Challenge.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Zenin Toji',
    imgProps: { 'aria-label': 'Zenin Toji' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/02/jujutsu-kaisen-toji.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Itadori Yuuji',
    imgProps: { 'aria-label': 'Itadori Yuuji' },
    src: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/04/jujutsu-kaisen-jin-itadori-family-tree.png',
    objectFit: 'cover',
  },
  {
    name: 'Gojo Satoru',
    imgProps: { 'aria-label': 'Gojo Satoru' },
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
  },
  {
    // name: 'Gakuganji',
    imgProps: { 'aria-label': 'Gakuganji' },
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/yoshinobu-principal.jpg',
    objectFit: 'cover',
  },
  {
    name: 'Todo Aoi',
    imgProps: { 'aria-label': 'Todo Aoi' },
    src: 'https://i.pinimg.com/736x/f3/fa/4f/f3fa4ff433d083e8a6e7974dde041162.jpg',
    objectFit: 'cover',
  },
  {
    name: 'Monkey D. Luffy - Pirate King',
    imgProps: { 'aria-label': 'Monkey D. Luffy - Pirate King' },
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/luffy-with-his-straw-hat.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
  },
  {
    name: 'Zenin Maki',
    imgProps: { 'aria-label': 'Zenin Maki' },
    src: 'https://i.pinimg.com/736x/76/99/81/769981e8c3ad0e4dc0ba029d831aef34.jpg',
    objectFit: 'cover',
  },
  {
    name: 'Zoro',
    imgProps: { 'aria-label': 'Zoro' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Nami',
    imgProps: { 'aria-label': 'Nami' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/08/gta-6-leak-realistic-details.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Sanji',
    imgProps: { 'aria-label': 'Sanji' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/09/Marvel-Rivals-Blade.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Franky',
    imgProps: { 'aria-label': 'Franky' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/09/delta-force-uluru-operator.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Brook',
    imgProps: { 'aria-label': 'Brook' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/10/Monster-Hunter-World-Hadouken-Only-Challenge.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Nico Robin - The Devil',
    imgProps: { 'aria-label': 'Nico Robin - The Devil' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/10/Monster-Hunter-World-Hadouken-Only-Challenge.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
]

const customBadgeOptions: Partial<HLAvatarProps>[] = [
  {
    name: 'Zenin Toji',
    imgProps: { 'aria-label': 'Zenin Toji' },
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/02/jujutsu-kaisen-toji.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
    type: 'error',
    offset: [-6, 36],
    size: 'xs',
    value: 7,
    dot: false,
    color: 'error',
    border: true,
  },
  {
    name: 'Itadori Yuuji',
    imgProps: { 'aria-label': 'Itadori Yuuji' },
    src: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/04/jujutsu-kaisen-jin-itadori-family-tree.png',
    objectFit: 'cover',
    type: 'success',
    offset: [-6, 36],
    size: 'xs',
    value: '!',
    dot: false,
    color: 'success',
    border: true,
  },
  {
    name: 'Gojo Satoru',
    imgProps: { 'aria-label': 'Gojo Satoru' },
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
    type: 'info',
    offset: [-6, 36],
    size: 'xs',
    value: '+',
    dot: false,
    color: 'blue',
    border: true,
  },
]

const events = ref<any[]>([])
const onAction = () => {
  events.value.push({
    name: '@on-action',
    timestamp: new Date().toLocaleTimeString(),
  })
}
</script>

<template>
  <div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="3xs"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="2xs"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="xs"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="sm"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="action-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
      stacked
      tooltip
      :max="2"
      action
      @on-action="onAction"
    >
      <template #action>
        <PlusIcon />
      </template>
    </HLAvatarGroup>
    <div class="mt-4 text-sm space-y-2">
      <div v-for="(event, index) in events" :key="index" class="text-gray-500">
        {{ event.timestamp }} - {{ event.name }}
      </div>
      <div v-if="!events.length" class="text-gray-400">No events yet</div>
    </div>
    <div class="!mt-4">Stacked</div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="3xs"
      stacked
      tooltip
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="2xs"
      stacked
      tooltip
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="xs"
      stacked
      tooltip
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="sm"
      stacked
      tooltip
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="basic-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
      stacked
      tooltip
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="tooltip-light-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
      stacked
      tooltip
      tooltipTheme="light"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="max-light-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
      stacked
      tooltip
      :max="2"
      overflowTheme="light"
      tooltipTheme="light"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="max-dark-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
      stacked
      tooltip
      :max="2"
      overflowTheme="dark"
      tooltipTheme="dark"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="scroll-avatar-group"
      :options="optionsForScroll as unknown as HLAvatarProps[]"
      size="md"
      stacked
      tooltip
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="status-avatar-group"
      :options="options as unknown as HLAvatarProps[]"
      size="md"
      :stacked="false"
      tooltip
      :status-indicator="true"
    />
    <div class="!mt-4"></div>
    <HLAvatarGroup
      id="custom-status-avatar-group"
      :options="customBadgeOptions as unknown as HLAvatarProps[]"
      size="md"
      :stacked="false"
      tooltip
      :status-indicator="true"
    />
    <div class="!mt-4"></div>
  </div>
</template>
