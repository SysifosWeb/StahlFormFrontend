<script setup>
import recurso38 from '~/assets/img/Recurso 38 (2).png'
</script>

<template>
  <section class="relative w-full bg-accent py-8 lg:py-12 overflow-hidden font-sans">

    <!-- Background Layer -->
    <div class="absolute inset-0 z-0 bg-accent overflow-hidden">
      <!-- Faint industrial image on left (desktop only) -->
      <img :src="recurso38" class="hidden lg:block absolute top-0 left-0 w-full lg:w-[60%] h-full object-cover opacity-[0.07] mix-blend-multiply grayscale" />

      <!-- Large primary swooping curve (desktop only) -->
      <svg class="hidden lg:block absolute top-0 right-0 w-full lg:w-[65%] h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M 100,0 L 35,0 C 5,35 35,65 0,100 L 100,100 Z" fill="currentColor" />
      </svg>

      <!-- Subtle accent glow on right to soften curve edge -->
      <div class="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[500px] bg-accent/10 blur-[80px] pointer-events-none"></div>
    </div>

    <!-- Content -->
    <div class="custom-container relative z-10">

      <!-- Two-column grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-start">

        <!-- LEFT: Header & Sectores de Operación -->
        <div class="lg:pr-16 flex flex-col">
          
          <!-- Section Header -->
          <div class="mb-10 lg:mb-16">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-[10px] sf-bold uppercase tracking-[0.5em] text-primary/70">Ingeniería Avanzada</span>
            </div>
            <h2 class="text-3xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              <span class="text-primary font-black">Capacidad</span><br/>
              <span class="text-white font-black inline-block mt-1">Multidisciplinaria</span>
            </h2>
          </div>

          <!-- Label -->
          <div class="inline-flex self-start w-fit items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-2 rounded-full mb-10">
            <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span class="text-[11px] sf-bold uppercase tracking-[0.35em] text-primary">Sectores de Operación</span>
          </div>

          <div class="grid grid-cols-2 gap-x-6 gap-y-10">

            <!-- Sector card -->
            <div class="group flex flex-col gap-4">
              <div class="w-14 h-14 flex items-center justify-center bg-primary/10 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-400 rounded-sm">
                <svg class="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <p class="text-sm sf-bold text-primary uppercase tracking-widest leading-tight">Minería</p>
            </div>

            <div class="group flex flex-col gap-4">
              <div class="w-14 h-14 flex items-center justify-center bg-primary/10 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-400 rounded-sm">
                <svg class="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <p class="text-sm sf-bold text-primary uppercase tracking-widest leading-tight">Sistemas<br/>de Bombeo</p>
            </div>

            <div class="group flex flex-col gap-4">
              <div class="w-14 h-14 flex items-center justify-center bg-primary/10 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-400 rounded-sm">
                <svg class="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                </svg>
              </div>
              <p class="text-sm sf-bold text-primary uppercase tracking-widest leading-tight">Maquinaria<br/>Pesada</p>
            </div>

            <div class="group flex flex-col gap-4">
              <div class="w-14 h-14 flex items-center justify-center bg-primary/10 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-400 rounded-sm">
                <svg class="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
              </div>
              <p class="text-sm sf-bold text-primary uppercase tracking-widest leading-tight">Infraestructura<br/>Industrial</p>
            </div>

          </div>
        </div>

        <!-- RIGHT: Servicios Técnicos -->
        <div class="bg-primary lg:bg-transparent rounded-2xl lg:rounded-none p-6 lg:p-0 lg:pl-10 lg:pt-[88px]">
          <!-- Label -->
          <div class="inline-flex self-start w-fit items-center gap-2 border border-accent/30 bg-accent/10 px-5 py-2 rounded-full mb-8">
            <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
            <span class="text-[11px] sf-bold uppercase tracking-[0.35em] text-accent">Servicios Técnicos Especializados</span>
          </div>

          <div class="space-y-0 divide-y divide-white/10">

            <!-- Service item -->
            <div class="group flex items-start gap-5 py-7 hover:pl-2 transition-all duration-300">
              <div class="mt-1 w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-white/10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg sf-bold text-white uppercase tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">Mantención Industrial</h4>
                <p class="text-sm sf-light text-white/60 leading-relaxed">Programas de mantenimiento preventivo y correctivo de alta fiabilidad que minimizan las paradas productivas.</p>
              </div>
            </div>

            <div class="group flex items-start gap-5 py-7 hover:pl-2 transition-all duration-300">
              <div class="mt-1 w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-white/10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg sf-bold text-white uppercase tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">Ensayos No Destructivos (END)</h4>
                <p class="text-sm sf-light text-white/60 leading-relaxed">Inspecciones avanzadas con líquidos penetrantes, partículas magnéticas y ultrasonido para la detección temprana.</p>
              </div>
            </div>

            <div class="group flex items-start gap-5 py-7 hover:pl-2 transition-all duration-300">
              <div class="mt-1 w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-white/10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg sf-bold text-white uppercase tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">Análisis Metalográficos</h4>
                <p class="text-sm sf-light text-white/60 leading-relaxed">Laboratorio especializado para estudio de desgaste y fallas en materiales expuestos al estrés mecánico constante.</p>
              </div>
            </div>

            <div class="group flex items-start gap-5 py-7 hover:pl-2 transition-all duration-300">
              <div class="mt-1 w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-white/10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg sf-bold text-white uppercase tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">Informes Técnicos</h4>
                <p class="text-sm sf-light text-white/60 leading-relaxed">Documentación detallada, trazable y auditable de todas las intervenciones estructurales y pruebas generadas.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
