<template>
  <div>
    <section>
      <h4>Basic Usage</h4>

      <div class="demo-section">
        <div
          align="center"
          style="
            margin-top: 0.5rem;
            width: 280px;
            background-color: #eceef2;
            border-radius: 8px;
          "
        >
          <HLMenu
            id="example-menu"
            :options="menuOptions"
            :default-expanded-keys="['inbox', 'assigned']"
            v-model:value="menuValue"
          />
        </div>
      </div>
    </section>

    <section>
      <h4>Collapsed Example</h4>

      <div style="margin-top: 0.5rem">
        <HLMenuLayout
          :collapsed="layoutCollapsed"
          :show-trigger="true"
          :width="280"
          :collapsed-width="52"
          @update:collapsed="layoutCollapsed = $event"
        >
          <template #sider>
            <div
              style="
                display: flex;
                flex-direction: column;
                height: 100%;
                background-color: #eceef2;
              "
            >
              <!-- Header -->
              <div
                style="
                  padding: 16px 10px;
                  padding-bottom: 0px;
                  border-bottom: 1px solid var(--gray-200);
                "
              >
                <!-- Button - full width when expanded, icon only when collapsed -->
                <HLButton
                  v-if="!layoutCollapsed"
                  variant="primary"
                  color="blue"
                  size="xs"
                  style="width: 100%; margin-bottom: 10px"
                >
                  <template #iconLeft>
                    <MessagePlusCircleIcon />
                  </template>
                  New Conversation
                </HLButton>
                <!-- Collapsed button - icon only, click expands menu -->
                <HLButton
                  v-else
                  variant="primary"
                  color="blue"
                  size="xs"
                  style="width: 100%; padding: 8px; margin-bottom: 8px"
                  @click="layoutCollapsed = false"
                >
                  <template #iconLeft>
                    <MessagePlusCircleIcon />
                  </template>
                </HLButton>
                <!-- HLSelect when expanded -->
                <div v-if="!layoutCollapsed">
                  <HLSelect
                    id="menu-search-select"
                    v-model:value="searchValue"
                    :filterable="true"
                    :options="[
                      { label: 'My Inbox', value: 'inbox' },
                      { label: 'Team Inbox', value: 'team-inbox' },
                      { label: 'Settings', value: 'settings' },
                      { label: 'Manual Actions', value: 'manual' },
                    ]"
                    placeholder="Search or select..."
                    showSearchIcon
                    style="width: 100%"
                  >
                    <template #arrow>
                      <FilterLinesIcon
                        style="
                          width: 16px;
                          height: 16px;
                          color: var(--gray-600);
                        "
                      />
                    </template>
                  </HLSelect>
                </div>
                <!-- White box icon when collapsed - click to expand -->
                <div v-else>
                  <div
                    style="
                      width: 100%;
                      height: 32px;
                      background-color: white;
                      border: 1px solid var(--gray-300);
                      border-radius: 4px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                      transition: all 0.2s ease;
                    "
                    @click="layoutCollapsed = false"
                    @mouseenter="
                      $event.target.style.backgroundColor = 'var(--gray-50)'
                    "
                    @mouseleave="$event.target.style.backgroundColor = 'white'"
                    title="Click to expand and search"
                  >
                    <SearchMdIcon
                      style="width: 16px; height: 16px; color: var(--gray-600)"
                    />
                  </div>
                </div>
              </div>
              <!-- Body - Main Menu -->
              <div style="flex: 1; overflow: hidden">
                <HLMenu
                  id="menu"
                  :options="bodyMenuOptions"
                  :value="activeValue"
                  :collapsed="layoutCollapsed"
                  :default-expanded-keys="['team-inbox', 'inbox', 'assigned']"
                  :submenu-width="200"
                  :indent="16"
                  :root-indent="8"
                  style="height: 100%"
                  @update:value="activeValue = $event"
                />
              </div>
              <!-- Footer -->
              <HLMenu
                id="footer-menu"
                :options="footerMenuOptions"
                :value="activeValue"
                :collapsed="layoutCollapsed"
                :indent="16"
                :root-indent="8"
                style="height: auto; margin-top: 250px"
                @update:value="activeValue = $event"
              />
            </div>
          </template>
          <template #content>
            <div style="padding: 16px">
              <h3>Content Area</h3>
              <p>Active menu item: {{ activeValue }}</p>
              <p>Search value: {{ searchValue }}</p>
              <p>Menu collapsed: {{ layoutCollapsed }}</p>
            </div>
          </template>
        </HLMenuLayout>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  HLButton,
  HLMenu,
  HLMenuLayout,
  HLSelect,
} from '@gohighlevel/highrise'

import {
  BezierCurve03Icon,
  FilterLinesIcon,
  Home01Icon,
  LogOut01Icon,
  MessagePlusCircleIcon,
  SearchMdIcon,
  Settings02Icon,
  User01Icon,
  UserLeft01Icon,
  UserUp01Icon,
  Users01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import { renderIcon } from '@gohighlevel/highrise'
import { inject, ref } from 'vue'
const direction = inject<string>('dir') as 'ltr' | 'rtl'
// Helper function to render icons (same as in the story)

const menuOptions = [
  {
    key: 'inbox',
    title: 'My Inbox',
    icon: renderIcon(User01Icon),
    hideIconWhenExpanded: true,
    count: '12',
    children: [
      {
        key: 'assigned',
        title: 'Assigned to Me',
        icon: renderIcon(UserLeft01Icon),
        count: '10',
        children: [
          { key: 'unread', title: 'Unread', count: '10' },
          { key: 'all', title: 'All', count: '12' },
          { key: 'recent', title: 'Recent', count: '2' },
          { key: 'starred', title: 'Starred' },
        ],
      },
      {
        key: 'followed',
        title: 'Followed by me',
        icon: renderIcon(UserUp01Icon),
      },
      {
        key: 'chat',
        title: 'Internal Chat',
        icon: renderIcon(BezierCurve03Icon),
      },
    ],
  },
  {
    key: 'team-inbox',
    title: 'Team Inbox',
    icon: renderIcon(Users01Icon),
    hideIconWhenExpanded: true,
    count: '3',
    children: [
      { key: 'unread2', title: 'Unread', count: '10' },
      { key: 'all2', title: 'All', count: '12' },
      { key: 'recent2', title: 'Recent', count: '2' },
      { key: 'starred2', title: 'Starred' },
    ],
  },
  {
    key: 'disabled',
    title: 'Disabled',
    icon: renderIcon(User01Icon),
    disabled: true,
  },
  { key: 'divider-1', type: 'divider' },
  {
    key: 'manual',
    title: 'Manual Actions',
    icon: renderIcon(Home01Icon),
    hideIconWhenExpanded: true,
  },
]

const menuValue = ref('unread')

// Body menu options for layout example
const bodyMenuOptions = [
  {
    key: 'inbox',
    title: 'My Inbox',
    icon: renderIcon(User01Icon),
    hideIconWhenExpanded: true,
    count: '12',
    children: [
      {
        key: 'assigned',
        title: 'Assigned to Me',
        icon: renderIcon(UserLeft01Icon),
        count: '10',
        children: [
          { key: 'unread', title: 'Unread', count: '10' },
          { key: 'all', title: 'All', count: '12' },
          { key: 'recent', title: 'Recent', count: '2' },
          { key: 'starred', title: 'Starred' },
        ],
      },
      {
        key: 'followed',
        title: 'Followed by me',
        icon: renderIcon(UserUp01Icon),
      },
      {
        key: 'chat',
        title: 'Internal Chat',
        icon: renderIcon(BezierCurve03Icon),
      },
    ],
  },
  {
    key: 'team-inbox',
    title: 'Team Inbox',
    icon: renderIcon(Users01Icon),
    hideIconWhenExpanded: true,
    count: '3',
    children: [
      { key: 'unread2', title: 'Unread', count: '10' },
      { key: 'all2', title: 'All', count: '12' },
      { key: 'recent2', title: 'Recent', count: '2' },
      { key: 'starred2', title: 'Starred' },
    ],
  },
  {
    key: 'disabled',
    title: 'Disabled',
    icon: renderIcon(User01Icon),
    disabled: true,
  },
  { key: 'divider-1', type: 'divider' },
  {
    key: 'manual',
    title: 'Manual Actions',
    icon: renderIcon(Home01Icon),
    hideIconWhenExpanded: true,
  },
]

// Footer menu options
const footerMenuOptions = [
  {
    key: 'settings',
    title: 'Settings',
    icon: renderIcon(Settings02Icon),
    hideIconWhenExpanded: true,
  },
  {
    key: 'logout',
    title: 'Log Out',
    icon: renderIcon(LogOut01Icon),
    hideIconWhenExpanded: true,
  },
]

const layoutCollapsed = ref(false)
const searchValue = ref(null)
const activeValue = ref('unread')
</script>

<style scoped>
section {
  margin-bottom: 3rem;
}

h2 {
  margin-bottom: 1rem;
}

ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

li {
  margin: 0.5rem 0;
}

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}
</style>
