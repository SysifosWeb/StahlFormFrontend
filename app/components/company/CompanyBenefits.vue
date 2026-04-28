<template>
  <section class="relative w-full py-10 lg:py-20 overflow-hidden font-sans bg-[var(--background-medium)]">
    <!-- Cinematic Industrial Background (Acorde al Home) -->
    <!-- Branding Geometric Shapes (Slide 2 Style) -->
    <div class="absolute -left-32 -top-32 w-[800px] h-full z-0 opacity-10 pointer-events-none transform rotate-12">
        <svg viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary w-full h-full">
            <path d="M100 200L700 500V650L100 350V200Z" fill="currentColor"/>
            <path d="M100 500L700 800V950L100 650V500Z" fill="currentColor" opacity="0.6"/>
        </svg>
    </div>
    
    <div class="custom-container relative z-10 flex flex-col items-center">
      <div class="text-center mb-20 max-w-2xl">
         <h2 class="text-4xl lg:text-6xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight">
            Beneficios para su <br/>
            <span class="text-primary font-black">Operación</span>
         </h2>
         <p class="text-sm sf-light text-primary leading-relaxed tracking-wide">
            Optimizamos la rentabilidad de su activo mediante una gestión de ingeniería centrada en la confiabilidad mecánica.
         </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-px w-full overflow-hidden rounded-3xl border border-primary/5">
        
        <!-- Benefit 1: Continuidad Operacional -->
        <div class="background-medium p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-white/60 transition-all duration-700">
           <div class="mb-12 relative">
              <div class="absolute inset-0 bg-accent/30 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <svg class="w-24 h-24 text-primary relative z-10 transition-transform duration-700 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
           </div>
           <h3 class="text-2xl lg:text-3xl sf-bold text-primary uppercase tracking-tighter mb-6  transition-colors">Continuidad Operacional</h3>
           <p class="text-sm sf-light text-primary leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity">
              Soporte de ingeniería reactivo y preventivo diseñado para eliminar los cuellos de botella y asegurar el flujo constante de su producción en faena.
           </p>
           <div class="mt-12 h-[2px] w-12 bg-primary group-hover:w-24 group-hover:bg-accent transition-all duration-700"></div>
        </div>

        <!-- Benefit 2: Reducción de Fallas -->
        <div class="bg-dark-primary p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-primary/10 transition-all duration-700">
           <div class="mb-12 relative">
              <div class="absolute inset-0 bg-accent/30 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <svg class="w-24 h-24 text-accent relative z-10 transition-transform duration-700 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.954 11.954 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
           </div>
           <h3 class="text-2xl lg:text-3xl sf-bold text-accent uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors">Reducción de Fallas</h3>
           <p class="text-sm sf-light text-light leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity">
              Análisis proactivo de causa raíz y rediseño de componentes para mitigar averías recurrentes y extender los ciclos de mantenimiento de sus equipos.
           </p>
           <div class="mt-12 h-[2px] w-12 background-medium group-hover:w-24 group-hover:bg-accent transition-all duration-700"></div>
        </div>

      </div>

      <!-- Bottom Branding Technical Line -->
      <div class="mt-16 flex items-center gap-6 opacity-20">
         <div class="h-[1px] w-32 bg-gradient-to-l from-primary to-transparent"></div>
         <span class="text-[8px] sf-bold text-primary tracking-[1em] uppercase">High Performance Engineering</span>
         <div class="h-[1px] w-32 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
