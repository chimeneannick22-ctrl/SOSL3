<script setup>
import Gallery from '../components/Gallery.vue'
import { t } from '../i18n.js'

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg',
    title: 'Akagera National Park',
    description: "Rwanda's only savannah national park, home to the Big Five: lions, elephants, rhinos, leopards, and buffaloes. Visitors can enjoy game drives, boat safaris, bird watching, and nature walks."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Lake Ihema',
    description: 'The largest lake in Akagera National Park, famous for boat cruises, hippos, crocodiles, and a variety of bird species.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Lake Muhazi',
    description: 'A beautiful freshwater lake ideal for relaxation, fishing, kayaking, boating, and enjoying stunning sunsets.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    title: 'Gahini',
    description: 'A peaceful area known for its rolling hills, cultural heritage, churches, schools, and beautiful countryside views.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    title: 'Rwinkwavu',
    description: 'A growing tourism and community destination offering scenic views, local culture, and opportunities to experience rural Rwanda.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    title: 'Cultural Experiences',
    description: 'Enjoy traditional Rwandan dances, local cuisine, crafts, storytelling, and community tourism activities throughout the province.'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">

    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      {{ t('destination.east.title') }}
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-10">
      {{ t('destination.east.description') }}
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>

  </section>
</template>