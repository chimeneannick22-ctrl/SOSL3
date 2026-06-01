<script setup>
import Gallery from '../components/Gallery.vue'
import { t } from '../i18n.js'

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg',
    title: 'Kigali Genocide Memorial',
    description: "Learn about Rwanda's history and pay tribute to the victims of the 1994 Genocide against the Tutsi."
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    title: 'Nyandungu Eco Park',
    description: 'A beautiful urban eco-park with walking trails, wetlands, cycling paths, and natural scenery.'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    title: 'Kandt House Museum',
    description: "Explore Rwanda's colonial and natural history through exhibits and educational displays."
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg',
    title: 'Inema Arts Center',
    description: 'Discover contemporary Rwandan art, cultural exhibitions, workshops, and performances.'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    title: 'Kigali Car Free Zone',
    description: "A popular city center area perfect for walking, shopping, dining, and enjoying Kigali's urban atmosphere."
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
    title: 'Niyo Arts Center',
    description: 'Experience traditional and modern Rwandan art, music, dance, and cultural activities.'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">

    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      {{ t('destination.kigali.title') }}
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-10">
      {{ t('destination.kigali.description') }}
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>

  </section>
</template>