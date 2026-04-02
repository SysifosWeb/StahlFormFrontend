<template>
  <section class="bg-slate-50 py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        <div class="w-full md:w-1/2 space-y-6">
          <div class="relative">
            <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
              Compromiso con la Sostenibilidad
            </h2>
            <div class="title-accent mb-4"></div>
          </div>

          <div class="space-y-4 text-medium font-light text-justify">
            <p>
              En <span class="font-semibold text-dark">TU EMPRESA</span>, la sostenibilidad es un pilar fundamental de nuestra operación. 
              Implementamos prácticas eco-eficientes en todos nuestros procesos, desde la gestión de 
              residuos hasta la optimización energética de nuestras instalaciones.
            </p>

            <p>
              Nuestro compromiso incluye la utilización de tecnologías limpias, la reducción de 
              nuestra huella de carbono y el desarrollo de soluciones que promueven la 
              <span class="text-detail-primary font-medium italic">economía circular</span> en la industria. 
              Trabajamos en conjunto con nuestros clientes para implementar mejoras que beneficien 
              tanto a la productividad como al medio ambiente.
            </p>
          </div>
            <div class="flex flex-wrap items-center gap-4">
              <div class="flex items-center gap-3 text-green-700 bg-green-100/50 w-fit px-5 h-11 rounded-full border border-green-200 shadow-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88 1.47-3.4 4.09-6.24 7.36-7.93-2.77 2.34-4.71 5.61-5.39 9.32 2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z"/>
                </svg>
                <span class="text-sm font-bold uppercase tracking-wider">Hacia una industria limpia</span>
              </div>

              <a 
                href="/documents/documento-ejemplo.pdf" 
                download="Documento_Ejemplo.pdf"
                target="_blank"
                class="flex items-center gap-3 text-red-700 bg-red-50 hover:bg-red-100 w-fit px-5 h-11 rounded-full border border-red-200 shadow-sm transition-all duration-300 hover:shadow-md group"
              >
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <span class="text-sm font-bold uppercase tracking-wider">Documento de ejemplo</span>
              </a>
            </div>
        </div>

        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="relative group w-full max-w-2xl z-0">
            
            <div 
              class="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-full h-full border-2 border-detail-primary rounded-lg -z-10 
                     group-hover:bottom-0 group-hover:right-0 transition-all duration-300 ease-in-out"
            ></div>
            
            <img
              src="~/assets/img/Our/Sostenibilidad.webp"
              alt="Compromiso Sostenible"
              class="relative w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
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
</style>