<script setup lang="ts">
import { TrendUp01Icon, XIcon } from '@gohighlevel/ghl-icons/24/outline'
import {
  HLButton,
  HLDatePicker,
  HLDropdown,
  HLFormItem,
  HLHeaderLite,
  HLIcon,
  HLModal,
  HLPopover,
  HLSectionFooter,
  HLSectionFooterItem,
  HLSelect,
  HLSpace,
  HLText,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const showDefaultModal = ref(false)
const showInfoModal = ref(false)
const showSuccessModal = ref(false)
const showWarningModal = ref(false)
const showErrorModal = ref(false)
const showBackModal = ref(false)
const showMaskClosableModal = ref(false)
const showCustomHeaderFooterModal = ref(false)
const showSizesModal = ref({
  sm: false,
  md: false,
  lg: false,
  xl: false,
})
const showCloseIcon = ref(true)
const showIconModal = ref(false)

// Scrollable Modal with Overlays
const showOverlaysModal = ref(false)
const overlaySelectValue = ref<string | undefined>(undefined)
const overlayDateValue = ref<number | null>(null)
const overlaySelectOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian' },
  { label: 'Elderberry', value: 'elderberry' },
]
const overlayDropdownOptions = [
  { key: 'edit', label: 'Edit' },
  { key: 'duplicate', label: 'Duplicate' },
  { key: 'archive', label: 'Archive' },
  { key: 'delete', label: 'Delete' },
]
const overlayFillerParagraphs = Array.from({ length: 4 }, () => modalText)
const overlayTarget = '#example-modal-overlays .hr-dialog__content--text'
const overlayDropdownPopoverProps = { to: overlayTarget }

const modalText =
  'Tempore vivo desidero. Bene defungo perferendis calco avarus quas crepusculum accendo. Cruentus inflammatio trucido arguo alius. Tepesco coerceo alienus supellex auctor auctus vaco socius trucido. Ventus dens ex uredo cavus arx conventus una absconditus virtus. Solutio subnecto cohaero vae vivo tepidus facilis. Umbra arbor curiositas cibo talis cimentarius autus nostrum agnosco tener. Cunctatio asper audeo nesciunt turbo vinculum volup solvo allatus. Tunc curto conservo curis defaeco traho. Cunabula verto cursus. Depulso capio subnecto acidus cornu tubineus demens tondeo tumultus tergo. Dedico corpus tamdiu caelum amplus audacia praesentium. Degenero confero benigne eum cresco currus et quisquam decet. Pecto cohaero repellendus sollicito claustrum thorax. Aeternus aegrus tracto aut tantum dens calamitas.'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default Modal Types -->
      <div>
        <h2>Default Modal Types</h2>
        <p>It just pops and shows you something.</p>
        <HLSpace>
          <HLButton
            @click="showDefaultModal = !showDefaultModal"
            id="modal-btn-default"
          >
            Default Modal
          </HLButton>
          <HLButton @click="showInfoModal = !showInfoModal" id="modal-btn-info">
            Info Modal
          </HLButton>
          <HLButton
            @click="showSuccessModal = !showSuccessModal"
            id="modal-btn-success"
          >
            Success Modal
          </HLButton>
          <HLButton
            @click="showWarningModal = !showWarningModal"
            id="modal-btn-warning"
          >
            Warning Modal
          </HLButton>
          <HLButton
            @click="showErrorModal = !showErrorModal"
            id="modal-btn-error"
          >
            Error Modal
          </HLButton>
        </HLSpace>

        <!-- Modal Components -->
        <HLModal
          id="example-modal-default"
          type="default"
          v-model:show="showDefaultModal"
          :mask-closable="false"
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>

        <HLModal
          id="example-modal-info"
          type="info"
          v-model:show="showInfoModal"
          :mask-closable="false"
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>

        <HLModal
          id="example-modal-success"
          type="success"
          v-model:show="showSuccessModal"
          :mask-closable="false"
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>

        <HLModal
          id="example-modal-warning"
          type="warning"
          v-model:show="showWarningModal"
          :mask-closable="false"
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>

        <HLModal
          id="example-modal-error"
          type="error"
          v-model:show="showErrorModal"
          :mask-closable="false"
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>
      </div>

      <!-- Show Back Button -->
      <div>
        <h2>Show Back Button</h2>
        <HLButton
          @click="showBackModal = !showBackModal"
          id="modal-back-btn-default"
        >
          Open Modal with Back Button
        </HLButton>
        <HLModal
          id="example-back-modal-default"
          type="default"
          v-model:show="showBackModal"
          showBack
          @back="showBackModal = false"
          :mask-closable="false"
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>
      </div>

      <!-- Mask Closable -->
      <div>
        <h2>Mask Closable</h2>
        <p>
          When the mask is closable, the modal will be closed when the mask is
          clicked.
        </p>
        <HLButton
          @click="showMaskClosableModal = !showMaskClosableModal"
          id="modal-mask-closable-btn-default"
        >
          Open Mask Closable Modal
        </HLButton>
        <HLModal
          id="example-mask-closable-modal-default"
          type="default"
          v-model:show="showMaskClosableModal"
          maskClosable
        >
          <template #header>Modal Header</template>
          {{ modalText }}
        </HLModal>
      </div>

      <!-- Custom Header and Footer -->
      <div>
        <h2>Custom Header and Footer</h2>
        <HLButton
          @click="showCustomHeaderFooterModal = !showCustomHeaderFooterModal"
          id="modal-custom-btn"
        >
          Open Custom Modal
        </HLButton>
        <HLModal
          id="example-custom-modal"
          type="default"
          v-model:show="showCustomHeaderFooterModal"
          :mask-closable="false"
        >
          <template #header>
            <div class="flex items-center gap-2">
              <span class="text-lg font-semibold">Custom Header with Icon</span>
            </div>
          </template>

          <div class="py-4">
            <p class="mb-4">This modal has custom header and footer content.</p>
            <p>{{ modalText.substring(0, 200) }}...</p>
          </div>

          <template #footer>
            <div>
              <HLSectionFooter id="footer">
                <HLSectionFooterItem>
                  <HLButton id="cancel">
                    <HLText size="2xl" weight="regular">Discard</HLText>
                  </HLButton>
                  <HLButton id="save" color="blue" variant="primary">
                    <HLText size="2xl" weight="regular">Ok </HLText>
                  </HLButton>
                </HLSectionFooterItem>
              </HLSectionFooter>
            </div>
          </template>
        </HLModal>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace>
          <HLButton
            @click="showSizesModal.sm = !showSizesModal.sm"
            id="modal-size-sm-btn"
          >
            Small Modal
          </HLButton>
          <HLButton
            @click="showSizesModal.md = !showSizesModal.md"
            id="modal-size-md-btn"
          >
            Medium Modal
          </HLButton>
          <HLButton
            @click="showSizesModal.lg = !showSizesModal.lg"
            id="modal-size-lg-btn"
          >
            Large Modal
          </HLButton>
          <HLButton
            @click="showSizesModal.xl = !showSizesModal.xl"
            id="modal-size-xl-btn"
          >
            Extra Large Modal
          </HLButton>
        </HLSpace>

        <!-- Size Modal Components -->
        <HLModal
          id="example-modal-sm"
          type="default"
          v-model:show="showSizesModal.sm"
          size="sm"
          :mask-closable="false"
        >
          <template #header>Small Modal</template>
          <p>This is a small modal with limited content space.</p>
        </HLModal>

        <HLModal
          id="example-modal-md"
          type="default"
          v-model:show="showSizesModal.md"
          size="md"
          :mask-closable="false"
        >
          <template #header>Medium Modal</template>
          <p>{{ modalText.substring(0, 300) }}...</p>
        </HLModal>

        <HLModal
          id="example-modal-lg"
          type="default"
          v-model:show="showSizesModal.lg"
          size="lg"
          :mask-closable="false"
        >
          <template #header>Large Modal</template>
          <p>{{ modalText.substring(0, 500) }}...</p>
        </HLModal>

        <HLModal
          id="example-modal-xl"
          type="default"
          v-model:show="showSizesModal.xl"
          size="xl"
          :mask-closable="false"
        >
          <template #header>Extra Large Modal</template>
          <p>{{ modalText }}</p>
        </HLModal>
      </div>

      <!-- Auto Focus -->
      <div>
        <h2>Auto Focus</h2>
        <p>Modal with auto focus on the first focusable element.</p>
        <HLButton
          @click="showDefaultModal = !showDefaultModal"
          id="modal-auto-focus-btn"
        >
          Open Auto Focus Modal
        </HLButton>
      </div>

      <!-- Loading State -->
      <div>
        <h2>Loading State</h2>
        <p>Modal can show loading state during async operations.</p>
        <HLButton
          @click="showDefaultModal = !showDefaultModal"
          id="modal-loading-btn"
        >
          Open Loading Modal
        </HLButton>
      </div>

      <!-- Icon Slot -->
      <div>
        <h2>Custom header with close Icon</h2>
        <div style="padding: 8px 0"></div>
        <HLButton id="preset-icon-btn" @click="showIconModal = true"
          >Preset Icon</HLButton
        >
        <HLModal
          id="example-modal-icon"
          type="default"
          v-model:show="showIconModal"
          :mask-closable="true"
          :show-close="false"
          :showHeaderIcon="false"
        >
          <template #header>
            <HLHeaderLite
              title="Modal Header"
              size="lg"
              subtitle="This is a sample subtitle"
              :closable="false"
            >
              <template #header-icons>
                <HLIcon
                  size="lg"
                  color="black"
                  aria-label="Trend Up Icon"
                >
                  <TrendUp01Icon />
                </HLIcon>
              </template>
              <template #header-content-right>
                <HLButton
                  id="close-icon-btn"
                  variant="text"
                  size="xs"
                  @click="showIconModal = false"
                >
                  <HLIcon size="24" color="red" aria-label="Close Icon">
                    <XIcon />
                  </HLIcon>
                </HLButton>
              </template>
            </HLHeaderLite>
          </template>
          <div class="py-4">
            <p class="mb-4">
              This modal has custom icon in red color and little bigger in size.
            </p>
          </div>
        </HLModal>
      </div>

      <!-- Scrollable Modal with Overlays -->
      <div>
        <h2>Scrollable Modal with Overlays</h2>
        <p>
          Overlays (select, dropdown, datepicker, popover) teleported into the
          modal body stay anchored to their triggers while the body scrolls.
        </p>
        <HLButton @click="showOverlaysModal = true" id="modal-overlays-btn">
          Open Modal
        </HLButton>
        <HLModal
          id="example-modal-overlays"
          type="default"
          v-model:show="showOverlaysModal"
          :width="500"
          :mask-closable="false"
        >
          <template #header>Scrollable Modal with Overlays</template>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <HLText size="md" weight="semibold">
              Try opening each overlay, then scroll the modal body.
            </HLText>

            <HLFormItem label="Select">
              <HLSelect
                v-model:value="overlaySelectValue"
                :options="overlaySelectOptions"
                placeholder="Pick a fruit"
                :to="overlayTarget"
              />
            </HLFormItem>

            <HLFormItem label="Dropdown">
              <HLDropdown
                :options="overlayDropdownOptions"
                trigger="click"
                :popover-props="overlayDropdownPopoverProps"
              >
                <HLButton id="overlays-dropdown-trigger">Open Dropdown</HLButton>
              </HLDropdown>
            </HLFormItem>

            <HLFormItem label="Datepicker">
              <HLDatePicker
                v-model:value="overlayDateValue"
                type="date"
                placeholder="Pick a date"
                :to="overlayTarget"
              />
            </HLFormItem>

            <HLFormItem label="Popover">
              <HLPopover
                trigger="click"
                placement="bottom-start"
                :to="overlayTarget"
              >
                <template #trigger>
                  <HLButton id="overlays-popover-trigger">Open Popover</HLButton>
                </template>
                <template #header>Popover Header</template>
                <div style="max-width: 240px">
                  This popover should remain anchored to its trigger while you
                  scroll the modal.
                </div>
              </HLPopover>
            </HLFormItem>

            <div
              v-for="(text, i) in overlayFillerParagraphs"
              :key="i"
              style="padding: 8px 0; border-top: 1px solid var(--gray-100)"
            >
              <HLText size="sm">{{ text }}</HLText>
            </div>
          </div>
        </HLModal>
      </div>
    </HLSpace>
  </div>
</template>
