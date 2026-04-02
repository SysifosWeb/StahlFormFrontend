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
      title: ''
    })
  }
})
</script>

<template>
  <NuxtLink
    :to="`/detalle-noticia/${newsData.id}`"
    class="block w-full h-full"
  >
    <article
      class="
        group
        w-full h-full
        bg-white
        overflow-hidden
        shadow-lg
        rounded-xl
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        flex flex-col
      "
    >
      <!-- Imagen -->
      <img
        :src="newsData.src"
        :alt="newsData.title"
        class="w-full h-[300px] object-cover"
      />

      <!-- Contenido -->
      <div class="p-6 flex flex-col flex-grow justify-between gap-4">
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
              text-xl md:text-2xl
              text-medium
              leading-tight
              transition-colors duration-300
              group-hover:text-detail-primary
              line-clamp-3
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

