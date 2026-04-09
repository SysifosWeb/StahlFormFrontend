<script setup>
import headerBg from '~/assets/img/Torno_2.png'

defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="secondary-header-container relative overflow-hidden flex items-center bg-[#111111] font-sans">
        <!-- Full Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img :src="headerBg" alt="Banner Industrial" class="w-full h-full object-cover object-[50%_25%] brightness-100" />
            <div class="absolute inset-0 bg-black/60"></div>
            <!-- Soft left-side gradient for perfect text contrast -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <!-- Technical Layers -->
        <div class="technical-bg-layer absolute inset-0 opacity-10 pointer-events-none z-0"></div>
        <div class="absolute inset-0 z-0 technical-grid opacity-5"></div>
        
        <div class="w-full relative z-10 custom-container flex items-center h-full">
            <!-- Left Text Block -->
            <div class="border-l-[3px] border-accent pl-6 lg:pl-8 py-2 max-w-4xl">
                <h5 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 mb-2 md:mb-3">
                    STAHLFORM | INGENIERÍA Y PROYECTOS EN MOVIMIENTO
                </h5>
                <h1 class="text-3xl md:text-5xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
                  {{ title }}
                </h1>
            </div>
        </div>
    </header>
</template>

<style scoped>
.secondary-header-container {
    height: 320px; /* Reduced base height */
}

@media (min-width: 1500px) {
    .secondary-header-container {
        height: 380px; /* Proportional taller on very wide screens */
    }
}

.technical-bg-layer {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10l80 80M90 10L10 90' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='5' stroke='%23ffffff' stroke-opacity='0.1' fill='none'/%3E%3C/svg%3E");
    background-size: 150px 150px;
}

.technical-grid {
    background-image: radial-gradient(var(--accent) 1px, transparent 0);
    background-size: 40px 40px;
}

h1 {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
</style>