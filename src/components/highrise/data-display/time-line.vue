<script setup lang="ts">
import { CalendarIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLText,
  HLTimeline,
  HLTimelineItem,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>
<template>
  <div>
    <div class="flex flex-col gap-4 p-4">
      <div>
        <h4>Time Line Default</h4>
        <HLTimeline>
          <HLTimelineItem
            header="Default Event"
            content="Event 1 description"
            footer="2 Hours ago"
          >
            <template #icon>
              <CalendarIcon />
            </template>
          </HLTimelineItem>
          <HLTimelineItem
            icon-color="var(--success-700)"
            icon-bg-color="var(--success-100)"
            header="Success Event"
            content="Event 2 description"
            footer="1 Hour ago"
          >
            <template #icon>
              <CalendarIcon />
            </template>
          </HLTimelineItem>
          <HLTimelineItem
            header="Warning Event"
            content="Event 3 description"
            footer="30 Minutes ago"
            icon-color="var(--warning-700)"
            icon-bg-color="var(--warning-100)"
          >
            <template #icon>
              <CalendarIcon />
            </template>
          </HLTimelineItem>
        </HLTimeline>
      </div>
      <div>
        <h4>Time Line Custom</h4>
        <HLTimeline>
          <HLTimelineItem
            icon-color="var(--primary-700)"
            icon-bg-color="var(--primary-100)"
          >
            <template #icon>
              <CalendarIcon />
            </template>
            <template #header>
              <HLText size="xl" weight="bold">Custom header</HLText>
            </template>
            <div class="bg-gray-100 p-4 rounded-md text-red-600">
              Custom content
            </div>
          </HLTimelineItem>
          <HLTimelineItem
            header="Default Event"
            content="Event 1 description"
            footer="2 Hours ago"
          >
            <template #icon>
              <CalendarIcon />
            </template>
          </HLTimelineItem>
        </HLTimeline>
      </div>
    </div>
  </div>
</template>
