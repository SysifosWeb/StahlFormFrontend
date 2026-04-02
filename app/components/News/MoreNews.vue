<script setup>
defineProps({
  news: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="w-full bg-medium">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <NewsCardVertical
          v-for="(noticia, index) in news"
          :key="noticia.id ?? index"
          :newsData="{
            id: noticia.id,
            src: noticia.src,
            date: noticia.date,
            title: noticia.title,
          }"
        />
      </div>
    </div>
  </section>
</template>
