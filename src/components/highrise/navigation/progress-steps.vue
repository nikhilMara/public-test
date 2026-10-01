<template>
  <div>
    <h1>Progress Steps</h1>

    <section>
      <h2>Basic Usage</h2>
      <p>
        Progress Steps is a navigation component that helps users track their
        progress through a multi-step process or workflow. It provides visual
        feedback about the current state, completed steps, and remaining steps.
      </p>

      <div class="demo-section">
        <HLProgressSteps :steps="steps" />
      </div>
    </section>

    <section>
      <h2>Vertical Layout</h2>
      <div class="demo-section">
        <HLProgressSteps :steps="steps" vertical />
      </div>
    </section>

    <section>
      <h2>Clickable Steps</h2>
      <p>
        You can make steps clickable and handle navigation between steps. The
        component emits an <code>update:step</code> event when a step is
        clicked.
      </p>
      <div class="demo-section">
        <HLProgressSteps
          :steps="clickableSteps"
          @update:step="handleStepClick"
        />
      </div>
    </section>

    <section>
      <h2>Custom Content</h2>
      <p>
        You can customize the content of each step using the
        <code>step-content</code> slot. This allows you to add interactive
        elements, forms, or any custom content within each step.
      </p>
      <div class="demo-section">
        <HLProgressSteps
          :steps="customSteps"
          vertical
          @update:step="currentCustomStep = $event"
        >
          <template #step-content="{ index }">
            <!-- Step 1 -->
            <div v-if="index === 0" class="step-content">
              <HLText size="xl" :weight="'semibold'" class="m-2"
                >Manage social accounts</HLText
              >
              <HLText size="sm" :weight="'medium'" class="m-2 text-gray-400"
                >We recommend connecting 2 social accounts to start
                with.</HLText
              >
              <HLSpace align="center">
                <HLAvatar size="sm" class="m-1">JD</HLAvatar>
                <HLText size="lg" :weight="'semibold'">John Doe</HLText>
              </HLSpace>
              <HLSelect
                class="m-2"
                size="xs"
                :options="[
                  { label: 'Facebook', value: 'facebook' },
                  { label: 'LinkedIn', value: 'linkedin' },
                ]"
                :value="selectedOption"
                @update:value="selectedOption = $event"
              />
              <HLButton variant="secondary" color="gray"
                >Connect on Facebook</HLButton
              >
              <HLButton variant="secondary" color="gray"
                >Connect on LinkedIn</HLButton
              >
            </div>
            <!-- Step 2 -->
            <div v-if="index === 1" class="step-content">
              <HLButton variant="primary" color="blue" size="xs" disabled
                >Get Started</HLButton
              >
            </div>
          </template>
        </HLProgressSteps>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  HLAvatar,
  HLButton,
  HLProgressSteps,
  HLSelect,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { computed, inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const currentStep = ref(2)
const currentCustomStep = ref(0)
const selectedOption = ref('facebook')

const steps = [
  {
    id: 'step-1',
    title: 'Account Setup',
    subtitle:
      '[Complete]<br/>Start your journey by creating a new account or signing into an existing one.',
    status: 'complete' as const,
  },
  {
    id: 'step-2',
    title: 'Email Verification',
    subtitle:
      '[Complete] Verify your email address by clicking the link sent to your inbox to ensure security.',
    status: 'complete' as const,
  },
  {
    id: 'step-3',
    title: 'Profile Completion',
    subtitle:
      '[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences. [In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.[In Progress] Complete your profile by providing necessary details such as your name, address, and preferences.',
    status: 'current' as const,
  },
  {
    id: 'step-4',
    title: 'Settings Selection',
    subtitle:
      '[Warning] Choose your notification and communication preferences to customize your experience.',
    status: 'warning' as const,
  },
  {
    id: 'step-5',
    title: 'Connect Services',
    subtitle:
      '[Error] Link your account to relevant services or integrations to unlock more features.',
    status: 'error' as const,
  },
  {
    id: 'step-6',
    title: 'Review Terms',
    subtitle:
      '[Pending] Carefully read and agree to the terms and conditions to proceed.',
  },
]

const clickableSteps = computed(() =>
  steps.map((step, index) => {
    let status: 'current' | 'complete' | 'default'
    if (index === currentStep.value) {
      status = 'current'
    } else if (index < currentStep.value) {
      status = 'complete'
    } else {
      status = 'default'
    }
    return {
      ...step,
      id: step.id || `clickable-step-${index}`,
      status,
      className: 'clickable-step',
    }
  })
)

const handleStepClick = (index: number) => {
  currentStep.value = index
}

const customSteps = [
  {
    id: 'custom-step-1',
    title: 'Manage social accounts',
    subtitle: 'We recommend connecting 2 social accounts to start with.',
  },
  {
    id: 'custom-step-2',
    title: 'Finish Setup',
  },
  {
    id: 'custom-step-3',
    title: 'Connect to Services',
    status: 'current' as const,
  },
  {
    id: 'custom-step-4',
    title: 'Review Terms',
    status: 'loading' as const,
  },
  {
    id: 'custom-step-5',
    title: 'Submit Application for Passport',
    status: 'complete' as const,
  },
]
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
/* 
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #eee;
}

th {
  background-color: #f5f5f5;
} */

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}

pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.clickable-step {
  cursor: pointer;
}

.clickable-step:hover {
  opacity: 0.9;
}

.step-content {
  padding: 1rem 0;
}
</style>
