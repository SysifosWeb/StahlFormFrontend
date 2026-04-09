<script setup>
import heroImage from '~/assets/img/Kevin_torno.png'
</script>

<template>
  <section class="relative w-full bg-gray-50 pb-12 lg:pb-0 z-20">
    <!-- Extended Blueprint Background mathematically unified via 'fixed' attachment on desktop -->
    <div class="absolute inset-x-0 inset-y-0 z-0 pointer-events-none overflow-hidden">
        <div class="absolute inset-0 bg-[url('/img/blueprint_bg.png')] bg-scroll lg:bg-fixed bg-cover bg-center opacity-10 grayscale"></div>
    </div>
    <div class="flex flex-col lg:flex-row min-h-[50vh] items-stretch relative">
      <!-- Left Column: Strategic Partner (White Style) -->
      <div class="w-full lg:w-1/2 flex items-center p-10 lg:pl-[5%] lg:pr-16 relative">
         <!-- Background Vision Watermark -->
         <div class="absolute -left-12 -top-12 text-[200px] font-bold text-gray-900 opacity-[0.02] pointer-events-none select-none">VISION</div>
         
         <!-- Background detail -->
         <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none"></div>
         
         <div class="max-w-xl relative z-10">
            <div class="flex items-center gap-4 mb-6">
               <div class="h-[2px] w-12 bg-primary"></div>
               <span class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Nuestra Visión</span>
            </div>
            
            <h2 class="text-4xl lg:text-5xl font-bold text-secondary uppercase tracking-tighter leading-tight mb-6">
               Socio Estratégico <br/>
               <span class="text-primary italic">Técnico</span>
            </h2>
            
            <div class="space-y-4 text-gray-600 font-light leading-relaxed text-base">
               <p>
                  En <span class="text-primary font-bold">StahlForm</span> no solo fabricamos; co-creamos soluciones. Entendemos que la continuidad operativa de nuestros clientes depende de la <span class="text-primary font-bold italic">precisión</span> mecánica.
               </p>
               <p>
                  Aliado estratégico que aporta <span class="text-primary border-b-2 border-primary/20 pb-1">ingeniería aplicada</span> y una robusta infraestructura tecnológica para la gran minería.
               </p>
            </div>

         <div class="mt-12 grid grid-cols-2 gap-6 relative z-30 lg:-mb-24 lg:translate-y-16">
            <div class="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
               <p class="text-primary text-4xl lg:text-5xl mb-2 tracking-tighter font-bold">15+</p>
               <p class="text-[9px] uppercase tracking-widest font-bold text-gray-400">Años de<br/>Experiencia</p>
            </div>
            <div class="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
               <p class="text-primary text-4xl lg:text-5xl mb-2 tracking-tighter font-bold">100%</p>
               <p class="text-[9px] uppercase tracking-widest font-bold text-gray-400">Trazabilidad<br/>Técnica</p>
            </div>
         </div>
         </div>
      </div>

      <!-- Right Column: Industrial Visual -->
      <div class="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-auto">
         <div class="absolute inset-0 bg-secondary/10 z-10 pointer-events-none"></div>
         <img :src="heroImage" alt="Industrial Workshop StahlForm" class="w-full h-full object-cover contrast-110 brightness-95" />
         
         <!-- Overlays -->
         <div class="absolute inset-0 technical-grid pointer-events-none opacity-20"></div>
         <div class="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent hidden lg:block z-20 pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technical-grid {
    background-image: radial-gradient(var(--primary) 1px, transparent 0);
    background-size: 30px 30px;
}

h2 {
    text-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
</style>
