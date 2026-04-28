<script setup>
import logoStahlForm from '~/assets/img/02 Logo_VerdeWebP.webp'
</script>

<template>
  <footer class="relative bg-primary pt-16 pb-8 overflow-hidden font-sans">
    
    <!-- Glowing Accent Top Line -->
    <div class="absolute top-0 left-0 w-full h-[2px] pointer-events-none" style="background: radial-gradient(ellipse 60% 100% at 50% 0%, #c8d400 0%, transparent 100%);"></div>
    <div class="absolute top-0 left-0 w-full h-8 pointer-events-none" style="background: radial-gradient(ellipse 50% 100% at 50% 0%, rgba(200,212,0,0.12) 0%, transparent 100%);"></div>


    <div class="custom-container relative z-10">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        <!-- Column 1: Brand & Intel (Span 4) -->
        <div class="lg:col-span-4 flex flex-col space-y-4 lg:pr-8">
          <div class="brand-logo flex flex-col items-center lg:items-start text-center lg:text-left">
             <img :src="logoStahlForm" alt="StahlForm Logo" class="h-20 w-auto mb-5"/>
          </div>
          <p class="text-xs sf-light text-white/60 leading-relaxed max-w-[280px] text-center lg:text-left mx-auto lg:mx-0">
            Garantizando la excelencia operativa y seguridad técnica para la gran minería y el sector industrial pesado.
          </p>
          
          <!-- Social Grid -->
          <div class="flex justify-center lg:justify-start gap-3">
             <a href="#" target="_blank" class="w-10 h-10 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-accent hover:border-accent group transition-all duration-300">
                <svg class="w-4 h-4 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
             <a href="https://www.instagram.com/stahlform_pyc?utm_source=qr&igsh=MWQ2cnZxc2Mybnk5cQ==" target="_blank" class="w-10 h-10 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-accent hover:border-accent group transition-all duration-300">
                <svg class="w-4 h-4 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771-4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
             </a>
             <a href="https://www.facebook.com/share/18F7fTkJD5/" target="_blank" class="w-10 h-10 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-accent hover:border-accent group transition-all duration-300">
                <svg class="w-4 h-4 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </a>
             <a href="https://www.tiktok.com/@maestranza_stahlform?_r=1&_t=ZS-95LP2FgXnyC" target="_blank" class="w-10 h-10 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-accent hover:border-accent group transition-all duration-300">
                <svg class="w-4 h-4 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.91 4.1-2.4 5.56-1.69 1.66-3.95 2.62-6.33 2.58-2.61-.04-5.01-1.36-6.52-3.41-1.31-1.78-1.84-4.08-1.43-6.28.39-2.12 1.6-3.97 3.32-5.16 1.78-1.23 3.99-1.66 6.08-1.29v4.06c-1.36-.45-2.93-.34-4.14.4-1.07.65-1.8 1.79-1.99 3.03-.23 1.49.27 3.01 1.28 4.09 1.05 1.13 2.6 1.71 4.14 1.53 1.42-.16 2.66-.99 3.35-2.22.42-.75.64-1.61.64-2.48.02-4.99.01-9.98.01-14.97-.02-.02-.04-.04-.06-.06z"/></svg>
             </a>
          </div>
        </div>
        
        <!-- Column 2: Navigation (Span 2) -->
        <div class="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8 flex flex-col space-y-8">
           <div>
              <span class="text-[10px] sf-bold uppercase tracking-[0.4em] text-white/40 block mb-2">Secciones</span>
              <h5 class="text-sm sf-bold uppercase tracking-[0.2em] text-accent">Navegación</h5>
           </div>
           <ul class="space-y-4">
             <li><NuxtLink to="/nuestra-empresa" class="text-xs sf-bold uppercase tracking-widest text-white/70 hover:text-accent hover:translate-x-2 transition-all inline-flex items-center gap-2 group"><div class="w-1 h-1 bg-white/20 group-hover:bg-accent transition-colors"></div> Nuestra Empresa</NuxtLink></li>
             <li><NuxtLink to="/servicios" class="text-xs sf-bold uppercase tracking-widest text-white/70 hover:text-accent hover:translate-x-2 transition-all inline-flex items-center gap-2 group"><div class="w-1 h-1 bg-white/20 group-hover:bg-accent transition-colors"></div> Servicios</NuxtLink></li>
             <li><NuxtLink to="/contacto" class="text-xs sf-bold uppercase tracking-widest text-white/70 hover:text-accent hover:translate-x-2 transition-all inline-flex items-center gap-2 group"><div class="w-1 h-1 bg-white/20 group-hover:bg-accent transition-colors"></div> Contacto</NuxtLink></li>
           </ul>
        </div>

        <!-- Column 3: Contact (Span 3) -->
        <div class="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8 flex flex-col space-y-8">
           <div>
              <span class="text-[10px] sf-bold uppercase tracking-[0.4em] text-white/40 block mb-2">Soporte</span>
              <h5 class="text-sm sf-bold uppercase tracking-[0.2em] text-accent">Comunicaciones</h5>
           </div>
           <ul class="space-y-6">
             <li class="group">
                <span class="text-[9px] sf-bold text-accent uppercase tracking-widest block mb-1">Central Operativa</span>
                <p class="text-xs sf-light text-white/70 leading-relaxed group-hover:text-white transition-colors">Av. Panorámica 910,<br/> Cond. Nova Florida, La Serena.</p>
             </li>
             <li class="group">
                <span class="text-[9px] sf-bold text-accent uppercase tracking-widest block mb-1">Consultas Directas</span>
                <a href="mailto:adm@stahlform.cl" class="text-xs sf-light text-white/70 hover:text-accent transition-colors">adm@stahlform.cl</a>
             </li>
           </ul>
        </div>

        <!-- Column 4: Map (Span 3) -->
        <div class="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8 flex flex-col space-y-8">
           <div class="flex items-center justify-between">
              <div>
                 <span class="text-[10px] sf-bold uppercase tracking-[0.4em] text-white/40 block mb-2">Ubicación</span>
                 <h5 class="text-sm sf-bold uppercase tracking-[0.2em] text-accent">Sector Regional</h5>
              </div>

           </div>
           
           <!-- Technical Map Frame -->
           <div class="relative w-full h-[160px] p-1 border border-white/20 bg-white/5">
              <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent"></div>
              <div class="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent"></div>
              <div class="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent"></div>
              <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent"></div>
              
              <iframe
                src="https://maps.google.com/maps?q=Av.%20Panor%C3%A1mica%20910,%20Cond.%20Nova%20Florida,%20La%20Serena,%20Chile&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="opacity-100"
              ></iframe>
           </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
             <div class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
             <p class="text-[10px] uppercase tracking-[0.3em] text-white/50 sf-bold">
                2026 StahlForm Inversiones PyC LTDA.
             </p>
          </div>
          <a href="https://sysifosweb.cl" target="_blank" class="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-accent transition-colors duration-300 sf-bold flex items-center gap-2">
            Desarrollo <span class="w-[1px] h-3 bg-white/20"></span> SysifosWeb
          </a>
      </div>

    </div>
  </footer>
</template>

<style scoped>
</style>

