<script setup>
import { Servicios } from '@/assets/data/servicios.js'
import { Proyectos } from '@/assets/data/proyectos.js'

definePageMeta({
  layout: 'secondary',
  title: 'Resultados de BÃºsqueda'
})

const route = useRoute()
const searchQuery = computed(() => route.query.q || '')

// Function to normalize strings (remove accents and lower case)
const normalize = (str) => {
  if (!str) return ''
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

const results = computed(() => {
  if (!searchQuery.value) return []
  
  const query = normalize(searchQuery.value)
  
  // Search in Servicios
  const servicesResults = Servicios.filter(servicio => 
    normalize(servicio.title).includes(query) ||
    normalize(servicio.deck).includes(query) ||
    normalize(servicio.description).includes(query)
  ).map(item => ({ ...item, type: 'service' }))

  // Search in Proyectos
  const projectsResults = Proyectos.filter(proyecto => 
    normalize(proyecto.title).includes(query) ||
    normalize(proyecto.description).includes(query)
  ).map(item => ({ ...item, type: 'project' }))

  return [...servicesResults, ...projectsResults]
})

useHead({
  title: () => searchQuery.value ? `BÃºsqueda: ${searchQuery.value} | StahlForm` : 'Buscar | StahlForm',
  meta: [
    { name: 'description', content: 'Encuentra servicios y proyectos en StahlForm.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 py-12 lg:py-16">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="mb-12">
        <h1 class="text-3xl lg:text-4xl sf-bold sf-text-dark mb-2">
          Resultados para: <span class="text-detail-primary">{{ searchQuery }}</span>
        </h1>
        <div class="title-accent"></div>
        <p v-if="results.length > 0" class="mt-2 sf-text-medium sf-light">
          Se han encontrado {{ results.length }} {{ results.length === 1 ? 'resultado' : 'resultados' }}.
        </p>
      </div>

      <div v-if="results.length > 0" class="space-y-12">
        <div v-for="item in results" :key="item.type + '-' + item.id">
          <!-- Service Result -->
          <NuxtLink
            v-if="item.type === 'service'"
            :to="item.to"
            class="block group w-full"
          >
            <article class="flex flex-col md:flex-row w-full bg-white overflow-hidden gap-0 md:gap-6 h-auto md:h-[400px] shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg">
              <div class="w-full md:w-1/2 h-[250px] md:h-full overflow-hidden">
                <img :src="item.src" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div class="flex flex-col p-6 md:p-8 w-full md:flex-1 gap-4 justify-center">
                <span class="text-xs sf-bold uppercase tracking-wider text-detail-primary">Servicios</span>
                <h2 class="sf-bold sf-text-dark text-xl lg:text-2xl group-hover:text-detail-primary transition-colors">{{ item.title }}</h2>
                <p class="sf-text-medium text-sm md:text-base sf-light leading-relaxed line-clamp-4">{{ item.deck }}</p>
                <div class="mt-4 flex items-center gap-2 text-detail-primary sf-bold text-sm">
                  Ver Servicio
                  <Icon name="heroicons:arrow-right" />
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Project Result -->
          <NuxtLink
            v-else-if="item.type === 'project'"
            :to="item.to"
            class="block group w-full"
          >
            <article class="flex flex-col md:flex-row w-full bg-white overflow-hidden gap-0 md:gap-6 h-auto md:h-[400px] shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg">
              <div class="w-full md:w-1/2 h-[250px] md:h-full overflow-hidden">
                <img :src="item.src" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div class="flex flex-col p-6 md:p-8 w-full md:flex-1 gap-4 justify-center">
                <span class="text-xs sf-bold uppercase tracking-wider text-detail-primary">Proyecto Destacado</span>
                <h2 class="sf-bold sf-text-dark text-xl lg:text-2xl group-hover:text-detail-primary transition-colors">{{ item.title }}</h2>
                <p class="sf-text-medium text-sm md:text-base sf-light leading-relaxed line-clamp-4">{{ item.description }}</p>
                <div class="mt-4 flex items-center gap-2 text-detail-primary sf-bold text-sm">
                  Ver en Proyectos
                  <Icon name="heroicons:arrow-right" />
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>
      </div>


      <div v-else class="text-center py-20 bg-white rounded-xl shadow-sm">
        <Icon name="heroicons:magnifying-glass" size="4rem" class="text-gray-200 mb-6 mx-auto" />
        <h3 class="text-2xl sf-bold sf-text-dark mb-2">No se encontraron resultados</h3>
        <p class="sf-text-medium sf-light">
          Prueba con otros tÃ©rminos de bÃºsqueda.
        </p>
        <NuxtLink 
          to="/" 
          class="inline-block mt-8 px-8 py-3 bg-detail-primary text-white sf-bold rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Volver al Inicio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

