<script setup lang="ts">
import { ArrowDownIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLAvatar,
  HLBadge,
  HLInputNumber,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'
const direction = inject<string>('dir') as 'ltr' | 'rtl'
const badgeSize = ref(24)
const offset = ref<[number, number]>([-10, 10])
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>
          <strong>Note:</strong> <code>HLBadge</code> is wrapper to be used
          along with other components like <code>HLAvatar</code>,
          <code>HLButton</code> etc,. TO show the count, or indicative of a
          change.
        </p>
        <HLBadge id="basic-badge" :value="400" :max="15">
          <HLAvatar :round="false" size="sm">Small</HLAvatar>
        </HLBadge>
      </div>

      <!-- Colors -->
      <div>
        <h2>Colors</h2>
        <HLSpace>
          <HLBadge id="blue-badge" :value="40" color="blue">
            <HLAvatar :round="false" size="sm">Small</HLAvatar>
          </HLBadge>
          <HLBadge id="green-badge" :value="40" color="success">
            <HLAvatar :round="false" size="sm">Small</HLAvatar>
          </HLBadge>
          <HLBadge id="red-badge" :value="40" color="error">
            <HLAvatar :round="false" size="sm">Small</HLAvatar>
          </HLBadge>
          <HLBadge id="purple-badge" :value="40" color="purple">
            <HLAvatar :round="false" size="sm">Small</HLAvatar>
          </HLBadge>
        </HLSpace>
      </div>

      <!-- Dot Badge -->
      <div>
        <h2>Dot Badge</h2>
        <HLBadge id="dot-badge" dot>
          <HLAvatar :round="false" size="sm">Small</HLAvatar>
        </HLBadge>
      </div>

      <!-- Processing State -->
      <div>
        <h2>Processing State</h2>
        <HLBadge id="processing-badge" :value="40" processing>
          <HLAvatar :round="false" size="sm">Small</HLAvatar>
        </HLBadge>
      </div>

      <!-- Sizes -->
      <div>
        <h2>Sizes</h2>
        <HLSpace>
          <HLBadge id="xs-badge" :value="60" size="xs">
            <HLAvatar :round="false" size="sm">XS</HLAvatar>
          </HLBadge>
          <HLBadge id="sm-badge" :value="60" size="sm">
            <HLAvatar :round="false" size="sm">SM</HLAvatar>
          </HLBadge>
          <HLBadge id="md-badge" :value="60" size="md">
            <HLAvatar :round="false" size="sm">MD</HLAvatar>
          </HLBadge>
          <HLBadge id="lg-badge" :value="60" size="lg">
            <HLAvatar :round="false" size="sm">LG</HLAvatar>
          </HLBadge>
        </HLSpace>
      </div>

      <!-- Custom Content -->
      <div>
        <h2>Custom Content</h2>
        <HLBadge id="custom-badge" size="xs" :offset="[0, 10]" color="blue">
          <HLAvatar
            size="sm"
            src="https://picsum.photos/seed/FeB6P/640/480"
            :imgProps="{
              'aria-label': 'old rusted car in an open field in a cloudy background',
            }"
          ></HLAvatar>
          <template #value>
            <ArrowDownIcon class="text-primary-600 w-3 h-3" />
          </template>
        </HLBadge>
      </div>

      <!-- Show Zero -->
      <div>
        <h2>Show Zero</h2>
        <HLSpace>
          <div>
            <h3>Default (showZero: false)</h3>
            <HLBadge id="no-show-zero-badge" :value="0">
              <HLAvatar :round="false" size="sm">Hidden</HLAvatar>
            </HLBadge>
          </div>
          <div>
            <h3>Show Zero: true</h3>
            <HLBadge id="show-zero-badge" :value="0" :showZero="true">
              <HLAvatar :round="false" size="sm">Shown</HLAvatar>
            </HLBadge>
          </div>
        </HLSpace>
      </div>

      <!-- Different Types -->
      <div>
        <h2>Different Types</h2>
        <HLSpace>
          <HLBadge id="default-type-badge" :value="5" type="default">
            <HLAvatar :round="false" size="sm">Default</HLAvatar>
          </HLBadge>
          <HLBadge id="success-type-badge" :value="5" type="success">
            <HLAvatar :round="false" size="sm">Success</HLAvatar>
          </HLBadge>
          <HLBadge id="error-type-badge" :value="5" type="error">
            <HLAvatar :round="false" size="sm">Error</HLAvatar>
          </HLBadge>
          <HLBadge id="warning-type-badge" :value="5" type="warning">
            <HLAvatar :round="false" size="sm">Warning</HLAvatar>
          </HLBadge>
          <HLBadge id="info-type-badge" :value="5" type="info">
            <HLAvatar :round="false" size="sm">Info</HLAvatar>
          </HLBadge>
        </HLSpace>
      </div>

      <!-- Visibility Control -->
      <div>
        <h2>Visibility Control</h2>
        <HLSpace>
          <div>
            <h3>Visible (show: true)</h3>
            <HLBadge id="visible-badge" :value="10" :show="true">
              <HLAvatar :round="false" size="sm">Visible</HLAvatar>
            </HLBadge>
          </div>
          <div>
            <h3>Hidden (show: false)</h3>
            <HLBadge id="hidden-badge" :value="10" :show="false">
              <HLAvatar :round="false" size="sm">Hidden</HLAvatar>
            </HLBadge>
          </div>
        </HLSpace>
      </div>

      <!-- Max Value -->
      <div>
        <h2>Max Value</h2>
        <HLSpace>
          <HLBadge id="max-value-badge" :value="100" :max="99">
            <HLAvatar :round="false" size="sm">99+</HLAvatar>
          </HLBadge>
          <HLBadge id="no-max-badge" :value="100">
            <HLAvatar :round="false" size="sm">100</HLAvatar>
          </HLBadge>
        </HLSpace>
      </div>

      <!-- String Values -->
      <div>
        <h2>String Values</h2>
        <HLSpace>
          <HLBadge id="new-badge" value="NEW">
            <HLAvatar :round="false" size="sm">New</HLAvatar>
          </HLBadge>
          <HLBadge id="hot-badge" value="HOT" color="error">
            <HLAvatar :round="false" size="sm">Hot</HLAvatar>
          </HLBadge>
        </HLSpace>
      </div>

      <!-- Custom Badge -->
      <div>
        <h2>Custom size</h2>
        size:
        <HLInputNumber v-model:value="badgeSize" id="input-number" />
        <div class="flex p-2 gap-2">
          x-axis:
          <HLInputNumber v-model:value="offset[0]" id="input-number" />
          y-axis:
          <HLInputNumber v-model:value="offset[1]" id="input-number" />
        </div>
        <br />
        <HLBadge
          size="custom"
          dot
          :offset="direction === 'ltr' ? offset : [-offset[0], offset[1]]"
          id="example-avatar-indicator-2xl"
        >
          <HLAvatar
            size="md"
            src="https://picsum.photos/seed/FeB6P/640/480"
            :imgProps="{
              'aria-label': 'old rusted car in an open field in a cloudy background',
            }"
          ></HLAvatar>
          <template #value>
            <div
              class="bg-black rounded-full"
              :style="{ width: badgeSize + 'px', height: badgeSize + 'px' }"
            ></div>
          </template>
        </HLBadge>
      </div>
    </HLSpace>
  </div>
</template>
