<template>
  <section class="py-32 bg-white relative overflow-hidden flex flex-col items-center">
    <!-- Full-width Workshop Background (Blueprint) -->
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <img src="/img/blueprint_bg.png" alt="Engineering Blueprint" class="w-full h-full object-cover" />
    </div>

    <!-- Background Blueprint lines (extra detail) -->
    <div class="absolute inset-0 technical-grid opacity-5 z-0"></div>
    
    <div class="custom-container relative z-10 w-full">
      <div class="text-center mb-24">
        <h2 class="text-xs font-bold tracking-[0.5em] uppercase text-primary mb-4 opacity-70">Excelencia Operativa</h2>
        <h3 class="text-3xl lg:text-5xl font-bold uppercase tracking-tight text-secondary">Unidades de Negocio</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        <!-- Servicio en Terreno -->
        <div class="business-card-extended group">
          <div class="flex flex-col items-start gap-8 w-full h-full">
            <div class="icon-hero-wrapper flex-shrink-0">
               <!-- Icon: Location -->
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div class="space-y-4 flex-grow">
              <h4 class="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Servicio en Terreno</h4>
              <p class="text-sm text-gray-500 font-light leading-loose">
                Evaluación, diagnóstico e instalación directamente en faena. Despliegue técnico ágil para la máxima disponibilidad operacional.
              </p>
            </div>
            <NuxtLink to="/servicios" class="btn-ghost-small w-full text-center">Ver Detalles</NuxtLink>
          </div>
          <div class="card-accent-line"></div>
        </div>

        <!-- Servicio en Taller -->
        <div class="business-card-extended group">
          <div class="flex flex-col items-start gap-8 w-full h-full">
            <div class="icon-hero-wrapper flex-shrink-0">
               <!-- Icon: Gear -->
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div class="space-y-4 flex-grow">
              <h4 class="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Servicio en Taller</h4>
              <p class="text-sm text-gray-500 font-light leading-loose">
                Reparación y fabricación de componentes mecánicos con trazabilidad. Recuperación estructural bajo estándares rigurosos.
              </p>
            </div>
            <NuxtLink to="/servicios" class="btn-ghost-small w-full text-center">Ver Detalles</NuxtLink>
          </div>
          <div class="card-accent-line"></div>
        </div>

        <!-- Ingeniería Aplicada -->
        <div class="business-card-extended group">
          <div class="flex flex-col items-start gap-8 w-full h-full">
            <div class="icon-hero-wrapper flex-shrink-0">
               <!-- Icon: Document -->
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="space-y-4 flex-grow">
              <h4 class="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Ingeniería Aplicada</h4>
              <p class="text-sm text-gray-500 font-light leading-loose">
                Rediseño integral, memorias de cálculo y soluciones a medida. Innovación aplicada a la mejora continua de procesos.
              </p>
            </div>
            <NuxtLink to="/servicios" class="btn-ghost-small w-full text-center">Ver Detalles</NuxtLink>
          </div>
          <div class="card-accent-line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.business-card-extended {
  padding: 3rem 2.5rem;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  background: white;
  position: relative;
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
}

.business-card-extended:hover {
  transform: translateY(-10px);
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.08);
  z-index: 20;
  border-color: rgba(11, 61, 51, 0.1);
}

.icon-hero-wrapper {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcfcfc;
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.5s ease;
}

.business-card-extended:hover .icon-hero-wrapper {
  background: var(--primary);
  border-color: var(--primary);
}

.business-card-extended:hover .icon-hero-wrapper svg {
  color: white;
  transform: rotate(10deg);
}

.card-accent-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background: var(--primary);
  transition: width 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.business-card-extended:hover .card-accent-line {
  width: 100%;
}

.btn-ghost-small {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  padding: 0.9rem 1.5rem;
  border: 1.5px solid rgba(0,0,0,0.1);
  color: var(--secondary);
  transition: all 0.4s ease;
}

.btn-ghost-small:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.technical-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 0);
    background-size: 40px 40px;
}
</style>
