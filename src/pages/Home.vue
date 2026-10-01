<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { pages } from '@/router/pages'

const groups = computed(() => {
  const map = new Map<string, typeof pages>()
  for (const p of pages) {
    if (!map.has(p.category)) map.set(p.category, [])
    map.get(p.category)!.push(p)
  }
  return [...map.entries()]
})
</script>

<template>
  <p class="home-intro">
    {{ pages.length }} Highrise component pages. Pick one from the sidebar or below.
  </p>
  <section v-for="[category, items] in groups" :key="category" class="home-group">
    <h2>{{ category }}</h2>
    <div class="home-grid">
      <RouterLink v-for="p in items" :key="p.path" :to="`/${p.path}`" class="home-card">
        {{ p.title }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.home-intro {
  margin: 0 0 24px;
  color: #475467;
}
.home-group h2 {
  margin: 24px 0 12px;
  font-size: 16px;
  font-weight: 600;
  color: #101828;
}
.home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}
.home-card {
  padding: 14px 16px;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  font-size: 14px;
  color: #344054;
  text-decoration: none;
}
.home-card:hover {
  border-color: #155eef;
  color: #155eef;
}
</style>
