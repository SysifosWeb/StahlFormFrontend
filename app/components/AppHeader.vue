<template>
    <header class="relative w-screen h-[400px] lg:h-[85vh] flex items-center justify-center text-left text-white overflow-hidden bg-secondary">
        <!-- Hero Background Image -->
        <div class="absolute inset-0 z-0">
            <img 
                src="~/assets/img/Torno_03.png" 
                alt="Proceso de mecanizado industrial"
                class="w-full h-full object-cover object-center lg:object-right brightness-100 -scale-x-100"
            />
            <div class="absolute inset-0 bg-black/60"></div>
            <!-- Soft left-side gradient for perfect text contrast -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <!-- Technical Overlays (Blueprint Style) -->
        <div class="blueprint-overlay"></div>
        <div class="technical-grid"></div>

        <!-- Content -->
        <div class="relative z-10 custom-container w-full">
            <div class="flex">
                <div class="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 border-l-[3px] border-accent pl-4 lg:pl-8 py-2">
                    <span class="inline-block mb-4 text-[9px] md:text-xs tracking-[0.3em] font-bold text-gray-400 uppercase">
                        STAHLFORM | INGENIERÍA EN MOVIMIENTO
                    </span>
                    <h1 class="mb-6 font-bold text-[22px] sm:text-5xl lg:text-7xl leading-[1.3] lg:leading-[1.1] uppercase tracking-tight text-white drop-shadow-2xl">
                        <span class="block mb-1">Capacidad Técnica</span>
                        <span class="block mb-1">al <span class="text-accent underline underline-offset-[6px] lg:underline-offset-[12px] decoration-1">Servicio</span></span>
                        <span class="block text-xl lg:text-7xl mt-2 lg:mt-5 opacity-90">de Operaciones Críticas</span>
                    </h1>
                    <div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-6">
                        <p class="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                            Soluciones industriales de precisión
                        </p>
                    </div>
                </div>
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
