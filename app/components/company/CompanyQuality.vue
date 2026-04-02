<template>
  <section class="w-full py-12 lg:py-24 bg-slate-50 border-t border-gray-100">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
        
        <!-- Content Column -->
        <div class="space-y-8 lg:pr-6">
          <header class="space-y-4 text-left">
            <div class="space-y-4">
              <h2 class="text-3xl lg:text-4xl font-bold text-dark tracking-tight leading-none ">
                Política de calidad
              </h2>
              <div class="title-accent mb-4"></div>
            </div>
          </header>

          <div class="space-y-8">
            <p class="text-base lg:text-lg font-light text-medium leading-relaxed max-w-2xl">
              Ofrecer productos y servicios de alta calidad que satisfagan las necesidades de nuestros clientes, utilizando materias primas certificadas y procesos estandarizados que garanticen un óptimo rendimiento en cada etapa.
            </p>

            <div class="pt-4">
              <p class="text-xs font-bold text-medium uppercase tracking-widest mb-4">Descarga de documento:</p>
              <a 
                href="/documents/politica-calidad.pdf" 
                download
                target="_blank"
                class="inline-flex items-center px-8 py-3.5 border-2 border-dark text-dark font-bold uppercase tracking-wider hover:bg-detail-primary hover:border-detail-primary hover:text-white transition-all duration-300 group/btn"
              >
                Políticas de calidad
                <svg class="h-6 w-6 ml-3 transform group-hover/btn:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="relative z-0 group">
          <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary z-[-1] group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
          <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary z-[-1] group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
          
          <div class="overflow-hidden rounded-sm shadow-2xl">
            <img
              src="~/assets/img/Our/Banco.webp"
              alt="Política de Calidad"
              class="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Industrial design consistency */
</style>
