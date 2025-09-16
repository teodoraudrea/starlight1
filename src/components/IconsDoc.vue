<template>
    <!-- Minimal list with a touch of metadata: icon + name + docs link + size -->
    <section class="mi">
      <ul class="list">
        <li v-for="it in items" :key="it.name" class="row">
          <span
            class="material-icons-outlined"
            :style="{ fontSize: it.size + 'px', fontVariationSettings: `'FILL' 0, 'wght' 200, 'GRAD' 0, 'OPSZ' ${it.size}` }"
            aria-hidden="true"
          >{{ it.name }}</span>
          <span class="meta">
            <code class="name">{{ it.name }}</code>
            <a class="link" :href="it.href" target="_blank" rel="noopener">docs</a>
            <span class="size">{{ it.size }}px</span>
          </span>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  type IconInput = string | { name: string; href?: string; size?: number }
  
  const props = defineProps<{ icons?: IconInput[]; size?: number }>()
  
  const DEFAULT_ICONS: IconInput[] = [
    'home',
    'search',
    'favorite',
    'settings',
    'open_in_new'
  ]
  
  const base = computed(() => props.size ?? 24)
  
  function docsHref(name: string) {
    // Link to Google Fonts Material Symbols catalog for the Outlined variant
    const variant = 'Material Symbols Outlined'
    return `https://fonts.google.com/icons?selected=${encodeURIComponent(variant)}:${encodeURIComponent(name)}`
  }
  
  const items = computed(() => {
    const input = props.icons?.length ? props.icons : DEFAULT_ICONS
    return input.map((i) => {
      const name = typeof i === 'string' ? i : i.name
      const size = typeof i === 'string' ? base.value : i.size ?? base.value
      const href = typeof i === 'string' ? docsHref(name) : i.href ?? docsHref(name)
      return { name, size, href }
    })
  })
  </script>
  
  <style scoped>
  /* Your requested minimal class with one essential addition: font-variation-settings */
  .material-icons-outlined {
    font-family: 'Material Symbols Outlined', sans-serif;
    font-style: normal;
    font-weight: 200; /* match your @font-face */
    line-height: 1; /* ensuring icons are centered and aligned */
    vertical-align: middle;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased; /* improve rendering on webkit browsers */
  }
  
  /* Tiny layout so name/href/size sit nicely next to the icon */
  .mi { display: block; }
  .list { list-style: none; margin: 0; padding: 0; display: grid; gap: .5rem; }
  .row { display: flex; align-items: center; gap: .75rem; }
  .meta { display: inline-flex; align-items: baseline; gap: .5rem; font-size: .9rem; }
  .name { font-size: .85rem; }
  .link { text-decoration: underline; }
  .size { color: #555; }
  
  @media (prefers-color-scheme: dark) {
    .size { color: #9aa0a6; }
  }
  </style>
  