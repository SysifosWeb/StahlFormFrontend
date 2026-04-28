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
    <header class="secondary-header-container relative overflow-hidden flex items-center bg-primary font-sans">
        <!-- Full Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img :src="headerBg" alt="Banner Industrial" class="w-full h-full object-cover object-[50%_25%] brightness-110 mix-blend-luminosity opacity-80" />
            <div class="absolute inset-0 bg-primary/40"></div>
            <!-- Soft left-side gradient for perfect text contrast -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-95"></div>
        </div>


        <div class="w-full relative z-10 custom-container flex items-center h-full">
            <!-- Left Text Block -->
            <div class="border-l-[3px] border-accent pl-6 lg:pl-8 py-2 max-w-4xl">
                <!-- <h5 class="text-[10px] md:text-xs sf-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 mb-2 md:mb-3">
                    STAHLFORM | INGENIERÍA Y PROYECTOS EN MOVIMIENTO
                </h5> -->
                <h1 v-html="title" class="text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
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


h1 {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
</style>
