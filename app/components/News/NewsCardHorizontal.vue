<script setup>
import ButtonNoticias from '@/components/ButtonNoticias.vue'

defineProps({
  newsData: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      src: '',
      date: '',
      title: '',
      deck: ''
    })
  }
})
</script>

<template>
  <NuxtLink
    :to="`/detalle-noticia/${newsData.id}`"
    class="block group w-full"
  >
    <article
      class="
        flex flex-col md:flex-row
        w-full
        bg-white
        overflow-hidden
        gap-0 md:gap-6
        h-auto md:h-[400px]
        border-none
      "
    >
      <!-- Imagen (50%) -->
      <div class="w-full md:w-1/2 h-[250px] md:h-full overflow-hidden">
        <img
          :src="newsData.src"
          :alt="newsData.title"
          class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <!-- Contenido (50%) -->
      <div
        class="
          flex flex-col
          p-6 md:p-4
          w-full md:flex-1
          gap-4
          justify-center
        "
      >
        <!-- Fecha -->
        <small class="flex items-center gap-1 text-medium font-light">
          <Icon name="heroicons:calendar-days" size="0.9rem" />
          {{ newsData.date }}
        </small>

        <!-- Título -->
        <h2
          class="
            font-bold
            text-medium text-xl lg:text-2xl
            transition-colors duration-300
            group-hover:text-detail-primary
            leading-tight
          "
        >
          {{ newsData.title }}
        </h2>

        <!-- Deck / Descripción -->
        <p class="text-medium text-sm md:text-base font-light leading-relaxed line-clamp-4 md:line-clamp-none">
          {{ newsData.deck }}
        </p>

        <!-- Botón (Visual only, no separate Link to avoid nesting) -->
        <div class="mt-2">
          <ButtonNoticias>
            Leer Más
          </ButtonNoticias>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

