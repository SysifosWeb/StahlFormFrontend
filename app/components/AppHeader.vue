<script setup>
import posterImage from '~/assets/img/imgfondo.png'
</script>

<template>
    <header class="relative w-screen h-[400px] lg:h-[85vh] flex items-center justify-center text-left text-white overflow-hidden bg-secondary">
        <!-- Hero Background Image -->
        <div class="absolute inset-0 z-0">
            <img 
                src="/img/hero.png" 
                alt="Proceso de mecanizado industrial"
                class="w-full h-full object-cover opacity-60 grayscale-[30%] brightness-75"
            />
        </div>

        <!-- Technical Overlays (Blueprint Style) -->
        <div class="blueprint-overlay"></div>
        <div class="technical-grid"></div>

        <!-- Content -->
        <div class="relative z-10 custom-container w-full">
            <div class="flex">
                <div class="w-full md:w-10/12 lg:w-8/12 xl:w-7/12">
                    <span class="inline-block px-3 py-1 mb-6 text-xs tracking-[0.3em] font-bold border-l-4 border-accent bg-primary/40 uppercase">
                        Ingeniería en Movimiento
                    </span>
                    <h1 class="mb-8 font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] uppercase tracking-tight">
                        Capacidad Técnica al <br/>
                        <span class="text-accent underline underline-offset-[12px] decoration-1">Servicio</span> de Operaciones Críticas
                    </h1>
                    <div class="flex items-center gap-6">
                        <div class="w-20 h-0.5 bg-accent opacity-60"></div>
                        <p class="text-xs uppercase tracking-[0.2em] opacity-80 font-bold">
                            Soluciones industriales de precisión
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Corner Details -->
        <div class="absolute bottom-10 right-10 z-20 flex gap-4 opacity-30">
            <div class="w-12 h-12 border border-white"></div>
            <div class="w-12 h-12 border border-white flex items-center justify-center">
                <div class="w-1 h-1 bg-white rounded-full"></div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.blueprint-overlay {
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 80px 80px;
    z-index: 1;
}

.technical-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 0);
    background-size: 20px 20px;
    z-index: 1;
}

h1 {
    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
</style>
