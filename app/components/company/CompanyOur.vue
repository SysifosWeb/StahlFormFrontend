<script setup>
import cert1 from '~/assets/img/certificanciones/ISO14001.webp'
import cert2 from '~/assets/img/certificanciones/ISO45001.webp'
import cert3 from '~/assets/img/certificanciones/ISO9001.webp'
import cert4 from '~/assets/img/certificanciones/SKF.webp'
</script>
<template>
  <section class="container mx-auto px-6 py-12 lg:py-20 bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
      
      <!-- Content Column -->
      <div class="space-y-10 lg:pr-6">
        <header class="space-y-8 text-left">
          <div class="space-y-4">
            <h1 class="text-3xl lg:text-4xl font-bold text-dark tracking-tight leading-none uppercase">
              Nombre de <br class="hidden lg:block" /> 
              <span>tu Empresa</span>
            </h1>
            <div class="title-accent mb-4"></div>
          </div>

          <div class="flex flex-wrap items-center gap-x-2 lg:gap-x-3 gap-y-2 text-sm md:text-base font-medium text-medium tracking-wider uppercase">
            <div class="flex items-center gap-1">
              <span class="text-detail-primary">FAB</span>RICACIÓN
            </div>
            <span class="text-detail-primary opacity-30">•</span>
            <div class="flex items-center gap-1">
              <span class="text-detail-primary">R</span>EPARACIÓN
            </div>
            <span class="text-detail-primary opacity-30">•</span>
            <div class="flex items-center gap-1">
              <span class="text-detail-primary">MAG</span>AZINE
            </div>
            <span class="text-detail-primary opacity-30">•</span>
            <div class="flex items-center gap-1">
              <span class="text-detail-primary">SOL</span>UCIONES
            </div>
          </div>
        </header>

        <div class="space-y-8">
          <p class="text-base font-light text-medium leading-relaxed text-left max-w-2xl">
            Con <strong class="text-dark font-bold">+XX años de trayectoria</strong> en el sector, lideramos nuestra industria a través del diseño, fabricación y mantenimiento especializado. Nuestras instalaciones de <strong class="text-dark font-semibold">XX.000 m²</strong> integran tecnología de vanguardia y personal altamente calificado.
          </p>

          <!-- Certifications -->
          <div class="flex flex-wrap gap-10 pt-6 items-center border-t border-slate-100">
            <img :src="cert1" alt="Certificación 1" class="h-12 w-auto object-contain transition-all duration-300 contrast-[0.8] hover:contrast-100" />
            <img :src="cert2" alt="Certificación 2" class="h-12 w-auto object-contain transition-all duration-300 contrast-[0.8] hover:contrast-100" />
            <img :src="cert3" alt="Certificación 3" class="h-12 w-auto object-contain transition-all duration-300 contrast-[0.8] hover:contrast-100" />
            <img :src="cert4" alt="Certificación 4" class="h-10 w-auto object-contain transition-all duration-300 contrast-[0.8] hover:contrast-100" />
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="relative group">
        <!-- Accent decorative frame -->
        <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
        <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
        
        <div class="overflow-hidden rounded-sm shadow-2xl">
          <img
            src="~/assets/img/Instalaciones.webp"
            alt="Instalaciones de la empresa"
            class="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* High-end design spacing and typography */
</style>