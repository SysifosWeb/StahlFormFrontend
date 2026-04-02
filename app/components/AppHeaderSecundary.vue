<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="secondary-header-container bg-[#1a1a1a] relative overflow-hidden flex items-center">
        <!-- Background Technical Layers -->
        <div class="technical-bg-layer absolute inset-0 opacity-10 pointer-events-none"></div>
        <div class="absolute inset-0 z-0 technical-grid opacity-5"></div>
        
        <div class="w-full relative z-10 flex flex-col lg:flex-row h-full">
            <!-- Left Column: Title & Identity -->
            <div class="w-full lg:w-1/2 flex items-center px-8 lg:px-20 py-12 lg:py-0 h-full relative">
                <div class="border-l-4 border-accent pl-10">
                    <h5 class="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4 opacity-70">StahlForm | Ingeniería</h5>
                    <h1 class="text-4xl lg:text-6xl font-bold text-white uppercase tracking-tighter leading-[0.95] drop-shadow-xl">
                      {{ title }}
                    </h1>
                </div>
            </div>

            <!-- Right Column: Industrial Visual -->
            <div class="w-full lg:w-1/2 relative h-56 lg:h-full overflow-hidden">
                <img src="/img/secondary_header_bg.png" alt="Industrial Detail" class="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:scale-105" />
                <!-- 60% Black Overlay -->
                <div class="absolute inset-0 bg-black/60"></div>
                <!-- Technical Gradient blending -->
                <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent hidden lg:block"></div>
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