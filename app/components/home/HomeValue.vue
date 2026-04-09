<script setup>
import hydraulicsImage from '~/assets/img/Bombas_hidraulicas.png'
</script>

<template>
  <section class="py-10 lg:py-20 bg-white flex flex-col justify-center overflow-hidden">
    <div class="custom-container">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center mb-12 lg:mb-20">
        
        <!-- Technical Image (Mobile top) -->
        <div class="flex lg:hidden w-full justify-center mt-8 mb-10">
           <img :src="hydraulicsImage" alt="Bombas Hidráulicas StahlForm" class="w-full max-w-[300px] h-auto object-contain" />
        </div>

        <!-- Main Title & Value Prop -->
        <div class="w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-12">
          <h2 class="text-3xl lg:text-5xl font-bold uppercase tracking-tight text-secondary leading-[1.2] lg:leading-[1.1]">
            <span class="block mb-2">Ingeniería de clase</span> 
            <span class="block mb-2 lg:inline">mundial para</span>
            <span class="text-primary underline underline-offset-[10px] lg:underline-offset-[14px] decoration-1 opacity-90 block lg:inline">operaciones infalibles.</span>
          </h2>
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 group">
            <div class="hidden lg:block w-[2px] h-auto self-stretch bg-primary opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p class="text-sm lg:text-lg text-gray-500 font-light leading-relaxed max-w-xl">
              Nuestra propuesta de valor se centra en la trazabilidad técnica y la excelencia operativa. Transformamos activos complejos en sistemas de alto rendimiento, asegurando que cada proyecto de StahlForm se traduzca en éxito preventivo.
            </p>
          </div>
        </div>

        <!-- Technical Image (Desktop right) -->
        <div class="hidden lg:flex w-full lg:w-6/12 justify-center lg:justify-end pr-0 lg:pr-10 relative">
           <img :src="hydraulicsImage" alt="Bombas Hidráulicas StahlForm" class="w-full max-w-[450px] xl:max-w-[550px] h-auto object-contain transition-transform duration-700 hover:scale-105" />
        </div>
      </div>

      <!-- 4 Key Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Benefit 1: Continuidad -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Continuidad</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Aseguramos la operatividad ininterrumpida de sus activos críticos.</p>
        </div>

        <!-- Benefit 2: Reducción de Fallas -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Reducción de Fallas</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Análisis predictivo para mitigar riesgos antes de que ocurran.</p>
        </div>

        <!-- Benefit 3: Decisiones Confiables -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Decisiones Confiables</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Información técnica precisa para una gestión de activos estratégica.</p>
        </div>

        <!-- Benefit 4: Seguridad -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Seguridad</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Protocolos de blindaje operativo en entornos de alta exigencia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefit-card {
    padding: 2rem 0;
    transition: transform 0.3s ease;
    border-top: 1px solid rgba(0,0,0,0.03);
}

.benefit-card:hover {
    transform: translateY(-5px);
}
</style>
