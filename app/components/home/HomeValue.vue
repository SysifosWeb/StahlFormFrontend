<script setup>
import hydraulicsImage from '~/assets/img/Bombas_hidraulicas.png'
</script>

<template>
  <section class="py-10 lg:py-20 bg-[var(--background-medium)] flex flex-col justify-center overflow-hidden">
    <div class="custom-container">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center mb-12 lg:mb-20">
        
        <!-- Technical Image (Mobile top) -->
        <div class="flex lg:hidden w-full justify-center mt-8 mb-10">
           <img :src="hydraulicsImage" alt="Bombas Hidráulicas StahlForm" class="w-full max-w-[300px] h-auto object-contain" />
        </div>

        <!-- Main Title & Value Prop -->
        <div class="w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div class="flex items-center gap-4 mb-6">
             <div class="h-[2px] w-12 bg-accent"></div>
             <span class="text-xs sf-bold uppercase tracking-[0.4em] text-accent">Nuestra Propuesta</span>
          </div>

          <h2 class="text-4xl lg:text-6xl sf-bold uppercase tracking-tighter text-secondary leading-tight mb-8">
            Ingeniería de Clase Mundial para <br/>
            <span class="text-primary italic">Operaciones Infalibles</span>
          </h2>

          <div class="space-y-6 text-gray-600 sf-light leading-relaxed text-base border-l-2 border-accent pl-6 lg:pl-8">
            <p>
               Nuestra propuesta de valor se centra en la <span class="text-primary sf-bold">trazabilidad técnica</span> y la excelencia operativa. Transformamos activos complejos en sistemas de alto rendimiento.
            </p>
            <p>
               Aseguramos que cada proyecto de <span class="text-primary sf-bold italic">StahlForm</span> se traduzca en éxito preventivo a través de ingeniería avanzada y precisión absoluta.
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
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
          <h4 class="text-sm sf-bold uppercase tracking-widest text-primary mb-4">Continuidad</h4>
          <p class="text-xs text-primary sf-light leading-loose uppercase tracking-widest font-bold">Aseguramos la operatividad ininterrumpida de sus activos críticos.</p>
        </div>

        <!-- Benefit 2: Reducción de Fallas -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h4 class="text-sm sf-bold uppercase tracking-widest text-primary mb-4">Reducción de Fallas</h4>
          <p class="text-xs text-primary sf-light leading-loose uppercase tracking-widest font-bold">Análisis predictivo para mitigar riesgos antes de que ocurran.</p>
        </div>

        <!-- Benefit 3: Decisiones Confiables -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-sm sf-bold uppercase tracking-widest text-primary mb-4">Decisiones Confiables</h4>
          <p class="text-xs text-primary sf-light leading-loose uppercase tracking-widest font-bold">Información técnica precisa para una gestión de activos estratégica.</p>
        </div>

        <!-- Benefit 4: Seguridad -->
        <div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="mb-6">
            <svg class="w-10 h-10 lg:w-8 lg:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h4 class="text-sm sf-bold uppercase tracking-widest text-primary mb-4">Seguridad</h4>
          <p class="text-xs text-primary sf-light leading-loose uppercase tracking-widest font-bold">Protocolos de blindaje operativo en entornos de alta exigencia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefit-card {
    padding: 2rem 0;
    transition: transform 0.3s ease;
}

@media (min-width: 1024px) {
    .benefit-card {
        border-top: 2px solid var(--primary);
    }
}

.benefit-card:hover {
    transform: translateY(-5px);
}
</style>
