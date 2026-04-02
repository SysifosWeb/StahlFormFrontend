<template>
  <section class="py-20 relative overflow-hidden bg-secondary">
    <!-- Diagonal Background Accent -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 transform skew-x-12 -translate-x-20"></div>

    <div class="custom-container relative z-10">
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-light mb-4 tracking-tighter">
          COMPROMETIDOS CON EL <br/>
          <span class="text-accent">DESARROLLO DE LA INDUSTRIA</span>
        </h2>
        <div class="title-accent--special"></div>
      </div>

      <!-- Dossier Style Index -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-20">
        
        <!-- Item 04 -->
        <div class="group flex items-start gap-6 border-b border-white/10 pb-8 transition-all hover:border-accent/50">
          <span class="text-6xl font-bold text-accent/20 group-hover:text-accent transition-colors">04</span>
          <div>
            <h3 class="text-xl font-bold text-light mb-3 group-hover:text-accent">Comprometidos con el desarrollo</h3>
            <p class="text-medium text-sm leading-relaxed">
              Entregamos soluciones técnicas de alto nivel para operaciones industriales y mineras que requieren confiabilidad.
            </p>
          </div>
        </div>

        <!-- Item 06 -->
        <div class="group flex items-start gap-6 border-b border-white/10 pb-8 transition-all hover:border-accent/50">
          <span class="text-6xl font-bold text-accent/20 group-hover:text-accent transition-colors">06</span>
          <div>
            <h3 class="text-xl font-bold text-light mb-3 group-hover:text-accent">Una Empresa de Ingeniería</h3>
            <p class="text-medium text-sm leading-relaxed">
              Nuestro enfoque combina ingeniería aplicada, experiencia en terreno y capacidades de fabricación avanzadas.
            </p>
          </div>
        </div>

        <!-- Item 08 -->
        <div class="group flex items-start gap-6 border-b border-white/10 pb-8 transition-all hover:border-accent/50">
          <span class="text-6xl font-bold text-accent/20 group-hover:text-accent transition-colors">08</span>
          <div>
            <h3 class="text-xl font-bold text-light mb-3 group-hover:text-accent">Capacidad Técnica Crítica</h3>
            <p class="text-medium text-sm leading-relaxed">
              Abordamos cada desafío desde el diagnóstico hasta la ejecución, bajo altos estándares de trazabilidad técnica.
            </p>
          </div>
        </div>

        <!-- Item 10 -->
        <div class="group flex items-start gap-6 border-b border-white/10 pb-8 transition-all hover:border-accent/50">
          <span class="text-6xl font-bold text-accent/20 group-hover:text-accent transition-colors">10</span>
          <div>
            <h3 class="text-xl font-bold text-light mb-3 group-hover:text-accent">Desafíos de la industria</h3>
            <p class="text-medium text-sm leading-relaxed">
              Entendemos los desafíos operacionales actuales y adaptamos nuestras soluciones a la realidad de cada planta.
            </p>
          </div>
        </div>

        <!-- Item 12 -->
        <div class="group flex items-start gap-6 border-b border-white/10 pb-8 transition-all hover:border-accent/50">
          <span class="text-6xl font-bold text-accent/20 group-hover:text-accent transition-colors">12</span>
          <div>
            <h3 class="text-xl font-bold text-light mb-3 group-hover:text-accent">Contexto Operacional</h3>
            <p class="text-medium text-sm leading-relaxed">
              Optimizamos la continuidad operacional mediante mantenimiento preventivo y correctivo especializado.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="flex items-center justify-center pt-8">
           <NuxtLink to="/nuestra-empresa" class="btn-stahl w-full group">
              CONOCE NUESTRA HISTORIA
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
           </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.text-medium {
  color: var(--text-medium);
}
</style>
