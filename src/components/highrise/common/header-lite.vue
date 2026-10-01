<script setup lang="ts">
import {
  CheckCircleIcon,
  InfoCircleIcon,
  Share01Icon,
  UploadCloud01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLHeaderLite,
  HLHeaderLiteItem,
  HLIcon,
  HLSpace,
  HLTag,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
const handleClose = () => {
  console.log('GUIPG', 'close')
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div class="p-4">
        <h2>Basic Usage</h2>
        <HLHeaderLite
          title="Page Title"
          subtitle="Page description"
          size="md"
          :closable="true"
          @update:close="handleClose"
          id="header-lite-usage-example"
        >
          <!-- Header icons -->
          <template #header-icons>
            <div
              style="
                background-color: rgba(147, 196, 253, 0.9);
                padding: 4px 8px;
                border-radius: 4px;
              "
            >
              <HLIcon aria-label="Info Circle Icon">
                <InfoCircleIcon />
              </HLIcon>
            </div>
          </template>
          <template #header-title-extra-content>
            <div
              style="
                background-color: rgba(167, 243, 208, 0.88);
                padding: 4px 8px;
                border-radius: 4px;
                display: flex;
                gap: 8px;
                align-items: center;
              "
            >
              <HLIcon size="16" aria-label="Info Circle Icon">
                <InfoCircleIcon />
              </HLIcon>
              <HLIcon
                style="color: green"
                aria-label="Check Circle Icon"
              >
                <CheckCircleIcon />
              </HLIcon>
              <HLTag
                id="size-md-tag"
                size="xs"
                :count="55555"
                :bordered="false"
                color="success"
              >
                Label
              </HLTag>
            </div>
          </template>
          <template #header-content-right>
            <div
              style="
                background-color: rgba(251, 191, 36, 0.88);
                padding: 4px 8px;
                border-radius: 4px;
                display: flex;
                gap: 8px;
                align-items: center;
              "
            >
              <HLHeaderLiteItem
                justify="end"
                align="center"
                id="header-lite-item-1"
              >
                <HLButton
                  id="header-share-btn"
                  variant="secondary"
                  size="xs"
                  color="gray"
                >
                  <template #iconLeft>
                    <Share01Icon class="w-3" />
                  </template>
                  Share
                </HLButton>
                <HLButton
                  id="header-upload-btn"
                  variant="secondary"
                  size="xs"
                  color="gray"
                >
                  <template #iconLeft>
                    <UploadCloud01Icon class="w-3" />
                  </template>
                  Upload
                </HLButton>
              </HLHeaderLiteItem>
            </div>
          </template>
        </HLHeaderLite>
      </div>

      <!-- Header with Image -->
      <div class="p-4">
        <h2>Header with Image</h2>
        <HLHeaderLite
          title="Header with Image"
          size="md"
          id="header-lite-image-example"
        >
          <template #header-icons>
            <img
              src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg"
              style="width: 20px; height: 20px"
              aria-label="Mastercard logo"
            />
            <HLIcon aria-label="Info Circle Icon">
              <InfoCircleIcon />
            </HLIcon>
          </template>
        </HLHeaderLite>
      </div>

      <!-- Custom Title -->
      <div class="p-4">
        <h2>Custom Title</h2>
        <HLHeaderLite
          title="Custom Title"
          size="md"
          id="header-lite-custom-title-example"
        >
          <template #header-title-extra-content>
            <HLIcon size="16" aria-label="Info Circle Icon">
              <InfoCircleIcon />
            </HLIcon>
            <HLIcon
              style="color: green"
              aria-label="Check Circle Icon"
            >
              <CheckCircleIcon />
            </HLIcon>
          </template>
        </HLHeaderLite>
      </div>
    </HLSpace>
  </div>
</template>
