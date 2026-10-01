<script setup lang="ts">
import { HLSelect } from '@gohighlevel/highrise'
import { ref } from 'vue'

interface SelectOption {
  label: string
  value: string
}

// All possible options (simulating database)
const allOptions = Array.from({ length: 100 }, (_, i) => ({
  label: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Option ${i + 1}`,
  value: `option${i + 1}`,
}))

const RemoteSearchOptions = ref<SelectOption[]>([])
const remoteSearchLoading = ref(false)
const remoteSearchSelectedValue = ref<string | null>(null)

// Simulate API search with delay
const searchOptions = async (searchText: string) => {
  return new Promise<SelectOption[]>(resolve => {
    setTimeout(() => {
      const filtered = allOptions
        .filter(option =>
          option.label.toLowerCase().includes(searchText.toLowerCase())
        )
        .slice(0, 10)
      resolve(filtered)
    }, 300) // Simulate network delay
  })
}

// Simulate fetching next page of results
const fetchNextPage = async (searchText: string, currentLength: number) => {
  return new Promise<SelectOption[]>(resolve => {
    setTimeout(() => {
      const filtered = allOptions
        .filter(option =>
          option.label.toLowerCase().includes(searchText.toLowerCase())
        )
        .slice(currentLength, currentLength + 10)
      resolve(filtered)
    }, 300)
  })
}

// Handle value selection
const handleValueChange = (value: string) => {
  remoteSearchSelectedValue.value = value
}

let currentSearchText = ''

// Handle search input changes
const handleSearch = async (searchText: string) => {
  remoteSearchLoading.value = true
  currentSearchText = searchText

  try {
    const results = await searchOptions(searchText)
    RemoteSearchOptions.value = results
  } finally {
    remoteSearchLoading.value = false
  }
}

// Handle infinite scroll
const handleScroll = async (event: any) => {
  const scrollPosition = event.target.scrollTop + event.target.clientHeight
  if (scrollPosition >= event.target.scrollHeight - 10) {
    remoteSearchLoading.value = true

    try {
      const nextPage = await fetchNextPage(
        currentSearchText,
        RemoteSearchOptions.value.length
      )
      if (nextPage.length > 0) {
        RemoteSearchOptions.value = [...RemoteSearchOptions.value, ...nextPage]
      }
    } finally {
      remoteSearchLoading.value = false
    }
  }
}
</script>
<template>
  <HLSelect
    id="remote-search-select"
    :remote="true"
    :options="RemoteSearchOptions"
    :value="remoteSearchSelectedValue"
    :loading="remoteSearchLoading"
    :filterable="true"
    placeholder="Type to search..."
    @update:value="handleValueChange"
    @scroll="handleScroll"
    @search="handleSearch"
  />
</template>
