<script setup lang="ts">
import { Lightning01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAvatarGroup,
  HLCheckbox,
  HLInput,
  HLInputNumber,
  HLSpace,
  HLTag,
} from '@gohighlevel/highrise'

import { inject, ref } from 'vue'

const isChecked = ref(false)
const onChecked = (val: boolean) => {
  isChecked.value = val
}
const showTag1 = ref(true)
const onCloseTag = () => {
  showTag1.value = false
}

const eventLog = ref<{ event: string; details: string; timestamp: string }[]>(
  []
)
const handleClose = (id?: string) => {
  eventLog.value.unshift({
    event: 'Tag closed',
    details: `ID: ${id}`,
    timestamp: new Date().toLocaleTimeString(),
  })
  showTag1.value = false
  // Keep only last 5 events
  if (eventLog.value.length > 5) {
    eventLog.value.pop()
  }
}

const handleChecked = (checked: boolean) => {
  isChecked.value = checked
  eventLog.value.unshift({
    event: 'Tag checked',
    details: `Checked: ${checked}`,
    timestamp: new Date().toLocaleTimeString(),
  })
  // Keep only last 5 events
  if (eventLog.value.length > 5) {
    eventLog.value.pop()
  }
}

const resetTag = () => {
  showTag1.value = true
  isChecked.value = false
  eventLog.value.unshift({
    event: 'Tag reset',
    details: 'Tag restored to initial state',
    timestamp: new Date().toLocaleTimeString(),
  })
  // Keep only last 5 events
  if (eventLog.value.length > 5) {
    eventLog.value.pop()
  }
}
const truncateEnabled = ref(true)
const maxWidthNumber = ref(100)
const sampleTagText = ref(
  'This is a sample tag text that will be truncated if it exceeds the max width'
)

const options = [
  {
    name: 'Zenin Toji',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/02/jujutsu-kaisen-toji.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Itadori Yuuji',
    src: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/04/jujutsu-kaisen-jin-itadori-family-tree.png',
    objectFit: 'cover',
  },
  {
    name: 'Gojo Satoru',
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
  },
  {
    name: 'Gakuganji',
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/yoshinobu-principal.jpg',
    objectFit: 'cover',
  },
  {
    name: 'Todo Aoi',
    src: 'https://i.pinimg.com/736x/f3/fa/4f/f3fa4ff433d083e8a6e7974dde041162.jpg',
    objectFit: 'cover',
  },
  {
    name: 'Monkey D. Luffy - Pirate King',
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/luffy-with-his-straw-hat.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
  },
  {
    name: 'Zenin Maki',
    src: 'https://i.pinimg.com/736x/76/99/81/769981e8c3ad0e4dc0ba029d831aef34.jpg',
    objectFit: 'cover',
  },
  {
    name: 'Zoro',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Nami',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/08/gta-6-leak-realistic-details.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Sanji',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/09/Marvel-Rivals-Blade.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
  {
    name: 'Franky',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/09/delta-force-uluru-operator.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
]

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLCheckbox v-model:checked="truncateEnabled" label="Truncate" />
    <HLInput type="text" v-model:modelValue="sampleTagText" />
    <HLInputNumber v-model:value="maxWidthNumber" />
    <HLTag
      id="demo-tag-1"
      size="sm"
      :truncate="truncateEnabled"
      :max-width="maxWidthNumber"
      closable
    >
      {{ sampleTagText }}
    </HLTag>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <HLTag id="example-tag" size="sm" color="gray">Your text here</HLTag>
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <div
          style="
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <HLSpace align="center" style="margin-top: 0.5rem">
            <HLTag id="size-xs-tag" closable size="xs" :count="55555">
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag id="size-sm-tag" closable size="sm" :count="55555">
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag id="size-md-tag" closable size="md" :count="55555">
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag id="size-lg-tag" closable size="lg" :count="55555">
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
          </HLSpace>
        </div>
      </div>

      <!-- With Checkbox -->
      <div>
        <h2>With Checkbox</h2>
        <div
          style="
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <HLSpace align="center" style="margin-top: 0.5rem">
            <HLTag
              id="checkbox-tag"
              @checked="onChecked"
              v-model:checked="isChecked"
              checkbox
              size="sm"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
          </HLSpace>
        </div>
      </div>

      <div>
        <h2>With Avatar Group</h2>
        <HLTag id="avatar-group-tag" size="md" round>
          <template #avatar>
            <HLAvatarGroup :options="options" stacked tooltip size="2xs" />
          </template>
          Avatar Group
        </HLTag>
      </div>
      <!-- Closable -->
      <div>
        <h2>Closable</h2>
        <HLSpace align="center">
          <HLTag
            v-if="showTag1"
            id="closable-tag"
            closable
            size="sm"
            :count="55555"
            @close="onCloseTag()"
          >
            Label 1
          </HLTag>
          <HLTag id="closable-tag1" closable size="sm" :count="55555" disabled>
            disabled
          </HLTag>
        </HLSpace>
      </div>

      <!-- With Close Icon -->
      <div>
        <h2>With Close Icon</h2>
        <div
          style="
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <HLSpace align="center" style="margin-top: 0.5rem">
            <HLTag id="close-icon-tag" closable size="sm" :count="55555">
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
          </HLSpace>
        </div>
      </div>

      <!-- Rounded -->
      <div>
        <h2>Rounded</h2>
        <HLSpace align="center">
          <HLTag id="rounded-tag" closable size="sm" :count="55555" round>
            <template #icon>
              <Lightning01Icon />
            </template>
            Label
          </HLTag>
          <HLTag
            id="rounded-borderless-tag"
            closable
            size="sm"
            :count="55555"
            round
            :bordered="false"
          >
            <template #icon>
              <Lightning01Icon />
            </template>
            Label
          </HLTag>
        </HLSpace>
      </div>

      <!-- Dropdown Type -->
      <div>
        <h2>Dropdown Type</h2>
        <HLSpace align="center">
          <HLTag id="dropdown-open-tag" size="sm" dropdown="open" round>
            <template #icon>
              <Lightning01Icon />
            </template>
            Label
          </HLTag>
          <HLTag id="dropdown-close-tag" size="sm" dropdown="close" round>
            <template #icon>
              <Lightning01Icon />
            </template>
            Label
          </HLTag>
        </HLSpace>
      </div>

      <!-- Non-interactive -->
      <div>
        <h2>Non-interactive</h2>
        <HLSpace align="center">
          <HLTag id="non-interactive-tag" size="sm" :interactive="false">
            Non-interactive Tag
          </HLTag>
          <HLTag
            id="non-interactive-round-tag"
            size="sm"
            :interactive="false"
            round
          >
            Non-interactive Round
          </HLTag>
          <HLTag id="non-interactive-icon-tag" size="sm" :interactive="false">
            <template #icon>
              <Lightning01Icon />
            </template>
            With Icon
          </HLTag>
          <HLTag
            id="non-interactive-round-icon-tag"
            size="sm"
            :interactive="false"
            round
          >
            <template #icon>
              <Lightning01Icon />
            </template>
            Round with Icon
          </HLTag>
        </HLSpace>
      </div>

      <!-- Colors - Borderless -->
      <div>
        <h2>Colors - Borderless</h2>
        <div
          style="
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <HLSpace align="center">
            <HLTag
              id="borderless-gray-tag"
              :bordered="false"
              @checked="onChecked"
              v-model:checked="isChecked"
              color="gray"
              closable
              checkbox
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag
              id="borderless-blue-tag"
              :bordered="false"
              color="blue"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag
              id="borderless-green-tag"
              :bordered="false"
              color="green"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag
              id="borderless-red-tag"
              :bordered="false"
              color="error"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
          </HLSpace>
        </div>
      </div>

      <!-- Colors - Bordered -->
      <div>
        <h2>Colors - Bordered</h2>
        <div
          style="
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <HLSpace align="center">
            <HLTag
              id="bordered-gray-tag"
              color="gray"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag
              id="bordered-blue-tag"
              color="blue"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag
              id="bordered-green-tag"
              color="green"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
            <HLTag
              id="bordered-red-tag"
              color="error"
              closable
              size="lg"
              :count="55555"
            >
              <template #icon>
                <Lightning01Icon />
              </template>
              Label
            </HLTag>
          </HLSpace>
        </div>
      </div>

      <!-- Event Testing -->
      <div>
        <h2>Event Testing</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <div>
            <HLTag
              v-if="showTag1"
              id="event-test-tag"
              closable
              checkbox
              v-model:checked="isChecked"
              @close="handleClose"
              @checked="handleChecked"
            >
              Interactive Tag
            </HLTag>
            <HLTag
              v-if="!showTag1"
              id="reset-tag"
              color="blue"
              @click="resetTag"
            >
              Reset Tag
            </HLTag>
          </div>
          <div class="text-sm">
            <p class="font-bold mb-2">Event Log:</p>
            <div v-if="eventLog.length === 0" class="text-gray-500">
              No events logged yet. Try clicking the tag or close button above.
            </div>
            <div
              v-for="(log, index) in eventLog"
              :key="index"
              class="text-gray-700"
            >
              {{ log.timestamp }}: {{ log.event }} - {{ log.details }}
            </div>
          </div>
        </div>
      </div>
    </HLSpace>
    <div class="!mt-4"></div>
    <div
      style="
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
      "
    >
      <HLSpace align="center">
        <HLTag
          id="borderless-gray-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="gray"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-blue-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="blue"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-green-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="green"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-red-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="red"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-orange-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="orange"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-bluegray-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="blueGray"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-bluelight-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="blueLight"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-crayola-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="crayola"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-indigo-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="indigo"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-purple-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="purple"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-pink-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="pink"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-rose-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="rose"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="borderless-orangedark-tag"
          :bordered="false"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="orangeDark"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
      </HLSpace>
    </div>
    <div class="!mt-4"></div>
    <div
      style="
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
      "
    >
      <HLSpace align="center">
        <HLTag
          id="bordered-gray-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="gray"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-blue-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="blue"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-green-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="green"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-red-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="red"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-orange-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="orange"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-bluegray-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="blueGray"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-bluelight-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="blueLight"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-crayola-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="crayola"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-indigo-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="indigo"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-purple-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="purple"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-pink-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="pink"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-rose-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="rose"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
        <HLTag
          id="bordered-orangedark-tag"
          @checked="onChecked"
          v-model:checked="isChecked"
          color="orangeDark"
          closable
          checkbox
          size="lg"
          :count="55555"
        >
          <template #icon>
            <Lightning01Icon />
          </template>
          Label
        </HLTag>
      </HLSpace>
    </div>
  </div>
</template>
