<script setup>

</script>

<template>
  <section class="container mx-auto px-4 py-12 lg:py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div class="flex justify-center items-center h-full">
        <div class="relative group">
          <div class="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-full h-full border-2 border-detail-primary rounded-lg -z-10 group-hover:bottom-0 group-hover:left-0 transition-all duration-300"></div>
          
          <img
            src="~/assets/img/new/cnc2.webp"
            alt="Equipo Profesional"
            class="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>
      </div>

      <div class="flex flex-col justify-center">
        <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
          Equipo de Profesionales Especializados
        </h2>
        
        <div class="title-accent mb-4"></div>

        <p class="text-medium font-light leading-relaxed mb-8 text-justify">
          Nuestro equipo está conformado por profesionales altamente calificados
          y especializados en diversas áreas de la industria. Con amplia
          experiencia colectiva, nuestros técnicos, ingenieros y especialistas
          trabajan en sinergia para ofrecer soluciones innovadoras y eficientes.
          Invertimos constantemente en la capacitación y desarrollo de nuestro personal,
          manteniéndonos a la vanguardia de las últimas tecnologías y mejores
          prácticas del sector.
        </p>

        <div>
          <NuxtLink
            to="/contacto"
           class="inline-block rounded-lg bg-detail-primary px-6 py-3 text-white font-medium hover:bg-slate-500 transition"
          >
            Trabaja con nosotros
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
</style>