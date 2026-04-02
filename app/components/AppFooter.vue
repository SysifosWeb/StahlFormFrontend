<script setup>
import logoStahlForm from '~/assets/img/stahlform_logo.png'
</script>

<template>
  <footer class="bg-secondary mt-auto py-16 text-sm text-white/70 border-t border-white/5">
    <div class="custom-container">

      <!-- GRID -->
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

        <!-- COLUMNA 1: LOGO & BIO -->
        <div class="space-y-6">
          <img
            :src="logoStahlForm"
            alt="StahlForm Logo"
            class="w-[180px]"
          />
          <p class="leading-relaxed text-medium">
            Ingeniería y Proyectos en Movimiento. Especialistas en soluciones industriales de alta precisión y confiabilidad para sectores críticos.
          </p>
        </div>

        <!-- COLUMNA 2: CONTACTO -->
        <div class="space-y-4">
          <h5 class="text-light font-bold uppercase tracking-widest text-base">Contacto</h5>
          <div class="space-y-3">
            <p class="flex items-center gap-3">
              <span class="text-accent font-bold">T:</span> (+569) 4453 9842
            </p>
            <p class="flex items-center gap-3">
              <span class="text-accent font-bold">E:</span> 
              <a href="mailto:kpasten@stahlformpyc.cl" class="hover:text-accent transition">kpasten@stahlformpyc.cl</a>
            </p>
            <p class="flex items-start gap-3 leading-snug">
              <span class="text-accent font-bold">A:</span> 
              <span>Alto La Herradura, Galpón N°3,<br/> Coquimbo, Chile.</span>
            </p>
          </div>
        </div>

        <!-- COLUMNA 3: LINKS -->
        <div class="space-y-4">
          <h5 class="text-light font-bold uppercase tracking-widest text-base">Navegación</h5>
          <ul class="grid grid-cols-1 gap-2">
            <li><NuxtLink to="/nuestra-empresa" class="footer-link">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/servicios" class="footer-link">Servicios</NuxtLink></li>
            <li><NuxtLink to="/noticias" class="footer-link">Noticias</NuxtLink></li>
            <li><NuxtLink to="/contacto" class="footer-link">Contacto</NuxtLink></li>
            <li><NuxtLink to="/politicas" class="footer-link">Políticas</NuxtLink></li>
          </ul>
        </div>

        <!-- COLUMNA 4: MAPA (Industrial Style) -->
        <div class="h-[200px] overflow-hidden rounded-xl border border-white/10 grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.064560738018!2d-71.35345749999999!3d-29.9880299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca0f47e3a9b1%3A0x6d9f3f9f9f9f9f9f!2sCoquimbo%2C%20Chile!5e0!3m2!1ses!2scl!4v1712078000000!5m2!1ses!2scl"
            class="h-full w-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <!-- SEPARADOR -->
      <div class="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <!-- BOTTOM -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-xs tracking-widest uppercase">
        <p>© {{ new Date().getFullYear() }} StahlForm Inversiones PyC. Todos los derechos reservados.</p>
        <div class="flex gap-8">
          <NuxtLink to="/politicas" class="hover:text-accent transition">Políticas</NuxtLink>
          <NuxtLink to="/contacto" class="hover:text-accent transition">Legal</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply transition hover:text-accent hover:translate-x-1 inline-block;
}
.text-medium {
  color: var(--text-medium);
}
</style>
