<script setup>
import pipesImage from '~/assets/img/TuberiasAcero.png'
</script>

<template>
  <section class="relative w-full bg-primary pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden font-sans z-10 border-none">
    <!-- Industrial Background Image -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-[0.12] mix-blend-overlay">
      <img :src="pipesImage" alt="Industrial Pipes Background" class="w-full h-full object-cover grayscale" />
    </div>

    <!-- Branding Geometric Shapes (Slide 1 Style inspired) -->
    <div class="absolute -right-32 -top-32 w-[800px] h-full z-0 opacity-10 pointer-events-none transform rotate-12">
        <svg viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-accent w-full h-full">
            <path d="M100 200L700 500V650L100 350V200Z" fill="currentColor"/>
            <path d="M100 500L700 800V950L100 650V500Z" fill="currentColor" opacity="0.6"/>
        </svg>
    </div>
    
    <div class="custom-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        <!-- Pillar 01: Diagnóstico Preciso -->
        <div class="group p-8 rounded-2xl transition-all duration-500 bg-white/5 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <svg class="w-7 h-7 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-accent/20"></div>
          </div>
          <h3 class="text-xl sf-bold text-white sf-bold uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-accent text-[10px] tracking-[0.4em] mb-2 sf-bold italic">Metodología 01</span>
             Diagnóstico Preciso
          </h3>
          <p class="text-sm sf-light text-gray-400 leading-relaxed uppercase tracking-wider">
             Evaluación basada en fotogrametría e inspección técnica avanzada sin errores.
          </p>
        </div>

        <!-- Pillar 02: Ingeniería Aplicada -->
        <div class="group p-8 rounded-2xl transition-all duration-500 bg-white/5 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <svg class="w-7 h-7 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-accent/20"></div>
          </div>
          <h3 class="text-xl sf-bold text-white sf-bold uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-accent text-[10px] tracking-[0.4em] mb-2 sf-bold italic">Metodología 02</span>
             Ingeniería Aplicada
          </h3>
          <p class="text-sm sf-light text-gray-400 leading-relaxed uppercase tracking-wider">
             Cálculo técnico y diseño de ingeniería para elevar el rendimiento operativo.
          </p>
        </div>

        <!-- Pillar 03: Trazabilidad Técnica -->
        <div class="group p-8 rounded-2xl transition-all duration-500 bg-white/5 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <svg class="w-7 h-7 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-accent/20"></div>
          </div>
          <h3 class="text-xl sf-bold text-white sf-bold uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-accent text-[10px] tracking-[0.4em] mb-2 sf-bold italic">Metodología 03</span>
             Trazabilidad Técnica
          </h3>
          <p class="text-sm sf-light text-gray-400 leading-relaxed uppercase tracking-wider">
             Control digital total y certificación de procesos para la continuidad faena.
          </p>
        </div>

        <!-- Pillar 04: Seguridad -->
        <div class="group p-8 rounded-2xl transition-all duration-500 bg-white/5 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
          <div class="mb-10 flex items-center gap-4">
             <div class="w-14 h-14 rounded-xl border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <svg class="w-7 h-7 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.954 11.954 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
             </div>
             <div class="h-[1px] flex-grow bg-accent/20"></div>
          </div>
          <h3 class="text-xl sf-bold text-white sf-bold uppercase tracking-tighter mb-4 flex flex-col">
             <span class="text-accent text-[10px] tracking-[0.4em] mb-2 sf-bold italic">Metodología 04</span>
             Seguridad
          </h3>
          <p class="text-sm sf-light text-gray-400 leading-relaxed uppercase tracking-wider">
             Prioridad en la integridad de las personas e ingeniería exenta de riesgos.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
