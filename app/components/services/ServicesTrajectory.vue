<template>
  <section class="relative w-full bg-secondary py-12 lg:py-24 overflow-hidden font-sans border-none">
    <!-- Dossier Background (Slide 3 Style) -->
    <div class="absolute inset-0 z-0">
        <img src="~/assets/img/Kevin_torno.png" alt="Workshop Backdrop" class="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" />
        <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-transparent"></div>
    </div>
    
    <!-- Large Branding Shapes -->
    <div class="absolute -left-24 -bottom-24 w-[600px] h-[800px] z-0 opacity-10 pointer-events-none transform -rotate-12">
        <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-accent w-full h-full">
            <path d="M100 100L500 300V450L100 250V100Z" fill="currentColor"/>
            <path d="M50 350L450 550V700L50 500V350Z" fill="currentColor" opacity="0.6"/>
        </svg>
    </div>
    <div class="custom-container relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      
      <!-- Left Column: Approach Text -->
      <div class="w-full lg:w-1/2">
         <div class="flex items-center gap-4 mb-8">
            <div class="h-[2px] w-12 bg-accent"></div>
            <span class="text-xs sf-bold uppercase tracking-[0.4em] text-accent">Ingeniería de Clase Mundial</span>
         </div>
         
         <h2 class="text-4xl lg:text-7xl sf-bold text-white uppercase tracking-tighter leading-tight mb-8">
            Enfoque técnico <br/>
            <span class="text-accent italic">Personalizado</span>
         </h2>
         
         <div class="space-y-6 text-gray-300 sf-light leading-relaxed text-base lg:text-lg border-l border-accent/20 pl-8">
            <p>
               En <span class="text-primary sf-bold">StahlForm</span>, cada servicio está respaldado por un riguroso análisis de Ingeniería. No aplicamos soluciones genéricas; desarrollamos estrategias específicas para los desafíos operativos de cada cliente.
            </p>
            <p>
               Nuestra capacidad de integrar **fotogrametría, escaneo 3D y simulaciones de carga** nos permite entregar componentes con una precisión milimétrica, reduciendo los tiempos de parada y optimizando la vida útil de sus equipos críticos.
            </p>
         </div>
      </div>

      <!-- Right Column: Numerical Counters (White Clean Style) -->
      <div class="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center justify-center">
         
         <!-- Counter 1 -->
         <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <span class="text-5xl lg:text-7xl sf-bold text-accent tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">15</span>
            <p class="text-[10px] sf-bold text-gray-400 uppercase tracking-[0.2em]">Años de <br/> Trayectoria</p>
         </div>

         <!-- Counter 2 -->
         <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <span class="text-5xl lg:text-7xl sf-bold text-accent tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">500+</span>
            <p class="text-[10px] sf-bold text-gray-400 uppercase tracking-[0.2em]">Proyectos <br/> Exitosos</p>
         </div>

         <!-- Counter 3 -->
         <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <span class="text-5xl lg:text-7xl sf-bold text-accent tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">100%</span>
            <p class="text-[10px] sf-bold text-gray-400 uppercase tracking-[0.2em]">Trazabilidad <br/> Técnica</p>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
