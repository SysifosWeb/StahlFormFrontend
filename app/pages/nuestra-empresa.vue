<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestra empresa'
})

useHead({
  title: 'Nosotros | StahlForm',
  meta: [
    { name: 'description', content: 'Conoce más sobre la trayectoria, valores e infraestructura de nuestra empresa.' }
  ]
})
</script>

<template>
    <CompanyAboutHero />
    <CompanyPillars />
    <CompanyChallenges />
    <CompanyBenefits />
</template>