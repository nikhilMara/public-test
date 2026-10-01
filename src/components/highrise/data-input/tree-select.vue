<script setup lang="ts">
import {
  ActivityHeartIcon,
  Star01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAvatar,
  HLEllipsis,
  HLIcon,
  HLSpace,
  HLTag,
  HLText,
  HLTreeSelect,
} from '@gohighlevel/highrise'
import { h, inject, ref } from 'vue'

const selectedValue = ref(null)
const multipleValue = ref([])
const cascadeValue = ref(null)
const maxTagsValue = ref(null)

const direction = inject<string>('dir') as 'ltr' | 'rtl'
const options = [
  {
    label: 'Rubber Soul',
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/luffy-with-his-straw-hat.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    key: 'Rubber Soul',
    children: [
      {
        label: "Everybody's Got Something to Hide Except Me and My Monkey",
        description:
          'Rubber Soul is the eighth studio album by the English rock band the Beatles, released on 22 October 1965 by Parlophone in the United Kingdom and Capitol Records in the United States. It was the first Beatles album to be released in the United States, and the first to be released in the United Kingdom after the band had disbanded. It was the first Beatles album to be released in the United States, and the first to be released in the United Kingdom after the band had disbanded.',
        key: "Everybody's Got Something to Hide Except Me and My Monkey",
        src: 'https://picsum.photos/seed/FeB6P/640/480',
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true,
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood',
      },
      {
        label: "You Won't See",
        key: "You Won't See",
        disabled: true,
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man',
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself',
      },
      {
        label: 'The Word',
        key: 'The Word',
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true,
      },
      {
        label: 'What goes on',
        key: 'What goes on',
      },
      {
        label: 'Girl',
        key: 'Girl',
      },
      {
        label: "I'm looking through you",
        key: "I'm looking through you",
      },
      {
        label: 'In My Life',
        key: 'In My Life',
      },
      {
        label: 'Wait',
        key: 'Wait',
      },
    ],
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us',
        renderOption: () =>
          h('div', { class: 'flex items-center gap-1 w-full' }, [
            h(HLIcon, { size: 14, id: 'kd' }, Star01Icon),
            h(
              'div',
              {
                class: 'text-sm font-medium',
                style: 'width: 24px; height: 24px;',
              },
              h(HLAvatar, { name: 'John Doe' }, null)
            ),
            h('div', { class: 'flex flex-col gap-0.5 w-full' }, [
              h('div', { class: 'flex justify-between w-full' }, [
                h(
                  HLText,
                  {
                    style: 'color:var(--gray-700)',
                    size: 'md',
                    weight: 'regular',
                  },
                  'John Doe'
                ),
                h(
                  HLTag,
                  {
                    class: 'text-sm font-medium',
                    size: 'xs',
                    bordered: false,
                    color: 'rose',
                    round: true,
                  },
                  {
                    default: () => 'Tag',
                    icon: () =>
                      h(
                        HLAvatar,
                        {
                          src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/luffy-with-his-straw-hat.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
                        },
                        null
                      ),
                  }
                ),
              ]),

              h(
                HLText,
                {
                  style: 'color:var(--gray-600)',
                  size: 'xs',
                  weight: 'regular',
                },
                h(
                  HLEllipsis,
                  { lineClamp: 3 },
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem'
                )
              ),
            ]),
          ]),
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony',
        renderOption: () =>
          h('div', { class: 'flex items-center gap-1 w-full' }, [
            h(HLIcon, { size: 14 }, Star01Icon),
            h(
              'div',
              {
                class: 'text-sm font-medium',
                style: 'width: 24px; height: 24px;',
              },
              h(HLAvatar, { name: 'Dig A Pony' }, null)
            ),
            h('div', { class: 'flex flex-col gap-0.5 w-full' }, [
              h('div', { class: 'flex justify-between w-full' }, [
                h(
                  HLText,
                  {
                    style: 'color:var(--gray-700)',
                    size: 'md',
                    weight: 'regular',
                  },
                  'Dig A Pony'
                ),
                h(
                  HLTag,
                  {
                    class: 'text-sm font-medium',
                    size: 'xs',
                    bordered: false,
                    color: 'rose',
                    round: true,
                  },
                  {
                    default: () => 'Tag',
                    icon: () =>
                      h(
                        HLAvatar,
                        {
                          src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/luffy-with-his-straw-hat.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
                        },
                        null
                      ),
                  }
                ),
              ]),
              h(
                HLText,
                {
                  style: 'color:var(--gray-600)',
                  size: 'xs',
                  weight: 'regular',
                },
                h(
                  HLEllipsis,
                  { lineClamp: 3 },
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem'
                )
              ),
            ]),
            h(HLIcon, { size: 14 }, ActivityHeartIcon),
          ]),
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe',
        renderOption: () =>
          h('div', { class: 'flex items-center gap-1 w-full' }, [
            h(
              'div',
              {
                class: 'text-sm font-medium',
                style: 'width: 24px; height: 24px;',
              },
              h(HLAvatar, { name: 'Across The Universe' }, null)
            ),
            h('div', { class: 'flex flex-col gap-0.5 w-full' }, [
              h('div', { class: 'flex justify-between w-full' }, [
                h(
                  HLText,
                  {
                    style: 'color:var(--gray-700)',
                    size: 'md',
                    weight: 'regular',
                  },
                  'Across The Universe'
                ),
                h(
                  HLTag,
                  {
                    class: 'text-sm font-medium',
                    size: 'xs',
                    bordered: false,
                    color: 'rose',
                    round: true,
                  },
                  {
                    default: () => 'Tag',
                    icon: () =>
                      h(
                        HLAvatar,
                        {
                          src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/luffy-with-his-straw-hat.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
                        },
                        null
                      ),
                  }
                ),
              ]),
              h(
                HLText,
                {
                  style: 'color:var(--gray-600)',
                  size: 'xs',
                  weight: 'regular',
                },
                h(
                  HLEllipsis,
                  { lineClamp: 3 },
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem'
                )
              ),
            ]),
            h(HLIcon, { size: 14 }, ActivityHeartIcon),
          ]),
      },
      {
        label: 'Dig It',
        key: 'Dig It',
        renderOption: () =>
          h('div', { class: 'flex items-center gap-1 w-full' }, [
            h(HLIcon, { size: 14 }, Star01Icon),
            h('div', { class: 'flex flex-col gap-0.5 w-full' }, [
              h('div', { class: 'flex justify-between w-full' }, [
                h(
                  HLText,
                  {
                    style: 'color:var(--gray-700)',
                    size: 'md',
                    weight: 'regular',
                  },
                  'Dig It'
                ),
              ]),
              h('div', { class: 'flex items-center gap-1 w-full' }, [
                h(HLIcon, { size: 10 }, ActivityHeartIcon),
                h(
                  HLText,
                  {
                    style: 'color:var(--gray-600)',
                    size: 'xs',
                    weight: 'regular',
                  },
                  h(
                    HLEllipsis,
                    { lineClamp: 3 },
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem'
                  )
                ),
              ]),
            ]),
          ]),
      },
      {
        label: 'Let It Be',
        key: 'Let It Be',
      },
      {
        label: 'Maggie Mae',
        key: 'Maggie Mae',
      },
      {
        label: "I've Got A Feeling",
        key: "I've Got A Feeling",
      },
      {
        label: 'One After 909',
        key: 'One After 909',
      },
      {
        label: 'The Long And Winding Road',
        key: 'The Long And Winding Road',
      },
      {
        label: 'For You Blue',
        key: 'For You Blue',
      },
      {
        label: 'Get Back',
        key: 'Get Back',
      },
    ],
  },
  {
    label: 'Custom Render',
    key: 'Custom Render',
    renderOption: () =>
      h('div', { style: 'color:red; padding: 4px' }, 'Custom Render'),
  },
  {
    label: 'The White Album',
    key: 'The White Album',
  },
  {
    label: 'Yellow Submarine',
    key: 'Yellow Submarine',
  },
  {
    label: 'Hey Jude',
    key: 'Hey Jude',
  },
  {
    label: 'Sgt. Pepper',
    key: 'Sgt. Pepper',
  },
  {
    label: 'Revolver',
    key: 'Revolver',
  },
]

const handleChange = value => {
  selectedValue.value = value
}

const showCheckMarkValue = ref(null)

const asyncValue = ref(null)
const asyncOptions = ref([
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    depth: 1,
    isLeaf: false,
  },
])

const getChildren = option => {
  const children = []
  for (let i = 0; i <= option.depth; ++i) {
    children.push({
      label: option.label + '-' + i,
      key: option.label + '-' + i,
      depth: option.depth + 1,
      isLeaf: option.depth === 3,
    })
  }
  return children
}

const handleLoad = option => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      option.children = getChildren(option)
      resolve()
    }, 1000)
  })
}

// Infinite scrolling example
const PAGE_SIZE = 20
const TOTAL = 80
// px from the bottom at which to fetch the next page.
const SCROLL_END_THRESHOLD = 40
// A parent node is loadable (shows a switcher) but has no children yet — they
// arrive lazily via on-load when the node is expanded.
const makeParent = (i: number) => ({
  label: `Album ${i}`,
  key: `album-${i}`,
  isLeaf: false,
})

const infiniteValue = ref(null)
const loadedCount = ref(PAGE_SIZE)
const isLoadingMore = ref(false)

// Records the most recent scroll events so they are visible in the playground.
const scrollEventLog = ref<{ event: string; timestamp: string }[]>([])
const addScrollEvent = (event: string) => {
  scrollEventLog.value.unshift({
    event,
    timestamp: new Date().toLocaleTimeString(),
  })
  // Keep only the last 5 events.
  if (scrollEventLog.value.length > 5) scrollEventLog.value.pop()
}
const infiniteOptions = ref(
  Array.from({ length: PAGE_SIZE }, (_, i) => makeParent(i + 1))
)

// @scroll forwards the raw scroll event; detect the bottom yourself. Guard
// against an in-flight request and stop once everything is loaded.
const handleInfiniteScroll = (e: Event) => {
  addScrollEvent('scroll')
  const el = e.target as HTMLElement
  const nearBottom =
    el.scrollTop + el.clientHeight >= el.scrollHeight - SCROLL_END_THRESHOLD
  if (!nearBottom || isLoadingMore.value || loadedCount.value >= TOTAL) return
  addScrollEvent('load-more')
  isLoadingMore.value = true
  window.setTimeout(() => {
    const next = Math.min(loadedCount.value + PAGE_SIZE, TOTAL)
    for (let i = loadedCount.value; i < next; ++i)
      infiniteOptions.value.push(makeParent(i + 1))
    loadedCount.value = next
    isLoadingMore.value = false
  }, 600)
}

// Lazy-load children of a parent when it is expanded.
const handleInfiniteLoad = (node: any): Promise<void> =>
  new Promise(resolve => {
    window.setTimeout(() => {
      node.children = Array.from({ length: 5 }, (_, i) => ({
        label: `${node.label} — Track ${i + 1}`,
        key: `${node.key}-track-${i + 1}`,
        isLeaf: true,
      }))
      resolve()
    }, 600)
  })
</script>

<template>
  <div>
    <HLSpace vertical :size="20">
      <div>
        <h3>Default</h3>
        <HLTreeSelect
          size="sm"
          id="tree-select-default"
          :options="options"
          :value="selectedValue"
          @update:value="handleChange"
        />
      </div>
      <div>
        <h3>Multiple</h3>
        <HLTreeSelect
          size="sm"
          id="tree-select-multiple"
          multiple
          :options="options"
          :value="multipleValue"
          checkable
          @update:value="val => (multipleValue = val)"
        />
      </div>
      <div>
        <h3>Cascade</h3>
        <HLTreeSelect
          size="sm"
          id="tree-select-multiple"
          multiple
          cascade
          :options="options"
          :value="cascadeValue"
          checkable
          @update:value="val => (cascadeValue = val)"
        />
      </div>
      <div>
        <h3>Max Tags</h3>
        <HLTreeSelect
          size="sm"
          id="tree-select-max-tags"
          :options="options"
          :value="maxTagsValue"
          @update:value="val => (maxTagsValue = val)"
          multiple
          :max-tag-count="4"
        />
      </div>
      <div>
        <h3>Async Loading</h3>
        <HLTreeSelect
          id="tree-select-async"
          :options="asyncOptions"
          :value="asyncValue"
          @update:value="val => (asyncValue = val)"
          :on-load="handleLoad"
          allow-checking-not-loaded
          multiple
          checkable
          cascade
        />
      </div>
      <div>
        <h3>Check Mark</h3>
        <HLTreeSelect
          id="tree-select-async"
          :options="options"
          :value="showCheckMarkValue"
          @update:value="val => (showCheckMarkValue = val)"
          show-check-mark
        />
      </div>
      <div>
        <h3>Infinite Scrolling</h3>
        <HLTreeSelect
          size="sm"
          id="tree-select-infinite"
          :options="infiniteOptions"
          :value="infiniteValue"
          :on-load="handleInfiniteLoad"
          @scroll="handleInfiniteScroll"
          @update:value="val => (infiniteValue = val)"
        />
        <div v-if="scrollEventLog.length > 0">
          <h4>Recent Scroll Events:</h4>
          <ul>
            <li v-for="log in scrollEventLog" :key="log.timestamp">
              {{ log.event }} at {{ log.timestamp }}
            </li>
          </ul>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
