<script setup>
import pipesImage from '~/assets/img/TuberiasAcero.png'
</script>

<template>
  <section class="relative w-full background-medium py-10 lg:py-20 overflow-hidden font-sans">
    <!-- Industrial Background Image -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img :src="pipesImage" alt="Industrial Pipes Background" class="w-full h-full object-cover opacity-40 grayscale contrast-125 brightness-110" />
      <div class="absolute inset-0 bg-[var(--background-medium)] opacity-70"></div>
    </div>

    <!-- Branding Geometric Shapes -->
    <div class="absolute -left-20 -top-20 w-[600px] h-full z-10 opacity-10 pointer-events-none transform -rotate-12">
        <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary w-full h-full">
            <path d="M100 100L500 300V450L100 250V100Z" fill="currentColor"/>
            <path d="M50 350L450 550V700L50 500V350Z" fill="currentColor" opacity="0.6"/>
        </svg>
    </div>

    <div class="custom-container relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Service Card 1: Terreno -->
        <div class="group relative bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent">
           <!-- Card Accent Line -->
           <div class="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700"></div>
           
           <div class="mb-10 flex items-center justify-between">
              <div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-primary/20 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                 <svg class="w-8 h-8 text-accent group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span class="text-[10px] sf-bold text-accent opacity-60 sf-bold tracking-[0.4em] uppercase">Unidad 01</span>
           </div>

           <h3 class="text-2xl sf-bold text-primary sf-bold uppercase tracking-tighter mb-8 group-hover:text-accent transition-colors">Servicio <br/> en Terreno</h3>
           
           <ul class="space-y-4">
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Evaluación y Diagnóstico
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Desmontaje y Armado técnico
              </li>
                 <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Alineamiento 
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Instalación y Montaje
              </li>
           </ul>
        </div>

        <!-- Service Card 2: Taller -->
        <div class="group relative bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent">
           <div class="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700"></div>
           
           <div class="mb-10 flex items-center justify-between">
              <div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-primary/20 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                 <svg class="w-8 h-8 text-accent group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <span class="text-[10px] sf-bold text-accent opacity-60 sf-bold tracking-[0.4em] uppercase">Unidad 02</span>
           </div>

           <h3 class="text-2xl sf-bold text-primary sf-bold uppercase tracking-tighter mb-8 group-hover:text-accent transition-colors">Servicio <br/> en Taller</h3>
           
           <ul class="space-y-4">
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Desarme e Inspección
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Reparación y Fabricación
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Control Dimensional
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Trazabilidad Completa
              </li>
           </ul>
        </div>

        <!-- Service Card 3: Ingenieria -->
        <div class="group relative bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent">
           <div class="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700"></div>
           
           <div class="mb-10 flex items-center justify-between">
              <div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-primary/20 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                 <svg class="w-8 h-8 text-accent group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span class="text-[10px] sf-bold text-accent opacity-60 sf-bold tracking-[0.4em] uppercase">Unidad 03</span>
           </div>

           <h3 class="text-2xl sf-bold text-primary sf-bold uppercase tracking-tighter mb-8 group-hover:text-accent transition-colors">Ingeniería Aplicada</h3>
           
           <ul class="space-y-4">
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Rediseño de Componentes.
              </li>
               <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Ingeniería inversa.
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Memorias de Cálculo.
              </li>
              <li class="flex items-center gap-3 text-primary sf-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                 Inspección por END
              </li>
           </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
