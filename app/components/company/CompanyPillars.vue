<template>
  <section class="relative w-full bg-white py-24 overflow-hidden font-sans">
    <!-- Full-width Blueprint Background -->
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <img src="/img/blueprint_bg.png" alt="Engineering Blueprint" class="w-full h-full object-cover" />
    </div>

    <!-- Subtle technical grid -->
    <div class="absolute inset-0 z-0 technical-grid opacity-5 pointer-events-none"></div>
    
    <div class="custom-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        <!-- Pillar 01: Diagnóstico Preciso -->
        <div class="group p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/5 bg-white/40">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <svg class="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-primary/10"></div>
          </div>
          <h3 class="text-xl font-bold text-secondary uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-primary text-[10px] tracking-[0.4em] mb-2 font-bold italic">Metodología 01</span>
             Diagnóstico Preciso
          </h3>
          <p class="text-sm font-light text-gray-500 leading-relaxed uppercase tracking-wider">
             Evaluación basada en fotogrametría e inspección técnica avanzada sin errores.
          </p>
        </div>

        <!-- Pillar 02: Ingeniería Aplicada -->
        <div class="group p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/5 bg-white/40">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <svg class="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-primary/10"></div>
          </div>
          <h3 class="text-xl font-bold text-secondary uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-primary text-[10px] tracking-[0.4em] mb-2 font-bold italic">Metodología 02</span>
             Ingeniería Aplicada
          </h3>
          <p class="text-sm font-light text-gray-500 leading-relaxed uppercase tracking-wider">
             Cálculo técnico y diseño de ingeniería para elevar el rendimiento operativo.
          </p>
        </div>

        <!-- Pillar 03: Trazabilidad Técnica -->
        <div class="group p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/5 bg-white/40">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <svg class="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-primary/10"></div>
          </div>
          <h3 class="text-xl font-bold text-secondary uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-primary text-[10px] tracking-[0.4em] mb-2 font-bold italic">Metodología 03</span>
             Trazabilidad Técnica
          </h3>
          <p class="text-sm font-light text-gray-500 leading-relaxed uppercase tracking-wider">
             Control digital total y certificación de procesos para la continuidad faena.
          </p>
        </div>

        <!-- Pillar 04: Seguridad -->
        <div class="group p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/5 bg-white/40">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <svg class="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.954 11.954 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-primary/10"></div>
          </div>
          <h3 class="text-xl font-bold text-secondary uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-primary text-[10px] tracking-[0.4em] mb-2 font-bold italic">Metodología 04</span>
             Seguridad
          </h3>
          <p class="text-sm font-light text-gray-500 leading-relaxed uppercase tracking-wider">
             Prioridad en la integridad de las personas e ingeniería exenta de riesgos.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.technical-grid {
    background-image: radial-gradient(var(--primary) 1px, transparent 0);
    background-size: 40px 40px;
}
</style>
