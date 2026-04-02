<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="w-full flex justify-center bg-white">
    <div class="max-w-7xl w-full px-4 py-10">
      <NewsCardHorizontal :newsData="news" />
    </div>
  </section>
</template>
