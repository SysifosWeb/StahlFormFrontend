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
    class="block group w-full h-full"
  >
    <article
      class="
        flex flex-col md:flex-row
        w-full h-full
        bg-white
        overflow-hidden
        shadow-lg
        rounded-xl
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      <!-- Imagen (50%) -->
      <div class="w-full md:w-1/2 h-[200px] md:h-full overflow-hidden">
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
          p-6
          w-full md:flex-1
          gap-3
          justify-between
        "
      >
        <div class="flex flex-col gap-3">
          <!-- Fecha -->
          <small class="flex items-center gap-2 text-sm text-gray-500 font-light">
            <Icon name="heroicons:calendar-days" size="1.1rem" />
            {{ newsData.date }}
          </small>

          <!-- Título -->
          <h2
            class="
              font-bold
              text-medium text-lg md:text-xl
              transition-colors duration-300
              group-hover:text-detail-primary
              leading-tight
              line-clamp-2
            "
          >
            {{ newsData.title }}
          </h2>
        </div>

        <!-- Botón (Visual only, no separate Link to avoid nesting) -->
        <div class="pt-2">
          <ButtonNoticias>
            Leer noticia
          </ButtonNoticias>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

