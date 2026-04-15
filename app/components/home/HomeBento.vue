<script setup>
/**
 * HomeBento Component - FINAL DESIGN
 * 
 * Irregular Bento Grid celebrating authentic workshop photography.
 * Uses 9:16 vertical anchor and technical UI elements.
 */
</script>

<template>
  <section id="taller-bento" class="py-24 bg-white border-t border-gray-100">
    <div class="custom-container">
      
      <!-- Section Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-[2px] bg-[#c8d400]"></div>
          <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-[#003e49]">Nuestras Instalaciones</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#1a1a1a]">
          Ingeniería en <span class="text-[#003e49] italic">Acción:</span> Nuestro Taller
        </h2>
      </div>

      <!-- Irregular Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- BLOCK 1: Vertical Photo Anchor (1x2) -->
        <div class="lg:row-span-2 relative group overflow-hidden rounded-xl bg-[#0d2a2d] border border-gray-200 shadow-xl cursor-pointer h-[700px] lg:h-auto">
          <img 
            src="~/assets/img/Fotografias/mecanizado_precision.jpeg" 
            alt="Mecanizado de Alta Precisión" 
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <!-- 30% Petroleum Overlay -->
          <div class="absolute inset-0 bg-[#0d2a2d] opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
          
          <div class="absolute bottom-8 left-8 right-8 z-10">
             <div class="flex items-center gap-2 mb-4">
                <div class="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse"></div>
                <!-- <span class="text-[10px] font-mono text-white/80 uppercase tracking-widest">SF_WORKSHOP_9:16</span> -->
             </div>
             <h4 class="text-2xl lg:text-3xl font-bold text-white uppercase tracking-tighter leading-none">
                Procesos en <br/> Tiempo Real
             </h4>
          </div>
        </div>

        <!-- BLOCK 2: Horizontal Text Block (2x1) -->
        <div class="lg:col-span-2 bg-[#0d2a2d] p-12 flex flex-col justify-center relative overflow-hidden rounded-xl border border-white/5 shadow-2xl min-h-[300px]">
          <!-- Background Image with Opacity -->
          <img 
            src="~/assets/img/Fotografias/WhatsApp Image 2026-04-15 at 13.09.13.jpeg" 
            class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
            alt="Fondo taller"
          />
          
          <!-- Abstract technical pattern -->
          <div class="absolute top-0 right-0 p-8 opacity-5 z-10">
             <svg class="w-48 h-48 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.5">
                <circle cx="50" cy="50" r="40" stroke-dasharray="4 4" />
                <path d="M0 50 L100 50 M50 0 L50 100" />
             </svg>
          </div>
          
          <h3 class="text-2xl lg:text-4xl font-black text-white leading-none uppercase tracking-tighter relative z-10 max-w-2xl">
            Capacidad técnica al <br/>
            <span class="text-[#d4ff00] italic">servicio</span> de <br/>
            operaciones críticas
          </h3>
          
          <div class="mt-10 flex items-center gap-4 relative z-10">
             <div class="h-[1px] w-20 bg-[#d4ff00]/30"></div>
             <span class="text-[11px] font-mono text-white/40 uppercase tracking-[0.4em]">StahlForm Operations</span>
          </div>
        </div>

        <!-- BLOCK 3: Square Photo (1x1) - Piece Close-up -->
        <div class="relative group overflow-hidden rounded-xl bg-[#0d2a2d] border border-gray-200 shadow-lg cursor-pointer h-[328px]">
          <img 
            src="~/assets/img/Fotografias/WhatsApp Image 2026-04-15 at 13.09.11.jpeg" 
            alt="Detalle de Pieza StahlForm" 
            class="w-full h-full object-cover object-[center_calc(50%-10px)] transition-transform duration-1000 group-hover:scale-110"
          />
          <!-- 30% Petroleum Overlay -->
          <div class="absolute inset-0 bg-[#0d2a2d] opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
          
          <div class="absolute bottom-6 left-6">
             <!-- <span class="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/10 rounded-sm">SF_COMP_772</span> -->
          </div>
        </div>

        <!-- BLOCK 4: Square Photo (1x1) - Precision Piece -->
        <div class="relative group overflow-hidden rounded-xl bg-[#0d2a2d] border border-gray-200 shadow-lg cursor-pointer h-[328px]">
          <img 
            src="~/assets/img/Fotografias/pieza_detalle.jpeg" 
            alt="Detalle de Rosca StahlForm" 
            class="w-full h-full object-cover object-[center_calc(27%-15px)] transition-transform duration-1000 group-hover:scale-110"
          />
          <!-- 30% Petroleum Overlay -->
          <div class="absolute inset-0 bg-[#0d2a2d] opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
          
          <div class="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
             <Icon name="lucide:ruler" class="w-6 h-6 text-[#d4ff00]" />
          </div>

          <div class="absolute bottom-6 left-6 right-6">
             <h4 class="text-xl font-bold text-white uppercase tracking-tighter mb-1">Precisión Certificada</h4>
             <!-- <span class="text-[10px] font-mono text-[#d4ff00] uppercase tracking-widest">QC_CALIBRATION_OK</span> -->
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#taller-bento {
  position: relative;
  z-index: 10;
}
</style>
