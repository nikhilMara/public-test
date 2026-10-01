<script setup lang="ts">
import { LayersThree01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLRadioCard,
  HLRadioGroup,
  HLSpace,
  HLToggle,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const disabled = ref(false)
const value = ref('')
const handleChange = (e: any) => {
  value.value = e.target.value
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <HLRadioGroup
          id="radio-card-default-group"
          :value="value"
          direction="vertical"
          :radioCardGroup="true"
        >
          <HLSpace id="radio-card-default-space" vertical>
            <HLRadioCard
              id="radio-card-default-1"
              @change="handleChange"
              value="card1"
              title="Business plan"
              description="Includes up to 20 users, 40GB individual data and access to all features."
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
            </HLRadioCard>
            <HLRadioCard
              id="radio-card-default-2"
              @change="handleChange"
              value="card2"
              title="Business plan"
              description="Includes up to 20 users, 40GB individual data and access to all features."
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
            </HLRadioCard>
          </HLSpace>
        </HLRadioGroup>
      </div>

      <!-- Without Icon -->
      <div>
        <h2>Without Icon</h2>
        <HLRadioGroup id="radio-card-no-icon-group" :value="value">
          <HLRadioCard
            id="radio-card-no-icon"
            @change="handleChange"
            value="card3"
            title="Business plan"
            description="Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features."
          />
        </HLRadioGroup>
      </div>

      <!-- Without Description -->
      <div>
        <h2>Without Description</h2>
        <HLRadioGroup id="radio-card-no-desc-group" :value="value">
          <HLRadioCard
            id="radio-card-no-desc"
            @change="handleChange"
            value="card4"
            title="Business plan"
          >
            <template #icon>
              <LayersThree01Icon />
            </template>
          </HLRadioCard>
        </HLRadioGroup>
      </div>

      <!-- Compact Mode -->
      <div>
        <h2>Compact Mode</h2>
        <HLRadioGroup id="radio-card-compact-group" :value="value">
          <HLRadioCard
            id="radio-card-compact"
            @change="handleChange"
            value="card5"
            title="Business plan"
            description="Includes up to 20 users, 40GB individual data and access to all features. Includes up to 20 users, 40GB individual data and access to all features.Includes up to 20 users, 40GB individual data and access to all features."
            compact
          >
            <template #icon>
              <LayersThree01Icon />
            </template>
          </HLRadioCard>
        </HLRadioGroup>
      </div>

      <!-- Custom Content -->
      <div>
        <h2>Custom Content</h2>
        <HLRadioGroup
          id="radio-card-custom-group"
          :value="value"
          direction="vertical"
          :radioCardGroup="true"
        >
          <HLSpace id="radio-card-custom-space" vertical>
            <HLRadioCard
              id="radio-card-custom-1"
              @change="handleChange"
              value="custom1"
              title="Business Plan"
              description="Perfect for growing teams"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
              <template #content>
                <div class="mt-2 text-sm text-gray-600">
                  <ul class="list-disc list-inside">
                    <li>Up to 20 users</li>
                    <li>40GB storage</li>
                    <li>Priority support</li>
                  </ul>
                </div>
              </template>
            </HLRadioCard>
            <HLRadioCard
              id="radio-card-custom-2"
              @change="handleChange"
              value="custom2"
              title="Enterprise Plan"
              description="For large organizations"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
              <template #content>
                <div class="mt-2 text-sm text-gray-600">
                  <ul class="list-disc list-inside">
                    <li>Unlimited users</li>
                    <li>1TB storage</li>
                    <li>24/7 support</li>
                  </ul>
                </div>
              </template>
            </HLRadioCard>
          </HLSpace>
        </HLRadioGroup>
      </div>

      <div>
        <h2>Partial disabled</h2>
        <div style="padding: 8px 0">
          <HLToggle v-model:value="disabled" label="Disable" />
        </div>
        <HLRadioGroup
          id="radio-card-partial-disabled-group"
          :value="value"
          :disabled="disabled"
          :key="disabled ? 'disabled' : 'enabled'"
        >
          <HLRadioCard
            id="radio-card-partial-disabled"
            @change="handleChange"
            value="card77"
            title="Business plan"
            description="Includes up to 20 users, 40GB individual data and access to all features."
          />
          <HLRadioCard
            id="radio-card-partial-disabled"
            @change="handleChange"
            value="card88"
            title="Business plan"
            description="Includes up to 20 users, 40GB individual data and access to all features."
          />
        </HLRadioGroup>
      </div>
    </HLSpace>
  </div>
</template>
