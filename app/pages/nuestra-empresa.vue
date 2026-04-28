<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestra <span class="text-accent underline underline-offset-8">empresa</span>'
})

useHead({
  title: 'Nosotros | StahlForm',
  meta: [
    { name: 'description', content: 'Conoce nuestra historia, valores e infraestructura. Nos dedicamos a la mantención de maquinaria pesada, con soluciones críticas para minería.' }
  ]
})
</script>

<template>
    <CompanyAboutHero />
    <CompanyPillars />
    <CompanyChallenges />
    <CompanyBenefits />
</template>
