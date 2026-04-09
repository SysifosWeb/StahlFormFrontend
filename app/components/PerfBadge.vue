<script setup>
defineProps({
  label: {
    type: String,
    default: 'Global LCP Optimization'
  }
})
</script>

<template>
  <div class="perf-badge">
    {{ label }}
  </div>
</template>
