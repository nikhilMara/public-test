<template>
  <div>
    <h1>Pagination</h1>
    <p>
      This component provides a way to navigate through paginated data with
      customizable options.
    </p>

    <section>
      <h2>Default</h2>
      <div class="demo-section">
        <HLPagination
          id="pagination-default"
          :current-page="currentPage"
          :item-count="183"
          :per-page="currentPerPage"
          :pages-to-display="7"
          per-page-text="Rows per page"
          :per-page-dropdown-options="options"
          @update:page="changePage"
          @update:perPage="changePerPage"
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </div>
    </section>

    <section>
      <h2>Collapsed</h2>
      <div class="demo-section">
        <HLPagination
          id="pagination-collapsed"
          :current-page="currentPage"
          :item-count="183"
          :per-page="currentPerPage"
          :pages-to-display="7"
          per-page-text="Rows per page"
          :per-page-dropdown-options="options"
          @update:page="changePage"
          @update:perPage="changePerPage"
          collapsed
          show-current-range
          show-total-pages
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </div>
    </section>

    <section>
      <h2>All Sizes</h2>
      <div class="demo-section">
        <div style="margin: 1rem 0">Small (sm):</div>
        <HLPagination
          id="pagination-all-sizes-sm"
          :pages-to-display="7"
          :current-page="currentPage"
          :item-count="183"
          :per-page="currentPerPage"
          :per-page-dropdown-options="options"
          @update:page="changePage"
          @update:perPage="changePerPage"
          size="sm"
          show-current-range
          show-total-pages
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>

        <hr />

        <div style="margin: 1rem 0">Medium (md):</div>
        <HLPagination
          id="pagination-all-sizes-md"
          :current-page="currentPage"
          :item-count="183"
          :per-page="currentPerPage"
          :per-page-dropdown-options="options"
          @update:page="changePage"
          @update:perPage="changePerPage"
          size="md"
          show-current-range
          show-total-pages
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </div>
    </section>

    <section>
      <h2>Only pages</h2>
      <p>
        When you want to show only the pages, you can use the
        <code>show-per-page-drop-down</code> prop to hide the per page dropdown
        and pass the total pages to the <code>total-pages</code> prop.
      </p>
      <div class="demo-section">
        <HLPagination
          id="pagination-only-pages"
          :current-page="currentPageOnlyPages"
          :total-pages="13"
          :show-per-page-drop-down="false"
          :pages-to-display="7"
          @update:page="changePageOnlyPages"
          size="md"
          show-current-range
          :show-total-pages="false"
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </div>
    </section>
    <section>
      <h2>Inline</h2>
      <div class="demo-section">
        <HLPagination
          id="pagination-inline"
          :current-page="currentPageInline"
          :total-pages="13"
          @update:page="changePageInline"
          size="md"
          show-current-range
          :show-total-pages="true"
          inline
        >
          <template #prev> Previous </template>
          <template #next> Next </template>
        </HLPagination>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { HLPagination } from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const options = [
  { key: 10, label: '10' },
  { key: 20, label: '20' },
  { key: 50, label: '50' },
  { key: 100, label: '100' },
]

const currentPage = ref(1)
const currentPerPage = ref(15)
const currentPageOnlyPages = ref(1)
const currentPageInline = ref(1)

const changePage = (page: number) => {
  currentPage.value = page
}

const changePerPage = (perPage: number) => {
  currentPerPage.value = perPage
}

const changePageOnlyPages = (page: number) => {
  currentPageOnlyPages.value = page
}
const changePageInline = (page: number) => {
  currentPageInline.value = page
}
</script>

<style scoped>
.demo-section {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

section {
  margin-bottom: 3rem;
}

h2 {
  margin-bottom: 1rem;
}

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}

hr {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid #eee;
}
</style>
