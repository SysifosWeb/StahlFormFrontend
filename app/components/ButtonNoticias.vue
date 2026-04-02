<script setup>
import { computed, resolveComponent } from 'vue'

const props = defineProps({
  newsId: {
    type: [String, Number],
    required: false
  },
  to: {
    type: String,
    required: false
  }
})

// Resolve the final link destination
const linkTo = computed(() => {
  if (props.to) return props.to
  if (props.newsId) {
    return props.newsId === 'all' ? '/noticias' : `/detalle-noticia/${props.newsId}`
  }
  return null
})

// Resolve the correct component: NuxtLink o div
const tag = computed(() =>
  linkTo.value ? resolveComponent('NuxtLink') : 'div'
)
</script>

<template>
  <component
    :is="tag"
    :to="linkTo"
    class="
      inline-flex items-center gap-2
      bg-detail-primary text-white font-medium
      px-6 py-2 mt-1
      rounded-lg
      shadow-md
      transition-all duration-300 ease-in-out
      hover:bg-detail-quaternary hover:shadow-lg
      active:scale-95
      cursor-pointer
    "
  >
    <slot/>
    <Icon name="heroicons:arrow-right" size="1.1rem" />
  </component>
</template>

