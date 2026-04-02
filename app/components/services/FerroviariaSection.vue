<template>
  <section id="ferroviario" class="py-16 lg:py-24 background-medium">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        <div class="w-full md:w-1/2 space-y-6 order-2 md:order-1 group">
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
              Servicio Destacado 1
            </h2>
            <div class="title-accent mb-4"></div>
          </div>

          <div class="description space-y-4 text-medium font-light text-justify">
            <p>
              Descripción del primer servicio destacado. Agrega aquí los detalles específicos de las soluciones
              que ofrece tu empresa en esta área.
            </p>
            <p>
              Nuestro equipo técnico garantiza los mejores resultados mediante soluciones preventivas, correctivas,
              rehabilitación de componentes y modernización de sistemas.
            </p>
            <p>
              Contamos con certificaciones y amplia experiencia en el sector, asegurando la continuidad operativa bajo los más altos estándares.
            </p>
          </div>

          <div class="flex items-center gap-3 pt-4">
            <div class="bg-detail-primary text-white px-4 py-2 rounded-lg font-bold shadow-md">
              +XX años
            </div>
            <span class="text-medium text-sm font-semibold uppercase tracking-wider">
              En el sector
            </span>
          </div>
        </div>

        <div class="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div class="relative group w-full max-w-lg z-0">
             <!-- Accent decorative frame -->
            <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
            <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
            
            <div class="overflow-hidden rounded-sm shadow-2xl">
              <img
                src="~/assets/img/servicios/Ferroviario.webp"
                alt="Servicio Destacado 1"
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

<script setup>
/**
 * RailwayMaintenanceSection.vue
 */
</script>

<style scoped>
/* Estilos manejados por Tailwind CSS */
</style>