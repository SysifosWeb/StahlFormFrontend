<template>
  <section class="relative w-full bg-[#fafafa] py-32 overflow-hidden font-sans border-t border-gray-100">
    <!-- Sophisticated Technical Layers -->
    <div class="absolute inset-x-0 top-0 h-full premium-glow"></div>
    
    <!-- Fine Technical Grid -->
    <div class="absolute inset-0 z-0 technical-grid opacity-[0.03] pointer-events-none"></div>

    <!-- Blueprint Trace (Strategic placement) -->
    <div class="absolute -right-20 top-20 w-1/3 h-full opacity-[0.06] pointer-events-none grayscale">
       <img src="/img/blueprint_bg.png" alt="" class="w-full h-full object-contain" />
    </div>

    <!-- Side Precision Measure Line -->
    <div class="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary/10 to-transparent flex flex-col justify-between py-20 px-2">
       <div v-for="i in 10" :key="i" class="w-2 h-[1px] bg-primary/20"></div>
    </div>

    <div class="custom-container relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      
      <!-- Left Column: Approach Text -->
      <div class="w-full lg:w-1/2">
         <div class="flex items-center gap-4 mb-8">
            <div class="h-[2px] w-12 bg-primary"></div>
            <span class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Ingeniería de Clase Mundial</span>
         </div>
         
         <h2 class="text-3xl lg:text-6xl font-bold text-secondary uppercase tracking-tighter leading-tight mb-8">
            Enfoque técnico <br/>
            <span class="text-primary italic">Personalizado</span>
         </h2>
         
         <div class="space-y-6 text-gray-600 font-light leading-relaxed text-base lg:text-lg">
            <p>
               En <span class="text-primary font-bold">StahlForm</span>, cada servicio está respaldado por un riguroso análisis de ingeniería. No aplicamos soluciones genéricas; desarrollamos estrategias específicas para los desafíos operativos de cada cliente.
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
            <span class="text-5xl lg:text-7xl font-bold text-primary tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">15</span>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Años de <br/> Trayectoria</p>
         </div>

         <!-- Counter 2 -->
         <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <span class="text-5xl lg:text-7xl font-bold text-primary tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">500+</span>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Proyectos <br/> Exitosos</p>
         </div>

         <!-- Counter 3 -->
         <div class="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <span class="text-5xl lg:text-7xl font-bold text-primary tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">100%</span>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Trazabilidad <br/> Técnica</p>
         </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.technical-grid {
    background: radial-gradient(var(--primary) 1px, transparent 0);
    background-size: 50px 50px;
}
.premium-glow {
    background: radial-gradient(circle at 50% 0%, white 0%, transparent 100%);
}
</style>
