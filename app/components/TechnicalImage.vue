<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
  class: String
})

const isLoaded = ref(false)
const showSkeleton = ref(true)

onMounted(() => {
  // Simulate network delay for showcase effect
  setTimeout(() => {
    const img = new Image()
    img.src = props.src
    img.onload = () => {
      isLoaded.value = true
      showSkeleton.value = false
    }
  }, 1200) // 1.2s fake delat
})
</script>

<template>
  <div class="relative overflow-hidden w-full h-full rounded-inherit">
    <!-- Skeleton / Blurred Placeholder -->
    <div 
      v-if="!isLoaded" 
      class="absolute inset-0 bg-gray-800 flex items-center justify-center z-10"
      :class="[src ? 'img-placeholder' : 'skeleton-box']"
    >
      <Icon name="lucide:loader-2" class="loading-spinner text-primary w-6 h-6" v-if="!src" />
    </div>

    <!-- Real Image -->
    <img 
      :src="src" 
      :alt="alt" 
      :class="[props.class, isLoaded ? 'img-loaded opacity-100' : 'opacity-0']"
      class="transition-opacity duration-1000"
    />
    
    <!-- Deferred Loading Badge -->
    <div v-if="!isLoaded" class="absolute bottom-4 left-4 z-20">
        <span class="text-[8px] font-mono text-primary animate-pulse">OPTIMIZING ASSETS...</span>
    </div>
  </div>
</template>

