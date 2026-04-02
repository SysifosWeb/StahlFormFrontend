<script setup>
import LogoCarousel from '~/components/LogoCaroucel.vue'

// Importar imágenes directamente
import cert1 from '~/assets/img/certificanciones/Desafio10X.webp'
import cert2 from '~/assets/img/certificanciones/ISO14001.webp'
import cert3 from '~/assets/img/certificanciones/ISO45001.webp'
import cert4 from '~/assets/img/certificanciones/ISO9001.webp'
import cert5 from '~/assets/img/certificanciones/ReconocimientoSKF.webp'
import cert6 from '~/assets/img/certificanciones/SICEP.webp'
import cert7 from '~/assets/img/certificanciones/SKF.webp'

// Crear array de certificaciones con imágenes importadas
const certifications = [
  { title: 'Certificación 1', src: cert1 },
  { title: 'Certificación 2', src: cert2 },
  { title: 'Certificación 3', src: cert3 },
  { title: 'Certificación 4', src: cert4 },
  { title: 'Certificación 5', src: cert5 },
  { title: 'Certificación 6', src: cert6 },
  { title: 'Certificación 7', src: cert7 },
]
</script>

<template>
    <section class="background-medium py-10 md:py-16 lg:py-20">
        <div class="container mx-auto px-4">
            <!-- Título con acento -->
            <div class="mb-6 md:mb-10">
                <h2 class="mb-1 text-xl sm:text-2xl lg:text-3xl font-bold text-dark tracking-wide">
                    Certificaciones
                </h2>
                <div class="title-accent"></div>
            </div>

            <!-- Carousel -->
            <div class="pt-2 pb-2">
                <LogoCarousel :images="certifications" :items-visible="5" :mobile-items-visible="2" />
            </div>
        </div>
    </section>
</template>
