<script setup lang="ts">
import { ListIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLContentSwitcher,
  HLRadioGroup,
  HLSelect,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const value = ref('value1')
const width = ref('default')
const handleChange = (e: any) => {
  value.value = e.target.value
}

const widthOptions = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Full Width',
    value: 'full',
  },
]

const songs = [
  {
    value: 'value1',
    label: "Rock'n'Roll Star",
  },
  {
    value: 'value2',
    label: 'Shakermaker',
  },
  {
    value: 'value3',
    label: 'Live Forever',
  },
  {
    value: 'value4',
    label: 'Up in the Sky',
  },
].map(s => {
  s.value = s.value.toLowerCase()
  return s
})

const descriptionSongs = [
  {
    value: 'value1',
    label: "Rock'n'Roll Star",
  },
  {
    value: 'value2',
    label:
      'Unlimited users and advanced features Essential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams',
  },
  {
    value: 'value3',
    label: 'Live Forever',
  },
]

const disabled1 = ref(false)
const disabled2 = ref(false)
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>
          Content Switcher input component for selecting a single option from
          multiple choices.
        </p>
        <p>
          <strong>⚠️ Warning:</strong> Content Switcher components must always
          be wrapped in a <code>HLRadioGroup</code> component.
        </p>
        <div class="mb-4">
          <HLSelect
            id="width-select"
            v-model:value="width"
            :options="widthOptions"
            placeholder="Select width"
          />
        </div>
        <HLRadioGroup
          id="radio-basic-group"
          v-model:value="value"
          name="radioGroup1"
          :width="width === 'full' ? 'full' : 'default'"
        >
          <HLContentSwitcher
            v-for="song in songs"
            :id="'radio-basic-' + song.value"
            :key="song.value"
            :value="song.value"
            :label="song.label"
          />
        </HLRadioGroup>
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Large (lg)</h3>
            <HLRadioGroup
              id="radio-size-lg"
              v-model:value="value"
              name="radioGroupLg"
              size="lg"
            >
              <HLContentSwitcher
                id="radio-lg-option1"
                value="option1"
                label="Large"
                :full-width="width === 'full'"
              />
            </HLRadioGroup>
          </div>

          <div>
            <h3>Medium (md)</h3>
            <HLRadioGroup
              id="radio-size-md"
              v-model:value="value"
              name="radioGroupMd"
              size="md"
            >
              <HLContentSwitcher
                id="radio-md-option2"
                value="option2"
                label="Medium"
                :full-width="width === 'full'"
              />
            </HLRadioGroup>
          </div>

          <div>
            <h3>Small (sm)</h3>
            <HLRadioGroup
              id="radio-size-sm"
              v-model:value="value"
              name="radioGroupSm"
              size="sm"
            >
              <HLContentSwitcher
                id="radio-sm-option3"
                value="option3"
                label="Small"
                :full-width="width === 'full'"
              />
            </HLRadioGroup>
          </div>

          <div>
            <h3>Extra Small (xs)</h3>
            <HLRadioGroup
              id="radio-size-xs"
              v-model:value="value"
              name="radioGroupXs"
              size="xs"
            >
              <HLContentSwitcher
                id="radio-xs-option4"
                value="option4"
                label="Extra Small"
                :full-width="width === 'full'"
              />
            </HLRadioGroup>
          </div>

          <div>
            <h3>2x Extra Small (2xs)</h3>
            <HLRadioGroup
              id="radio-size-2xs"
              v-model:value="value"
              name="radioGroup2xs"
              size="2xs"
            >
              <HLContentSwitcher
                id="radio-2xs-option5"
                value="option5"
                label="Double Extra Small"
                :full-width="width === 'full'"
              />
            </HLRadioGroup>
          </div>

          <div>
            <h3>3x Extra Small (3xs)</h3>
            <HLRadioGroup
              id="radio-size-3xs"
              v-model:value="value"
              name="radioGroup3xs"
              size="3xs"
            >
              <HLContentSwitcher
                id="radio-3xs-option6"
                value="option6"
                label="Triple Extra Small"
                :full-width="width === 'full'"
              />
            </HLRadioGroup>
          </div>
        </HLSpace>
      </div>

      <!-- Disabled State -->
      <div>
        <h2>Disabled State</h2>
        <HLRadioGroup
          id="radio-disabled-group"
          v-model:value="value"
          name="radioGroupDisabled"
        >
          <HLContentSwitcher
            v-for="song in songs"
            :id="'radio-disabled-' + song.value"
            :key="song.value"
            :value="song.value"
            :disabled="song.label === 'Live Forever'"
            :label="song.label"
            :full-width="width === 'full'"
          />
        </HLRadioGroup>
      </div>

      <!-- Custom Icon -->
      <div>
        <h2>Custom Icon</h2>
        <p>You can add icons to each Content Switcher using the icon slot.</p>
        <HLRadioGroup
          id="radio-icon-group"
          v-model:value="value"
          name="radioGroupIcon"
        >
          <HLContentSwitcher
            v-for="song in songs"
            :id="'radio-icon-' + song.value"
            :key="song.value"
            :value="song.value"
            :label="song.label"
            :full-width="width === 'full'"
          >
            <template #icon>
              <ListIcon />
            </template>
          </HLContentSwitcher>
        </HLRadioGroup>
      </div>

      <!-- Only Icon -->
      <div>
        <h2>Only Icon</h2>
        <p>Content switchers with only icons, no labels.</p>
        <HLRadioGroup
          id="radio-only-icon-group"
          v-model:value="value"
          name="radioGroupOnlyIcon"
        >
          <HLContentSwitcher
            v-for="song in songs"
            :id="'radio-only-icon-' + song.value"
            :key="song.value"
            :value="song.value"
            :onlyIcon="true"
            :full-width="width === 'full'"
          >
            <template #icon>
              <ListIcon />
            </template>
          </HLContentSwitcher>
        </HLRadioGroup>
      </div>

      <!-- With Description -->
      <div>
        <h2>With Description</h2>
        <p>Content switchers with description.</p>
        <HLRadioGroup
          id="radio-with-description-group"
          v-model:value="value"
          name="radioGroupWithDescription"
          width="full"
        >
          <HLContentSwitcher
            v-for="song in descriptionSongs"
            :id="'radio-with-description-' + song.value"
            :key="song.value"
            :value="song.value"
            :label="song.label"
            width="full"
          >
            <template #description>
              <p>{{ song.label }}</p>
            </template>
          </HLContentSwitcher>
        </HLRadioGroup>
      </div>

      <!-- Mixed States -->
      <div>
        <h2>Mixed States</h2>
        <p>
          A combination of normal, disabled, and icon-only content switchers.
        </p>
        <HLRadioGroup
          id="radio-mixed-group"
          v-model:value="value"
          name="radioGroupMixed"
        >
          <HLContentSwitcher
            id="radio-mixed-1"
            value="mixed1"
            label="Normal"
            :full-width="width === 'full'"
          />
          <HLContentSwitcher
            id="radio-mixed-2"
            value="mixed2"
            label="With Icon"
            :full-width="width === 'full'"
          >
            <template #icon>
              <ListIcon />
            </template>
          </HLContentSwitcher>
          <HLContentSwitcher
            id="radio-mixed-3"
            value="mixed3"
            label="Disabled"
            :disabled="true"
            :full-width="width === 'full'"
          />
          <HLContentSwitcher
            id="radio-mixed-4"
            value="mixed4"
            :onlyIcon="true"
            :full-width="width === 'full'"
          >
            <template #icon>
              <ListIcon />
            </template>
          </HLContentSwitcher>
        </HLRadioGroup>
      </div>

      <div>
        <h2>Different Variants</h2>
        <HLRadioGroup
          id="radio-mixed-group"
          v-model:value="value"
          name="radioGroupMixed"
          theme="neutral"
        >
          <HLContentSwitcher
            id="radio-mixed-1"
            value="mixed1"
            label="Label 1"
            :full-width="width === 'full'"
          />
          <HLContentSwitcher
            id="radio-mixed-2"
            value="mixed2"
            label="Label 2"
          />
          <HLContentSwitcher
            id="radio-mixed-3"
            value="mixed3"
            label="disabled"
            disabled
          />
          <HLContentSwitcher
            id="radio-mixed-4"
            value="mixed4"
            label="Label 4"
          />
        </HLRadioGroup>
        <br />
        <br />
        <HLRadioGroup
          id="radio-mixed-group"
          v-model:value="value"
          name="radioGroupMixed"
          theme="primary"
        >
          <HLContentSwitcher
            id="radio-mixed-1"
            value="mixed1"
            label="Label 1"
            :full-width="width === 'full'"
          />
          <HLContentSwitcher
            id="radio-mixed-2"
            value="mixed2"
            label="Label 2"
          />
          <HLContentSwitcher
            id="radio-mixed-3"
            value="mixed3"
            label="disabled"
            disabled
          />
          <HLContentSwitcher
            id="radio-mixed-4"
            value="mixed4"
            label="Label 4"
          />
        </HLRadioGroup>
      </div>

      <div>
        <h2>Customised Font</h2>
        <HLRadioGroup
          id="radio-mixed-group"
          v-model:value="value"
          name="radioGroupMixed"
          theme="neutral"
        >
          <HLContentSwitcher id="radio-mixed-1" value="mixed1">
            <HLText size="2xl" weight="regular">Lable 1</HLText>
          </HLContentSwitcher>
          <HLContentSwitcher id="radio-mixed-2" value="mixed2">
            <HLText size="2xl" weight="regular">Lable 2</HLText>
          </HLContentSwitcher>
        </HLRadioGroup>
      </div>
    </HLSpace>
  </div>
</template>
