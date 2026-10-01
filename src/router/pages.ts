export interface PlaygroundPage {
  path: string
  title: string
  category: string
  component: () => Promise<unknown>
}

export const pages: PlaygroundPage[] = [
  {
    path: 'root/colors',
    title: 'Colors',
    category: 'Foundations',
    component: () => import('@/components/highrise/colors.vue')
  },
  {
    path: 'root/typography',
    title: 'Typography',
    category: 'Foundations',
    component: () => import('@/components/highrise/typography.vue')
  },
  {
    path: 'common/accordion',
    title: 'Accordion',
    category: 'Common',
    component: () => import('@/components/highrise/common/accordion.vue')
  },
  {
    path: 'common/avatar-group',
    title: 'Avatar Group',
    category: 'Common',
    component: () => import('@/components/highrise/common/avatar-group.vue')
  },
  {
    path: 'common/avatar',
    title: 'Avatar',
    category: 'Common',
    component: () => import('@/components/highrise/common/avatar.vue')
  },
  {
    path: 'common/button-group',
    title: 'Button Group',
    category: 'Common',
    component: () => import('@/components/highrise/common/button-group.vue')
  },
  {
    path: 'common/button',
    title: 'Button',
    category: 'Common',
    component: () => import('@/components/highrise/common/button.vue')
  },
  {
    path: 'common/card',
    title: 'Card',
    category: 'Common',
    component: () => import('@/components/highrise/common/card.vue')
  },
  {
    path: 'common/carousel',
    title: 'Carousel',
    category: 'Common',
    component: () => import('@/components/highrise/common/carousel.vue')
  },
  {
    path: 'common/divider',
    title: 'Divider',
    category: 'Common',
    component: () => import('@/components/highrise/common/divider.vue')
  },
  {
    path: 'common/draggable',
    title: 'Draggable',
    category: 'Common',
    component: () => import('@/components/highrise/common/draggable.vue')
  },
  {
    path: 'common/dropdown',
    title: 'Dropdown',
    category: 'Common',
    component: () => import('@/components/highrise/common/dropdown.vue')
  },
  {
    path: 'common/ellipsis',
    title: 'Ellipsis',
    category: 'Common',
    component: () => import('@/components/highrise/common/ellipsis.vue')
  },
  {
    path: 'common/header-lite',
    title: 'Header Lite',
    category: 'Common',
    component: () => import('@/components/highrise/common/header-lite.vue')
  },
  {
    path: 'common/icon',
    title: 'Icon',
    category: 'Common',
    component: () => import('@/components/highrise/common/icon.vue')
  },
  {
    path: 'common/statistic',
    title: 'Statistic',
    category: 'Common',
    component: () => import('@/components/highrise/common/statistic.vue')
  },
  {
    path: 'common/tile',
    title: 'Tile',
    category: 'Common',
    component: () => import('@/components/highrise/common/tile.vue')
  },
  {
    path: 'common/tag',
    title: 'Tag',
    category: 'Common',
    component: () => import('@/components/highrise/common/tag.vue')
  },
  {
    path: 'common/spacing',
    title: 'Spacing',
    category: 'Common',
    component: () => import('@/components/highrise/common/spacing.vue')
  },
  {
    path: 'data-display/data-table',
    title: 'Data Table',
    category: 'Data Display',
    component: () => import('@/components/highrise/data-display/data-table.vue')
  },
  {
    path: 'data-display/empty',
    title: 'Empty',
    category: 'Data Display',
    component: () => import('@/components/highrise/data-display/empty.vue')
  },
  {
    path: 'data-display/advance-filter',
    title: 'Advance Filter',
    category: 'Data Display',
    component: () => import('@/components/highrise/data-display/advance-filter.vue')
  },
  {
    path: 'data-display/time-line',
    title: 'Time Line',
    category: 'Data Display',
    component: () => import('@/components/highrise/data-display/time-line.vue')
  },
  {
    path: 'data-input/advanced-select',
    title: 'Advanced Select',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/AdvancedSelect.vue')
  },
  {
    path: 'data-input/checkbox-card',
    title: 'Checkbox Card',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/checkbox-card.vue')
  },
  {
    path: 'data-input/checkbox-group',
    title: 'Checkbox Group',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/checkbox-group.vue')
  },
  {
    path: 'data-input/checkbox',
    title: 'Checkbox',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/checkbox.vue')
  },
  {
    path: 'data-input/code-editor',
    title: 'Code Editor',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/code-editor.vue')
  },
  {
    path: 'data-input/color-picker',
    title: 'Color Picker',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/color-picker.vue')
  },
  {
    path: 'data-input/content-switcher',
    title: 'Content Switcher',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/content-switcher.vue')
  },
  {
    path: 'data-input/date-picker',
    title: 'Date Picker',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/date-picker.vue')
  },
  {
    path: 'data-input/form',
    title: 'Form',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/form.vue')
  },
  {
    path: 'data-input/input-group',
    title: 'Input Group',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-group.vue')
  },
  {
    path: 'data-input/icon-picker',
    title: 'Icon Picker',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/icon-picker.vue')
  },
  {
    path: 'data-input/tree-select',
    title: 'Tree Select',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/tree-select.vue')
  },
  {
    path: 'data-input/input-number',
    title: 'Input Number',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-number.vue')
  },
  {
    path: 'data-input/input-phone',
    title: 'Input Phone',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-phone.vue')
  },
  {
    path: 'data-input/input-slider',
    title: 'Input Slider',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-slider.vue')
  },
  {
    path: 'data-input/input-tag',
    title: 'Input Tag',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-tag.vue')
  },
  {
    path: 'data-input/input-text-area',
    title: 'Input Text Area',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-text-area.vue')
  },
  {
    path: 'data-input/input-text',
    title: 'Input Text',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-text.vue')
  },
  {
    path: 'data-input/input-otp',
    title: 'Input Otp',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/input-otp.vue')
  },
  {
    path: 'data-input/radio-card',
    title: 'Radio Card',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/radio-card.vue')
  },
  {
    path: 'data-input/radio-group',
    title: 'Radio Group',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/radio-group.vue')
  },
  {
    path: 'data-input/radio',
    title: 'Radio',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/radio.vue')
  },
  {
    path: 'data-input/select',
    title: 'Select',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/select.vue')
  },
  {
    path: 'data-input/swatch-tile',
    title: 'Swatch Tile',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/swatch-tile.vue')
  },
  {
    path: 'data-input/tag-group',
    title: 'Tag Group',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/tag-group.vue')
  },
  {
    path: 'data-input/time-picker',
    title: 'Time Picker',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/time-picker.vue')
  },
  {
    path: 'data-input/toggle-group',
    title: 'Toggle Group',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/toggle-group.vue')
  },
  {
    path: 'data-input/toggle',
    title: 'Toggle',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/toggle.vue')
  },
  {
    path: 'data-input/upload',
    title: 'Upload',
    category: 'Data Input',
    component: () => import('@/components/highrise/data-input/upload.vue')
  },
  {
    path: 'feedback/alert',
    title: 'Alert',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/alert.vue')
  },
  {
    path: 'feedback/badge',
    title: 'Badge',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/badge.vue')
  },
  {
    path: 'feedback/drawer',
    title: 'Drawer',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/drawer.vue')
  },
  {
    path: 'feedback/modal',
    title: 'Modal',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/modal.vue')
  },
  {
    path: 'feedback/popover',
    title: 'Popover',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/popover.vue')
  },
  {
    path: 'feedback/progress',
    title: 'Progress',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/progress.vue')
  },
  {
    path: 'feedback/progress-inline',
    title: 'Progress Inline',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/progress-inline.vue')
  },
  {
    path: 'feedback/skeleton',
    title: 'Skeleton',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/skeleton.vue')
  },
  {
    path: 'feedback/spin',
    title: 'Spin',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/spin.vue')
  },
  {
    path: 'feedback/tooltip',
    title: 'Tooltip',
    category: 'Feedback',
    component: () => import('@/components/highrise/feedback/tooltip.vue')
  },
  {
    path: 'layout/section-footer',
    title: 'Section Footer',
    category: 'Layout',
    component: () => import('@/components/highrise/layout/section-footer.vue')
  },
  {
    path: 'layout/space',
    title: 'Space',
    category: 'Layout',
    component: () => import('@/components/highrise/layout/space.vue')
  },
  {
    path: 'navigation/breadcrumb',
    title: 'Breadcrumb',
    category: 'Navigation',
    component: () => import('@/components/highrise/navigation/breadcrumb.vue')
  },
  {
    path: 'navigation/menu',
    title: 'Menu',
    category: 'Navigation',
    component: () => import('@/components/highrise/navigation/menu.vue')
  },
  {
    path: 'navigation/pagination',
    title: 'Pagination',
    category: 'Navigation',
    component: () => import('@/components/highrise/navigation/pagination.vue')
  },
  {
    path: 'navigation/progress-steps',
    title: 'Progress Steps',
    category: 'Navigation',
    component: () => import('@/components/highrise/navigation/progress-steps.vue')
  },
  {
    path: 'navigation/sidebar',
    title: 'Sidebar',
    category: 'Navigation',
    component: () => import('@/components/highrise/layout/sidebar.vue')
  },
  {
    path: 'navigation/tabs',
    title: 'Tabs',
    category: 'Navigation',
    component: () => import('@/components/highrise/navigation/tabs.vue')
  }
]
