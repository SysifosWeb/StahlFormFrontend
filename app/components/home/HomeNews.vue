<script setup>
import { Noticias } from '@/assets/data/noticias.js'
import { computed } from 'vue'


// Obtener las últimas 3 noticias
const ultimasNoticias = computed(() => {
  // Tomar las últimas 3 noticias del array
  return Noticias.slice(-3).reverse()
})

// La noticia más reciente (primera después de reverse)
const noticiaDestacada = computed(() => ultimasNoticias.value[0])

// Las dos noticias anteriores
const noticiasSecundarias = computed(() => ultimasNoticias.value.slice(1, 3))
</script>
<template>
  <section class="background-medium py-10 md:py-16 lg:py-20">
    <div class="container mx-auto px-4">

      <div class="mb-6 md:mb-10">
        <h2 class="mb-1 text-xl sm:text-2xl lg:text-3xl font-bold text-dark tracking-wide">
          Noticias
        </h2>
        <div class="title-accent"></div>
      </div>

      <!-- Contenido -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <!-- Card vertical (izquierda) - Noticia más reciente -->
        <div class="flex justify-center lg:justify-start">
          <HomeCardVertical
            :newsData="noticiaDestacada"
          />
        </div>

        <!-- Cards horizontales (derecha) - Dos noticias anteriores -->
        <div class="flex flex-col gap-6">
          <HomeCardHorizontal
            v-for="news in noticiasSecundarias"
            :key="news.id"
            :newsData="news"
          />

          <!-- Ver todas las noticias -->
          <div class="mt-auto">
            <ButtonNoticias to="/noticias">
              Ver todas las noticias
            </ButtonNoticias>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
