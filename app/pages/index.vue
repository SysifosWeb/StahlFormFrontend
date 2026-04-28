<script setup>
useSeoMeta({
  title: 'StahlForm | Ingeniería y Mantención Industrial en Chile — Minería y Maquinaria Pesada',
  description: 'StahlForm PyC: líder en soluciones de ingeniería mecánica, mantención de maquinaria pesada y servicios industriales para minería en la Región de Coquimbo, Chile. Trazabilidad técnica, ensayos END y calidad garantizada.',
  ogTitle: 'StahlForm | Ingeniería y Mantención Industrial en Chile',
  ogDescription: 'Soluciones técnicas de ingeniería para minería, maquinaria pesada y plantas industriales. Operaciones críticas con trazabilidad garantizada desde Coquimbo, Chile.',
  ogUrl: 'https://www.stahlform.cl/',
  ogType: 'website',
  twitterTitle: 'StahlForm | Ingeniería y Mantención Industrial en Chile',
  twitterDescription: 'Soluciones técnicas de ingeniería para minería, maquinaria pesada y plantas industriales. Operaciones críticas con trazabilidad garantizada.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.stahlform.cl/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'StahlForm PyC Ltda.',
        'description': 'Empresa de ingeniería mecánica y mantención industrial especializada en minería y maquinaria pesada.',
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
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -29.9059,
          'longitude': -71.2501
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Chile'
        },
        'sameAs': [
          'https://www.instagram.com/stahlform_pyc',
          'https://www.facebook.com/share/18F7fTkJD5/',
          'https://www.tiktok.com/@maestranza_stahlform'
        ]
      })
    }
  ]
})
</script>

<template>
  <HomeValue />
  <HomeBusinessUnits />
  <HomeTrust />
  <HomeBento />
  <HomeBanner />
</template>
