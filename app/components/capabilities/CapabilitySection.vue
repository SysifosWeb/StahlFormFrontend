<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  isReversed: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    default: () => []
  }
})

const scrollContainer = ref(null)

const scroll = (direction) => {
  if (!scrollContainer.value) return
  const scrollAmount = scrollContainer.value.clientWidth
  scrollContainer.value.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section :class="['w-full py-16 lg:py-24', isReversed ? 'bg-slate-50' : 'bg-white']">
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Contenido de Texto (Lado Izquierdo) -->
        <div class="lg:col-span-6 relative order-2 lg:order-1">
          <div class="space-y-8">
            <!-- Título con acento lateral -->
            <div class="relative pl-6 lg:pl-10">
              <div class="absolute left-0 top-0 w-1 lg:w-2 h-full bg-detail-primary"></div>
              <h2 class="text-3xl lg:text-5xl font-bold text-dark uppercase tracking-tight leading-none mb-6">
                {{ title }}
              </h2>
              <p class="text-lg lg:text-xl font-light text-medium leading-relaxed max-w-2xl">
                {{ description }}
              </p>
            </div>

            <!-- Lista de ítems técnicos -->
            <div v-if="items.length > 0" class="pt-4 lg:pt-6 pl-6 lg:pl-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div 
                  v-for="(item, index) in items" 
                  :key="index"
                  class="flex items-center gap-3 group"
                >
                  <div class="w-1.5 h-1.5 rounded-full bg-detail-primary opacity-40 group-hover:opacity-100 transition-opacity"></div>
                  <span class="text-xs lg:text-sm font-bold text-medium group-hover:text-dark uppercase tracking-widest transition-colors duration-300">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carrusel Horizontal (Lado Derecho) -->
        <div class="lg:col-span-6 order-1 lg:order-2">
          <div class="relative group/carousel">
            <!-- Botones de navegación -->
            <button 
              @click="scroll(-1)"
              class="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-dark hover:bg-detail-primary hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden lg:flex border border-slate-100"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              @click="scroll(1)"
              class="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-dark hover:bg-detail-primary hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden lg:flex border border-slate-100"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Contenedor Scrollable -->
            <div 
              ref="scrollContainer"
              class="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory rounded-sm shadow-2xl bg-white"
            >
              <div 
                v-for="(img, index) in images" 
                :key="index"
                class="flex-shrink-0 w-full h-[380px] lg:h-[480px] snap-start relative group"
              >
                <img 
                  :src="img.src" 
                  :alt="img.alt || title" 
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <!-- Contador de imagen (Sutil) -->
                <div class="absolute bottom-4 right-4 bg-dark/60 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                  {{ index + 1 }} / {{ images.length }}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>




<style scoped>
.title-accent {
  width: 60px;
  height: 4px;
  background-color: var(--detail-primary, #b91c1c);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
