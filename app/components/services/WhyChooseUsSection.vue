<script setup>
const beneficios = [
  'Experiencia comprobada en proyectos del sector',
  'Personal altamente calificado y certificado',
  'Tecnología de última generación y equipamiento moderno',
  'Compromiso con la calidad y satisfacción del cliente'
]
</script>
<template>
  <section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        <div class="w-full md:w-1/2 flex justify-center items-center order-2 md:order-1">
          <div class="relative group w-full max-w-lg z-0">
             <!-- Accent decorative frame -->
            <div class="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 h-2/3 border-b-2 border-r-2 border-detail-primary -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500"></div>
            <div class="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-1/3 h-1/3 border-t-2 border-l-2 border-detail-primary -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500"></div>
            
            <div class="overflow-hidden rounded-sm shadow-2xl">
              <img
                src="~/assets/img/fondo_header.jpeg"
                alt="Por qué elegirnos"
                class="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 order-1 md:order-2 space-y-6 group">
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark leading-tight">
              ¿Por qué elegirnos?
            </h2>
            <div class="title-accent mb-4"></div>
          </div>

          <p class="text-medium font-light ">
            Somos expertos en nuestro sector con amplia experiencia en el mercado.
            Nuestro compromiso con la calidad y la excelencia nos distingue en cada proyecto que emprendemos.
          </p>

          <ul class="space-y-4">
            <li 
              v-for="(item, index) in beneficios" 
              :key="index" 
              class="flex items-start gap-3"
            >
              <div class="mt-1 flex-shrink-0">
                <svg class="w-6 h-6 text-detail-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-medium font-normal font-light ">
                {{ item }}
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>