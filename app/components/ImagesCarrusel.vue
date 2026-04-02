<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const current = ref(0)
const isMobile = ref(false)
const isMounted = ref(false)

// Detectar si es móvil o desktop
const checkMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768 // md breakpoint de Tailwind
  }
}

onMounted(() => {
  isMounted.value = true
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkMobile)
  }
})

/* Agrupar según el tamaño de pantalla: 2 en móvil, 3 en desktop */
const slides = computed(() => {
  // En el servidor (SSR) siempre asumimos desktop (3 ítems) para consistencia
  const itemsPerSlide = (isMounted.value && isMobile.value) ? 2 : 3
  const result = []
  for (let i = 0; i < props.images.length; i += itemsPerSlide) {
    result.push(props.images.slice(i, i + itemsPerSlide))
  }
  return result
})

const next = () => {
  current.value = (current.value + 1) % slides.value.length
}

const prev = () => {
  current.value =
    (current.value - 1 + slides.value.length) % slides.value.length
}
</script>

<template>
  <div class="relative overflow-visible">
    <!-- TRACK -->
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <!-- SLIDE -->
        <div
          v-for="(group, index) in slides"
          :key="index"
          class="w-full flex-shrink-0 px-4"
        >
          <!-- GRID -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article
              v-for="(item, i) in group"
              :key="i"
              class="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <!-- Imagen -->
              <img
                :src="item.src"
                :alt="item.title"
                class="h-[400px] md:h-[580px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <!-- Overlay -->
              <div
                class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4"
              >
                <h3 class="text-white font-semibold">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-200">
                  {{ item.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <!-- Flechas -->
    <button
      @click="prev"
      class="absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 z-10 flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-[#f3f6fa] shadow-md hover:scale-110 hover:bg-white transition-all duration-300 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 group-hover:text-detail-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="next"
      class="absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 z-10 flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-[#f3f6fa] shadow-md hover:scale-110 hover:bg-white transition-all duration-300 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 group-hover:text-detail-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>