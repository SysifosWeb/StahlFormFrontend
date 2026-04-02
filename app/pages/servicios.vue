<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestros Servicios'
})

useHead({
  title: 'Nuestros Servicios | StahlForm',
  meta: [
    { name: 'description', content: 'Servicios especializados de StahlForm en ingeniería aplicada, mantención en terreno y taller. Soluciones críticas para minería y maquinaria pesada, respaldadas por informes técnicos, ensayos END y riguroso control de calidad.' }
  ]
})
</script>

<template>
    <ServicesTrajectory />
    <ServicesMainCards />
    <ServicesSpecialization />
    <ServicesQuality />
</template>