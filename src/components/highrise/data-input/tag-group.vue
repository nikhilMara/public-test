<script setup lang="ts">
import {
  HLAvatar,
  HLSpace,
  HLTagGroup,
  HLText,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const tagGroupRef = ref<any>(null)

// Avatar options for custom render example
const avatarDefaultValues = [
  {
    name: 'Nico Robin',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2025/01/10/Monster-Hunter-World-Hadouken-Only-Challenge.jpg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
  },
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
]

const avatarOptions = ref([
  {
    name: 'Zenin Toji',
    src: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/02/jujutsu-kaisen-toji.jpeg?width=1200&quality=60&format=auto',
    objectFit: 'cover',
    offset: [-6, 36],
    size: 'xs',
    color: 'red',
    border: true,
  },
  {
    name: 'Itadori Yuuji',
    src: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/04/jujutsu-kaisen-jin-itadori-family-tree.png',
    objectFit: 'cover',
    offset: [-6, 36],
    size: 'xs',
    color: 'green',
    border: true,
  },
  {
    name: 'Gojo Satoru',
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    objectFit: 'cover',
    offset: [-6, 36],
    size: 'xs',
    color: 'blue',
    border: true,
  },
])

const popoverAvatarOptions = ref([...avatarOptions.value])

const handleChange = (values: any[]) => {
  console.log('Tags updated:', values)
}

const handleClick = ({ event, index, tag }: any) => {
  console.log('Tag clicked:', { event, index, tag })
}

const handlePopoverClick = (option: any) => {
  if (tagGroupRef.value) {
    tagGroupRef.value.setInputValue(option)
  }
}

const handleInput = (filterString: string) => {
  popoverAvatarOptions.value = avatarOptions.value.filter(option =>
    option.name.toLowerCase().includes(filterString.toLowerCase())
  )
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default Tag Group -->
      <div>
        <h2>Default Tag Group</h2>
        <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="tag-group-default"
            :defaultValue="['Blogs', 'Websites', 'Funnels']"
            :delimiter="['enter', 'space', 'comma']"
            @update:value="handleChange"
            @click="handleClick"
          />
        </div>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Extra Small (xs)</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-xs"
                size="xs"
                :defaultValue="['Tag 1', 'Tag 2', 'Tag 3']"
                :delimiter="['enter']"
                @update:value="handleChange"
              />
            </div>
          </div>

          <div>
            <h3>Small (sm)</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-sm"
                size="sm"
                :defaultValue="['Tag 1', 'Tag 2', 'Tag 3']"
                :delimiter="['enter']"
                @update:value="handleChange"
              />
            </div>
          </div>

          <div>
            <h3>Medium (md)</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-md"
                size="md"
                :defaultValue="['Tag 1', 'Tag 2', 'Tag 3']"
                :delimiter="['enter']"
                @update:value="handleChange"
              />
            </div>
          </div>

          <div>
            <h3>Large (lg)</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-lg"
                size="lg"
                :defaultValue="['Tag 1', 'Tag 2', 'Tag 3']"
                :delimiter="['enter']"
                @update:value="handleChange"
              />
            </div>
          </div>
        </HLSpace>
      </div>

      <!-- Fixed Max Tags -->
      <div>
        <h2>Fixed Max Tags (max: 5)</h2>
        <p>Try adding more than 5 tags</p>
        <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="tag-group-fixed"
            :defaultValue="['Blogs', 'Websites', 'Funnels']"
            :max="5"
            :delimiter="['enter', 'space', 'comma']"
            @update:value="handleChange"
          />
        </div>
      </div>

      <!-- With Different Delimiters -->
      <div>
        <h2>With Different Delimiters</h2>
        <HLSpace vertical>
          <div>
            <h3>Enter only</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-enter"
                :defaultValue="['Press Enter to add']"
                :delimiter="['enter']"
                @update:value="handleChange"
              />
            </div>
          </div>

          <div>
            <h3>Space only</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-space"
                :defaultValue="['Press Space to add']"
                :delimiter="['space']"
                @update:value="handleChange"
              />
            </div>
          </div>

          <div>
            <h3>Comma only</h3>
            <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
              <HLTagGroup
                id="tag-group-comma"
                :defaultValue="['Type comma to add']"
                :delimiter="['comma']"
                @update:value="handleChange"
              />
            </div>
          </div>
        </HLSpace>
      </div>

      <!-- Truncated Tags -->
      <div>
        <h2>Truncated Tags</h2>
        <p>Long text will be truncated with ellipsis</p>
        <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="tag-group-truncated"
            :defaultValue="[
              'This is a very long tag that will be truncated',
              'Another extremely long tag name here',
              'Short tag',
            ]"
            :truncate="true"
            :maxWidth="136"
            :delimiter="['enter']"
            @update:value="handleChange"
          />
        </div>
      </div>

      <!-- Non-Interactive Tag Group -->
      <div>
        <h2>Non-Interactive Tag Group</h2>
        <p>Tags cannot be removed or edited</p>
        <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="tag-group-non-interactive"
            :defaultValue="['Read-only', 'Cannot remove', 'Cannot add']"
            :interactive="false"
            :delimiter="['enter']"
          />
        </div>
      </div>

      <!-- Responsive Max -->
      <div>
        <h2>Responsive Max</h2>
        <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="tag-group-responsive"
            :defaultValue="[
              'Tag 1',
              'Tag 2',
              'Tag 3',
              'Tag 4',
              'Tag 5',
              'Tag 6',
              'Tag 7',
              'Tag 8',
            ]"
            max="responsive"
            :delimiter="['enter']"
            @update:value="handleChange"
          />
        </div>
      </div>

      <!-- With Popover and Custom Render -->
      <div>
        <h2>With Popover and Custom Render (Avatars)</h2>
        <p>Type to filter, click to select from dropdown</p>
        <div style="width: 500px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            ref="tagGroupRef"
            id="tag-group-custom-render"
            size="sm"
            :defaultValue="avatarDefaultValues"
            :delimiter="['enter']"
            @update:value="handleChange"
            @click="handleClick"
            @input="handleInput"
          >
            <template #popover-content>
              <div class="p-2">
                <div v-if="popoverAvatarOptions.length === 0">
                  <HLText>No options found</HLText>
                </div>
                <div
                  v-else
                  v-for="option in popoverAvatarOptions"
                  :key="option.name"
                  @click="handlePopoverClick(option)"
                  class="cursor-pointer flex items-center gap-2 hover:bg-gray-100 px-1 py-1 rounded"
                >
                  <HLAvatar v-bind="option" size="3xs" />
                  <span>{{ option.name }}</span>
                </div>
              </div>
            </template>
            <template #customRender="{ tag, index }">
              {{ tag.name }}
            </template>
            <template #customRenderAvatar="{ tag, index }">
              <HLAvatar v-bind="tag" />
            </template>
          </HLTagGroup>
        </div>
      </div>

      <!-- Complete Example -->
      <div>
        <h2>Complete Example - All Features</h2>
        <div style="width: 600px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="tag-group-complete"
            size="md"
            :defaultValue="[
              'Marketing',
              'Sales',
              'Customer Support',
              'Development',
            ]"
            :max="10"
            :delimiter="['enter', 'space', 'comma']"
            :truncate="true"
            :maxWidth="150"
            @update:value="handleChange"
            @click="handleClick"
          />
        </div>
      </div>

      <div>
        <h2>Custom Colors</h2>
        <div style="width: 600px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="custom-colors-demo"
            :default-value="[
              'Nico Robin',
              'Zenin Toji',
              'Itadori Yuuji',
              'Gojo Satoru',
            ]"
            :custom-colors="['primary', 'success', 'warning', 'purple']"
          />
        </div>
      </div>

      <div>
        <h2>Colors</h2>
        <div style="width: 600px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="bordered-demo"
            :default-value="['Blogs', 'Websites', 'Funnels']"
            color="primary"
            :bordered="true"
          />
        </div>
      </div>
      <div>
        <h2>Colors Borderless</h2>
        <div style="width: 600px; border: 1px solid #ccc; padding: 4px">
          <HLTagGroup
            id="bordered-demo"
            :default-value="['Blogs', 'Websites', 'Funnels']"
            color="success"
            :bordered="false"
          />
        </div>
      </div>
    </HLSpace>
  </div>
</template>

<style scoped>
h3 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #555;
}
</style>
