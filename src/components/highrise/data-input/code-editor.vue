<script setup lang="ts">
import {
  HLAlert,
  HLButton,
  HLCodeEditor,
  HLForm,
  HLFormItem,
  HLInput,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref, watch } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// Editor example
const editorContent = ref('.class-name{display:flex}')
const editorRef = ref<any>(null)
const lineWrapContent = ref(
  'const a = `dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd dkjcndc dkcnd cdkcndkc dckjndckd `'
)
const lineWrapEditorRef = ref<any>(null)

const showPrompt = () => {
  const data = window.prompt()

  if (data) {
    editorRef?.value?.setContent(data)
  }
}

watch(editorContent, (val: string) => {
  console.log('Editor content changed:', val)
})

// Form example
const formValue = ref({
  code1: 'let url; \nurl = window.location.href;\nconsole.log(url)',
})
const rules = {
  code1: {
    required: true,
    message: 'Please add some code',
    validator: (_: any, value: string) => {
      if (!value.trim()) {
        return false
      }
      return true
    },
  },
}
const root = ref<any>()
function onSubmit(e: Event) {
  e.preventDefault()
  root.value
    .getForm()
    .validate()
    .then(() => console.log('Success'))
    .catch((err: any) => console.log('error', err))
}

// Read-only example
const readOnlyContent = ref('.className{display:flex}')
const readOnlyEditorRef = ref<any>(null)

const showReadOnlyPrompt = () => {
  const data = window.prompt()

  if (data) {
    readOnlyEditorRef?.value?.setContent(data)
  }
}

watch(readOnlyContent, (val: string) => {
  console.log('Read-only content changed:', val)
})

// Dark mode example
const darkContent = ref('.className{display:flex}')
const darkEditorRef = ref<any>(null)

const showDarkPrompt = () => {
  const data = window.prompt()

  if (data) {
    darkEditorRef?.value?.setContent(data)
  }
}

watch(darkContent, (val: string) => {
  console.log('Dark content changed:', val)
})

// Custom diagnostics example
// Simulates errors a backend lint/validation service might return for a
// user-submitted JavaScript snippet (e.g. a custom automation script).
const customDiagnosticsSnippet = ref(`function fetchUser(id) {
  var url = "https://api.example.com/users/" + id;
  fetch(url, { headers: { Authorization: "Bearer hardcoded-token" } })
    .then(res => res.json())
    .then(data => console.log(data))
}`)
const defaultCustomErrors = [
  {
    line: 2,
    message: "Use 'const' or 'let' instead of 'var' (no-var)",
    severity: 'warning',
  },
  {
    line: 3,
    message: 'Hardcoded credentials detected — load secrets from config',
    severity: 'error',
  },
  {
    line: 6,
    message: 'Missing error handling — add a .catch() to the promise chain',
    severity: 'warning',
  },
]

// Editable JSON that drives the editor's custom errors.
const customErrorsJson = ref(JSON.stringify(defaultCustomErrors, null, 2))
const customErrors = ref([...defaultCustomErrors])
const customErrorsError = ref('')

// Parse the JSON input and apply it to the editor whenever it changes.
watch(customErrorsJson, (val: string) => {
  try {
    const parsed = JSON.parse(val)
    if (!Array.isArray(parsed)) {
      throw new Error('Expected an array of errors')
    }
    customErrors.value = parsed
    customErrorsError.value = ''
  } catch (e) {
    customErrorsError.value = (e as Error).message
  }
})
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Editor -->
      <div>
        <h2>Editor</h2>
        <HLButton
          id="test"
          type="primary"
          color="blue"
          class="mb-3"
          @click="showPrompt"
        >
          Insert Custom code
        </HLButton>
        <HLCodeEditor
          ref="editorRef"
          id="testing"
          language="css"
          v-model:value="editorContent"
          resize
          prettify
        />
        <pre tabindex="0">
          Press Esc then Tab to escape the editor focus with keyboard alone
          <strong>(WCAG 2.1)</strong>
        </pre>
      </div>

      <!-- With Forms -->
      <div>
        <h2>With Forms</h2>
        <HLForm id="code-form" ref="root" :rules="rules" :model="formValue">
          <HLAlert :closable="false" color="orange" id="alert">
            Validations wont trigger automatically, and we need to
            programmatically validate
          </HLAlert>
          <br />
          <HLFormItem label="Code 1" path="code1">
            <HLCodeEditor
              id="testing1"
              language="javascript"
              v-model:value="formValue.code1"
            />
          </HLFormItem>
          <HLButton variant="primary" @click="onSubmit">Validate</HLButton>
          <p>Form Values</p>
          {{ formValue.code1 }}
        </HLForm>
      </div>

      <!-- Read Only Editor -->
      <div>
        <h2>Read Only Editor</h2>
        <HLButton
          id="test-readonly"
          type="primary"
          class="mb-3"
          @click="showReadOnlyPrompt"
        >
          Insert Custom code
        </HLButton>
        <HLCodeEditor
          ref="readOnlyEditorRef"
          id="testing-readonly"
          language="css"
          v-model:value="readOnlyContent"
          read-only
        />
      </div>

      <!-- Dark Editor -->
      <div>
        <h2>Dark Editor</h2>
        <HLButton
          id="test-dark"
          type="primary"
          class="mb-3"
          @click="showDarkPrompt"
        >
          Insert Custom code
        </HLButton>
        <HLCodeEditor
          ref="darkEditorRef"
          id="testing-dark"
          language="css"
          v-model:value="darkContent"
          dark-mode
        />
      </div>

      <!-- Custom Diagnostics -->
      <div>
        <h2>Custom Diagnostics</h2>
        <HLCodeEditor
          id="custom-diagnostics"
          language="javascript"
          v-model:value="customDiagnosticsSnippet"
          :custom-errors="customErrors"
        />
        <p class="mt-3">
          Edit the custom errors as JSON (array of
          <code>{{ '{ line, message, severity }' }}</code>):
        </p>
        <HLInput
          id="custom-errors-json"
          type="textarea"
          v-model:model-value="customErrorsJson"
          :rows="8"
        />
        <HLAlert
          v-if="customErrorsError"
          id="custom-errors-json-error"
          class="mt-2"
          color="red"
          :closable="false"
        >
          Invalid JSON: {{ customErrorsError }}
        </HLAlert>
      </div>

      <!--  Line wrap example -->
      <div>
        <h2>Line Wrap Example</h2>
        <div class="flex gap-2">
          <HLInput
            id="line-wrap-input"
            v-model:model-value="lineWrapContent"
            type="textarea"
          />
          <HLButton
            @click="lineWrapEditorRef.setContent(lineWrapContent)"
            variant="primary"
            color="blue"
            >Set Content</HLButton
          >
        </div>
        <br />
        <HLCodeEditor
          id="line-wrap"
          language="javascript"
          v-model:value="lineWrapContent"
          line-wrapping
          ref="lineWrapEditorRef"
        />
      </div>
    </HLSpace>
  </div>
</template>
