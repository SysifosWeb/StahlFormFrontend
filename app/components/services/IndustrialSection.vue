<template>
  <section id="industrial" class="py-16 lg:py-24  bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="relative group w-full max-w-lg z-0">
             <!-- Accent decorative frame -->
            <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
            <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
            
            <div class="overflow-hidden rounded-sm shadow-2xl">
              <img
                src="~/assets/img/servicios/Industrial.webp"
                alt="Servicio Destacado 2"
                class="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 space-y-6 group">
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
              Servicio Destacado 2
            </h2>
            <div class="title-accent mb-4"></div>
          </div>

          <div class="description space-y-4 text-medium font-light text-justify">
            <p>
              Descripción del segundo servicio destacado. Explica aquí las soluciones específicas que tu empresa ofrece en este ámbito.
            </p>
            <p>
              Nuestro equipo de expertos implementa soluciones a medida,
              garantizando mayor productividad y reducción de costos operativos.
            </p>
            <p>
              Contamos con tecnología de vanguardia y amplia experiencia en el sector, brindando resultados tangibles y duraderos.
            </p>
          </div>

          <div class="flex items-center gap-2 text-medium pt-4">
            <svg class="w-5 h-5 text-detail-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-sm font-medium uppercase tracking-widest">Cobertura nacional</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
