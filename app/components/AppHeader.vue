<template>
    <header class="relative w-screen h-[400px] lg:h-[85vh] flex items-center justify-center text-left text-white overflow-hidden bg-primary">
        <!-- Hero Background Image -->
        <div class="absolute inset-0 z-0">
            <img 
                src="~/assets/img/Torno_03.png" 
                alt="Proceso de mecanizado industrial"
                class="w-full h-full object-cover object-center lg:object-right brightness-110 -scale-x-100 mix-blend-luminosity opacity-80"
            />
            <div class="absolute inset-0 bg-primary/40"></div>
            <!-- Deep petroleum gradient -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-95"></div>
        </div>
        <!-- Content -->
        <div class="relative z-10 custom-container w-full">
            <div class="flex">
                <div class="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 border-l-[3px] border-accent pl-4 lg:pl-8 py-2">
                    <h1 class="mb-6 text-2xl sm:text-5xl lg:text-7xl  leading-[1.2] lg:leading-[1.1] uppercase tracking-tight text-white drop-shadow-2xl ">
                        <span class="block mb-1 font-black">Capacidad Técnica</span>
                        <span class="block mb-1 font-black">al <span class="text-accent font-black underline underline-offset-[6px] lg:underline-offset-[12px] decoration-1">Servicio</span></span>
                        <span class="block lg:text-7xl mt-2 lg:mt-5 opacity-90 font-black">de Operaciones Críticas</span>
                    </h1>
                    <div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-6">
                        <p class="text-[9px] md:text-xs uppercase tracking-[0.2em] sf-bold text-gray-400">
                            Soluciones industriales de precisión
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </header>
</template>

<style scoped>

h1 {
    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.header-title {
    font-weight: 500 !important;
}
</style>

