<script setup lang="ts">
import { MaterialArrowUploadProgressIcon } from '@gohighlevel/ghl-icons/24/material/rounded'
import {
  Image01Icon,
  UploadCloud01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
  HLDropdown,
  HLModal,
  HLSpace,
  HLText,
  HLUpload,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const fileList = ref([
  {
    id: 'a',
    name: 'Tech design requirements.pdf',
    status: 'pending' as const,
    type: 'image/jpeg',
    url: 'https://storage.googleapis.com/msgsndr/Vnhvoz8w8g7iFEFz37aq/media/640572bf27f37128ce68dcd2.jpeg',
  },
  {
    id: 'b',
    name: 'Tech design requirements.pdf',
    status: 'finished' as const,
    type: 'video/mp4',
    url: 'https://storage.googleapis.com/msgsndr/Vnhvoz8w8g7iFEFz37aq/media/ab8d4d61-33a6-48be-a56b-df60693544ae.jpeg',
  },
  {
    id: 'c',
    name: 'Tech design requirements.pdf',
    status: 'uploading' as const,
    percentage: 50,
    type: 'application/pdf',
    url: 'https://storage.googleapis.com/msgsndr/Vnhvoz8w8g7iFEFz37aq/media/6396e0f2b5d8bd0ff06eb0df.jpeg',
  },
  {
    id: 'd',
    name: 'Tech design requirements.pdf',
    status: 'error' as const,
    type: 'zip',
    percentage: 50,
  },
])

const downloadfileList = ref([
  {
    id: 'a',
    name: 'Tech design requirements.pdf',
    status: 'finished' as const,
    type: 'application/pdf',
    url: 'https://storage.googleapis.com/msgsndr/Vnhvoz8w8g7iFEFz37aq/media/640572bf27f37128ce68dcd2.jpeg',
  },
])

const buttonUploadFileList = ref([])
const multipleUploadFileList = ref([])
const disabledUploadFileList = ref([])

const handleChange = (data: any) => {
  console.log('Files changed:', data)
}

const handleDownload = (file: any) => {
  console.log('downloaded file ', file)
}

// Open File Dialog example - demonstrates programmatic file picker via ref
const openFileDialogUploadRef = ref<InstanceType<typeof HLUpload> | null>(null)
const openFileDialogFileList = ref<any[]>([])
const showMediaLibraryModal = ref(false)

const uploadSourceOptions = [
  {
    key: 'upload-media',
    label: 'Upload media',
    type: 'icon',
    icon: UploadCloud01Icon,
  },
  {
    key: 'media-library',
    label: 'Add from Media library',
    type: 'icon',
    icon: Image01Icon,
  },
]

function handleUploadSourceSelect(key: string) {
  if (key === 'upload-media') {
    openFileDialogUploadRef.value?.openFileDialog()
  } else if (key === 'media-library') {
    showMediaLibraryModal.value = true
  }
}

function handleOpenFileDialogChange({ fileList }: { fileList: any[] }) {
  openFileDialogFileList.value = fileList
  handleChange({ fileList })
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Draggable Upload (Default) -->
      <div>
        <h2>Draggable Upload (Default)</h2>
        <p>
          A versatile component that supports drag-and-drop or button-triggered
          file uploads.
        </p>
        <div
          class="flex flex-col items-center justify-center"
          style="max-width: 512px"
        >
          <HLUpload
            id="draggable-upload"
            v-model:file-list="fileList"
            @change="handleChange"
            :onDownload="file => console.log('downloaded ', file)"
          />
        </div>
      </div>

      <!-- By File Manager (Button Upload) -->
      <div>
        <h2>By File Manager (Button Upload)</h2>
        <p>Set the <code>type</code> prop to <code>button</code></p>
        <div
          class="flex flex-col items-center justify-center"
          style="max-width: 512px"
        >
          <HLUpload
            id="button-upload"
            v-model:file-list="buttonUploadFileList"
            :multiple="true"
            @change="handleChange"
            type="button"
          >
            <template #buttonContent>
              <UploadCloud01Icon class="w-4 h-4 me-2" />
              <span>Upload Multiple Images</span>
            </template>
          </HLUpload>
        </div>
      </div>

      <!-- Multiple Upload -->
      <div>
        <h2>Multiple Upload</h2>
        <p>Pass the <code>multiple</code> prop or set it to true</p>
        <div
          class="flex flex-col items-center justify-center"
          style="max-width: 512px"
        >
          <HLUpload
            id="multiple-upload"
            v-model:file-list="multipleUploadFileList"
            :multiple="true"
            @change="handleChange"
          >
            <template #buttonContent>
              <UploadCloud01Icon class="w-4 h-4 me-2" />
              <span>Upload Multiple Images</span>
            </template>
          </HLUpload>
        </div>
      </div>

      <!-- Disabled Upload -->
      <div>
        <h2>Disabled Upload</h2>
        <div
          class="flex flex-col items-center justify-center"
          style="max-width: 512px"
        >
          <HLUpload
            id="disabled-upload"
            v-model:file-list="disabledUploadFileList"
            :disabled="true"
            @change="handleChange"
          >
            <template #buttonContent>
              <UploadCloud01Icon class="w-4 h-4 me-2" />
              <span>Upload Image</span>
            </template>
          </HLUpload>
        </div>
      </div>

      <!-- Download Support -->
      <div>
        <h2>Download Support</h2>
        <p>
          Set the <code>:show-download-button</code> prop to
          <code>true</code> to show the download button and then you can use the
          <code>onDownload</code> emitter to handle the download logic.
        </p>
        <div
          class="flex flex-col items-center justify-center"
          style="max-width: 512px"
        >
          <HLUpload
            id="download-upload"
            v-model:file-list="downloadfileList"
            :show-download-button="true"
            :onDownload="handleDownload"
          >
            <template #buttonContent>
              <UploadCloud01Icon class="w-4 h-4 me-2" />
              <span>Upload with Download</span>
            </template>
          </HLUpload>
        </div>
      </div>

      <!-- File Type Restrictions -->
      <div>
        <h2>File Type Restrictions</h2>
        <p>Use the <code>accept</code> prop to restrict file types</p>
        <HLSpace vertical>
          <div>
            <h3>Images Only</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="images-only-upload"
                v-model:file-list="fileList"
                accept="image/*"
                @change="handleChange"
                type="button"
              >
                <template #buttonContent>
                  <UploadCloud01Icon class="w-4 h-4 me-2" />
                  <span>Upload Images Only</span>
                </template>
              </HLUpload>
            </div>
          </div>
          <div>
            <h3>PDFs Only</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="pdfs-only-upload"
                v-model:file-list="fileList"
                accept=".pdf"
                @change="handleChange"
                type="button"
              >
                <template #buttonContent>
                  <UploadCloud01Icon class="w-4 h-4 me-2" />
                  <span>Upload PDFs Only</span>
                </template>
              </HLUpload>
            </div>
          </div>
          <div>
            <h3>Multiple File Types</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="multiple-types-upload"
                v-model:file-list="fileList"
                accept=".pdf,.doc,.docx,.jpg,.png"
                @change="handleChange"
                type="button"
              >
                <template #buttonContent>
                  <UploadCloud01Icon class="w-4 h-4 me-2" />
                  <span>Upload Documents & Images</span>
                </template>
              </HLUpload>
            </div>
          </div>
        </HLSpace>
      </div>

      <!-- Max Files Limit -->
      <div>
        <h2>Max Files Limit</h2>
        <p>Use the <code>max</code> prop to limit the number of files</p>
        <div style="max-width: 512px">
          <HLUpload
            id="max-files-upload"
            v-model:file-list="fileList"
            :max="3"
            :multiple="true"
            @change="handleChange"
            type="button"
          >
            <template #buttonContent>
              <UploadCloud01Icon class="w-4 h-4 me-2" />
              <span>Upload Max 3 Files</span>
            </template>
          </HLUpload>
        </div>
      </div>

      <!-- Custom Button Props -->
      <div>
        <h2>Custom Button Props</h2>
        <p>Customize the upload button using <code>buttonProps</code></p>
        <HLSpace vertical>
          <div>
            <h3>Primary Button</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="primary-button-upload"
                v-model:file-list="fileList"
                type="button"
                :button-props="{
                  id: 'primary-upload-btn',
                  variant: 'primary',
                  color: 'blue',
                  size: 'lg',
                }"
                @change="handleChange"
              >
                <template #buttonContent>
                  <UploadCloud01Icon class="w-4 h-4 me-2" />
                  <span>Primary Upload Button</span>
                </template>
              </HLUpload>
            </div>
          </div>
          <div>
            <h3>Secondary Button</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="secondary-button-upload"
                v-model:file-list="fileList"
                type="button"
                :button-props="{
                  id: 'secondary-upload-btn',
                  variant: 'secondary',
                  color: 'gray',
                  size: 'md',
                }"
                @change="handleChange"
              >
                <template #buttonContent>
                  <UploadCloud01Icon class="w-4 h-4 me-2" />
                  <span>Secondary Upload Button</span>
                </template>
              </HLUpload>
            </div>
          </div>
          <div>
            <h3>Ghost Button</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="ghost-button-upload"
                v-model:file-list="fileList"
                type="button"
                :button-props="{
                  id: 'ghost-upload-btn',
                  variant: 'ghost',
                  color: 'green',
                  size: 'sm',
                }"
                @change="handleChange"
              >
                <template #buttonContent>
                  <UploadCloud01Icon class="w-4 h-4 me-2" />
                  <span>Ghost Upload Button</span>
                </template>
              </HLUpload>
            </div>
          </div>
        </HLSpace>
      </div>

      <!-- Custom Slots -->
      <div>
        <h2>Custom Slots</h2>
        <HLSpace vertical>
          <div>
            <h3>Custom Button Icon</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="custom-icon-upload"
                v-model:file-list="fileList"
                type="button"
                @change="handleChange"
              >
                <template #buttonIcon>
                  <MaterialArrowUploadProgressIcon class="w-5 h-5 me-2" />
                </template>
                <template #buttonContent>
                  <span>Custom Icon Upload</span>
                </template>
              </HLUpload>
            </div>
          </div>
          <div>
            <h3>Custom Extra Content</h3>
            <div style="max-width: 512px">
              <HLUpload
                id="custom-extra-upload"
                v-model:file-list="fileList"
                @change="handleChange"
              >
                <template #extra>
                  <HLText class="text-sm text-gray-500 mt-2">
                    Drag and drop files here or click to browse. Maximum file
                    size: 10MB
                  </HLText>
                </template>
              </HLUpload>
            </div>
          </div>
        </HLSpace>
      </div>

      <!-- Open File Dialog (programmatic trigger) -->
      <div>
        <h2>Open File Dialog</h2>
        <p>
          Use the <code>openFileDialog</code> exposed method to programmatically
          open the native file picker. This example uses a dropdown in the
          <code>#extra</code> slot to let users choose between uploading files
          or adding from a media library.
        </p>
        <div
          class="flex flex-col items-center justify-center gap-4"
          style="max-width: 512px"
        >
          <HLUpload
            id="open-file-dialog-upload"
            ref="openFileDialogUploadRef"
            type="draggable"
            :file-list="openFileDialogFileList"
            @change="handleOpenFileDialogChange"
          >
            <template #extra>
              <div @click.prevent.stop>
                <HLDropdown
                  id="upload-source-dropdown"
                  :options="uploadSourceOptions"
                  :show-search="false"
                  :show-arrow="false"
                  :highlight-selection="false"
                  @select="handleUploadSourceSelect"
                >
                  <div
                    class="flex flex-row items-center justify-center gap-1 cursor-pointer"
                  >
                    <HLText size="md" weight="medium" class="text-blue-600"
                      >Add files</HLText
                    >
                    <HLText size="md" class="text-gray-600"
                      >or drag and drop</HLText
                    >
                  </div>
                </HLDropdown>
              </div>
            </template>
          </HLUpload>

          <HLModal
            id="media-library-modal"
            v-model:show="showMediaLibraryModal"
            type="default"
            size="md"
          >
            <template #header>Add from Media Library</template>
            <div class="p-4">
              <HLText size="md" class="text-gray-600">
                Select from your media library. This is a placeholder for the
                media library content.
              </HLText>
            </div>
          </HLModal>
        </div>
      </div>

      <!-- Event Handling -->
      <div>
        <h2>Event Handling</h2>
        <p>
          Upload component emits various events for handling different upload
          states
        </p>
        <div style="max-width: 512px">
          <HLUpload
            id="events-upload"
            v-model:file-list="fileList"
            @change="data => console.log('Change event:', data)"
            @remove="data => console.log('Remove event:', data)"
            @download="file => console.log('Download event:', file)"
            :show-download-button="true"
          >
            <template #buttonContent>
              <UploadCloud01Icon class="w-4 h-4 me-2" />
              <span>Upload with Events</span>
            </template>
          </HLUpload>
        </div>
        <HLText class="text-sm text-gray-500 mt-2">
          Check the browser console to see event logs
        </HLText>
      </div>

      <!-- Different File States -->
      <div>
        <h2>Different File States</h2>
        <p>Upload component displays different states for files:</p>
        <ul class="text-sm text-gray-600 mb-4">
          <li><strong>Pending:</strong> File is queued for upload</li>
          <li>
            <strong>Uploading:</strong> File is currently being uploaded (with
            progress)
          </li>
          <li><strong>Finished:</strong> File upload completed successfully</li>
          <li><strong>Error:</strong> File upload failed</li>
          <li><strong>Removed:</strong> File has been removed from the list</li>
        </ul>
        <div style="max-width: 512px">
          <HLUpload
            id="file-states-upload"
            v-model:file-list="fileList"
            @change="handleChange"
          />
        </div>
      </div>
      <!-- Inline Upload -->
      <div>
        <h2>Inline Upload</h2>
        <p>
          Set the <code>inline</code> prop to <code>true</code> to display the
          upload as an inline label with files listed as tags.
        </p>
        <div style="max-width: 512px">
          <HLUpload
            id="inline-upload"
            v-model:file-list="fileList"
            :inline="true"
            @change="handleChange"
            :onDownload="handleDownload"
          >
            <template #inlineUploadLabelIcon>
              <UploadCloud01Icon class="w-4 h-4" />
            </template>
            <template #inlineUploadLabelText>
              <HLText size="lg" weight="medium" class="text-gray-600"
                >Attach Files</HLText
              >
            </template>
          </HLUpload>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
