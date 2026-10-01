<script setup lang="ts">
import {
  HLCheckbox,
  HLInputGroup,
  HLInputGroupLabel,
  HLInputNumber,
  HLInputTag,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const value = ref(['tag1', 'tag2'])

// Truncation example
const truncateEnabled = ref(true)
const maxWidthNumber = ref(150)
const sampleTagText = ref(
  'This is a sample tag text that will be truncated if it exceeds the max width'
)

function handleOverflow(overflow: any) {
  console.log('GUIPG', 'overflow', overflow)
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Truncation Example -->
      <div>
        <h2>Truncation Example</h2>
        <p>Control text truncation and max width of the tags.</p>
        <HLSpace vertical>
          <HLCheckbox
            v-model:checked="truncateEnabled"
            label="Enable Truncation"
          />
          <HLInputNumber
            v-model:value="maxWidthNumber"
            placeholder="Enter max width"
          />
          <HLInputTag
            id="truncation-example"
            :value="[sampleTagText, 'Normal Tag']"
            :truncate="truncateEnabled"
            :max-width="maxWidthNumber"
          />
        </HLSpace>
      </div>

      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>
          To create a new tag, type text into the input field and press
          <b>Enter</b>. Pressing <b>Backspace</b> will remove the most recently
          added tag.
        </p>
        <HLInputTag
          id="input-tag-creation"
          placeholder="Type and press Enter to create a tag"
        />
      </div>

      <!-- Sizes -->
      <div>
        <h2>Sizes</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <HLInputTag id="input-tag-lg" size="lg" placeholder="Large size" />
          <HLInputTag id="input-tag-md" size="md" placeholder="Medium size" />
          <HLInputTag id="input-tag-sm" size="sm" placeholder="Small size" />
          <HLInputTag
            id="input-tag-xs"
            size="xs"
            placeholder="Extra small size"
          />
          <HLInputTag
            id="input-tag-2xs"
            size="2xs"
            placeholder="2x Extra small size"
          />
          <HLInputTag
            id="input-tag-3xs"
            size="3xs"
            placeholder="3x Extra small size"
          />
        </div>
      </div>

      <!-- With Prefix and Suffix -->
      <div>
        <h2>With Prefix and Suffix</h2>
        <HLInputTag id="input-tag-affixes">
          <template #prefix>$</template>
          <template #suffix>INR</template>
        </HLInputTag>
      </div>

      <!-- Disabled State -->
      <div>
        <h2>Disabled State</h2>
        <HLInputTag id="input-tag-disabled" disabled />
      </div>

      <!-- With Input Group -->
      <div>
        <h2>With Input Group</h2>
        <HLInputGroup>
          <HLInputGroupLabel>http://</HLInputGroupLabel>
          <HLInputTag id="input-group-tag" />
        </HLInputGroup>
      </div>

      <!-- Tag Overflow Behavior -->
      <div>
        <h2>Tag Overflow Behavior</h2>
        <p>
          When there are too many tags to fit in the container, they are
          automatically hidden and shown in a "+n" counter. Hovering over the
          counter reveals all hidden tags in a tooltip.
        </p>
        <HLInputTag
          id="input-tag-overflow"
          :value="[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
            'Tag 17',
            'Tag 18',
            'Tag 19',
            'Tag 20',
          ]"
          @update:overflow="handleOverflow"
        />
      </div>

      <!-- Allow Spaces in Tags -->
      <div>
        <h2>Allow Spaces in Tags</h2>
        <p>
          By default, spaces are not allowed in tags. Set `allowSpaces` to true
          to enable spaces within tags.
        </p>
        <HLInputTag
          id="input-tag-spaces"
          :allowSpaces="true"
          placeholder="Spaces allowed in tags"
        />
      </div>

      <!-- Loading State -->
      <div>
        <h2>Loading State</h2>
        <p>
          Display a loading indicator while processing tag-related operations.
        </p>
        <HLInputTag
          id="input-tag-loading"
          :loading="true"
          :value="['Loading Tags...']"
        />
      </div>
    </HLSpace>
  </div>
</template>
