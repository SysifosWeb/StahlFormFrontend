<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestros Servicios'
})

useHead({
  title: 'Nuestros Servicios | StahlForm',
  meta: [
    { name: 'description', content: 'Ofrecemos servicios de mantenimiento ferroviario, industrial, mecánica y montaje de puentes grúa con los más altos estándares de calidad.' }
  ]
})
</script>
<template>
    <ServicesExperience />
    <ServicesMainCards />
    <ServicesSpecialization />
    <ServicesQuality />
</template>