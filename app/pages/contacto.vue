<script setup>
definePageMeta({
  layout: 'secondary',
  title: 'Conversemos'
})

useSeoMeta({
  title: 'Contacto | Solicite Evaluación Técnica — StahlForm PyC',
  description: 'Contacte a StahlForm PyC para servicios de ingeniería mecánica, mantención industrial y reparación de maquinaria pesada. Respuesta técnica en menos de 24 horas. Ubicados en Av. Panorámica 910, La Serena, Coquimbo, Chile.',
  ogTitle: 'Contacto | Solicite Evaluación Técnica — StahlForm PyC',
  ogDescription: 'Inicie su proyecto con StahlForm. Evaluación técnica preliminar, asesoría especializada y respuesta en menos de 24 horas.',
  ogUrl: 'https://www.stahlform.cl/contacto',
  ogType: 'website',
  twitterTitle: 'Contacto | StahlForm PyC',
  twitterDescription: 'Inicie su proyecto con StahlForm. Evaluación técnica y respuesta en menos de 24 horas.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.stahlform.cl/contacto' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contacto — StahlForm PyC',
        'description': 'Formulario de contacto para solicitar evaluación técnica de activos industriales.',
        'mainEntity': {
          '@type': 'LocalBusiness',
          'name': 'StahlForm PyC Ltda.',
          'url': 'https://www.stahlform.cl',
          'telephone': '+56944539842',
          'email': 'kpasten@stahlform.cl',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Av. Panorámica 910, Cond. Nova Florida',
            'addressLocality': 'La Serena',
            'addressRegion': 'Coquimbo',
            'addressCountry': 'CL'
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '08:00',
            'closes': '18:00'
          }
        }
      })
    }
  ]
})
</script>

<template>
  <ContactForm />
</template>
