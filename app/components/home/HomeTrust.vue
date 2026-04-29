<script setup>
const clientLogos = [
  'Aguas_del_Valle_Logotipo.svg', 'Logo-KSB.png', 'logo-recon.png'
]
</script>

<template>
  <section class="py-12 lg:py-24 bg-accent relative overflow-hidden border-none z-10 block">
    <div class="custom-container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

        <!-- Left Column: Bold Text -->
        <div class="w-full lg:w-4/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-[2px] w-12 bg-primary"></div>
            <span class="text-xs sf-bold uppercase tracking-[0.4em] text-primary">Aliado Estratégico</span>
          </div>

          <h2 class="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-primary leading-tight mb-8">
            Operando <br />
            <span class="text-primary font-black">desde</span><br/>
            Coquimbo
          </h2>

          <div class="mt-4 flex items-center gap-4">
            <div class="h-[2px] w-12 bg-primary flex-shrink-0"></div>
            <span class="text-xs sf-bold uppercase tracking-[0.4em] text-primary">respaldo técnico</span>
          </div>
        </div>

        <!-- Right Column: Logos -->
        <div class="w-full lg:w-8/12 relative overflow-hidden mt-6 lg:mt-0">
          <!-- Fade masks -->
          <div
            class="absolute inset-y-0 left-0 w-24 lg:w-56 bg-gradient-to-r from-accent to-transparent z-10 pointer-events-none">
          </div>
          <div
            class="absolute inset-y-0 right-0 w-24 lg:w-56 bg-gradient-to-l from-accent to-transparent z-10 pointer-events-none">
          </div>

          <!-- Infinite Marquee -->
          <div class="flex gap-20 lg:gap-40 py-8 lg:py-12 animate-infinite-scroll w-max items-center justify-center">
            <div v-for="(logo, index) in [...clientLogos, ...clientLogos, ...clientLogos]" :key="index"
              class="flex-shrink-0 flex items-center justify-center">
              <img :src="`/img/clientes/${logo}`" :alt="logo"
                class="h-20 md:h-28 lg:h-36 w-auto opacity-100 transition-all duration-700 cursor-pointer hover:scale-110" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 60s linear infinite;
}

.animate-infinite-scroll:hover {
  animation-play-state: paused;
}
</style>
