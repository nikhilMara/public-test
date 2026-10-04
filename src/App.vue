<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { HLContentWrap, HLInput } from '@gohighlevel/highrise'
import { pages } from '@/router/pages'

provide('dir', 'ltr')

const route = useRoute()
const query = ref('')

const groups = computed(() => {
  const q = query.value.trim().toLowerCase()
  const map = new Map<string, { path: string; title: string }[]>()
  map.set('Examples', [{ path: 'demo', title: 'Sign-up Demo' }])
  for (const p of pages) {
    if (!map.has(p.category)) map.set(p.category, [])
    map.get(p.category)!.push({ path: p.path, title: p.title })
  }
  return [...map.entries()]
    .map(([category, items]) => ({
      category,
      items: items
        .filter((i) => !q || i.title.toLowerCase().includes(q))
        .sort((a, b) => a.title.localeCompare(b.title))
    }))
    .filter((g) => g.items.length)
})
</script>

<template>
  <HLContentWrap namespace="highrise_container" fullScreen locale="fr-FR">
    <div class="pg-layout">
      <aside class="pg-sidebar">
        <RouterLink to="/" class="pg-brand">Highrise Playground</RouterLink>
        <div class="pg-search">
          <HLInput
            id="pg-search"
            v-model="query"
            placeholder="Search components"
            clearable
            size="sm"
          />
        </div>
        <nav class="pg-nav">
          <section v-for="g in groups" :key="g.category">
            <h3>{{ g.category }}</h3>
            <RouterLink v-for="i in g.items" :key="i.path" :to="`/${i.path}`" class="pg-link">
              {{ i.title }}
            </RouterLink>
          </section>
          <p v-if="!groups.length" class="pg-empty">No components match “{{ query }}”.</p>
        </nav>
      </aside>

      <main class="pg-main">
        <header class="pg-header">
          <span class="pg-crumb">{{ route.meta.category ?? 'Highrise' }}</span>
          <h1>{{ route.meta.title ?? 'Not found' }}</h1>
        </header>
        <div class="pg-content">
          <RouterView v-slot="{ Component }">
            <Suspense>
              <component :is="Component" :key="route.fullPath" />
              <template #fallback><p>Loading…</p></template>
            </Suspense>
          </RouterView>
        </div>
      </main>
    </div>
  </HLContentWrap>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
.pg-layout {
  display: flex;
  height: 100vh;
  font-family: Inter, system-ui, sans-serif;
}
.pg-sidebar {
  width: 260px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaecf0;
  background: #f9fafb;
}
.pg-brand {
  padding: 20px 20px 12px;
  font-size: 18px;
  font-weight: 700;
  color: #155eef;
  text-decoration: none;
}
.pg-search {
  padding: 0 16px 12px;
}
.pg-nav {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px 24px;
}
.pg-nav h3 {
  margin: 16px 12px 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #667085;
}
.pg-link {
  display: block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #344054;
  text-decoration: none;
}
.pg-link:hover {
  background: #f2f4f7;
}
.pg-link.router-link-active {
  background: #eff4ff;
  color: #155eef;
  font-weight: 600;
}
.pg-empty {
  padding: 12px;
  font-size: 13px;
  color: #667085;
}
.pg-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  background: #fff;
}
.pg-header {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px 32px 16px;
  border-bottom: 1px solid #eaecf0;
  background: #fff;
}
.pg-header h1 {
  margin: 2px 0 0;
  font-size: 22px;
  font-weight: 600;
  color: #101828;
}
.pg-crumb {
  font-size: 12px;
  color: #667085;
}
.pg-content {
  padding: 24px 32px 64px;
}
</style>
