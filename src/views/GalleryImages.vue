<script setup>
import Gallery from '../components/Gallery.vue'

const galleryItems = [
  // Northern Province
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    title: 'Volcanoes National Park',
    description: 'Mountain gorillas and volcanic scenery in Northern Province'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    title: 'Musanze Caves',
    description: 'Ancient lava caves with spectacular rock formations'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Twin Lakes',
    description: 'Stunning views of Burera and Ruhondo lakes'
  },
  
  // Western Province
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    title: 'Lake Kivu',
    description: 'Beautiful lakeside with beaches and boat cruises'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
    title: 'Nyungwe National Park',
    description: 'Ancient rainforest with wildlife and nature trails'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    title: 'Canopy Walkway',
    description: 'Walk high above the forest floor with spectacular views'
  },
  
  // Southern Province
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    title: "King's Palace Museum",
    description: 'Rwanda\'s royal history and traditions'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    title: 'Ethnographic Museum',
    description: 'Cultural heritage and traditional artifacts'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    title: 'Huye Mountains',
    description: 'Beautiful rolling hills and countryside views'
  },
  
  // Eastern Province
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg',
    title: 'Akagera National Park',
    description: 'Safari experience with Big Five wildlife'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Lake Muhazi',
    description: 'Beautiful freshwater lake for relaxation and water activities'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    title: 'Cultural Experiences',
    description: 'Traditional dances and local culture'
  },
  
  // Kigali
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg',
    title: 'Kigali Genocide Memorial',
    description: 'Historical and cultural significance'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    title: 'Nyandungu Eco Park',
    description: 'Urban eco-park with nature trails and wetlands'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg',
    title: 'Inema Arts Center',
    description: 'Contemporary Rwandan art and cultural exhibitions'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">
    
    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      GALLERY - IMAGES
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-12">
      Explore the most beautiful images from Rwanda. Stunning landscapes, wildlife,
      cultural sites, and natural wonders from all five provinces. Click any image to view in fullscreen.
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>
  </section>
</template>
