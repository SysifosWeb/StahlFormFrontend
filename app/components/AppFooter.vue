<template>
  <footer class="bg-[#111111] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden font-sans">
    <div class="custom-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        
        <!-- Column 1: Logo & Vision -->
        <div class="space-y-10">
          <div class="brand-logo">
             <h2 class="text-3xl font-bold tracking-[0.3em] uppercase leading-none text-white text-shadow-glow">STAHL<span class="text-accent italic">FORM</span></h2>
             <p class="text-[9px] uppercase tracking-[0.5em] text-gray-500 mt-3 font-bold">Industrial Engineering Solutions</p>
          </div>
          <p class="text-xs font-light text-gray-400 leading-relaxed max-w-[240px]">
            Compromiso con la excelencia operativa y la seguridad técnica en minería e industria nacional.
          </p>
          <div class="flex gap-4">
             <div class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group">
                <svg class="w-4 h-4 text-gray-500 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </div>
          </div>
        </div>

        <!-- Column 2: Contact -->
        <div class="space-y-10">
          <h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Contacto Técnico</h5>
          <ul class="space-y-8">
            <li class="flex items-start gap-4">
               <svg class="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               <div class="text-xs font-light text-gray-400">
                  <p class="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Casa Matriz</p>
                  <p class="leading-relaxed">Alto La Herradura, Galpón N°3,<br/> Coquimbo, Chile.</p>
               </div>
            </li>
            <li class="flex items-start gap-4">
               <svg class="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               <div class="text-xs font-light text-gray-400">
                  <p class="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Consultas Directas</p>
                  <a href="mailto:adm@stahlform.cl" class="hover:text-accent transition-colors">adm@stahlform.cl</a>
               </div>
            </li>
          </ul>
        </div>

        <!-- Column 3: Navigation -->
        <div class="space-y-10">
          <h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Explorar</h5>
          <ul class="space-y-5">
            <li><NuxtLink to="/servicios" class="text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30">Líneas de Negocio</NuxtLink></li>
            <li><NuxtLink to="/capacidades-tecnologicas" class="text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30">Capacidad Técnica</NuxtLink></li>
            <li><NuxtLink to="/nuestra-empresa" class="text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30">Nuestra Empresa</NuxtLink></li>
            <li><NuxtLink to="/contacto" class="text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30">Área de Clientes</NuxtLink></li>
          </ul>
        </div>

        <!-- Original Google Map -->
        <div class="space-y-10">
           <h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Presencia Regional</h5>
           <div class="h-[180px] w-full rounded-2xl overflow-hidden border border-white/5 relative group/map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.064560738018!2d-71.35345749999999!3d-29.9880299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca0f47e3a9b1%3A0x6d9f3f9f9f9f9f9f!2sCoquimbo%2C%20Chile!5e0!3m2!1ses!2scl!4v1712078000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="absolute inset-0 bg-secondary/10 pointer-events-none group-hover/map:bg-transparent transition-all duration-700"></div>
           </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[9px] uppercase tracking-[0.3em] text-gray-600">© 2024 StahlForm Inversiones PyC LTDA. Todos los derechos reservados.</p>
        <div class="flex gap-10 text-[9px] uppercase tracking-[0.4em] font-bold text-gray-500">
           <NuxtLink to="/politicas" class="hover:text-accent transition">Términos</NuxtLink>
           <NuxtLink to="/contacto" class="hover:text-accent transition">Privacidad</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
