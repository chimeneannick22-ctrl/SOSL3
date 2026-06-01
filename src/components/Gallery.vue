<template>
  <div>
    <!-- Gallery Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer group"
        @click="openModal(index)"
      >
        <!-- Thumbnail -->
        <div class="relative w-full h-60 bg-gray-900 overflow-hidden">
          <!-- Image -->
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.title"
            class="w-full h-full object-cover group-hover:opacity-80 transition"
          />
          <!-- Video Thumbnail -->
          <video
            v-else
            :src="item.src"
            class="w-full h-full object-cover group-hover:opacity-80 transition"
          ></video>
          
          <!-- Badge -->
          <div class="absolute top-3 right-3 bg-green-500/90 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <span v-if="item.type === 'image'">🖼 IMAGE</span>
            <span v-else>🎬 VIDEO</span>
          </div>

          <!-- Play Button for Videos -->
          <div
            v-if="item.type === 'video'"
            class="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition"
          >
            <div class="text-white text-5xl">▶</div>
          </div>
        </div>

        <!-- Info -->
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-400 mb-2">
            {{ item.title }}
          </h2>
          <p class="text-gray-300">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Modal Lightbox -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 text-white hover:text-green-400 transition text-3xl"
          @click="closeModal"
        >
          ✕
        </button>

        <!-- Navigation Buttons -->
        <button
          v-if="currentIndex > 0"
          class="absolute left-4 text-white hover:text-green-400 transition text-3xl"
          @click="prevItem"
        >
          ❮
        </button>

        <button
          v-if="currentIndex < items.length - 1"
          class="absolute right-4 text-white hover:text-green-400 transition text-3xl"
          @click="nextItem"
        >
          ❯
        </button>

        <!-- Content -->
        <div class="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
          <!-- Image -->
          <img
            v-if="currentItem && currentItem.type === 'image'"
            :src="currentItem.src"
            :alt="currentItem.title"
            class="max-w-full max-h-[70vh] object-contain rounded-lg"
          />

          <!-- Video -->
          <video
            v-else-if="currentItem && currentItem.type === 'video'"
            :src="currentItem.src"
            controls
            autoplay
            class="max-w-full max-h-[70vh] object-contain rounded-lg bg-black"
          ></video>

          <!-- Info -->
          <div class="mt-6 text-center text-white w-full">
            <h2 class="text-3xl font-bold text-green-400 mb-2">
              {{ currentItem?.title }}
            </h2>
            <p class="text-gray-300 text-lg">
              {{ currentItem?.description }}
            </p>
            <p class="text-gray-500 mt-3">
              {{ currentIndex + 1 }} / {{ items.length }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected format:
    // { type: 'image', src: 'url', title: 'Title', description: 'Description' }
    // { type: 'video', src: 'url.mp4', title: 'Title', description: 'Description' }
  }
})

const showModal = ref(false)
const currentIndex = ref(0)

const currentItem = computed(() => props.items[currentIndex.value])

const openModal = (index) => {
  currentIndex.value = index
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const nextItem = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++
  }
}

const prevItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
