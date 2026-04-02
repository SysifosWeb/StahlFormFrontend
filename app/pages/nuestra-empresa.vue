<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestra empresa'
})

useHead({
  title: 'Nosotros | Mi Empresa',
  meta: [
    { name: 'description', content: 'Conoce más sobre la trayectoria, valores e infraestructura de nuestra empresa.' }
  ]
})
</script>

<template>
    <CompanyOur/>
    <CompanyValue/>
    <CompanyCommitment/>
    <CompanySustainability/>
    <CompanyQuality/>
</template>