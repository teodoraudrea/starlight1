<script setup lang="ts">
import FontsDoc from '../components/FontsDoc.vue'
import { TYPOGRAPHY, FONT_FACES, FONT_FACE_CSS } from '../design.config'
</script>

<template>
  <FontsDoc
    :typography="TYPOGRAPHY"
    :fontFaces="FONT_FACES"
    :fontFaceCss="FONT_FACE_CSS"
    :showCss="true"
  />
</template>
