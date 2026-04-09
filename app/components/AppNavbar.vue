<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import logoStahlForm from '~/assets/img/02 Logo_BlancoWebP.webp'


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
        <img :src="logoStahlForm" alt="StahlForm Logo" class="h-16 lg:h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
      </NuxtLink>

      <!-- MENÚ DESKTOP -->
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
              class="nav-link text-sm tracking-widest font-bold"
              :class="{ active: currentRoute === item.to }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

      </div>

      <!-- BOTÓN HAMBURGUESA -->
      <button
        class="lg:hidden p-2 bg-accent/10 border border-accent/20 rounded-lg group"
        @click="toggleMenu"
        :class="{ open: isMenuOpen }"
        aria-label="Menu"
      >
        <span class="toggler-icon group-hover:bg-accent"></span>
      </button>
    </div>

    <!-- MENÚ MÓVIL (Glass Style) -->
    <Transition name="slide-down">
      <div
        v-if="isMounted && isMenuOpen"
        class="fixed inset-0 glass z-[2000] flex flex-col items-center justify-center p-8"
      >
        <button @click="closeMenu" class="absolute top-8 right-8 text-accent">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
           </svg>
        </button>

        <ul class="text-center space-y-8">
          <li
            v-for="item in [
              { to: '/', label: 'INICIO' },
              { to: '/nuestra-empresa', label: 'NOSOTROS' },
              { to: '/servicios', label: 'SERVICIOS' },
              { to: '/contacto', label: 'CONTACTO' }
            ]"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-2xl font-bold tracking-[0.2em] text-light hover:text-accent transition-colors"
              :class="{ 'text-accent': currentRoute === item.to }"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.toggler-icon,
.toggler-icon::before,
.toggler-icon::after {
  width: 24px;
  height: 2px;
  background-color: var(--accent);
  display: block;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.toggler-icon {
  position: relative;
}

.toggler-icon::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
}

.toggler-icon::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
}

button.open .toggler-icon {
  background-color: transparent;
}

button.open .toggler-icon::before {
  transform: rotate(45deg);
  top: 0;
}

button.open .toggler-icon::after {
  transform: rotate(-45deg);
  top: 0;
}

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

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>