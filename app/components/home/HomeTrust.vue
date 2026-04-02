<script setup>
const clientLogos = [
  'Aguas_del_Valle_Logotipo.svg', 'Logo-KSB.png', 'recon.png'
]
</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden group/trust border-y border-gray-100">
    <div class="custom-container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        <!-- Left Column: Bold Text -->
        <div class="w-full lg:w-4/12">
          <div class="inline-block px-4 py-1 mb-6 border-l-4 border-primary bg-primary/5 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            Aliado Estratégico
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-secondary leading-[0.9]">
            Operando <br/> 
            <span class="text-primary italic">desde</span> <br/>
            Coquimbo.
          </h2>
          <div class="mt-10 flex items-center gap-4">
             <div class="w-12 h-[1.5px] bg-primary"></div>
             <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Respaldo Técnico de Clase Mundial</p>
          </div>
        </div>

        <!-- Right Column: Infinite Marquee -->
        <div class="w-full lg:w-8/12 relative overflow-hidden">
          <!-- Fade masks -->
          <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div class="flex gap-20 py-12 animate-infinite-scroll w-max">
            <div v-for="(logo, index) in [...clientLogos, ...clientLogos, ...clientLogos]" :key="index" class="flex-shrink-0 flex items-center">
               <img :src="`/img/clientes/${logo}`" 
                    :alt="logo" 
                    class="h-10 md:h-12 w-auto transition-all duration-700 cursor-pointer hover:scale-110" />
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
