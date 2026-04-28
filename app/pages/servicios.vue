<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Nuestros <span class="text-accent underline underline-offset-8">Servicios</span>'
})

useSeoMeta({
  title: 'Servicios Industriales | Mantención en Terreno y Taller — StahlForm',
  description: 'Servicios especializados de mantención industrial: servicio en terreno, reparación en taller e ingeniería aplicada. Evaluación, diagnóstico, fabricación de componentes, ensayos END y control de calidad para minería y maquinaria pesada en Chile.',
  ogTitle: 'Servicios Industriales | Mantención en Terreno y Taller — StahlForm',
  ogDescription: 'Mantención en terreno, reparación en taller e ingeniería aplicada para minería y maquinaria pesada. Soluciones con trazabilidad técnica completa.',
  ogUrl: 'https://www.stahlform.cl/servicios',
  ogType: 'website',
  twitterTitle: 'Servicios Industriales | StahlForm PyC',
  twitterDescription: 'Mantención en terreno, reparación en taller e ingeniería aplicada para minería y maquinaria pesada.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.stahlform.cl/servicios' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Mantención Industrial y Mecánica Pesada',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'StahlForm PyC Ltda.',
          'url': 'https://www.stahlform.cl'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Chile'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Servicios Industriales StahlForm',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Servicio en Terreno',
                'description': 'Evaluación, diagnóstico, desmontaje, alineamiento e instalación directa en faena minera.'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Servicio en Taller',
                'description': 'Desarme, inspección, reparación y fabricación de componentes con trazabilidad y control dimensional.'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Ingeniería Aplicada',
                'description': 'Rediseño de componentes, ingeniería inversa, memorias de cálculo e inspección por END.'
              }
            }
          ]
        }
      })
    }
  ]
})
</script>

<template>
  <ServicesTrajectory />
  <ServicesMainCards />
  <ServicesSpecialization />
  <ServicesQuality />
</template>
