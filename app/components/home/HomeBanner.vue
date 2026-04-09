<template>
  <section class="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
    <!-- Image Background (Cinematic/Industrial) -->
    <div class="absolute inset-0 z-0">
      <img src="/img/banner_industrial.png" alt="Industrial Workshop" class="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
      <div class="absolute inset-0 bg-gradient-to-b from-white to-secondary opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f] opacity-90"></div>
    </div>

    <!-- Background Blueprint detail (extra layer) -->
    <div class="absolute inset-0 technical-grid opacity-5 z-0"></div>

    <div class="custom-container relative z-10 text-center">
      <h2 class="text-2xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-[1.3] md:leading-tight max-w-5xl mx-auto drop-shadow-2xl">
        <span class="block mb-2 md:inline">Trazabilidad técnica y</span>
        <span class="block mb-2 md:inline ml-0 md:ml-3"><span class="relative inline-block border-b-2 border-accent">seguridad</span></span>
        <span class="block mt-2 md:mt-0">como eje transversal de cada proyecto.</span>
      </h2>
      <div class="mt-10 flex justify-center items-center gap-10">
          <div class="h-[1.5px] w-14 bg-accent/40"></div>
          <p class="text-[9px] uppercase font-bold tracking-[0.8em] text-accent/90">StahlForm Commitment</p>
          <div class="h-[1.5px] w-14 bg-accent/40"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technical-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(217, 224, 33, 0.4) 1px, transparent 0);
    background-size: 50px 50px;
}
</style>
