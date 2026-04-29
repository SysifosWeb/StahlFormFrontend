<script setup>
import heroImage from '~/assets/img/Kevin_torno.png'
</script>

<template>
  <section class="relative w-full background-medium pb-12 lg:pb-0 z-20">
    <!-- Branding Geometric Background -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden background-medium">
        <div class="absolute -left-20 -top-20 w-[600px] h-full opacity-[0.03] text-primary rotate-12">
            <svg viewBox="0 0 600 800" fill="currentColor"><path d="M100 100L500 300V450L100 250V100Z"/><path d="M50 350L450 550V700L50 500V350Z" opacity="0.6"/></svg>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row min-h-[50vh] items-stretch relative">
      <!-- Left Column: Strategic Partner (White Style) -->
      <div class="w-full lg:w-1/2 flex items-center p-10 lg:pl-[5%] lg:pr-16 relative">
         <!-- Background Vision Watermark -->
         <div class="absolute -left-12 -top-12 text-[200px] sf-bold text-gray-900 opacity-[0.02] pointer-events-none select-none">VISION</div>
         
         <!-- Background detail -->
         <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none"></div>
         
         <div class="max-w-xl relative z-10">
            <div class="flex items-center gap-4 mb-6">
               <div class="h-[2px] w-12 bg-primary"></div>
               <span class="text-xs sf-bold uppercase tracking-[0.4em] text-primary">Nuestra Visión</span>
            </div>
            
            <h2 class="text-4xl lg:text-6xl font-black text-primary uppercase tracking-tighter leading-tight mb-6">
               Socio Estratégico <br/>
               Técnico
            </h2>
            
            <div class="space-y-4 text-primary sf-light leading-relaxed text-base">
               <p>
                  En <span class="text-primary font-black">StahlForm</span> no solo fabricamos; co-creamos soluciones. Entendemos que la continuidad operativa de nuestros clientes depende de la <span class="text-primary font-black italic">precisión</span> mecánica.
               </p>
               <p>
                  Aliado estratégico que aporta <span class="text-primary font-black">ingeniería aplicada</span> y una robusta infraestructura tecnológica para la gran minería.
               </p>
            </div>
         </div>
      </div>

      <!-- Right Column: Metrics Cards -->
      <div class="w-full lg:w-1/2 relative flex items-center justify-center p-10 lg:pr-[5%]">
         <div class="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 relative z-30">
            <div class="bg-primary p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2">
               <p class="text-accent text-5xl lg:text-6xl mb-4 tracking-tighter font-black">15+</p>
               <p class="text-xs uppercase tracking-widest sf-bold text-white/80">Años de<br/>Experiencia</p>
            </div>
            <div class="bg-primary p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2">
               <p class="text-accent text-5xl lg:text-6xl mb-4 tracking-tighter font-black">100%</p>
               <p class="text-xs uppercase tracking-widest sf-bold text-white/80">Trazabilidad<br/>Técnica</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


h2 {
    text-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
</style>


