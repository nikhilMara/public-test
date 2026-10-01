<template>
  <div>
    <h1>Space</h1>
    <p>Arrange components with consistent spacing</p>

    <section>
      <h2>Basic Usage</h2>
      <p>Use Space to add spacing between elements.</p>
      <div class="demo-section">
        <HLSpace id="space-basic">
          <HLButton id="space-basic-btn-1">Item 1</HLButton>
          <HLButton id="space-basic-btn-2">Item 2</HLButton>
          <HLButton id="space-basic-btn-3">Item 3</HLButton>
        </HLSpace>
      </div>
    </section>

    <section>
      <h2>Vertical Layout</h2>
      <p>Set <code>vertical</code> prop to arrange items vertically.</p>
      <div class="demo-section">
        <HLSpace id="space-vertical" vertical>
          <HLButton id="space-vertical-btn-1">Item 1</HLButton>
          <HLButton id="space-vertical-btn-2">Item 2</HLButton>
          <HLButton id="space-vertical-btn-3">Item 3</HLButton>
        </HLSpace>
      </div>
    </section>

    <section>
      <h2>Custom Size</h2>
      <p>Control spacing using the <code>size</code> prop.</p>
      <div class="demo-section">
        <div class="size-example">
          <h3>Extra Small (xs)</h3>
          <HLSpace id="space-size-small" size="xs">
            <HLButton id="space-size-small-btn-1">Small</HLButton>
            <HLButton id="space-size-small-btn-2">Spacing</HLButton>
          </HLSpace>
        </div>

        <div class="size-example">
          <h3>Large (lg)</h3>
          <HLSpace id="space-size-large" size="lg">
            <HLButton id="space-size-large-btn-1">Large</HLButton>
            <HLButton id="space-size-large-btn-2">Spacing</HLButton>
          </HLSpace>
        </div>
      </div>
    </section>

    <section>
      <h2>Justify Content</h2>
      <p>Control alignment using the <code>justify</code> prop.</p>
      <div class="demo-section">
        <HLSpace id="space-justify" justify="space-between">
          <HLButton id="space-justify-btn-1">Left</HLButton>
          <HLButton id="space-justify-btn-2">Right</HLButton>
        </HLSpace>
      </div>
    </section>

    <section>
      <h2>Align Items</h2>
      <p>Control alignment using the <code>align</code> prop.</p>
      <div class="demo-section">
        <HLSpace id="space-align" align="center">
          <HLButton id="space-align-btn-1" size="lg">Item 1</HLButton>
          <HLButton id="space-align-btn-2" size="sm">Item 2</HLButton>
          <HLButton id="space-align-btn-3" size="2xs">Item 3</HLButton>
        </HLSpace>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { HLButton, HLSpace } from '@gohighlevel/highrise'
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
