<script setup lang="ts">
import { UserPlus01Icon } from '@gohighlevel/ghl-icons/24/outline'
import { HLButton, HLSpace } from '@gohighlevel/highrise'
import { inject } from 'vue'
import CustomButtonExample from './button/CustomButtonExample.vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default</h2>
        <HLButton id="default-blue">Click me</HLButton>
      </div>

      <!-- Primary -->
      <div>
        <h2>Primary</h2>
        <HLSpace justify="space-around">
          <HLButton id="primary-blue" color="blue" variant="primary"
            >Click me</HLButton
          >
          <HLButton id="primary-green" color="green" variant="primary"
            >Click me</HLButton
          >
          <HLButton id="primary-gray" color="gray" variant="primary"
            >Click me</HLButton
          >
          <HLButton id="primary-orange" color="orange" variant="primary"
            >Click me</HLButton
          >
          <HLButton id="primary-red" color="red" variant="primary"
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton
            id="primary-blue-loading"
            color="blue"
            loading
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-green-loading"
            color="green"
            loading
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-gray-loading"
            color="gray"
            loading
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-orange-loading"
            color="orange"
            loading
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-red-loading"
            color="red"
            loading
            variant="primary"
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton
            id="primary-blue-disabled"
            color="blue"
            disabled
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-green-disabled"
            color="green"
            disabled
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-gray-disabled"
            color="gray"
            disabled
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-orange-disabled"
            color="orange"
            disabled
            variant="primary"
            >Click me</HLButton
          >
          <HLButton
            id="primary-red-disabled"
            color="red"
            disabled
            variant="primary"
            >Click me</HLButton
          >
        </HLSpace>
      </div>

      <!-- Secondary -->
      <div>
        <h2>Secondary</h2>
        <HLSpace justify="space-around">
          <HLButton id="secondary-blue" color="blue">Click me</HLButton>
          <HLButton id="secondary-green" color="green">Click me</HLButton>
          <HLButton id="secondary-gray" color="gray">Click me</HLButton>
          <HLButton id="secondary-orange" color="orange">Click me</HLButton>
          <HLButton id="secondary-red" color="red">Click me</HLButton>
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton id="secondary-blue-loading" color="blue" loading
            >Click me</HLButton
          >
          <HLButton id="secondary-green-loading" color="green" loading
            >Click me</HLButton
          >
          <HLButton id="secondary-gray-loading" color="gray" loading
            >Click me</HLButton
          >
          <HLButton id="secondary-orange-loading" color="orange" loading
            >Click me</HLButton
          >
          <HLButton id="secondary-red-loading" color="red" loading
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton id="secondary-blue-disabled" color="blue" disabled
            >Click me</HLButton
          >
          <HLButton id="secondary-green-disabled" color="green" disabled
            >Click me</HLButton
          >
          <HLButton id="secondary-gray-disabled" color="gray" disabled
            >Click me</HLButton
          >
          <HLButton id="secondary-orange-disabled" color="orange" disabled
            >Click me</HLButton
          >
          <HLButton id="secondary-red-disabled" color="red" disabled
            >Click me</HLButton
          >
        </HLSpace>
      </div>

      <!-- Tertiary -->
      <div>
        <h2>Tertiary</h2>
        <HLSpace justify="space-around">
          <HLButton id="tertiary-blue" color="blue" variant="tertiary"
            >Click me</HLButton
          >
          <HLButton id="tertiary-green" color="green" variant="tertiary"
            >Click me</HLButton
          >
          <HLButton id="tertiary-gray" color="gray" variant="tertiary"
            >Click me</HLButton
          >
          <HLButton id="tertiary-orange" color="orange" variant="tertiary"
            >Click me</HLButton
          >
          <HLButton id="tertiary-red" color="red" variant="tertiary"
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton
            id="tertiary-blue-loading"
            color="blue"
            variant="tertiary"
            loading
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-green-loading"
            color="green"
            variant="tertiary"
            loading
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-gray-loading"
            color="gray"
            variant="tertiary"
            loading
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-orange-loading"
            color="orange"
            variant="tertiary"
            loading
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-red-loading"
            color="red"
            variant="tertiary"
            loading
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton
            id="tertiary-blue-disabled"
            color="blue"
            variant="tertiary"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-green-disabled"
            color="green"
            variant="tertiary"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-gray-disabled"
            color="gray"
            variant="tertiary"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-orange-disabled"
            color="orange"
            variant="tertiary"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="tertiary-red-disabled"
            color="red"
            variant="tertiary"
            disabled
            >Click me</HLButton
          >
        </HLSpace>
      </div>

      <!-- Ghost -->
      <div>
        <h2>Ghost</h2>
        <HLSpace justify="space-around">
          <HLButton id="ghost-blue" color="blue" variant="ghost"
            >Click me</HLButton
          >
          <HLButton id="ghost-green" color="green" variant="ghost"
            >Click me</HLButton
          >
          <HLButton id="ghost-gray" color="gray" variant="ghost"
            >Click me</HLButton
          >
          <HLButton id="ghost-orange" color="orange" variant="ghost"
            >Click me</HLButton
          >
          <HLButton id="ghost-red" color="red" variant="ghost"
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton id="ghost-blue-loading" color="blue" variant="ghost" loading
            >Click me</HLButton
          >
          <HLButton
            id="ghost-green-loading"
            color="green"
            variant="ghost"
            loading
            >Click me</HLButton
          >
          <HLButton id="ghost-gray-loading" color="gray" variant="ghost" loading
            >Click me</HLButton
          >
          <HLButton
            id="ghost-orange-loading"
            color="orange"
            variant="ghost"
            loading
            >Click me</HLButton
          >
          <HLButton id="ghost-red-loading" color="red" variant="ghost" loading
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton
            id="ghost-blue-disabled"
            color="blue"
            variant="ghost"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="ghost-green-disabled"
            color="green"
            variant="ghost"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="ghost-gray-disabled"
            color="gray"
            variant="ghost"
            disabled
            >Click me</HLButton
          >
          <HLButton
            id="ghost-orange-disabled"
            color="orange"
            variant="ghost"
            disabled
            >Click me</HLButton
          >
          <HLButton id="ghost-red-disabled" color="red" variant="ghost" disabled
            >Click me</HLButton
          >
        </HLSpace>
      </div>

      <!-- Text -->
      <div>
        <h2>Text</h2>
        <HLSpace justify="space-around">
          <HLButton id="text-blue" color="blue" variant="text" link
            >Click me</HLButton
          >
          <HLButton id="text-green" color="green" variant="text"
            >Click me</HLButton
          >
          <HLButton id="text-gray" color="gray" variant="text"
            >Click me</HLButton
          >
          <HLButton id="text-orange" color="orange" variant="text"
            >Click me</HLButton
          >
          <HLButton id="text-red" color="red" variant="text">Click me</HLButton>
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton id="text-blue-loading" color="blue" variant="text" loading
            >Click me</HLButton
          >
          <HLButton id="text-green-loading" color="green" variant="text" loading
            >Click me</HLButton
          >
          <HLButton id="text-gray-loading" color="gray" variant="text" loading
            >Click me</HLButton
          >
          <HLButton
            id="text-orange-loading"
            color="orange"
            variant="text"
            loading
            >Click me</HLButton
          >
          <HLButton id="text-red-loading" color="red" variant="text" loading
            >Click me</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace justify="space-around">
          <HLButton id="text-blue-disabled" color="blue" variant="text" disabled
            >Click me</HLButton
          >
          <HLButton
            id="text-green-disabled"
            color="green"
            variant="text"
            disabled
            >Click me</HLButton
          >
          <HLButton id="text-gray-disabled" color="gray" variant="text" disabled
            >Click me</HLButton
          >
          <HLButton
            id="text-orange-disabled"
            color="orange"
            variant="text"
            disabled
            >Click me</HLButton
          >
          <HLButton id="text-red-disabled" color="red" variant="text" disabled
            >Click me</HLButton
          >
        </HLSpace>
      </div>

      <!-- All Sizes -->
      <div>
        <h2>All Sizes</h2>
        <HLSpace align="center">
          <HLButton id="size-lg-blue" size="lg" color="blue"
            >Primary LG Button</HLButton
          >
          <HLButton id="size-md-blue" size="md" color="blue"
            >Primary MD Button</HLButton
          >
          <HLButton id="size-sm-blue" size="sm" color="blue"
            >Primary SM Button</HLButton
          >
          <HLButton id="size-xs-blue" size="xs" color="blue"
            >Primary XS Button</HLButton
          >
          <HLButton id="size-2xs-blue" size="2xs" color="blue"
            >Primary 2xs Button</HLButton
          >
          <HLButton id="size-3xs-blue" size="3xs" color="blue"
            >Primary 3xs Button</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace align="center">
          <HLButton id="size-lg-gray" size="lg" color="gray"
            >Text Button</HLButton
          >
          <HLButton id="size-md-gray" size="md" color="gray"
            >Text Medium Button</HLButton
          >
          <HLButton id="size-sm-gray" size="sm" color="gray"
            >TextSmall Button</HLButton
          >
          <HLButton id="size-xs-gray" size="xs" color="gray"
            >Text XS Button</HLButton
          >
          <HLButton id="size-2xs-gray" size="2xs" color="gray"
            >Text 2xs Button</HLButton
          >
          <HLButton id="size-3xs-gray" size="3xs" color="gray"
            >Text 3xs Button</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace align="center">
          <HLButton id="size-lg-red" size="lg" color="red"
            >Error LG Button</HLButton
          >
          <HLButton id="size-md-red" size="md" color="red">
            Error MD Button</HLButton
          >
          <HLButton id="size-sm-red" size="sm" color="red"
            >Error SM Button</HLButton
          >
          <HLButton id="size-xs-red" size="xs" color="red"
            >Error XS Button</HLButton
          >
          <HLButton id="size-2xs-red" size="2xs" color="red"
            >Error 2xs Button</HLButton
          >
          <HLButton id="size-3xs-red" size="3xs" color="red"
            >Error 3xs Button</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace align="center">
          <HLButton id="size-lg-green" size="lg" color="green"
            >Outline LG Button</HLButton
          >
          <HLButton id="size-md-green" size="md" color="green"
            >Outline Medium Button</HLButton
          >
          <HLButton id="size-sm-green" size="sm" color="green"
            >Outline Small Button</HLButton
          >
          <HLButton id="size-xs-green" size="xs" color="green"
            >Outline XS Button</HLButton
          >
          <HLButton id="size-2xs-green" size="2xs" color="green"
            >Outline 2xs Button</HLButton
          >
          <HLButton id="size-3xs-green" size="3xs" color="green"
            >Outline 3xs Button</HLButton
          >
        </HLSpace>
        <br />
        <HLSpace align="center">
          <HLButton id="size-lg-orange" size="lg" color="orange"
            >LG Button</HLButton
          >
          <HLButton id="size-md-orange" size="md" color="orange"
            >Tertiary Medium Button</HLButton
          >
          <HLButton id="size-sm-orange" size="sm" color="orange"
            >Tertiary Small Button</HLButton
          >
          <HLButton id="size-xs-orange" size="xs" color="orange"
            >Tertiary XS Button</HLButton
          >
          <HLButton id="size-2xs-orange" size="2xs" color="orange"
            >Tertiary 2xs Button</HLButton
          >
          <HLButton id="size-3xs-orange" size="3xs" color="orange"
            >Tertiary 3xs Button</HLButton
          >
        </HLSpace>
      </div>

      <!-- Text Only Buttons -->
      <div>
        <h2>Text Only Buttons</h2>
        <HLSpace align="center">
          <HLButton id="size-lg-text" size="lg" variant="text"
            >LG Button</HLButton
          >
          <HLButton id="size-md-text" size="md" variant="text"
            >Medium Button</HLButton
          >
          <HLButton id="size-sm-text" size="sm" variant="text"
            >Small Button</HLButton
          >
          <HLButton id="size-xs-text" size="xs" variant="text"
            >Xs Button</HLButton
          >
          <HLButton id="size-2xs-text" size="2xs" variant="text"
            >2xs Button</HLButton
          >
          <HLButton id="size-3xs-text" size="3xs" variant="text"
            >3xs Button</HLButton
          >
        </HLSpace>
      </div>

      <!-- Text with Link -->
      <div>
        <h2>Text with Link</h2>
        <HLSpace align="center">
          <HLButton
            id="size-lg-link"
            size="lg"
            iconPlacement="left"
            color="blue"
            variant="text"
            :link="true"
            >LG Button</HLButton
          >
          <HLButton
            id="size-md-link"
            size="md"
            iconPlacement="left"
            color="blue"
            variant="text"
            :link="true"
            >Medium Button</HLButton
          >
          <HLButton
            id="size-sm-link"
            size="sm"
            iconPlacement="left"
            color="blue"
            variant="text"
            :link="true"
            >Small Button</HLButton
          >
          <HLButton
            id="size-xs-link"
            size="xs"
            iconPlacement="left"
            color="blue"
            variant="text"
            :link="true"
            >Xs Button</HLButton
          >
          <HLButton
            id="size-2xs-link"
            size="2xs"
            iconPlacement="left"
            color="blue"
            variant="text"
            :link="true"
            >2xs Button</HLButton
          >
          <HLButton
            id="size-3xs-link"
            size="3xs"
            iconPlacement="left"
            color="blue"
            variant="text"
            :link="true"
            >3xs Button</HLButton
          >
        </HLSpace>
      </div>

      <!-- Icon Buttons -->
      <div>
        <h2>Icon Buttons</h2>
        <HLSpace align="center">
          <HLButton id="size-lg-icon-blue" size="lg" color="blue">
            LG Button
            <template #iconLeft>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="size-md-icon" size="md" color="blue">
            Medium Button
            <template #iconLeft>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="size-sm-icon" size="sm" color="blue">
            Small Button
            <template #iconLeft>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="size-xs-icon" size="xs" color="blue">
            Xs Button
            <template #iconRight>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="size-2xs-icon" size="2xs" color="blue">
            2xs Button
            <template #iconRight>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="size-3xs-icon" size="3xs" color="blue">
            3xs Button
            <template #iconRight>
              <UserPlus01Icon />
            </template>
          </HLButton>
        </HLSpace>
      </div>

      <!-- Icon Only Buttons -->
      <div>
        <h2>Icon Only Buttons</h2>
        <HLSpace align="center">
          <HLButton id="icon-only-lg" size="lg" color="blue">
            <template #icon>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="icon-only-md" size="md" color="blue">
            <template #icon>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="icon-only-sm" size="sm" color="blue">
            <template #icon>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="icon-only-xs" size="xs" color="blue">
            <template #icon>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="icon-only-2xs" size="2xs" color="blue">
            <template #icon>
              <UserPlus01Icon />
            </template>
          </HLButton>
          <HLButton id="icon-only-3xs" size="3xs" color="blue">
            <template #icon>
              <UserPlus01Icon />
            </template>
          </HLButton>
        </HLSpace>
      </div>
    </HLSpace>
    <CustomButtonExample />
  </div>
</template>
