<script setup lang="ts">
import { LayersThree01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLCheckboxCard,
  HLCheckboxGroup,
  HLSpace,
  HLToggle,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const selectedPlans = ref(['basic']) // Pre-selected value
const singleChecked = ref(false)
const disabled = ref(false)

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Checkbox Card -->
      <div>
        <h2>Basic Checkbox Card</h2>
        <p>A simple checkbox card with title and description.</p>
        <HLCheckboxCard
          id="basic-card"
          v-model:checked="singleChecked"
          title="Business Plan"
          description="Perfect for growing teams with up to 20 users"
        />
      </div>

      <!-- Basic Checkbox Card Group -->
      <div>
        <h2>Basic Checkbox Card Group</h2>
        <p>A group of checkbox cards.</p>
        <HLCheckboxGroup v-model:value="selectedPlans" direction="vertical">
          <HLSpace vertical size="md">
            <HLCheckboxCard
              id="basic-plan"
              value="basic"
              title="Basic Plan"
              description="Perfect for small teams starting their journey"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
            </HLCheckboxCard>
            <HLCheckboxCard
              id="pro-plan"
              value="pro"
              title="Pro Plan"
              description="Advanced features for growing teams"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
            </HLCheckboxCard>
            <HLCheckboxCard
              id="enterprise-plan"
              value="enterprise"
              title="Enterprise Plan"
              description="Full suite of features for large organizations"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
            </HLCheckboxCard>
          </HLSpace>
        </HLCheckboxGroup>
      </div>

      <!-- With Icon -->
      <div>
        <h2>With Icon</h2>
        <p>Checkbox card with a custom icon for enhanced visual hierarchy.</p>
        <HLCheckboxCard
          id="icon-card"
          v-model:checked="singleChecked"
          title="Enterprise Plan"
          description="Unlimited users and advanced features"
        >
          <template #icon>
            <LayersThree01Icon />
          </template>
        </HLCheckboxCard>
      </div>

      <!-- Compact Mode -->
      <div>
        <h2>Compact Mode</h2>
        <p>A more condensed version without the checkbox visible.</p>
        <HLCheckboxCard
          id="compact-card"
          v-model:checked="singleChecked"
          title="Enterprise Plan"
          description="Unlimited users and advanced features Essential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams"
          :compact="true"
        >
          <template #icon>
            <LayersThree01Icon />
          </template>
        </HLCheckboxCard>
      </div>

      <!-- Without Icon -->
      <div>
        <h2>Without Icon</h2>
        <HLCheckboxCard
          id="no-icon-card"
          v-model:checked="singleChecked"
          title="Standard Plan"
          description="Essential features for small teams Essential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teamsEssential features for small teams"
        />
      </div>

      <!-- Without Description -->
      <div>
        <h2>Without Description</h2>
        <HLCheckboxCard
          id="no-desc-card"
          v-model:checked="singleChecked"
          title="Simple Plan"
        >
          <template #icon>
            <LayersThree01Icon />
          </template>
        </HLCheckboxCard>
      </div>

      <!-- Custom Content -->
      <div>
        <h2>Custom Content</h2>
        <HLCheckboxGroup v-model:value="selectedPlans" direction="vertical">
          <HLSpace vertical size="md">
            <HLCheckboxCard
              id="custom-basic-plan"
              value="custom-basic"
              title="Basic Plan"
              description="Perfect for small teams"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
              <template #content>
                <div class="mt-2 text-sm text-gray-600">
                  <ul class="list-disc list-inside">
                    <li>Up to 5 users</li>
                    <li>10GB storage</li>
                    <li>Email support</li>
                  </ul>
                </div>
              </template>
            </HLCheckboxCard>
            <HLCheckboxCard
              id="custom-pro-plan"
              value="custom-pro"
              title="Pro Plan"
              description="For growing teams"
            >
              <template #icon>
                <LayersThree01Icon />
              </template>
              <template #content>
                <div class="mt-2 text-sm text-gray-600">
                  <ul class="list-disc list-inside">
                    <li>Up to 20 users</li>
                    <li>100GB storage</li>
                    <li>Priority support</li>
                  </ul>
                </div>
              </template>
            </HLCheckboxCard>
          </HLSpace>
        </HLCheckboxGroup>
      </div>

      <div>
        <h2>Partial disabled</h2>
        <div style="padding: 8px 0">
          <HLToggle v-model:value="disabled" label="Disable" />
        </div>
        <HLCheckboxGroup
          v-model:value="selectedPlans"
          direction="vertical"
          :disabled="disabled"
          :key="disabled ? 'disabled' : 'enabled'"
        >
          <HLCheckboxCard
            value="basic"
            :disabled="true"
            id="partial-disabled-card"
            title="This is always disabled"
            description="This is partially disabled"
          />
          <HLCheckboxCard
            value="basic2"
            id="partial-disabled-card2"
            title="Title for this card"
            description="Description for this card"
          />
          <HLCheckboxCard
            value="basic3"
            id="partial-disabled-card3"
            title="Title for this card"
            description="Description for this card"
          />
        </HLCheckboxGroup>
      </div>
    </HLSpace>
  </div>
</template>
