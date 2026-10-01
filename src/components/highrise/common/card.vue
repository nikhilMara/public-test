<script setup lang="ts">
import { Gift01Icon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLCard,
  HLIcon,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default Card -->
      <div>
        <h2>Default Card</h2>
        <HLCard class="max-w-2xl" id="card-1">
          <template #header>
            <div class="px-6 py-5 flex items-center gap-4">
              <HLIcon size="24" aria-label="Vendor breakdown Gift Icon">
                <Gift01Icon class="w-8 h-8 text-primary-600" />
              </HLIcon>
              <div>
                <HLText class="text-gray-900" size="2xl" weight="medium"
                  >Vendor breakdown</HLText
                >
                <HLText class="text-gray-500" size="sm" weight="regular"
                  >Keep track of vendors and their security ratings.</HLText
                >
              </div>
            </div>
          </template>
          <div class="px-6 py-5">
            <HLText size="md" weight="medium"
              >You've almost reached your limit</HLText
            >
            <HLText size="sm" weight="regular"
              >You have used 80% of your available spots. Upgrade plan to
              monitor more vendors. Our premium plans offer expanded vendor
              monitoring capabilities with additional features like real-time
              alerts, detailed security assessments, and comprehensive risk
              scoring. By upgrading, you'll gain access to unlimited vendor
              spots, advanced analytics dashboards, and customizable reporting
              tools. This will help you better manage vendor relationships,
              ensure compliance, and maintain strong security standards across
              your supply chain. Don't let limited spots constrain your vendor
              management - upgrade today to unlock the full potential of our
              platform.</HLText
            >
          </div>
          <template #footer>
            <div class="flex items-end justify-end px-6 py-5">
              <HLButton id="btn-1">View full report</HLButton>
            </div>
          </template>
        </HLCard>
      </div>

      <!-- Border Types -->
      <div>
        <h2>Border Types</h2>
        <div class="space-y-4">
          <HLCard class="max-w-2xl" id="card-info" borderType="info">
            <template #header>
              <div class="px-6 py-5">
                <HLText size="md" weight="medium">Info Card</HLText>
                <HLText size="sm" weight="regular"
                  >Card with info border type</HLText
                >
              </div>
            </template>
          </HLCard>
          <HLCard class="max-w-2xl" id="card-success" borderType="success">
            <template #header>
              <div class="px-6 py-5">
                <HLText size="md" weight="medium">Success Card</HLText>
                <HLText size="sm" weight="regular"
                  >Card with success border type</HLText
                >
              </div>
            </template>
          </HLCard>
          <HLCard class="max-w-2xl" id="card-warning" borderType="warning">
            <template #header>
              <div class="px-6 py-5">
                <HLText size="md" weight="medium">Warning Card</HLText>
                <HLText size="sm" weight="regular"
                  >Card with warning border type</HLText
                >
              </div>
            </template>
          </HLCard>
          <HLCard class="max-w-2xl" id="card-error" borderType="error">
            <template #header>
              <div class="px-6 py-5">
                <HLText size="md" weight="medium">Error Card</HLText>
                <HLText size="sm" weight="regular"
                  >Card with error border type</HLText
                >
              </div>
            </template>
          </HLCard>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
