<script setup>
import LogoCarousel from '~/components/LogoCaroucel.vue'

// Importar imágenes directamente
import cliente1 from '~/assets/img/clientes/candelaria.webp'
import cliente2 from '~/assets/img/clientes/capstone.webp'
import cliente3 from '~/assets/img/clientes/caserones.webp'
import cliente4 from '~/assets/img/clientes/centinela.webp'
import cliente5 from '~/assets/img/clientes/cmp.webp'
import cliente6 from '~/assets/img/clientes/codelco.webp'
import cliente7 from '~/assets/img/clientes/collahuasi.webp'
import cliente8 from '~/assets/img/clientes/goldfields.webp'
import cliente9 from '~/assets/img/clientes/guacolda.webp'
import cliente10 from '~/assets/img/clientes/kinross.webp'
import cliente11 from '~/assets/img/clientes/lomas bayas.webp'
import cliente12 from '~/assets/img/clientes/lospelambres.webp'
import cliente13 from '~/assets/img/clientes/meridian.webp'
import cliente14 from '~/assets/img/clientes/sqm.webp'
import cliente15 from '~/assets/img/clientes/teck.webp'
import cliente16 from '~/assets/img/clientes/BHP.webp'

// Crear array de clientes con imágenes importadas
const clients = [
  { title: 'Cliente 1', src: cliente1 },
  { title: 'Cliente 2', src: cliente2 },
  { title: 'Cliente 3', src: cliente3 },
  { title: 'Cliente 4', src: cliente4 },
  { title: 'Cliente 5', src: cliente5 },
  { title: 'Cliente 6', src: cliente6 },
  { title: 'Cliente 7', src: cliente7 },
  { title: 'Cliente 8', src: cliente8 },
  { title: 'Cliente 9', src: cliente9 },
  { title: 'Cliente 10', src: cliente10 },
  { title: 'Cliente 11', src: cliente11 },
  { title: 'Cliente 12', src: cliente12 },
  { title: 'Cliente 13', src: cliente13 },
  { title: 'Cliente 14', src: cliente14 },
  { title: 'Cliente 15', src: cliente15 },
  { title: 'Cliente 16', src: cliente16 },
]
</script>

<template>
    <section class="bg-secondary py-16 md:py-24 border-t border-white/5">
        <div class="custom-container">
            <!-- Título con acento -->
            <div class="mb-12 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-light uppercase tracking-[0.2em] mb-4">
                    Clientes que <span class="text-accent underline decoration-2 underline-offset-8">Confían en nosotros</span>
                </h2>
            </div>
            <!-- Carousel -->
            <div class="pt-8">
                <LogoCarousel :images="clients" :items-visible="5" />
            </div>
        </div>
    </section>
</template>
