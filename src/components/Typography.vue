<template>
  <section class="typography">
    <header class="hdr">
      <h2>Typography</h2>
      <p class="muted">Preview of your typography tokens.</p>
    </header>

    <div class="grid">
      <div v-for="t in tokens.scale" :key="t.name" class="card">
        <div
          class="sample"
          :style="{ fontFamily: tokens.fontFamily, fontWeight: t.weight, fontSize: t.size }"
        >
          {{ sampleText(t.name) }}
        </div>
        <div class="meta">
          <div><strong>Name:</strong> <code>{{ t.name }}</code></div>
          <div><strong>Size:</strong> <code>{{ t.size }}</code></div>
          <div><strong>Weight:</strong> <code>{{ t.weight }}</code></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TYPOGRAPHY as CFG_TYPOGRAPHY } from '../design.config'

type ScaleItem = { name: string; size: string; weight: string | number }
type Typography = { fontFamily: string; scale: ScaleItem[] }

const props = defineProps<{ typography?: Typography }>()
const tokens = computed(() => props.typography ?? CFG_TYPOGRAPHY)

function sampleText(name: string) {
  switch (name) {
    case 'h1': return 'Heading 1 '
    case 'h2': return 'Heading 2 '
    case 'h3': return 'Heading 3 '
    case 'h4': return 'Heading 4 '
    case 'button': return 'Button / Call to action'
    case 'caption': return 'Caption — Supporting text'
    default: return 'Body — The quick brown fox jumps over the lazy dog.'
  }
}
</script>

<style scoped>
.typography { display: grid; gap: 1rem; }
.hdr { display: grid; gap: .25rem; }
.hdr h2 { margin: 0; font-size: 1.125rem; }
.muted { color: #666; }

.grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.card { display: grid; gap: .5rem; padding: 1rem; border: 1px solid #e6e6e6; border-radius: 12px; background: #fff; }
.sample { line-height: 1.3; }
.meta { font-size: .85rem; color: #444; display: grid; gap: .25rem; }
.meta code { background: rgba(0,0,0,.05); padding: 0 .25rem; border-radius: 4px; }

@media (prefers-color-scheme: dark) {
  .card { background: #121314; border-color: #2a2b2d; }
  .muted, .meta { color: #9aa0a6; }
  .meta code { background: rgba(255,255,255,.1); }
}
</style>
