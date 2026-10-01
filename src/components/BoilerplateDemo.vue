<script setup>
import { ref } from 'vue'
import {
    HLAlert,
  HLBadge,
  HLButton,
  HLCard,
  HLCheckbox,
  HLInput,
  HLModal,
  HLSelect,
  HLTag,
  HLToggle
} from '@gohighlevel/highrise'

const name = ref('')
const plan = ref(null)
const agreed = ref(false)
const notifications = ref(true)
const showModal = ref(false)

const planOptions = [
  { label: 'Starter', value: 'starter' },
  { label: 'Unlimited', value: 'unlimited' },
  { label: 'Pro', value: 'pro' }
]
</script>

<template>
  <div>
    <HLAlert
      id="welcome-alert"
      color="blue"
      title="Highrise boilerplate"
      content="10 Highrise components wired up."
      :closable="false"
      type="inline"
    />

    <HLCard>
      <template #header>
        <div style="display: flex; align-items: center; gap: 8px; padding: 16px">
          <strong>Sign up</strong>
          <HLTag color="green">New</HLTag>
          <HLBadge id="signup-badge" :value="3" />
        </div>
      </template>

      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px">
        <HLInput id="name-input" v-model="name" placeholder="Your name" clearable />
        <HLSelect v-model:value="plan" :options="planOptions" placeholder="Choose a plan" />
        <HLToggle v-model:value="notifications" label="Email notifications" />
        <HLCheckbox id="terms-checkbox" v-model:checked="agreed">I agree to the terms</HLCheckbox>
      </div>

      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 8px; padding: 16px">
          <HLButton variant="secondary" @click="name = ''">Reset</HLButton>
          <HLButton variant="primary" color="blue" :disabled="!agreed" @click="showModal = true"
            >Submit</HLButton
          >
        </div>
      </template>
    </HLCard>

    <HLModal id="confirm-modal" v-model:show="showModal" type="success">
      <template #header>Submitted</template>
      <p>Name: {{ name || '—' }}</p>
      <p>Plan: {{ plan || '—' }}</p>
      <p>Notifications: {{ notifications ? 'On' : 'Off' }}</p>
      <template #footer>
        <HLButton variant="primary" color="blue" @click="showModal = false">Done</HLButton>
      </template>
    </HLModal>
  </div>
</template>
