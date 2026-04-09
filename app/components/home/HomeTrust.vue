<script setup>
const clientLogos = [
  'Aguas_del_Valle_Logotipo.svg', 'Logo-KSB.png', 'recon.png'
]
</script>

<template>
  <section class="py-12 lg:py-24 bg-white relative overflow-hidden border-y border-gray-100 z-10 block">
    <div class="custom-container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        <!-- Left Column: Bold Text -->
        <div class="w-full lg:w-4/12">
          <div class="inline-block px-4 py-1 mb-6 border-l-4 border-[#003e49] bg-[#003e49]/5 text-[10px] font-bold uppercase tracking-[0.4em] text-[#003e49]">
            Aliado Estratégico
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-[#1a1a1a] leading-[1.1] lg:leading-[0.9]">
            <span class="block text-[#1a1a1a]">Operando</span> 
            <span class="block text-[#003e49] italic my-1 lg:my-0">desde</span>
            <span class="block text-[#1a1a1a]">Coquimbo.</span>
          </h2>
          <div class="mt-10 flex items-center gap-4">
             <div class="w-12 h-[1.5px] bg-[#003e49]"></div>
             <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Respaldo Técnico de Clase Mundial</p>
          </div>
        </div>

        <!-- Right Column: Logos -->
        <div class="w-full lg:w-8/12 relative overflow-hidden mt-6 lg:mt-0">
          <!-- Fade masks -->
          <div class="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div class="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <!-- Infinite Marquee -->
          <div class="flex gap-12 lg:gap-20 py-8 lg:py-12 animate-infinite-scroll w-max">
            <div v-for="(logo, index) in [...clientLogos, ...clientLogos, ...clientLogos]" :key="index" class="flex-shrink-0 flex items-center">
               <img :src="`/img/clientes/${logo}`" 
                    :alt="logo" 
                    class="h-8 md:h-12 w-auto opacity-100 transition-all duration-700 cursor-pointer hover:scale-110" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-infinite-scroll {
  animation: infinite-scroll 60s linear infinite;
}

.animate-infinite-scroll:hover {
  animation-play-state: paused;
}
</style>
