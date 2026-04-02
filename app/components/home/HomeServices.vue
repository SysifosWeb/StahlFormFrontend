<script setup>
// Importar imágenes directamente
import servicio1 from '~/assets/img/servicios/Mineria.webp'
import servicio2 from '~/assets/img/servicios/Puerto.webp'
import servicio3 from '~/assets/img/servicios/Ferroviario.webp'
import servicio4 from '~/assets/img/servicios/Industrial.webp'


// Crear array de servicios con imágenes importadas
const services = [
  { title: 'MINERÍA Y PROCESOS', src: servicio1, desc: 'Soluciones robustas para ambientes críticos.' },
  { title: 'PUERTOS Y LOGÍSTICA', src: servicio2, desc: 'Mantenimiento de equipos de alto tonelaje.' },
  { title: 'FERROVIARIO', src: servicio3, desc: 'Ingeniería aplicada al transporte de carga.' },
  { title: 'PLANTAS INDUSTRIALES', src: servicio4, desc: 'Continuidad operacional para su industria.' },
]
</script>

<template>
    <section class="bg-secondary py-20 overflow-hidden">
        <div class="custom-container">
            <!-- Título -->
            <div class="mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-light uppercase tracking-widest mb-2">
                    Nuestras <span class="text-accent">Unidades de Negocio</span>
                </h2>
                <div class="title-accent--short"></div>
            </div>

            <!-- Grid de tarjetas -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <NuxtLink
                    v-for="(service, index) in services"
                    :key="service.title"
                    to="/servicios"
                    class="group relative h-[450px] overflow-hidden rounded-xl border border-white/5 transition-all duration-500 hover:border-accent/40"
                >
                    <!-- Background Image -->
                    <img
                        :src="service.src"
                        :alt="service.title"
                        class="absolute inset-0 h-full w-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110"
                    />

                    <!-- Slanted Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent"></div>
                    <div class="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 bg-accent transform -skew-x-12 translate-x-1/2"></div>

                    <!-- Content -->
                    <div class="absolute inset-0 flex flex-col justify-end p-8">
                        <div class="mb-4 h-1 w-12 bg-accent transform transition-all duration-500 group-hover:w-full"></div>
                        <h3 class="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors uppercase">
                            {{ service.title }}
                        </h3>
                        <p class="text-sm text-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            {{ service.desc }}
                        </p>
                    </div>

                    <!-- Decorative Number -->
                    <div class="absolute top-4 right-6 text-4xl font-bold text-white/5 group-hover:text-accent/10 transition-colors">
                        0{{ index + 1 }}
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text-medium {
  color: var(--text-medium);
}
</style>