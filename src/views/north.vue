<script setup>
import Gallery from '../components/Gallery.vue'
import { t } from '../i18n.js'

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    title: 'Volcanoes National Park',
    description: "Rwanda's most famous national park, known worldwide for mountain gorilla trekking, golden monkeys, volcano hiking, and biodiversity."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    title: 'Musanze Caves',
    description: 'Ancient lava caves formed by volcanic activity. Visitors can explore underground tunnels, rock formations, and learn about Rwanda\'s geological history.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Twin Lakes Burera & Ruhondo',
    description: 'Enjoy stunning views of the Virunga volcanoes, peaceful boat rides, fishing activities, and beautiful photography opportunities.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    title: 'Mount Bisoke',
    description: 'A popular hiking destination featuring a spectacular crater lake at the summit and panoramic views of the surrounding region.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    title: 'Mount Karisimbi',
    description: "Rwanda's highest volcano offering adventurous trekking experiences, breathtaking landscapes, and unforgettable mountain views."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66',
    title: 'Musanze Town',
    description: 'The tourism capital of Northern Rwanda and the main gateway to Volcanoes National Park, offering hotels, restaurants, cultural activities, and beautiful scenery.'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">

    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      {{ t('destination.north.title') }}
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-10">
      {{ t('destination.north.description') }}
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>
  </section>
</template>