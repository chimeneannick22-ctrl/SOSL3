<script setup>
import Gallery from '../components/Gallery.vue'
import { t } from '../i18n.js'

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    title: "King's Palace Museum",
    description: "Located in Nyanza District, this museum showcases Rwanda's royal history and traditions. Visitors can explore the reconstructed royal residence, learn about the ancient monarchy, and see the famous Inyambo cattle, known for their impressive long horns."
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    title: 'Ethnographic Museum',
    description: "Situated in Huye District, the Ethnographic Museum preserves Rwanda's cultural heritage through collections of traditional tools, artwork, clothing, musical instruments, and historical artifacts."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Nyungwe National Park',
    description: "One of Africa's oldest rainforests, famous for chimpanzee tracking, bird watching, hiking trails, waterfalls, and the spectacular canopy walkway."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    title: 'Canopy Walkway',
    description: "Experience breathtaking views above the rainforest on East Africa's famous suspended canopy bridge."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    title: 'Huye Hills',
    description: "Enjoy beautiful landscapes, fresh air, and panoramic views of the Southern Province's rolling hills."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    title: 'Cultural Villages',
    description: 'Learn traditional dances, local crafts, storytelling, and authentic Rwandan culture through community tourism experiences.'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">
    
    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      {{ t('destination.south.title') }}
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-10">
      {{ t('destination.south.description') }}
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>
  </section>
</template>