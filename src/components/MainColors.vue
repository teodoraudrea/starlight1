<template>
    <div class="container">
      <div v-for="name in colorNames" :key="name" class="color-section">
        <h2 class="color-title">{{ name }}</h2>
        <div class="color-grid">
          <div v-for="color in COLORS[name]" :key="color" class="color-item">
            <div 
              class="color-box" 
              :style="{ backgroundColor: color.value }" 
              @click="copyToClipboard(color.value)"
              title="Click to copy color"
            ></div>
            <div class="color-info">
              <span class="color-name">{{ color.name }}</span>
              <span class="color-value">{{ color.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Copy notification message -->
      <div v-if="copiedMessage" class="copied-message">
        {{ copiedMessage }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { COLORS } from "../design.config";
  
  const colorNames = Object.keys(COLORS);
  const copiedMessage = ref<string | null>(null);
  
  // ✅ Copy hex value to clipboard properly
  const copyToClipboard = (hexValue: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hexValue).then(() => {
        copiedMessage.value = `Copied ${hexValue} to clipboard!`;
        
        // Hide message after 2 seconds
        setTimeout(() => {
          copiedMessage.value = null;
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy:", err);
      });
    } else {
      console.warn("Clipboard API not supported");
    }
  };
  </script>
  
  <style scoped>
  /* Container for colors */
  .container {
    display: flex;
    flex-direction: column;
    gap: 48px; /* Space between sections */
    align-items: flex-start;
  }
  
  /* Section for each color category */
  .color-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 800px; /* Ensures the grid doesn't stretch too wide */
  }
  
  /* Title styling */
  .color-title {
    text-transform: capitalize;
    font-weight: 600;
  }
  
  /* ✅ Properly aligned grid layout */
  .color-grid {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-content: flex-start;
    margin-top: 0;
  }
  
  /* ✅ Fixes first-row alignment issue */
  .color-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: monospace;
    color: #64748b; /* Similar to Tailwind's text-slate-500 */
    font-size: 0.875rem;
    flex: 1 1 200px; /* Ensures flexible grid size */
    max-width: 100%; /* Prevents overly wide boxes */
    margin-top: 0rem;
  }
  
  /* ✅ Fix the color box styles */
  .color-box {
    width: 100%;
    height: 48px;
    transition: transform 0.2s ease-in-out;
    cursor: copy; /* Clipboard cursor */
    border-radius: 6px;
  }
  
  /* ✅ Improve hover effect */
  .color-box:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
  
  /* Color name */
  .color-name {
    font-weight: 500;
    display: block;
    margin-top: 8px;
  }
  
  /* Color value (hex code) */
  .color-value {
    text-transform: uppercase;
    font-size: 0.75rem;
    display: block;
    margin-top: 2px;
  }

  .color-info {
    margin-top: 2px;
  }
  
  /* ✅ Copied message now appears correctly */
  .copied-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.875rem;
    text-align: center;
    z-index: 1000;
    animation: fadeInOut 2s ease-in-out;
  }
  
  /* ✅ Smooth fade-in and fade-out animation */
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(10px); }
    20% { opacity: 1; transform: translateY(0); }
    80% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(10px); }
  }
  </style>
  