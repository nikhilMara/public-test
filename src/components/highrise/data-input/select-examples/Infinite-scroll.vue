<script setup lang="ts">
import { HLSelect } from '@gohighlevel/highrise';
import { ref } from 'vue';

const props = defineProps<{
  resetMenuOnOptionsChange: boolean
}>()

const InfiniteScrollOptions = ref([
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
  {
    label: 'Option 4',
    value: 'option4',
  },
  {
    label: 'Option 5',
    value: 'option5',
  },
  {
    label: 'Option 6',
    value: 'option6',
  },
  {
    label: 'Option 7',
    value: 'option7',
  },
  {
    label: 'Option 8',
    value: 'option8',
  },
  {
    label: 'Option 9',
    value: 'option9',
  },
  {
    label: 'Option 10',
    value: 'option10',
  },
])
const infiniteLoading = ref(false)
const infiniteSelectedValue = ref<any>(null)
const handleInfiniteChange = (value: any) => {
  infiniteSelectedValue.value = value
}
let optionLength = 10
const fetchOptions = () => {
  const newOpions: any[] = []
  for (let i = optionLength; i < optionLength + 10; i++) {
    newOpions.push({
      label: `Option ${i + 1}`,
      value: `option${i + 1}`,
    })
  }
  optionLength += 10
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(newOpions)
    }, 2000)
  })
}
const handleScroll = async (event: any) => {
  const scrollPosition = event.target.scrollTop + event.target.clientHeight
  if (scrollPosition >= event.target.scrollHeight - 10) {
    infiniteLoading.value = true
    const result = await fetchOptions()
    InfiniteScrollOptions.value = [
      ...InfiniteScrollOptions.value,
      ...(result as any),
    ]
    infiniteLoading.value = false
  }
}
</script>
<template>
  <HLSelect
    id="infinite-scroll-select"
    :options="InfiniteScrollOptions"
    :value="infiniteSelectedValue"
    @update:value="handleInfiniteChange"
    @scroll="handleScroll"
    :loading="infiniteLoading"
    :reset-menu-on-options-change="props.resetMenuOnOptionsChange"
  />
</template>
