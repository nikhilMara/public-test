<template>
  <div>
    <h1>Breadcrumb</h1>
    <p>
      Navigation component that helps users keep track of their location within
      a website or application.
    </p>

    <section>
      <h2>Basic Usage</h2>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="breadcrumbs as any"
          id="example-breadcrumb-basic"
        />
      </div>
    </section>

    <section>
      <h2>Without Home Icon</h2>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="breadcrumbs as any"
          id="breadcrumb-no-home"
          :home="false"
        />
      </div>
    </section>

    <section>
      <h2>Custom Separator</h2>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="breadcrumbs as any"
          id="breadcrumb-custom-separator"
          separator=">"
        />
      </div>
    </section>

    <section>
      <h2>With Overflow</h2>
      <p>
        Overflow will comes into play when the breadcrumb items are more than or
        equal to 4.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="longBreadcrumbs as any"
          home
          id="example-breadcrumb-overflow"
        />
      </div>
    </section>

    <section>
      <h2>onClick - Simple Layout</h2>
      <p>
        Items with <code>onClick</code> handlers will prevent default navigation
        and execute the callback instead. Check the console to see click events.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickBreadcrumbs as any"
          id="example-breadcrumb-onclick-simple"
        />
        <p class="demo-note">
          Click "Electronics" to see onClick handler (prevents navigation).
          Click "Home" to see normal href navigation.
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - Last Item (Current Page)</h2>
      <p>
        When the last item has an <code>onClick</code> handler, it will still
        execute but navigation is prevented since it's the current page.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickLastItemBreadcrumbs as any"
          id="example-breadcrumb-onclick-last"
        />
        <p class="demo-note">
          Click "Mobiles" (last item) - onClick fires but navigation is
          prevented.
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - With Both onClick and href</h2>
      <p>
        When an item has both <code>onClick</code> and <code>href</code>, the
        <code>onClick</code> handler takes precedence and prevents default
        navigation.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickWithHrefBreadcrumbs as any"
          id="example-breadcrumb-onclick-href"
        />
        <p class="demo-note">
          "Electronics" has both onClick and href - onClick takes precedence.
        </p>
      </div>
    </section>

    <section>
      <h2>onHomeClick</h2>
      <p>
        The home icon can have a custom <code>onHomeClick</code> handler that
        prevents default navigation.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="breadcrumbs as any"
          id="example-breadcrumb-home-onclick"
          :on-home-click="handleHomeClick"
        />
        <p class="demo-note">
          Click the home icon to see onHomeClick handler (prevents navigation).
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - Overflow Layout (Starting Items)</h2>
      <p>
        Items with <code>onClick</code> in the starting breadcrumbs (first item
        before overflow) work correctly.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickOverflowStartBreadcrumbs as any"
          id="example-breadcrumb-onclick-overflow-start"
        />
        <p class="demo-note">
          Click "Breadcrumb1" (first item) - onClick handler executes.
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - Overflow Layout (Dropdown Items)</h2>
      <p>
        Items with <code>onClick</code> in the middle breadcrumbs (dropdown)
        will execute the handler when selected from the dropdown.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickOverflowDropdownBreadcrumbs as any"
          id="example-breadcrumb-onclick-overflow-dropdown"
        />
        <p class="demo-note">
          Click "..." dropdown and select items - onClick handlers execute for
          items with onClick.
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - Overflow Layout (Ending Items)</h2>
      <p>
        Items with <code>onClick</code> in the ending breadcrumbs (last 2 items)
        work correctly.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickOverflowEndBreadcrumbs as any"
          id="example-breadcrumb-onclick-overflow-end"
        />
        <p class="demo-note">
          Click "Breadcrumb6" or "Breadcrumb7" - onClick handlers execute.
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - Mixed (onClick and href)</h2>
      <p>
        Mix of items with <code>onClick</code> and <code>href</code> in overflow
        layout.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickMixedBreadcrumbs as any"
          id="example-breadcrumb-onclick-mixed"
        />
        <p class="demo-note">
          Some items use onClick, others use href. Check console for onClick
          events.
        </p>
      </div>
    </section>

    <section>
      <h2>onClick - With clickable: false</h2>
      <p>
        Items with <code>onClick</code> and <code>clickable: false</code> will
        not be clickable, even if onClick is provided.
      </p>
      <div class="demo-section">
        <HLBreadcrumb
          :breadcrumbs="onClickNonClickableBreadcrumbs as any"
          id="example-breadcrumb-onclick-non-clickable"
        />
        <p class="demo-note">
          "Electronics" has onClick but clickable: false - it won't be
          clickable.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { HLBreadcrumb } from '@gohighlevel/highrise'
import { inject } from 'vue'

// Define BreadcrumbItem type inline since it's not exported
interface BreadcrumbItem {
  clickable?: boolean
  href?: string
  label: string
  onClick?: (label: string) => void
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Home',
    href: 'https://google.com',
  },
  {
    label: 'Electronics',
    href: 'https://google.com',
  },
  {
    label: 'Mobiles',
    href: 'https://google.com',
  },
]

const longBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Breadcrumb1',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb2',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb3',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb4',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb5',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb6',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb7',
  },
]

// onClick handlers
const handleBreadcrumbClick = (label: string) => {
  console.log(`[onClick] Breadcrumb clicked: ${label}`)
  alert(`Breadcrumb "${label}" clicked! Check console for details.`)
}

const handleHomeClick = (label: string) => {
  console.log(`[onHomeClick] Home clicked: ${label}`)
  alert(`Home "${label}" clicked! Check console for details.`)
}

// Simple layout with onClick (middle item)
const onClickBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Home',
    href: 'https://google.com',
  },
  {
    label: 'Electronics',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Mobiles',
    href: 'https://google.com',
  },
]

// Last item with onClick
const onClickLastItemBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Home',
    href: 'https://google.com',
  },
  {
    label: 'Electronics',
    href: 'https://google.com',
  },
  {
    label: 'Mobiles',
    onClick: handleBreadcrumbClick,
  },
]

// onClick with href (onClick takes precedence)
const onClickWithHrefBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Home',
    href: 'https://google.com',
  },
  {
    label: 'Electronics',
    href: 'https://google.com',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Mobiles',
    href: 'https://google.com',
  },
]

// Overflow layout - onClick in starting breadcrumbs
const onClickOverflowStartBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Breadcrumb1',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb2',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb3',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb4',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb5',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb6',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb7',
  },
]

// Overflow layout - onClick in dropdown items
const onClickOverflowDropdownBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Breadcrumb1',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb2',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb3',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb4',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb5',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb6',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb7',
  },
]

// Overflow layout - onClick in ending breadcrumbs
const onClickOverflowEndBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Breadcrumb1',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb2',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb3',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb4',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb5',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb6',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb7',
    onClick: handleBreadcrumbClick,
  },
]

// Mixed onClick and href in overflow layout
const onClickMixedBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Breadcrumb1',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb2',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb3',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb4',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb5',
    onClick: handleBreadcrumbClick,
  },
  {
    label: 'Breadcrumb6',
    href: 'https://google.com',
  },
  {
    label: 'Breadcrumb7',
  },
]

// onClick with clickable: false
const onClickNonClickableBreadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Home',
    href: 'https://google.com',
  },
  {
    label: 'Electronics',
    onClick: handleBreadcrumbClick,
    clickable: false,
  },
  {
    label: 'Mobiles',
    href: 'https://google.com',
  },
]
</script>

<style scoped>
.demo-section {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.demo-note {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #f0f7ff;
  border-left: 3px solid #0066cc;
  border-radius: 3px;
  font-size: 0.9rem;
  color: #333;
}

section {
  margin-bottom: 3rem;
}

h2 {
  margin-bottom: 1rem;
}

code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}
</style>
