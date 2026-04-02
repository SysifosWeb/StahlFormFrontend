<template>
  <section id="mineria" class="py-16 lg:py-24 background-medium">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        <div class="w-full md:w-1/2 space-y-6 order-2 md:order-1 group">
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
              Servicio Destacado 3
            </h2>
            <div class="title-accent mb-4"></div>
          </div>

          <div class="description space-y-4 text-medium font-light text-justify">
            <p>
              Descripción del tercer servicio destacado. Incluye aquí los detalles de las capacidades y especialidades que diferencian a tu empresa.
            </p>
            <p>
              Nuestro expertise abarca equipos y componentes críticos del sector. Utilizamos tecnología de última generación y procedimientos certificados.
            </p>
             <p class="font-normal text-dark border-l-4 border-detail-primary pl-4 py-1">
              Garantizamos la máxima disponibilidad de sus equipos y optimizamos sus procesos productivos.
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div class="relative group w-full max-w-lg z-0">
             <!-- Accent decorative frame -->
            <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
            <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
            
            <div class="overflow-hidden rounded-sm shadow-2xl">
              <img
                src="~/assets/img/servicios/Mineria.webp"
                alt="Servicio Destacado 3"
                class="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
