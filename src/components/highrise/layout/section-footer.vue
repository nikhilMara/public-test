<template>
  <div>
    <h1>Section Footer</h1>
    <p>
      The Section Footer component provides a standardized footer section with
      customizable padding, divider, and size options. It supports left and
      right action slots for buttons or other content.
    </p>

    <section>
      <h2>With Horizontal and vertical padding</h2>
      <div class="demo-section">
        <HLSectionFooter id="footer-1">
          <HLSectionFooterItem justify="start">
            <HLButton size="sm" id="btn-1" variant="text" link
              >Learn more</HLButton
            >
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end">
            <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
            <HLButton id="secondary" variant="secondary">Secondary</HLButton>
            <HLButton id="primary" variant="primary" color="blue"
              >Primary</HLButton
            >
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>Without top padding</h2>
      <div class="demo-section">
        <HLSectionFooter :topPadding="false" id="footer-2">
          <HLSectionFooterItem justify="start">
            <HLButton size="sm" id="btn-2" variant="text" link
              >Learn more</HLButton
            >
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end">
            <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
            <HLButton id="secondary" variant="secondary">Secondary</HLButton>
            <HLButton id="primary" variant="primary" color="blue"
              >Primary</HLButton
            >
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>Without bottom padding</h2>
      <div class="demo-section">
        <HLSectionFooter :bottomPadding="false" id="footer-3">
          <HLSectionFooterItem justify="start">
            <HLButton size="sm" id="btn-3" variant="text" link
              >Learn more</HLButton
            >
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end">
            <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
            <HLButton id="secondary" variant="secondary">Secondary</HLButton>
            <HLButton id="primary" variant="primary" color="blue"
              >Primary</HLButton
            >
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>Without both top and bottom padding</h2>
      <div class="demo-section">
        <HLSectionFooter
          :topPadding="false"
          :bottomPadding="false"
          id="footer-4"
        >
          <HLSectionFooterItem justify="start">
            <HLButton size="sm" id="btn-4" variant="text" link
              >Learn more</HLButton
            >
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end">
            <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
            <HLButton id="secondary" variant="secondary">Secondary</HLButton>
            <HLButton id="primary" variant="primary" color="blue"
              >Primary</HLButton
            >
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>Without Horizontal padding</h2>
      <div class="demo-section">
        <HLSectionFooter :horizontalPadding="false" id="footer-5">
          <HLSectionFooterItem justify="start">
            <HLButton size="sm" id="btn-5" variant="text" link
              >Learn more</HLButton
            >
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end">
            <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
            <HLButton id="secondary" variant="secondary">Secondary</HLButton>
            <HLButton id="primary" variant="primary" color="blue"
              >Primary</HLButton
            >
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>With divider</h2>
      <div class="demo-section">
        <HLSectionFooter :divider="true" id="footer-6">
          <HLSectionFooterItem justify="start">
            <HLButton size="sm" id="btn-6" variant="text" link
              >Learn more</HLButton
            >
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end">
            <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
            <HLButton id="secondary" variant="secondary">Secondary</HLButton>
            <HLButton id="primary" variant="primary" color="blue"
              >Primary</HLButton
            >
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>Actions on the Left</h2>
      <div class="demo-section">
        <HLSectionFooter id="footer-7">
          <HLSectionFooterItem justify="start">
            <div style="display: flex; gap: 12px">
              <HLButton size="xs" id="btn-7">Learn more</HLButton>
              <HLButton size="xs" id="btn-8">Skip</HLButton>
            </div>
          </HLSectionFooterItem>
          <HLSectionFooterItem justify="end"></HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>Actions on the Right</h2>
      <div class="demo-section">
        <HLSectionFooter id="footer-8">
          <HLSectionFooterItem justify="end">
            <div style="display: flex; gap: 12px">
              <HLButton id="btn-9">Learn more</HLButton>
              <HLButton id="btn-10">Skip</HLButton>
            </div>
          </HLSectionFooterItem>
        </HLSectionFooter>
      </div>
    </section>

    <section>
      <h2>All sizes</h2>
      <div class="demo-section">
        <div class="size-example">
          <h3>Small (sm)</h3>
          <HLSectionFooter size="sm" id="footer-13">
            <HLSectionFooterItem justify="start">
              <HLButton size="3xs" id="btn-12" variant="text" link
                >Learn more</HLButton
              >
            </HLSectionFooterItem>
            <HLSectionFooterItem justify="end">
              <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
              <HLButton id="secondary" variant="secondary">Secondary</HLButton>
              <HLButton id="primary" variant="primary" color="blue"
                >Primary</HLButton
              >
            </HLSectionFooterItem>
          </HLSectionFooter>
        </div>

        <div class="size-example">
          <h3>Medium (md)</h3>
          <HLSectionFooter size="md" id="footer-14">
            <HLSectionFooterItem justify="start">
              <HLButton size="2xs" id="btn-13" variant="text" link
                >Learn more</HLButton
              >
            </HLSectionFooterItem>
            <HLSectionFooterItem justify="end">
              <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
              <HLButton id="secondary" variant="secondary">Secondary</HLButton>
              <HLButton id="primary" variant="primary" color="blue"
                >Primary</HLButton
              >
            </HLSectionFooterItem>
          </HLSectionFooter>
        </div>

        <div class="size-example">
          <h3>Large (lg)</h3>
          <HLSectionFooter size="lg" id="footer-15">
            <HLSectionFooterItem justify="start">
              <HLButton size="sm" id="btn-14" variant="text" link
                >Learn more</HLButton
              >
            </HLSectionFooterItem>
            <HLSectionFooterItem justify="end">
              <HLButton id="tertiary" variant="tertiary">Tertiary</HLButton>
              <HLButton id="secondary" variant="secondary">Secondary</HLButton>
              <HLButton id="primary" variant="primary" color="blue"
                >Primary</HLButton
              >
            </HLSectionFooterItem>
          </HLSectionFooter>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  HLButton,
  HLSectionFooter,
  HLSectionFooterItem,
} from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'
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

.size-example {
  margin-bottom: 2rem;
}

.size-example h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #666;
}

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}
</style>
