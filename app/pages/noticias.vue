<script setup>
import { Noticias } from '@/assets/data/noticias.js'

definePageMeta({
  layout: 'secondary',
  title: 'Noticias'
})

useHead({
  title: 'Noticias | FAREMIN',
  meta: [
    { name: 'description', content: 'Mantente informado sobre las últimas noticias, proyectos y actualizaciones de Maestranza FAREMIN.' }
  ]
})

// Obtener la última noticia para el componente principal
const mainNews = computed(() => {
  if (!Noticias || Noticias.length === 0) return null
  return Noticias[Noticias.length - 1]
})

// Obtener el resto de las noticias (excluyendo la última)
const otherNews = computed(() => {
  if (!Noticias || Noticias.length < 2) return []
  // Slice desde el principio hasta el penúltimo elemento, revertimos para mostrar las más recientes primero si se desea
  // O simplemente todas menos la última. 
  // "El resto" usualmente implica las anteriores.
  return Noticias.slice(0, Noticias.length - 1).reverse() 
})
</script>

<template>
  <div class="w-full pt-10">
    <NewsMainNews v-if="mainNews" :news="mainNews" />
    <NewsMoreNews v-if="otherNews.length > 0" :news="otherNews" />
  </div>
</template>