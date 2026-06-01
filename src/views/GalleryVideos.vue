<script setup>
import Gallery from '../components/Gallery.vue'

const galleryItems = [
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Rwanda Tourism Overview',
    description: 'Discover the beauty and diversity of Rwanda in this stunning video tour'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/movie.mp4',
    title: 'Mountain Gorillas Adventure',
    description: 'Experience the thrill of gorilla trekking in Volcanoes National Park'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Lake Kivu Experience',
    description: 'Scenic boat tour and water activities on beautiful Lake Kivu'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/movie.mp4',
    title: 'Cultural Heritage Tour',
    description: 'Explore Rwanda\'s rich cultural traditions and local communities'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Wildlife Safari',
    description: 'Big Five safari experience at Akagera National Park'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/movie.mp4',
    title: 'Nyungwe Forest Canopy Walk',
    description: 'Walk above the rainforest and discover amazing biodiversity'
  }
]
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white py-10 px-6">
    
    <h1 class="text-4xl font-bold text-center text-green-400 mb-4">
      {{ t('gallery.videosTitle') }}
    </h1>

    <p class="text-center text-gray-300 max-w-3xl mx-auto mb-12">
      {{ t('gallery.videosDescription') }}
    </p>

    <div class="max-w-7xl mx-auto">
      <Gallery :items="galleryItems" />
    </div>
  </section>
</template>
