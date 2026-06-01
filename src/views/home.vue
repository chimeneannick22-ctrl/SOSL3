<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
    style="background-image: url('/src/assets/gori.png');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/55"></div>

    <!-- Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/40 via-green-900/30 to-black/70"
    ></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl animate-fadeIn">
      
      <!-- Top Label -->
      <p
        class="uppercase tracking-[6px] text-green-300 text-sm md:text-base mb-4 font-semibold"
      >
        {{ t('simpleHome.welcome') }}
      </p>

      <!-- Main Title -->
      <h1
        class="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl"
      >
        {{ t('simpleHome.title') }}
        <span class="text-green-400">Rwanda</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="mt-6 text-lg md:text-2xl text-gray-200 font-light"
      >
        {{ t('simpleHome.subtitle') }}
        <span class="text-yellow-300 font-medium">
          {{ t('simpleHome.description') }}
        </span>
      </p>

      <!-- Buttons -->
      <div
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
      >
        <button
          class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition duration-300 hover:scale-105"
        >
          {{ t('simpleHome.exploreButton') }}
        </button>

        <button
          class="border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
        >
          {{ t('simpleHome.learnMore') }}
        </button>
      </div>
    </div>

    <!-- Bottom Shadow -->
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
    ></div>
  </section>
</template>