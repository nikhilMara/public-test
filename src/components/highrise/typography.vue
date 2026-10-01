<script setup lang="ts">
import { HLText } from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>
<template>
  <div>
    <p>
      Text wrapper from <code>@gohighlevel/highrise</code> for consistent
      typography throughout the app
    </p>
    <div class="vp-wrapper flex-col">
      <table>
        <tbody>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xl" weight="regular">4xl-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 20px; line-height: 30px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xl" weight="medium">4xl-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 20px; line-height: 30px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xl" weight="semibold">4xl-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 20px; line-height: 30px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xl" weight="bold">4xl-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 20px; line-height: 30px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xl" weight="regular">3xl-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 18px; line-height: 28px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xl" weight="medium">3xl-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 18px; line-height: 28px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xl" weight="semibold">3xl-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 18px; line-height: 28px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xl" weight="bold">3xl-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 18px; line-height: 28px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xl" weight="regular">2xl-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 16px; line-height: 24px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xl" weight="medium">2xl-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 16px; line-height: 24px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xl" weight="semibold">2xl-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 16px; line-height: 24px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xl" weight="bold">2xl-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 16px; line-height: 24px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xl" weight="regular">xl-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 15px; line-height: 20px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xl" weight="medium">xl-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 15px; line-height: 20px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xl" weight="semibold">xl-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 15px; line-height: 20px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xl" weight="bold">xl-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 15px; line-height: 20px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" weight="regular">lg-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 14px; line-height: 20px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" weight="medium">lg-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 14px; line-height: 20px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" weight="semibold">lg-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 14px; line-height: 20px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" weight="bold">lg-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 14px; line-height: 20px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" weight="regular">md-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 13px; line-height: 18px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" weight="medium">md-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 13px; line-height: 18px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" weight="semibold">md-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 13px; line-height: 18px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" weight="bold">md-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 13px; line-height: 18px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" weight="regular">sm-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 12px; line-height: 17px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" weight="medium">sm-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 12px; line-height: 17px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" weight="semibold">sm-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 12px; line-height: 17px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" weight="bold">sm-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 12px; line-height: 17px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" weight="regular">xs-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 11px; line-height: 16px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" weight="medium">xs-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 11px; line-height: 16px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" weight="semibold">xs-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 11px; line-height: 16px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" weight="bold">xs-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 11px; line-height: 16px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xs" weight="regular">2xs-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 10px; line-height: 15px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xs" weight="medium">2xs-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 10px; line-height: 15px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xs" weight="semibold">2xs-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 10px; line-height: 15px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="2xs" weight="bold">2xs-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 10px; line-height: 15px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xs" weight="regular">3xs-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 9px; line-height: 14px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xs" weight="medium">3xs-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 9p; line-height: 14px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xs" weight="semibold">3xs-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 9px; line-height: 14px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="3xs" weight="bold">3xs-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 9px; line-height: 14px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xs" weight="regular">4xs-regular</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 8px; line-height: 12px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xs" weight="medium">4xs-medium</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 8px; line-height: 12px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xs" weight="semibold">4xs-semibold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 8px; line-height: 12px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="4xs" weight="bold">4xs-bold</HLText>
              <HLText size="4xs" weight="regular"
                >font-size: 8px; line-height: 12px; font-weight: 700;</HLText
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="vp-wrapper flex-col">
      <table>
        <tbody>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" type="display" weight="regular"
                >display-lg-regular</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 48px; line-height: 60px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" type="display" weight="medium"
                >display-lg-medium</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 48px; line-height: 60px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" type="display" weight="semibold"
                >display-lg-semibold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 48px; line-height: 60px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="lg" type="display" weight="bold"
                >display-lg-bold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 48px; line-height: 60px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" type="display" weight="regular"
                >display-md-regular</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 36px; line-height: 44px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" type="display" weight="medium"
                >display-md-medium</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 36px; line-height: 44px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" type="display" weight="semibold"
                >display-md-semibold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 36px; line-height: 44px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="md" type="display" weight="bold"
                >display-md-bold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 36px; line-height: 44px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" type="display" weight="regular"
                >display-sm-regular</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 30px; line-height: 38px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" type="display" weight="medium"
                >display-sm-medium</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 30px; line-height: 38px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" type="display" weight="semibold"
                >display-sm-semibold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 30px; line-height: 38px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="sm" type="display" weight="bold"
                >display-sm-bold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 30px; line-height: 38px; font-weight: 700;</HLText
              >
            </td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" type="display" weight="regular"
                >display-xs-regular</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 24px; line-height: 32px; font-weight: 400;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" type="display" weight="medium"
                >display-xs-medium</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 24px; line-height: 32px; font-weight: 500;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" type="display" weight="semibold"
                >display-xs-semibold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 24px; line-height: 32px; font-weight: 600;</HLText
              >
            </td>
            <td style="padding: 0.75rem 0.5rem">
              <HLText size="xs" type="display" weight="bold"
                >display-xs-bold</HLText
              >
              <HLText size="4xs" weight="regular"
                >font-size: 24px; line-height: 32px; font-weight: 700;</HLText
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
