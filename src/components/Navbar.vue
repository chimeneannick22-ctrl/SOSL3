<script setup>
import { locale, setLocale, t } from '../i18n.js'
</script>

<template>
 <nav class="relative z-50 bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
    
    <img src="../assets/gori.png" class="h-10 w-20" alt="Logo">
    
    <div class="h-10 w-auto"></div>

    <ul class="flex gap-6 text-sm font-medium w-full px-5 justify-end items-center">

      <li>
        <router-link to="/" class="hover:text-yellow-300">
          {{ t('nav.home') }}
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          {{ t('nav.about') }}
        </router-link>
      </li>

      <li>
        <router-link to="/services" class="hover:text-yellow-300">
          {{ t('nav.services') }}
        </router-link>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          {{ t('nav.gallery') }} <span>▼</span>
        </a>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-0 top-full mt-2 bg-green-800 text-white rounded shadow-lg w-48 z-50"
        >
          <li>
            <router-link
              to="/gallery/images"
              class="block px-4 py-2 hover:bg-green-700"
            >
              {{ t('nav.images') }}
            </router-link>
          </li>

          <li>
            <router-link
              to="/gallery/videos"
              class="block px-4 py-2 hover:bg-green-700"
            >
              {{ t('nav.videos') }}
            </router-link>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          {{ t('nav.destination') }} <span>▼</span>
        </a>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-0 top-full mt-2 bg-green-800 text-white rounded shadow-lg w-48 z-50"
        >
          <li>
            <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-700">
              {{ t('nav.kigali') }}
            </router-link>
          </li>

          <li>
            <router-link to="/south" class="block px-4 py-2 hover:bg-green-700">
              {{ t('nav.south') }}
            </router-link>
          </li>

          <li>
            <router-link to="/west" class="block px-4 py-2 hover:bg-green-700">
              {{ t('nav.west') }}
            </router-link>
          </li>

          <li>
            <router-link to="/north" class="block px-4 py-2 hover:bg-green-700">
              {{ t('nav.north') }}
            </router-link>
          </li>

          <li>
            <router-link to="/east" class="block px-4 py-2 hover:bg-green-700">
              {{ t('nav.east') }}
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          {{ t('nav.contact') }}
        </router-link>
      </li>

      <li>
        <router-link to="/login" class="hover:text-yellow-300">
          {{ t('login') }}
        </router-link>
      </li>
        <li>
        <router-link to="/register" class="hover:text-yellow-300">
          {{ t('register') }}
        </router-link>
      </li>

      <!-- Language Selector -->
      <li class="ml-4">
        <div class="flex flex-col items-end gap-2 rounded-lg border border-green-500 bg-green-900/40 p-2 text-right">
          <span class="text-[10px] uppercase tracking-[0.18em] text-green-200">
            Lang
          </span>

          <select
            v-model="locale"
            @change="setLocale($event.target.value)"
            class="bg-green-700 text-white rounded px-2 py-1 text-sm outline-none border border-green-500 focus:border-yellow-300"
          >
            <option value="en">{{ t('translations.en') }}</option>
            <option value="fr">{{ t('translations.fr') }}</option>
            <option value="rw">{{ t('translations.rw') }}</option>
          </select>
        </div>
      </li>

    </ul>
  </nav>
</template>