<template>
  <section class="relative w-full bg-[#fcfcfc] py-10 lg:py-20 overflow-hidden font-sans border-t border-gray-100">
    <!-- Premium Technical Layering -->
    <div class="absolute inset-x-0 top-0 h-full premium-glow"></div>
    <div class="absolute inset-0 z-0 technical-grid opacity-[0.02] pointer-events-none"></div>
    
    <!-- Blueprint Detail Accent -->
    <div class="absolute -left-32 -bottom-32 w-1/2 h-full opacity-[0.05] pointer-events-none grayscale -rotate-12">
       <img src="/img/blueprint_bg.png" alt="" class="w-full h-full object-contain" />
    </div>

    <!-- Technical Measure Marks -->
    <div class="absolute right-10 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

    <div class="custom-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Service Card 1: Terreno -->
        <div class="group relative bg-white p-10 rounded-3xl border border-gray-100 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
           <!-- Card Accent Line -->
           <div class="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
           
           <div class="mb-10 flex items-center justify-between">
              <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                 <svg class="w-8 h-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span class="text-[10px] font-bold text-gray-300 tracking-[0.4em] uppercase">Unidad 01</span>
           </div>

           <h3 class="text-2xl font-bold text-secondary uppercase tracking-tighter mb-8 group-hover:text-primary transition-colors">Servicio <br/> en Terreno</h3>
           
           <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Evaluación y Diagnóstico
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Desmontaje y Armado técnico
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Instalación en Faena
              </li>
           </ul>
        </div>

        <!-- Service Card 2: Taller -->
        <div class="group relative bg-white p-10 rounded-3xl border border-gray-100 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
           <div class="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
           
           <div class="mb-10 flex items-center justify-between">
              <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                 <svg class="w-8 h-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <span class="text-[10px] font-bold text-gray-300 tracking-[0.4em] uppercase">Unidad 02</span>
           </div>

           <h3 class="text-2xl font-bold text-secondary uppercase tracking-tighter mb-8 group-hover:text-primary transition-colors">Servicio <br/> en Taller</h3>
           
           <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Desarme e Inspección
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Reparación y Fabricación
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Control Dimensional
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Trazabilidad Completa
              </li>
           </ul>
        </div>

        <!-- Service Card 3: Ingeniería -->
        <div class="group relative bg-white p-10 rounded-3xl border border-gray-100 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
           <div class="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
           
           <div class="mb-10 flex items-center justify-between">
              <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                 <svg class="w-8 h-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span class="text-[10px] font-bold text-gray-300 tracking-[0.4em] uppercase">Unidad 03</span>
           </div>

           <h3 class="text-2xl font-bold text-secondary uppercase tracking-tighter mb-8 group-hover:text-primary transition-colors">Ingeniería <br/> Aplicada</h3>
           
           <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Rediseño de Componentes
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Memorias de Cálculo
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600 font-light border-b border-gray-100 pb-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 Puesta en Marcha
              </li>
           </ul>
        </div>

      </div>
    </div>
  </section>
</template>
<style scoped>
.technical-grid {
    background-image: radial-gradient(var(--accent) 1px, transparent 0);
    background-size: 60px 60px;
}
.premium-glow {
    background: radial-gradient(circle at 50% 0%, white 0%, transparent 100%);
}
</style>
