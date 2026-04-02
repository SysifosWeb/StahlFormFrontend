<template>
  <section class="relative w-full bg-[#0a0a0a] py-20 overflow-hidden font-sans border-t border-white/5">
    <!-- Sophisticated Technical Layers -->
    <div class="absolute inset-0 z-0 opacity-[0.04] pointer-events-none grayscale invert contrast-[0.9]">
       <img src="/img/blueprint_bg.png" alt="Technical Blueprint" class="w-full h-full object-cover" />
    </div>

    <!-- Dramatic Light Leak (Premium feel) -->
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

    <!-- Technical Grid Accent (More subtle) -->
    <div class="absolute inset-0 z-0 technical-grid opacity-[0.02] pointer-events-none"></div>
    
    <!-- Dark Vignette Overlay for focus -->
    <div class="absolute inset-0 z-0 dark-vignette"></div>

    <div class="custom-container relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-20">
         <div class="flex items-center justify-center gap-4 mb-8">
            <div class="h-[1px] w-12 bg-accent opacity-30"></div>
            <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">Ingeniería Avanzada</span>
            <div class="h-[1px] w-12 bg-accent opacity-30"></div>
         </div>
         <h2 class="text-4xl lg:text-7xl font-bold text-white uppercase tracking-tighter leading-none mb-8">
            Capacidad <br/>
            <span class="text-accent italic">Multidisciplinaria</span>
         </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
        
        <!-- Left Block: Sectores de Operación -->
        <div class="space-y-16">
           <div class="flex items-center gap-6 mb-12">
              <h3 class="text-xs font-bold text-white uppercase tracking-[0.3em] bg-white/5 py-2 px-4 rounded-full border border-white/10 italic">Sectores de Operación</h3>
           </div>
           
           <div class="grid grid-cols-2 gap-x-8 gap-y-16">
              <!-- Sector 1: Mining -->
              <div class="flex flex-col gap-6 group">
                 <div class="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent transition-all duration-500 relative">
                    <svg class="w-6 h-6 text-white group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <h4 class="text-sm font-bold text-white uppercase tracking-widest">Minería</h4>
              </div>

              <!-- Sector 2: Pumping -->
              <div class="flex flex-col gap-6 group">
                 <div class="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent transition-all duration-500 relative">
                    <svg class="w-6 h-6 text-white group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <h4 class="text-sm font-bold text-white uppercase tracking-widest">Sistemas <br/> de Bombeo</h4>
              </div>

              <!-- Sector 3: Heavy Machinery -->
              <div class="flex flex-col gap-6 group">
                 <div class="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent transition-all duration-500 relative">
                    <svg class="w-6 h-6 text-white group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <h4 class="text-sm font-bold text-white uppercase tracking-widest">Maquinaria <br/> Pesada</h4>
              </div>

              <!-- Sector 4: Industrial Infrastructure -->
              <div class="flex flex-col gap-6 group">
                 <div class="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent transition-all duration-500 relative">
                    <svg class="w-6 h-6 text-white group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <h4 class="text-sm font-bold text-white uppercase tracking-widest">Infraestructura <br/> Industrial</h4>
              </div>
           </div>
        </div>

        <!-- Right Block: Servicios Técnicos Especializados -->
        <div class="space-y-16">
           <div class="flex items-center gap-6 mb-12">
              <h3 class="text-xs font-bold text-white uppercase tracking-[0.3em] bg-white/5 py-2 px-4 rounded-full border border-white/10 italic">Servicios Técnicos Especializados</h3>
           </div>

           <div class="space-y-10">
              <!-- Service 1: Maintenance -->
              <div class="flex items-start gap-8 group">
                 <div class="mt-1 w-6 h-6 flex items-center justify-center text-accent">
                    <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                 </div>
                 <div>
                    <h5 class="text-xl font-bold text-white uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">Mantención Industrial</h5>
                    <p class="text-xs font-light text-gray-500 max-w-sm">Programas de mantenimiento preventivo y correctivo de alta fiabilidad.</p>
                 </div>
              </div>

              <!-- Service 2: END -->
              <div class="flex items-start gap-8 group">
                 <div class="mt-1 w-6 h-6 flex items-center justify-center text-accent">
                    <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                 </div>
                 <div>
                    <h5 class="text-xl font-bold text-white uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">Ensayos No Destructivos (END)</h5>
                    <p class="text-xs font-light text-gray-400 max-w-sm border-l border-accent pl-4">Líquidos penetrantes, partículas magnéticas y ultrasonido.</p>
                 </div>
              </div>

              <!-- Service 3: Metallographic -->
              <div class="flex items-start gap-8 group">
                 <div class="mt-1 w-6 h-6 flex items-center justify-center text-accent">
                    <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.574.345l-2.387-.477a2 2 0 00-2.25 1.17l-.551 1.102a2 2 0 00.222 2.144l.41.615a2 2 0 001.664.89h8.171a2 2 0 001.664-.89l.41-.615a2 2 0 00.222-2.144l-.551-1.102z"></path></svg>
                 </div>
                 <div>
                    <h5 class="text-xl font-bold text-white uppercase tracking-tighter mb-8 group-hover:text-accent transition-colors italic">Análisis Metalográficos</h5>
                 </div>
              </div>

              <!-- Service 4: Reports -->
              <div class="flex items-start gap-8 group">
                 <div class="mt-1 w-6 h-6 flex items-center justify-center text-accent">
                    <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                 </div>
                 <div>
                    <h5 class="text-xl font-bold text-white uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">Informes Técnicos</h5>
                    <p class="text-xs font-light text-gray-500 max-w-sm">Documentación detallada sobre integridad estructural y vida remanente.</p>
                 </div>
              </div>

           </div>
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
.dark-vignette {
    background: radial-gradient(circle at center, transparent 0%, #0a0a0a 80%);
}
</style>
