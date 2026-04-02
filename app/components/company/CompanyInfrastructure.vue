<script setup>
import ProjectCarousel from '~/components/ImagesCarrusel.vue'
import { Proyectos as projects } from '~/assets/data/proyectos.js'
</script>

<template>
  <section id="infraestructura" class="w-full py-12 lg:py-20 background-medium">
    <div class="container mx-auto px-4">

      <!-- Título -->
      <div class="relative mb-8">
        <h2 class="text-2xl lg:text-3xl font-bold text-dark">
          Proyectos Destacados
        </h2>
        <div class="absolute title-accent"></div>
      </div>

      <!-- Carousel -->
      <ProjectCarousel
        :images="projects"
        :items-per-view="2"
      />

    </div>
  </section>
</template>

