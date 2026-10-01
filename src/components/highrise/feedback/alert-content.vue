<script setup lang="ts">
import {
  HLAlert,
  HLButton,
  HLInput,
  HLSpace,
  useHLNotification,
} from '@gohighlevel/highrise'
import { h, ref } from 'vue'

const notification = useHLNotification()

function openNotification() {
  const notificationInstance = notification.create({
    content: () =>
      h(
        HLAlert,
        {
          title: 'Notification',
          closable: true,
          id: 'test-alert',
          actionOne: {
            text: 'This is a button',
            onActionClick: () => {
              console.log('action one callback executed')
            },
          },
          actionTwo: {
            text: 'This is a button with icon',
            link: 'https://www.facebook.com',
            disabled: false,
          },
          onClose: () => {
            console.log('onClose callback executed')
            notificationInstance.destroy()
          },
          autoClose: 5000,
        },
        {
          default: () =>
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit',
        }
      ),
  })
}
const description = ref('Description')
const title = ref('Title')
const titleOverflow = ref(
  'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit'
)
</script>

<template>
  <HLSpace vertical>
    <!-- Basic Usage -->
    <div>
      <h2>Basic Usage</h2>
      <p>Alert component for displaying important messages to users</p>
      <HLAlert
        title="Title"
        id="test-alert"
        :actionOne="{
          text: 'Action 1',
        }"
        :actionTwo="{
          text: 'Action 2',
        }"
        type="alert"
      >
        Alert description
      </HLAlert>
    </div>

    <div>
      <h2>Alert with description</h2>
      <p>Alert component with description</p>
      <HLAlert title="Title" id="test-alert" type="alert">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis
        cumque dicta velit doloribus libero. Quos ea corrupti perferendis quae
        veniam. Ipsa odio vitae amet dolor id et fugiat voluptas.
      </HLAlert>
    </div>

    <div>
      <h2>Alert with Long description</h2>
      <p>Alert component with description</p>
      <HLAlert title="Title" id="test-alert" type="alert">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis
        cumque dicta velit doloribus libero. Quos ea corrupti perferendis quae
        veniam. Ipsa odio vitae amet dolor id et fugiat voluptas. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officia debitis cumque
        dicta velit doloribus libero. Quos ea corrupti perferendis quae veniam.
        Ipsa odio vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia debitis cumque dicta velit
        doloribus libero. Quos ea corrupti perferendis quae veniam. Ipsa odio
        vitae amet dolor id et fugiat voluptas.
      </HLAlert>
    </div>

    <!-- Colors -->
    <div>
      <h2>Colors</h2>
      <HLSpace vertical>
        <HLAlert
          id="white-alert"
          color="white"
          title="Default Alert"
          type="alert"
        >
          Alert Content
        </HLAlert>
        <HLAlert id="blue-alert" color="blue" title="Info Alert" type="alert">
          Alert Content
        </HLAlert>
        <HLAlert
          id="green-alert"
          color="green"
          title="Success Alert"
          type="alert"
        >
          Alert Content
        </HLAlert>
        <HLAlert id="red-alert" color="red" title="Error Alert" type="alert">
          Alert Content
        </HLAlert>
        <HLAlert
          id="orange-alert"
          color="orange"
          title="Warning Alert"
          type="alert"
        >
          Alert Content
        </HLAlert>
        <HLAlert id="gray-alert" color="gray" title="Gray Alert" type="alert">
          Alert Content
        </HLAlert>
      </HLSpace>
    </div>

    <!-- With Actions -->
    <div>
      <h2>With Actions</h2>
      <HLAlert
        id="alert-with-actions"
        title="Alert with Actions"
        :actionOne="{
          text: 'This is a button',
          onActionClick: () => console.log('action one clicked'),
        }"
        :actionTwo="{
          text: 'This is a link with icon',
          link: 'https://www.example.com',
        }"
        type="alert"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet consectetur adipisicing elitLorem ipsum dolor
      </HLAlert>
    </div>

    <!-- Auto Close -->
    <div>
      <h2>Auto Close</h2>
      <HLAlert
        id="auto-close-alert"
        title="Auto Close Alert"
        :autoClose="30000"
      >
        This alert will close automatically after 30 seconds
      </HLAlert>
    </div>

    <!-- Notification Example -->
    <div>
      <h2>Notification Example</h2>
      <p>
        <code>useHLNotification</code> will only work if parent component is
        wrapped with <code>HLContentWrap</code>
      </p>
      <HLButton id="notification-button" @click="openNotification">
        Click me
      </HLButton>
    </div>

    <!-- Alert without description -->
    <div>
      <h2>Alert without description</h2>
      <div class="flex gap-2 align-center p-2">
        <p>Description:</p>
        <HLInput
          id="alert-without-description-input"
          v-model:modelValue="description"
        />

        <p>Title:</p>
        <HLInput
          id="alert-without-description-input"
          v-model:modelValue="title"
        />
      </div>
      <HLAlert
        id="alert-without-description"
        :title="title"
        :content="description"
        type="alert"
      />
    </div>
    <!-- Alert with content only -->
    <div>
      <h2>Alert with content only</h2>
      <HLAlert id="alert-with-content-only" type="alert">
        <p>
          This is a alert with content only. This is a alert with content only.
          This is a alert with content onlyThis is a alert with content onlyThis
          is a alert with content onlyThis is a alert with content onlyThis is a
          alert with content only. This is a alert with content only. This is a
          alert with content only
        </p>
      </HLAlert>
    </div>
    <!-- Alert without description -->
    <div>
      <h2>Alert without description and overflowing title</h2>
      <div class="flex gap-2 align-center p-2">
        <p>Description:</p>
        <HLInput
          id="alert-without-description-input"
          v-model:modelValue="description"
        />

        <p>Title:</p>
        <HLInput
          id="alert-without-description-input"
          v-model:modelValue="titleOverflow"
        />
      </div>
      <HLAlert
        id="alert-without-description"
        :title="titleOverflow"
        :content="description"
        type="alert"
      />
    </div>
  </HLSpace>
</template>
