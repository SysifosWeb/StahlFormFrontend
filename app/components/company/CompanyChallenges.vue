<script setup>
import torno3Image from '~/assets/img/Torno_03.png'
</script>

<template>
  <section class="relative w-full bg-accent py-10 lg:py-20 overflow-hidden font-sans border-none">
    <!-- Industrial Background Image -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-multiply">
      <img :src="torno3Image" alt="Industrial Machine Background" class="w-full h-full object-cover grayscale contrast-125" />
    </div>

    <!-- Branding Geometric Shapes (Slide 1 Style) -->
    <div class="absolute -right-40 -bottom-40 w-[900px] h-full z-0 opacity-15 pointer-events-none transform rotate-45">
        <svg viewBox="0 0 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary w-full h-full">
            <path d="M100 300L800 700V900L100 500V300Z" fill="currentColor"/>
            <path d="M100 700L800 1100V1300L100 900V700Z" fill="currentColor" opacity="0.6"/>
        </svg>
    </div>
    
    <div class="custom-container relative z-10">
      <div class="text-center mb-10 lg:mb-20 px-4">
         <h2 class="text-4xl lg:text-6xl sf-bold text-primary uppercase tracking-tighter mb-4 leading-tight">
            Desafíos <span class="text-primary italic">Operacionales</span>
         </h2>
         <p class="text-[10px] uppercase tracking-[0.6em] text-light sf-bold">Identificación y Solución de Cuellos de Botella Críticos</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        
        <!-- Left Column: The Problem -->
        <div class="w-full lg:w-1/2 bg-white/10 backdrop-blur-md p-10 lg:p-16 rounded-3xl border border-white/20 hover:bg-white/20 transition-all relative group shadow-xl">
           <div class="absolute top-0 right-0 p-8">
              <svg class="w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45L20.22 19H3.78L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
           </div>
           
           <h3 class="text-xl sf-bold text-primary uppercase tracking-widest mb-10 border-b border-primary/20 pb-4 inline-block">Impactos Críticos</h3>
           
           <div class="space-y-12">
              <div class="flex items-start gap-6">
                 <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <div>
                    <h4 class="text-primary sf-bold uppercase tracking-widest mb-2 text-sm">Fallas No Programadas</h4>
                    <p class="text-xs text-secondary leading-relaxed">Costos de detención que pueden superar los USD $50,000 por hora en plantas de alta producción.</p>
                 </div>
              </div>

              <div class="flex items-start gap-6">
                 <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                 </div>
                 <div>
                    <h4 class="text-primary sf-bold uppercase tracking-widest mb-2 text-sm">Desgaste Acelerado</h4>
                    <p class="text-xs text-secondary leading-relaxed">Degradación de componentes por condiciones extremas de operación sin mantenimiento predictivo especializado.</p>
                 </div>
              </div>

              <div class="flex items-start gap-6">
                 <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                 </div>
                 <div>
                    <h4 class="text-primary sf-bold uppercase tracking-widest mb-2 text-sm">Incertidumbre Técnica</h4>
                    <p class="text-xs text-secondary leading-relaxed">Falta de trazabilidad y certificación en reparaciones críticas que comprometen la seguridad faena.</p>
                 </div>
              </div>
           </div>
        </div>

        <!-- Right Column: StahlForm Approach -->
        <div class="w-full lg:w-1/2 bg-white/10 backdrop-blur-md p-10 lg:p-16 rounded-3xl border border-white/20 hover:bg-white/20 transition-all relative group overflow-hidden shadow-xl">
           <h3 class="text-xl sf-bold text-primary uppercase tracking-widest mb-10 border-b border-primary/20 pb-4 inline-block">Solución StahlForm</h3>
           
           <div class="space-y-12">
              <div class="flex items-start gap-6">
                 <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.954 11.954 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                 </div>
                 <div>
                    <h4 class="text-primary sf-bold uppercase tracking-widest mb-2 text-sm">Estandarización de Calidad</h4>
                    <p class="text-xs text-secondary leading-relaxed">Protocolos de control rigurosos y materiales certificados según estándares internacionales.</p>
                 </div>
              </div>

              <div class="flex items-start gap-6">
                 <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.547 2.188a2 2 0 00.75 2.16l1.45 1.088a2 2 0 002.502-.24l1.503-1.503a2 2 0 00-.24-2.502l-1.088-1.45zm-14.856 0A2 2 0 015.594 14.881l2.387-.477a2 2 0 011.96 1.414l.547 2.188a2 2 0 01-.75 2.16l-1.45 1.088a2 2 0 01-2.502-.24L4.286 19.33a2 2 0 01.24-2.502l1.088-1.45z"></path></svg>
                 </div>
                 <div>
                    <h4 class="text-primary sf-bold uppercase tracking-widest mb-2 text-sm">Ingeniería Estructurada</h4>
                    <p class="text-xs text-secondary leading-relaxed">Metodologías de análisis de falla y rediseño activo para optimizar la resistencia y durabilidad.</p>
                 </div>
              </div>

              <div class="flex items-start gap-6">
                 <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                 </div>
                 <div>
                    <h4 class="text-primary sf-bold uppercase tracking-widest mb-2 text-sm">Auditoría y Certificación</h4>
                    <p class="text-xs text-secondary leading-relaxed">Soporte técnico documentas de trazabilidad técnica total en cada una de nuestras entregas.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
