<template>
  <section class="py-32 bg-white flex flex-col justify-center overflow-hidden">
    <div class="custom-container">
      <div class="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start mb-32">
        <!-- Main Title & Value Prop -->
        <div class="w-full lg:w-6/12 space-y-12">
          <h2 class="text-4xl lg:text-5xl font-bold uppercase tracking-tight text-secondary leading-[1.1]">
            Ingeniería de clase mundial para <br/>
            <span class="text-primary underline underline-offset-[14px] decoration-1 opacity-90">operaciones infalibles.</span>
          </h2>
          <div class="flex gap-8 group">
            <div class="w-[2px] h-auto bg-primary opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p class="text-lg text-gray-500 font-light leading-relaxed max-w-xl">
              Nuestra propuesta de valor se centra en la trazabilidad técnica y la excelencia operativa. Transformamos activos complejos en sistemas de alto rendimiento, asegurando que cada proyecto de StahlForm se traduzca en éxito preventivo.
            </p>
          </div>
        </div>

        <!-- Technical Detail / Negative Space filler -->
        <div class="hidden lg:flex w-full lg:w-6/12 justify-end pr-20 opacity-10 pointer-events-none">
           <svg class="w-64 h-64 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="0.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
           </svg>
        </div>
      </div>

      <!-- 4 Key Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Benefit 1: Continuidad -->
        <div class="benefit-card">
          <div class="mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Continuidad</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Aseguramos la operatividad ininterrumpida de sus activos críticos.</p>
        </div>

        <!-- Benefit 2: Reducción de Fallas -->
        <div class="benefit-card">
          <div class="mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Reducción de Fallas</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Análisis predictivo para mitigar riesgos antes de que ocurran.</p>
        </div>

        <!-- Benefit 3: Decisiones Confiables -->
        <div class="benefit-card">
          <div class="mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Decisiones Confiables</h4>
          <p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest">Información técnica precisa para una gestión de activos estratégica.</p>
        </div>

        <!-- Benefit 4: Seguridad -->
        <div class="benefit-card">
          <div class="mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
