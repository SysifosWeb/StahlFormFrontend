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
    class="block"
  >
    <article
      class="
        group
        w-full
        max-w-sm
        mx-auto
        h-full
        bg-white
        overflow-hidden
        shadow-md
        rounded-lg
        transition-all duration-300
        hover:scale-[1.03] hover:shadow-xl
        flex flex-col
      "
    >
      <!-- Imagen -->
      <img
        :src="newsData.src"
        :alt="newsData.title"
        class="w-full h-[200px] object-cover"
      />

      <!-- Contenido -->
      <div class="p-4 flex flex-col flex-grow justify-between">
        <div class="flex flex-col gap-2">
          <small class="flex items-center gap-1 text-sm text-gray-500 font-light">
            <Icon name="heroicons:calendar-days" size="1rem" />
            {{ newsData.date }}
          </small>

          <h3
            class="
              font-bold text-medium text-base leading-tight
              transition-colors duration-300
              group-hover:text-detail-primary
            "
          >
            {{ newsData.title }}
          </h3>
        </div>

        <!-- Botón (Visual only, no separate Link to avoid nesting) -->
        <div class="pt-3">
          <ButtonNoticias>
            Leer Más
          </ButtonNoticias>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

