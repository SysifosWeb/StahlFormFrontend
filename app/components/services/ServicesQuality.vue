<template>
  <section class="relative w-full bg-primary py-12 lg:py-24 overflow-hidden font-sans border-none">
    <!-- Cinematic Industrial Background -->
    <div class="absolute inset-0 z-0">
        <img src="~/assets/img/Kevin_torno.png" alt="Industrial Backdrop" class="w-full h-full object-cover grayscale opacity-10" />
    </div>
    
    <!-- Branding Geometric Shapes (Slide 3 Style) -->
    <div class="absolute -right-24 -bottom-24 w-[700px] h-full z-0 opacity-10 pointer-events-none transform -rotate-12">
        <svg viewBox="0 0 700 1000" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-accent w-full h-full">
            <path d="M100 200L600 450V600L100 350V200Z" stroke="currentColor" stroke-width="40"/>
            <path d="M50 450L550 700V850L50 600V450Z" stroke="currentColor" stroke-width="40" opacity="0.6"/>
        </svg>
    </div>

    <div class="custom-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left Column: Content -->
      <div class="max-w-xl">
         <div class="flex items-center gap-4 mb-8">
            <span class="text-[10px] sf-bold uppercase tracking-[0.5em] text-accent">Garantía Geométrica</span>
            <div class="h-[1px] flex-1 bg-accent/20"></div>
         </div>
         
         <h2 class="text-4xl lg:text-6xl sf-bold text-white uppercase tracking-tighter leading-tight mb-8">
            Calidad <br/>
            <span class="text-accent italic">Garantizada</span>
         </h2>

         <p class="text-xl text-primary/70 sf-light leading-relaxed mb-10 italic">
            "Cada servicio incluye informes técnicos, control de calidad y decisiones respaldadas por análisis."
         </p>

         <div class="space-y-6">
            <div class="flex items-center gap-4 group">
               <div class="w-8 h-[1px] bg-accent group-hover:w-12 transition-all"></div>
               <span class="text-sm sf-bold text-white/60  uppercase tracking-widest">Informes Técnicos</span>
            </div>
            <div class="flex items-center gap-4 group">
               <div class="w-8 h-[1px] bg-accent group-hover:w-12 transition-all"></div>
               <span class="text-sm sf-bold text-white/60  uppercase tracking-widest">Control de Calidad</span>
            </div>
            <div class="flex items-center gap-4 group">
               <div class="w-8 h-[1px] bg-accent group-hover:w-12 transition-all"></div>
               <span class="text-sm sf-bold text-white/60  uppercase tracking-widest">Análisis de Datos</span>
            </div>
         </div>
      </div>

      <!-- Right Column: Document-like Interface -->
      <div class="relative">
         <!-- Document Shadow Base -->
         <div class="absolute -inset-4 bg-accent/20 blur-3xl opacity-20 pointer-events-none"></div>
         
         <div class="relative bg-[#002530] rounded-2xl border border-white/10 p-8 lg:p-12 shadow-2xl overflow-hidden group">
            <!-- Technical Watermark Inside Document -->
            <!-- Technical Watermark removed -->


            <!-- Report Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8 mb-8">
               <div class="flex flex-col">
                  <span class="text-[10px] uppercase tracking-widest text-accent sf-bold mb-1">Informe Técnico de Calidad</span>
                  <h3 class="text-xl sf-bold text-white tracking-tighter">REF: SF-QM-2024-0812</h3>
               </div>
               <div class="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                  <span class="text-[10px] sf-bold text-accent uppercase tracking-widest italic tracking-tighter">Status: Aprobado</span>
               </div>
            </div>

            <!-- Checklist -->
            <div class="space-y-6 mb-12">
               <div class="flex items-center justify-between group/item">
                  <span class="text-sm text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-widest text-[11px]">Inspección Estratégica</span>
                  <div class="flex items-center gap-2">
                     <span class="text-[10px] text-accent/50 font-mono tracking-tighter">OK</span>
                     <div class="w-5 h-5 flex items-center justify-center bg-accent text-secondary rounded shadow-[0_0_10px_rgba(217,224,33,0.3)]">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                     </div>
                  </div>
               </div>
               <div class="flex items-center justify-between group/item">
                  <span class="text-sm text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-widest text-[11px]">Rugosidad Superficial</span>
                  <div class="flex items-center gap-2">
                     <span class="text-[10px] text-accent/50 font-mono tracking-tighter">3.2 Ra</span>
                     <div class="w-5 h-5 flex items-center justify-center bg-accent text-secondary rounded shadow-[0_0_10px_rgba(217,224,33,0.3)]">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                     </div>
                  </div>
               </div>
               <div class="flex items-center justify-between group/item">
                  <span class="text-sm text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-widest text-[11px]">Tolerancia Dimensional</span>
                  <div class="flex items-center gap-2">
                     <span class="text-[10px] text-accent/50 font-mono tracking-tighter">+/- 0.05 mm</span>
                     <div class="w-5 h-5 flex items-center justify-center bg-accent text-secondary rounded shadow-[0_0_10px_rgba(217,224,33,0.3)]">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Data Driven Graphic Simulation -->
            <div class="bg-black/20 rounded-xl p-6 border border-white/5">
                <div class="flex flex-col gap-4">
                   <div class="flex justify-between items-center bg-[#222] p-2 px-4 rounded border border-white/5">
                      <span class="text-[10px] text-gray-500 font-mono">DUREZA BRINELL</span>
                      <span class="text-sm sf-bold text-white">450 HBW</span>
                   </div>
                   <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div class="bg-accent h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(217,224,33,0.4)]"></div>
                   </div>
                </div>
            </div>

            <div class="mt-8 flex justify-end">
               <div class="p-3 bg-white/5 border border-white/10 rounded-full px-6 group-hover:bg-accent group-hover:text-secondary transition-all cursor-pointer">
                  <span class="text-[10px] sf-bold uppercase tracking-[0.2em] italic">Descargar Reporte Completo (PDF)</span>
               </div>
            </div>

         </div>
      </div>

    </div>
  </section>
</template>

