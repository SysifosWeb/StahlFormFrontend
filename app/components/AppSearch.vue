<script setup>
import { ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'desktop' // 'desktop' or 'mobile'
  }
})

const query = ref('')
const emit = defineEmits(['search'])

const buscar = () => {
  if (query.value.trim() !== "") {
    emit('search', query.value)
    navigateTo({
      path: '/buscar',
      query: { q: query.value.trim() }
    })
    query.value = ''
  }
}
</script>

<template>
  <form
    @submit.prevent="buscar"
    :class="[
      'flex items-center bg-white rounded-full transition-all duration-300 overflow-hidden',
      variant === 'desktop'
        ? 'px-3 py-1 gap-1 focus-within:shadow-md'
        : 'p-1 mb-8 w-full max-w-full shadow-lg border border-gray-100 focus-within:shadow-xl'
    ]"
  >
    <input
      v-model="query"
      type="text"
      placeholder="Buscar..."
      :class="[
        'outline-none bg-transparent placeholder:text-gray-400 text-dark font-light min-w-0',
        variant === 'desktop'
          ? 'px-2 py-1 text-sm'
          : 'flex-1 px-4 py-2.5 text-base'
      ]"
    />
    <button
      type="submit"
      :class="[
        'flex-shrink-0 bg-detail-primary text-white rounded-full flex items-center justify-center transition-all duration-200 hover:brightness-110 active:scale-95',
        variant === 'desktop' ? 'w-9 h-9' : 'w-11 h-11 shadow-sm'
      ]"
      aria-label="Realizar búsqueda"
    >
      <Icon 
        name="heroicons:magnifying-glass" 
        :size="variant === 'desktop' ? '1.1rem' : '1.4rem'" 
        class="transition-transform duration-300 group-hover:scale-110"
      />
    </button>
  </form>
</template>
