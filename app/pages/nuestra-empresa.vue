<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestra <span class="text-accent font-black italic ">empresa</span>'
})

useSeoMeta({
  title: 'Nuestra Empresa | Historia, Valores e Infraestructura — StahlForm',
  description: 'Conoce a StahlForm PyC: más de 15 años de experiencia en ingeniería mecánica y mantención de maquinaria pesada para minería. Socio estratégico técnico con trazabilidad 100%, infraestructura de clase mundial desde Coquimbo, Chile.',
  ogTitle: 'Nuestra Empresa | StahlForm PyC — Ingeniería Mecánica desde Coquimbo',
  ogDescription: 'Más de 15 años co-creando soluciones de ingeniería para la gran minería. Trazabilidad técnica 100% y precisión mecánica de clase mundial.',
  ogUrl: 'https://www.stahlform.cl/nuestra-empresa',
  ogType: 'website',
  twitterTitle: 'Nuestra Empresa | StahlForm PyC',
  twitterDescription: 'Más de 15 años de experiencia en ingeniería mecánica y mantención de maquinaria pesada para minería.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.stahlform.cl/nuestra-empresa' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'Nuestra Empresa — StahlForm PyC',
        'description': 'Historia, valores e infraestructura de StahlForm PyC, empresa de ingeniería mecánica en la Región de Coquimbo.',
        'mainEntity': {
          '@type': 'Organization',
          'name': 'StahlForm PyC Ltda.',
          'foundingDate': '2011',
          'url': 'https://www.stahlform.cl',
          'numberOfEmployees': {
            '@type': 'QuantitativeValue',
            'value': '50+'
          },
          'knowsAbout': [
            'Ingeniería Mecánica',
            'Mantención de Maquinaria Pesada',
            'Mecanizado Industrial',
            'Soldadura Especializada',
            'Ensayos No Destructivos',
            'Ingeniería Inversa'
          ]
        }
      })
    }
  ]
})
</script>

<template>
  <CompanyAboutHero />
  <CompanyPillars />
  <CompanyChallenges />
  <CompanyBenefits />
</template>
