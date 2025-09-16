<template>
    <section class="typography">
  
      <!-- Typography scale repeated for each font face -->
      <div class="block">
        <h3 class="sub">Typography Scale by Font Face</h3>
        <p class="muted">Each block below renders the entire scale using a single font face (its family, style, and weight).</p>
  
        <div class="faces-grid">
          <article v-for="f in fontFaces" :key="'scale-' + f.family + f.style + f.weight" class="face-scale">
            <div class="face-scale__hdr">
              <strong>{{ f.family }}</strong>
              <span class="pill">{{ f.style }}, {{ f.weight }}</span>
            </div>
            <div class="type-grid">
              <div v-for="t in tokens.scale" :key="f.family + f.style + f.weight + '-' + t.name" class="type-card">
                <div class="sample" :style="{ fontFamily: f.family, fontStyle: f.style, fontWeight: String(f.weight), fontSize: t.size }">
                  {{ sampleText(t.name) }}
                </div>
                <div class="meta">
                  <code>{{ t.name }}</code>
                  <code>{{ t.size }}</code>
                  <code>face: {{ f.style }}, {{ f.weight }}</code>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
  
      <!-- Font faces list -->
      <div class="block">
        <h3 class="sub">@font-face Tokens</h3>
  
        <div class="faces">
          <article v-for="f in fontFaces" :key="'meta-' + f.family + f.style + f.weight" class="face">
            <div class="face__preview" :style="{ fontFamily: f.family, fontStyle: f.style, fontWeight: String(f.weight) }">
              {{ f.family }} — {{ f.style }}, {{ f.weight }}
            </div>
            <div class="face__meta">
              <div class="row"><span class="label">Family</span><code>{{ f.family }}</code></div>
              <div class="row"><span class="label">Style</span><code>{{ f.style }}</code></div>
              <div class="row"><span class="label">Weight</span><code>{{ f.weight }}</code></div>
              <div class="row"><span class="label">Unicode Range</span><code class="wrap">{{ f.unicodeRange }}</code></div>
              <div class="row srcs">
                <span class="label">Sources</span>
                <ul>
                  <li v-for="(s, i) in f.src" :key="i">
                    <template v-if="s.local">local('<code>{{ s.local }}</code>')</template>
                    <template v-else>url(<code>{{ s.url }}</code>) format('<code>{{ s.format }}</code>')</template>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
  
      <!-- Generated CSS (optional) -->
      <div v-if="showCss && fontFaceCss" class="block">
        <h3 class="sub">Generated CSS</h3>
        <div class="actions">
          <button class="btn" @click="copy(fontFaceCss)">Copy CSS</button>
        </div>
        <pre class="code"><code>{{ fontFaceCss }}</code></pre>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  // NEW: fallback to design.config when props are not passed
  import { TYPOGRAPHY as CFG_TYPOGRAPHY, FONT_FACES as CFG_FONT_FACES, FONT_FACE_CSS as CFG_FONT_FACE_CSS } from '../design.config'
  
  interface SrcLocal { local: string }
  interface SrcUrl { url: string; format: string }
  interface FontFace {
    family: string
    style: 'normal' | 'italic'
    weight: number | string
    src: Array<SrcLocal | SrcUrl>
    unicodeRange: string
  }
  interface Typography {
    fontFamily: string
    scale: Array<{ name: string; size: string; weight: string | number }>
  }
  
  const props = defineProps<{
    fontFaces?: FontFace[]
    typography?: Typography
    fontFaceCss?: string
    showCss?: boolean
  }>()
  
  // Fallbacks remove the need to pass props from MDX/Astro
  const tokens = computed(() => props.typography ?? CFG_TYPOGRAPHY)
  const fontFaces = computed(() => props.fontFaces ?? CFG_FONT_FACES)
  const fontFaceCss = computed(() => props.fontFaceCss ?? CFG_FONT_FACE_CSS ?? '')
  const showCss = computed(() => props.showCss ?? true)
  
  function sampleText(name: string) {
    switch (name) {
      case 'h1': return 'Heading 1 — The quick brown fox'
      case 'h2': return 'Heading 2 — The quick brown fox'
      case 'h3': return 'Heading 3 — The quick brown fox'
      case 'h4': return 'Heading 4 — The quick brown fox'
      case 'button': return 'Button / Call to action'
      case 'caption': return 'Caption — Supporting text'
      default: return 'Body — The quick brown fox jumps over the lazy dog.'
    }
  }
  
  async function copy(text: string) {
    try { await navigator.clipboard.writeText(text) } catch(_) {}
  }
  </script>
  
  <style scoped>
  .fonts-doc { display: grid; gap: 1.25rem; }
  .hdr { display: grid; gap: .25rem; }
  .hdr h2 { margin: 0; font-size: 1.125rem; }
  .muted { color: #666; }
  
  .block { display: grid; gap: .75rem; }
  .sub { margin: 0; font-size: 1rem; }
  
  /* Typography cards */
  .type-grid { display: grid; gap: .75rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
  .type-card { display: grid; gap: .5rem; padding: .75rem; border: 1px solid #e6e6e6; border-radius: 12px; background: #fff; }
  .sample { line-height: 1.3; }
  .meta { display: flex; flex-wrap: wrap; gap: .5rem; align-items: baseline; font-size: .85rem; color: #444; }
  
  /* Font-face scale blocks */
  .faces-grid { display: grid; gap: 1rem; }
  .face-scale { display: grid; gap: .5rem; padding: .75rem; border: 1px dashed #e6e6e6; border-radius: 12px; background: #fafafa; }
  .face-scale__hdr { display: flex; gap: .5rem; align-items: center; }
  .pill { font-size: .75rem; border: 1px solid #e0e0e0; border-radius: 999px; padding: .1rem .5rem; color: #444; }
  
  /* Font faces metadata */
  .faces { display: grid; gap: .75rem; }
  .face { display: grid; gap: .5rem; padding: .75rem; border: 1px dashed #e6e6e6; border-radius: 12px; background: #fafafa; }
  .face__preview { font-size: 1.125rem; }
  .face__meta { display: grid; gap: .25rem; }
  .row { display: grid; grid-template-columns: 140px 1fr; gap: .5rem; align-items: baseline; }
  .label { color: #666; }
  .wrap { white-space: pre-wrap; word-break: break-word; }
  .srcs ul { margin: 0; padding-left: 1rem; }
  
  /* Code */
  .actions { display: flex; gap: .5rem; }
  .btn { border: 1px solid #e0e0e0; border-radius: 8px; padding: .35rem .6rem; background: #fff; cursor: pointer; }
  .btn:focus-visible { outline: 2px solid #00539b; outline-offset: 2px; }
  .code { background: #0f172a; color: #e2e8f0; padding: .75rem; border-radius: 12px; overflow: auto; }
  
  @media (prefers-color-scheme: dark) {
    .type-card { background: #121314; border-color: #2a2b2d; }
    .face, .face-scale { background: #18191a; border-color: #2a2b2d; }
    .muted, .meta, .label { color: #9aa0a6; }
    .btn { background: #121314; border-color: #2a2b2d; color: #e2e8f0; }
  }
  </style>
  