<script setup lang="ts">
import { faker } from '@faker-js/faker'
import {
  HLAdvancedSelect,
  HLButton,
  HLCheckbox,
  HLSpace,
} from '@gohighlevel/highrise'
import { computed, inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// ── Shared options ───────────────────────────────────────────────────

const avatarOptions = [
  {
    label: 'John Doe',
    key: '1',
    type: 'avatar',
    src: 'https://i.pravatar.cc/150?u=john',
  },
  {
    label: 'Jane Smith',
    key: '2',
    type: 'avatar',
    src: 'https://i.pravatar.cc/150?u=jane',
  },
  { label: 'Bob Wilson', key: '3', type: 'avatar' },
  {
    label: 'Alice Brown',
    key: '4',
    type: 'avatar',
    description: 'alice@example.com',
  },
  {
    label: 'Charlie Davis',
    key: '5',
    type: 'avatar',
    src: 'https://i.pravatar.cc/150?u=charlie',
  },
  { label: 'Diana Prince', key: '6', type: 'avatar', disabled: true },
  {
    label: 'Eve Johnson',
    key: '7',
    type: 'avatar',
    src: 'https://i.pravatar.cc/150?u=eve',
  },
  { label: 'Frank Miller', key: '8', type: 'avatar' },
]

const tagOptions = Array.from({ length: 10 }, (_, i) => ({
  label: faker.word.noun(),
  key: `tag-${i}`,
}))

const largeOptions = Array.from({ length: 200 }, (_, index) => ({
  label: faker.person.fullName(),
  description: index % 3 === 0 ? faker.internet.email() : undefined,
  key: index,
  type: 'avatar',
  disabled: index % 15 === 0,
  src: index % 3 !== 0 ? faker.image.avatarGitHub() : undefined,
}))

// ── Story values (each demo gets its own ref) ────────────────────────

const defaultValue = ref<any>(null)
const singleWithValue = ref<any>('1')
const multipleValue = ref<any[]>(['1', '2', '3'])
const tagsValue = ref<any[]>(['tag-0', 'tag-2'])
const tagsWithCreateValue = ref<any[]>([])
const disabledValue = ref<any>('1')
const virtualScrollValue = ref<any[]>([1, 5, 10])
const dockSelectedValue = ref<any[]>(['5', '7'])
const customTriggerValue = ref<any>('1')
const noSearchValue = ref<any>(null)
const headerFooterValue = ref<any[]>(['1', '2', '3'])
const dockToggleValue = ref<any[]>(['1', '3', '5'])
const dockToTop = ref(false)

const customTriggerSelected = computed(() =>
  avatarOptions.find(o => o.key === customTriggerValue.value)
)

// ── Remote search demo ───────────────────────────────────────────────

const remoteValue = ref<any[]>(['1', '2'])
const remoteLoading = ref(false)
const remoteSearchResults = ref<any[]>(avatarOptions)

const remoteOptions = computed(() => {
  const selectedKeys = Array.isArray(remoteValue.value)
    ? remoteValue.value
    : [remoteValue.value].filter(v => v != null)
  const resultKeys = new Set(remoteSearchResults.value.map(o => o.key))
  const missingSelected = avatarOptions.filter(
    o => selectedKeys.includes(o.key) && !resultKeys.has(o.key)
  )
  return [...missingSelected, ...remoteSearchResults.value]
})

const onRemoteSearch = (searchString: string) => {
  remoteLoading.value = true
  setTimeout(() => {
    if (!searchString) {
      remoteSearchResults.value = avatarOptions
    } else {
      remoteSearchResults.value = avatarOptions.filter(o =>
        o.label.toLowerCase().includes(searchString.toLowerCase())
      )
    }
    remoteLoading.value = false
  }, 500)
}

// ── Scroll pagination demo ───────────────────────────────────────────

const scrollValue = ref<any>(null)
const scrollPage = ref(1)
const scrollLoading = ref(false)

const generatePage = (page: number) =>
  Array.from({ length: 10 }, (_, i) => ({
    label: faker.person.fullName(),
    description: faker.internet.email(),
    key: (page - 1) * 10 + i,
    type: 'avatar',
    src: faker.image.avatarGitHub(),
  }))

const scrollOptions = ref<any[]>(generatePage(1))

const onScroll = (params: any) => {
  const { clientHeight, scrollHeight, scrollTop } = params
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    scrollLoading.value = true
    scrollPage.value += 1
    setTimeout(() => {
      scrollOptions.value = [
        ...scrollOptions.value,
        ...generatePage(scrollPage.value),
      ]
      scrollLoading.value = false
    }, 500)
  }
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            :options="avatarOptions"
            :value="defaultValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select an option"
            max-height="320px"
            @update:value="defaultValue = $event"
          />
        </div>
      </div>

      <!-- Single With Value -->
      <div>
        <h2>Single With Value</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            :options="avatarOptions"
            :value="singleWithValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select an option"
            max-height="320px"
            @update:value="singleWithValue = $event"
          />
        </div>
      </div>

      <!-- Multiple -->
      <div>
        <h2>Multiple</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            multiple
            :options="avatarOptions"
            :value="multipleValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select multiple options"
            max-height="320px"
            @update:value="multipleValue = $event"
          />
        </div>
      </div>

      <!-- Tags -->
      <div>
        <h2>Tags</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            select-type="tags"
            :options="tagOptions"
            :value="tagsValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Add tags"
            :default-tag-props="{ round: true }"
            max-height="320px"
            @update:value="tagsValue = $event"
          />
        </div>
      </div>

      <!-- Tags With Create -->
      <div>
        <h2>Tags With Create</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            select-type="tags"
            :options="tagOptions"
            :value="tagsWithCreateValue"
            show-search
            showAddTagCTA
            reset-search-string
            search-placeholder="Search or create tags"
            trigger-placeholder="Add or create tags"
            max-height="320px"
            @update:value="tagsWithCreateValue = $event"
            @new-tag="(t: any) => console.log('newTag', t)"
          />
        </div>
      </div>

      <!-- Disabled -->
      <div>
        <h2>Disabled</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            disabled
            :options="avatarOptions"
            :value="disabledValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select an option"
            max-height="320px"
          />
        </div>
      </div>

      <!-- Loading -->
      <div>
        <h2>Loading</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            loading
            :options="avatarOptions"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select an option"
            max-height="320px"
          />
        </div>
      </div>

      <!-- Loading Tags -->
      <div>
        <h2>Loading Tags</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            select-type="tags"
            loading
            :options="tagOptions"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Loading tags..."
            max-height="320px"
          />
        </div>
      </div>

      <!-- Virtual Scroll -->
      <div>
        <h2>Virtual Scroll (200 options)</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            multiple
            virtual-scroll
            :options="largeOptions"
            :value="virtualScrollValue"
            :popover-width="320"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select from 200 options"
            max-height="320px"
            @update:value="virtualScrollValue = $event"
          />
        </div>
      </div>

      <!-- Dock Selected To Top -->
      <div>
        <h2>Dock Selected To Top</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            multiple
            dock-selected-to-top
            :options="avatarOptions"
            :value="dockSelectedValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Selected items docked to top"
            max-height="320px"
            @update:value="dockSelectedValue = $event"
          />
        </div>
      </div>

      <!-- No Search -->
      <div>
        <h2>No Search</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            :options="avatarOptions"
            :value="noSearchValue"
            :show-search="false"
            :popover-width="320"
            trigger-placeholder="No search input"
            max-height="320px"
            @update:value="noSearchValue = $event"
          />
        </div>
      </div>

      <!-- Remote Search -->
      <div>
        <h2>Remote Search</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            remote
            multiple
            :options="remoteOptions"
            :value="remoteValue"
            :loading="remoteLoading"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Remote search (type to filter)"
            max-height="320px"
            @update:value="remoteValue = $event"
            @search="onRemoteSearch"
          />
        </div>
      </div>

      <!-- Scroll Pagination -->
      <div>
        <h2>Scroll Pagination</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            :options="scrollOptions"
            :value="scrollValue"
            :loading="scrollLoading"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Scroll to load more"
            max-height="320px"
            @update:value="scrollValue = $event"
            @scroll="onScroll"
          />
          <p style="margin-top: 8px; font-size: 12px; color: var(--gray-500)">
            Page: {{ scrollPage }} · Total: {{ scrollOptions.length }}
          </p>
        </div>
      </div>

      <!-- Custom Trigger -->
      <div>
        <h2>Custom Trigger</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            :options="avatarOptions"
            :value="customTriggerValue"
            show-search
            search-placeholder="Search"
            max-height="320px"
            @update:value="customTriggerValue = $event"
          >
            <template #trigger="{ disabled }">
              <HLButton variant="primary" color="blue" :disabled="disabled">
                {{
                  customTriggerSelected
                    ? customTriggerSelected.label
                    : 'Select a person...'
                }}
              </HLButton>
            </template>
          </HLAdvancedSelect>
        </div>
      </div>

      <!-- Header + Footer Slots -->
      <div>
        <h2>With Header And Footer</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            multiple
            :options="avatarOptions"
            :value="headerFooterValue"
            show-search
            search-placeholder="Search"
            trigger-placeholder="Select an option"
            max-height="320px"
            @update:value="headerFooterValue = $event"
          >
            <template #header>
              <div
                style="
                  padding: 8px 12px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  border-bottom: 1px solid var(--gray-200);
                "
              >
                <span
                  style="font-size: 13px; font-weight: 500; color: var(--gray-700)"
                  >Select contacts</span
                >
                <span style="font-size: 12px; color: var(--gray-500)"
                  >{{ headerFooterValue.length }} selected</span
                >
              </div>
            </template>
            <template #footer>
              <div
                style="
                  padding: 8px;
                  display: flex;
                  gap: 8px;
                  justify-content: flex-end;
                  border-top: 1px solid var(--gray-200);
                "
              >
                <HLButton
                  variant="secondary"
                  size="2xs"
                  @click="headerFooterValue = []"
                  >Clear all</HLButton
                >
                <HLButton variant="primary" size="2xs">Apply</HLButton>
              </div>
            </template>
          </HLAdvancedSelect>
        </div>
      </div>

      <!-- Dock Toggle via Header Slot -->
      <div>
        <h2>Dock Toggle</h2>
        <div style="max-width: 400px">
          <HLAdvancedSelect
            multiple
            :options="avatarOptions"
            :value="dockToggleValue"
            :dock-selected-to-top="dockToTop"
            show-search
            search-placeholder="Search"
            trigger-placeholder="With dock toggle"
            max-height="320px"
            @update:value="dockToggleValue = $event"
          >
            <template #header>
              <div
                style="
                  padding: 8px 12px;
                  border-bottom: 1px solid var(--gray-200);
                "
              >
                <HLCheckbox
                  id="dock-toggle"
                  v-model:checked="dockToTop"
                  size="sm"
                >
                  Show selected on top
                </HLCheckbox>
              </div>
            </template>
          </HLAdvancedSelect>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
