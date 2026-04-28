<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import logoStahlForm from '~/assets/img/02 Logo_VerdeWebP.webp'


const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMounted = ref(false)
const route = useRoute()

const currentRoute = computed(() => route.path)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-[1002] bg-transparent py-6">
    <div class="custom-container flex items-center justify-between">

      <!-- LOGO -->
      <NuxtLink to="/" class="flex items-center group">
        <img :src="logoStahlForm" alt="StahlForm Logo" class="h-10 lg:h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
      </NuxtLink>

      <!-- MENÃš DESKTOP -->
      <div class="hidden lg:flex items-center gap-10 ml-auto">
        <ul class="flex items-center gap-4">
          <li v-for="item in [
            { to: '/', label: 'INICIO' },
            { to: '/nuestra-empresa', label: 'NOSOTROS' },
            { to: '/servicios', label: 'SERVICIOS' },
            { to: '/contacto', label: 'CONTACTO' }
          ]" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="nav-link text-sm tracking-widest sf-bold"
              :class="{ active: currentRoute === item.to }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

      </div>

      <!-- BOTÃ“N HAMBURGUESA -->
      <button
        class="lg:hidden text-accent focus:outline-none flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- MENÃš MÃ“VIL (Industrial Glass Style) -->
    <Transition name="slide-down">
      <div
        v-if="isMounted && isMenuOpen"
        class="fixed inset-0 z-[2000] flex flex-col p-8 overflow-hidden mobile-menu-panel"
      >
        <!-- Technical Grid Background Overlay -->
        <div class="absolute inset-0 technical-grid opacity-20 pointer-events-none"></div>

        <!-- HEADER AREA -->
        <div class="flex items-center justify-between relative z-10 mb-20">
          <NuxtLink to="/" @click="closeMenu">
            <img :src="logoStahlForm" alt="StahlForm Logo" class="h-12 w-auto" />
          </NuxtLink>
          <button @click="closeMenu" class="text-accent hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="inherit" stroke-width="0.8" d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>

        <!-- NAVIGATION LINKS -->
        <ul class="flex-grow flex flex-col justify-center space-y-12 relative z-10 px-4">
          <li
            v-for="item in [
              { to: '/', label: 'INICIO' },
              { to: '/nuestra-empresa', label: 'NOSOTROS' },
              { to: '/servicios', label: 'SERVICIOS' },
              { to: '/contacto', label: 'CONTACTO' }
            ]"
            :key="item.to"
            class="relative"
          >
            <NuxtLink
              :to="item.to"
              class="mobile-nav-link text-xl sf-bold tracking-[0.3em] text-white hover:text-accent transition-all pl-6 block border-l-2 border-transparent"
              :class="{ 'active-mobile': currentRoute === item.to }"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- FOOTER AREA DEL MENÃš -->
        <div class="mt-auto relative z-10 border-t border-white/10 pt-10 pb-4 space-y-4 flex flex-col items-center">
          <!-- Vision Pillar -->
          <p class="text-[10px] text-center uppercase tracking-[0.3em] leading-tight text-gray-400 sf-bold max-w-xs mx-auto">
            CAPACIDAD TÉCNICA AL <span class="text-accent">SERVICIO</span> DE OPERACIONES CRÍTICAS
          </p>

          <!-- Redes Sociales -->
          <div class="flex justify-center gap-8 mt-12">
            <a href="#" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.instagram.com/stahlform_pyc?utm_source=qr&igsh=MWQ2cnZxc2Mybnk5cQ==" target="_blank" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/18F7fTkJD5/" target="_blank" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@maestranza_stahlform?_r=1&_t=ZS-95LP2FgXnyC" target="_blank" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.91 4.1-2.4 5.56-1.69 1.66-3.95 2.62-6.33 2.58-2.61-.04-5.01-1.36-6.52-3.41-1.31-1.78-1.84-4.08-1.43-6.28.39-2.12 1.6-3.97 3.32-5.16 1.78-1.23 3.99-1.66 6.08-1.29v4.06c-1.36-.45-2.93-.34-4.14.4-1.07.65-1.8 1.79-1.99 3.03-.23 1.49.27 3.01 1.28 4.09 1.05 1.13 2.6 1.71 4.14 1.53 1.42-.16 2.66-.99 3.35-2.22.42-.75.64-1.61.64-2.48.02-4.99.01-9.98.01-14.97-.02-.02-.04-.04-.06-.06z"/></svg>
            </a>
          </div>

          <!-- Copyright -->
          <p class="text-[9px] uppercase tracking-[0.4em] text-gray-500 leading-tight">© 2026 StahlForm</p>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  transition: color 0.3s ease;
  color: #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: width 0.3s ease;
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--accent);
}

/* MOBILE MENU PREMIUM STYLES */
.mobile-menu-panel {
  background: rgba(0, 62, 73, 0.95); /* Deep Petroleum Base */
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}

.technical-grid {
    background-image: 
      radial-gradient(rgba(0, 30, 35, 0.2) 1px, transparent 0);
    background-size: 20px 20px;
}

.mobile-nav-link.active-mobile {
  border-left-color: var(--accent);
  color: var(--accent);
  padding-left: 1.5rem;
}

.mobile-nav-link:hover {
  border-left-color: var(--accent);
  padding-left: 1.5rem;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
