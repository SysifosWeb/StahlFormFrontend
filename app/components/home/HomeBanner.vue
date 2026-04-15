<template>
  <section class="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
    <!-- Image Background (Cinematic/Industrial) -->
    <div class="absolute inset-0 z-0">
      <img src="~/assets/img/Torno-01.png" alt="Industrial Workshop" class="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
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
    background-image: 
        url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(200, 212, 0, 0.15)' stroke-width='0.8'%3E%3Cpath d='M20 20h60M20 15v10M80 15v10' /%3E%3Ctext x='35' y='14' fill='rgba(200, 212, 0, 0.3)' font-family='monospace' font-size='8'%3E850.00mm%3C/text%3E%3Ccircle cx='150' cy='50' r='20' stroke-dasharray='2,2' /%3E%3Cpath d='M150 20v60M120 50h60' stroke-width='0.3' /%3E%3Cpath d='M40 150h40' /%3E%3Ctext x='48' y='140' fill='rgba(255, 255, 255, 0.2)' font-family='monospace' font-size='7'%3EWIDTH_X%3C/text%3E%3C/g%3E%3C/svg%3E"),
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 400px 400px, 100px 100px;
}
</style>
