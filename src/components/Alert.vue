<template>
    <!-- Semantic wrapper tag and heading level are configurable -->
    <component :is="tag" :class="['alert', variantClass]" :role="roleAttr">
      <component v-if="title" :is="headingTag" v-html="title" />
      <slot />
    </component>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  type Variant = 'default' | 'success' | 'info' | 'warning' | 'danger'
  // Stick to the sizes used in your CSS rules
  type HeadingTag = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  // Allow changing the outer container for semantics
  type WrapperTag = 'div' | 'section' | 'aside'
  
  const props = defineProps<{
    /** Visual variant (border colour) */
    variant?: Variant
    /** Optional heading text; omit to render only paragraph content */
    title?: string
    /** Heading tag to use when title is present */
    headingTag?: HeadingTag
    /** Wrapper tag for the alert element */
    tag?: WrapperTag
    /** ARIA role; defaults to 'alert' to announce important messages */
    role?: 'alert' | 'status' | 'none'
  }>()
  
  const variantClass = computed(() => {
    const v = props.variant ?? 'default'
    return v === 'default' ? '' : v
  })
  
  const headingTag = computed<HeadingTag>(() => props.headingTag ?? 'h3')
  const tag = computed<WrapperTag>(() => props.tag ?? 'div')
  const roleAttr = computed(() => props.role ?? 'alert')
  </script>
  
  <style>
  /* Copied directly from your CSS (alert only). Kept unscoped so classes match exactly. */
  .alert {
    border: 5px solid #6a6a6b;
    padding: 20px;
    margin-bottom: 20px;
  }
  .alert.success {
    border-color: #00853f;
  }
  .alert.info {
    border-color: #00539b;
  }
  .alert.warning {
    border-color: #bf5909;
  }
  .alert.danger {
    border-color: #ea1a13;
  }
  .alert h2, .alert h3, .alert h4, .alert h5, .alert h6 {
    font-size: 1.44em;
    margin: 0 0 10px 0;
  }
  @media (min-width: 36em) and (max-width: 75em) {
    .alert h2, .alert h3, .alert h4, .alert h5, .alert h6 {
      font-size: calc(1.44em + 0.1225em * (100vw - 36em) / (75em - 36em));
    }
  }
  @media (min-width: 75em) {
    .alert h2, .alert h3, .alert h4, .alert h5, .alert h6 {
      font-size: calc(1.44em + 0.1225em);
    }
  }
  .alert p {
    margin: 0;
  }
  </style>
  