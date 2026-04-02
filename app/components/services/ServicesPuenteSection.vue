<template>
  <section id="puerto" class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="relative group w-full max-w-lg z-0">
             <!-- Accent decorative frame -->
            <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
            <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
            
            <div class="overflow-hidden rounded-sm shadow-2xl">
              <img
                src="~/assets/img/servicios/Puerto.webp"
                alt="Servicio Destacado 4"
                class="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 space-y-6 group">
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
              Servicio Destacado 4
            </h2>
            <div class="title-accent mb-4"></div>
          </div>

          <div class="description space-y-4 text-medium font-light text-justify">
            <p>
              Descripción del cuarto servicio destacado. Incluye aquí los detalles de las capacidades
              y soluciones que tu empresa ofrece en este ámbito.
            </p>
            <p>
              Nuestras soluciones incluyen mantenimiento preventivo,
              reparaciones especializadas, modernización de sistemas y
              servicios de ingeniería especializada.
            </p>
            <p class="font-normal text-dark border-l-4 border-detail-primary pl-4 py-1">
              Garantizamos la eficiencia y seguridad de sus operaciones con estándares
              internacionales de calidad.
            </p>
          </div>

          <div class="flex items-center gap-2 text-detail-primary font-medium bg-white px-4 py-2 rounded-lg border border-red-100 w-fit shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="text-sm">Seguridad y Estándares Internacionales</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
