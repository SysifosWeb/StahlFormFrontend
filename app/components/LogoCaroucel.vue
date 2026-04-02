<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  itemsVisible: {
    type: Number,
    default: 6
  },
  mobileItemsVisible: {
    type: Number,
    default: 1
  }
})

const thumbnailContainer = ref(null)
const isMounted = ref(false) // Flag to avoid hydration mismatch
let autoScrollInterval = null

const windowWidth = ref(0)
const isMobile = computed(() => isMounted.value && windowWidth.value < 640)
const isTablet = computed(() => isMounted.value && windowWidth.value >= 640 && windowWidth.value < 1024)

const updateWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

const loopedImages = computed(() => {
  // Siempre duplicamos para permitir el bucle infinito
  return [...props.images, ...props.images, ...props.images]
})

const scrollThumbnails = (direction) => {
  const container = thumbnailContainer.value
  if (!container) return

  const item = container.querySelector('.thumbnail-item')
  if (!item) return

  const gap = 16
  const scrollAmount = item.offsetWidth + gap

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  })

  // Lógica de bucle para desktop/tablet
  if (!isMobile.value) {
    setTimeout(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'auto' })
      }
    }, 400)
  }
}

const startAutoScroll = () => {
  if (!isMobile.value) {
    autoScrollInterval = setInterval(() => scrollThumbnails(1), 3000)
  }
}

const stopAutoScroll = () => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
}

onMounted(() => {
  isMounted.value = true
  updateWidth()
  window.addEventListener('resize', updateWidth)
  startAutoScroll()
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWidth)
  }
  stopAutoScroll()
})
</script>

<template>
  <div class="relative overflow-visible px-4 sm:px-12 mt-4">

    <!-- Flechas -->
    <button
      @click="scrollThumbnails(-1)"
      class="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full glass hover:scale-110 hover:bg-accent hover:border-accent group transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Carousel -->
    <div
      ref="thumbnailContainer"
      class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar
             sm:justify-start pt-4"
    >
      <div
        v-for="(image, index) in loopedImages"
        :key="index"
        class="thumbnail-item flex-shrink-0 snap-center
               h-24 sm:h-32 mb-4 bg-white/5 rounded-xl border border-white/5
               flex items-center justify-center transition cursor-pointer hover:bg-white/10"
        :style="{ 
          width: !isMounted ? `calc(${100 / itemsVisible}% - 14px)` : isMobile ? `calc(${100 / mobileItemsVisible}% - 12px)` : isTablet ? 'calc(33.33% - 12px)' : `calc(${100 / itemsVisible}% - 14px)` 
        }"
      >
        <img
          :src="image.src"
          :alt="image.title"
          class="max-w-[75%] max-h-[60%] object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </div>

    <button
      @click="scrollThumbnails(1)"
      class="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full glass hover:scale-110 hover:bg-accent hover:border-accent group transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

  </div>
</template>
