<script setup lang="ts">
import {
  HLAccordion,
  HLAccordionItem,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir')
</script>

<template>
  <div>
    <HLSpace style="margin-top: 0.5rem" vertical>
      <HLAccordion>
        <HLAccordionItem title="Title 1" name="1" id="1">
          <div class="p-2">Content for section 1</div>
        </HLAccordionItem>
        <HLAccordionItem title="Title 2" name="2" id="2">
          <div class="p-2">Content for section 2</div>
        </HLAccordionItem>
      </HLAccordion>
    </HLSpace>
    <HLSpace style="margin-top: 0.5rem" vertical>
      <HLAccordion arrowPlacement="left">
        <HLAccordionItem title="Left Arrow" name="1" id="1">
          <div class="p-2">Content with left arrow</div>
        </HLAccordionItem>
      </HLAccordion>
      <HLAccordion arrowPlacement="right">
        <HLAccordionItem title="Right Arrow" name="2" id="2">
          <div class="p-2">Content with right arrow</div>
        </HLAccordionItem>
      </HLAccordion>
    </HLSpace>
    <HLSpace style="margin-top: 0.5rem" vertical>
      <HLAccordion borderPosition="default">
        <HLAccordionItem title="Default Border" name="1" id="1">
          <div class="p-2">Content with default border - item 1</div>
        </HLAccordionItem>
        <HLAccordionItem title="Default Border" name="2" id="2">
          <div class="p-2">Content with default border - item 2</div>
        </HLAccordionItem>
      </HLAccordion>
      <HLAccordion borderPosition="item">
        <HLAccordionItem title="Item Border" name="2" id="2">
          <div class="p-2">Content with item border - item 1</div>
        </HLAccordionItem>
        <HLAccordionItem title="Item Border" name="3" id="3">
          <div class="p-2">Content with item border - item 2</div>
        </HLAccordionItem>
      </HLAccordion>
    </HLSpace>
    <HLSpace style="margin-top: 0.5rem" vertical>
      <HLAccordion size="sm">
        <HLAccordionItem title="Small Size" name="1" id="1">
          <div class="p-2">Small accordion content</div>
        </HLAccordionItem>
      </HLAccordion>
      <HLAccordion size="md">
        <HLAccordionItem title="Medium Size" name="2" id="2">
          <div class="p-2">Medium accordion content</div>
        </HLAccordionItem>
      </HLAccordion>
      <HLAccordion size="lg">
        <HLAccordionItem title="Large Size" name="3" id="3">
          <div class="p-2">Large accordion content</div>
        </HLAccordionItem>
      </HLAccordion>
    </HLSpace>
    <div class="!mt-4">Custom Text</div>
    <HLAccordion>
      <HLAccordionItem name="1" id="1">
        <template #header>
          <div class="p-2 bg-green-50 w-full">
            <HLText size="xl" weight="semibold">Header slot</HLText>
          </div>
        </template>
        <template #header-extra>
          <div class="p-2 bg-gray-50 w-full">Header Extra</div>
        </template>
        <div class="p-2">Content for section 1</div>
      </HLAccordionItem>
    </HLAccordion>
  </div>
</template>
