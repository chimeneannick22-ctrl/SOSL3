<script setup>
import Gallery from '../components/Gallery.vue'
import { t } from '../i18n.js'

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    title: 'Lake Kivu',
    description: "One of Africa's Great Lakes, Lake Kivu offers beautiful beaches, boat cruises, kayaking, fishing, swimming, and breathtaking sunset views."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
    title: 'Nyungwe National Park',
    description: "One of Africa's oldest rainforests, home to chimpanzees, monkeys, hundreds of bird species, hiking trails, and amazing biodiversity."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    title: 'Canopy Walkway',
    description: "Walk high above the forest floor on East Africa's famous canopy bridge and enjoy spectacular views of Nyungwe Forest."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Karongi',
    description: 'A beautiful lakeside town along Lake Kivu known for its relaxing atmosphere, hotels, restaurants, and scenic landscapes.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66',
    title: 'Kibuye',
    description: "One of Rwanda's most beautiful tourist destinations, offering lake excursions, island tours, cultural experiences, and luxury resorts."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Peace Island',
    description: 'A peaceful island destination on Lake Kivu where visitors can enjoy nature, boat rides, photography, and relaxation away from city life.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f',
    title: 'Bisesero Genocide Memorial',
    description: 'An important historical site that honors the victims of the 1994 Genocide against the Tutsi and teaches visitors about Rwanda\'s history.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1',
    title: 'Gishwati-Mukura National Park',
    description: 'A growing conservation area featuring forests, wildlife, birdwatching, hiking trails, and eco-tourism opportunities.'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">

    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      {{ t('destination.west.title') }}
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-10">
      {{ t('destination.west.description') }}
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>

  </section>
</template>