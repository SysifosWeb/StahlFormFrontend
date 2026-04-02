<script setup>
import ProjectCarousel from '~/components/ImagesCarrusel.vue'
import { Proyectos as projects } from '~/assets/data/proyectos.js'
</script>

<template>
  <section id="proyectos" class="bg-secondary py-16 md:py-24">
    <div class="custom-container">

      <!-- Título -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-light uppercase tracking-widest mb-2">
          Proyectos <span class="text-neon">DESTACADOS</span>
        </h2>
        <div class="title-accent"></div>
      </div>

      <!-- Carousel -->
      <div class="pt-8 bg-white/5 p-8 rounded-3xl border border-white/5">
        <ProjectCarousel
          :images="projects"
          :items-per-view="2"
        />
      </div>

    </div>
  </section>
</template>