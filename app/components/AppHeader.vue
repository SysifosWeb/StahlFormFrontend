<script setup>
import posterImage from '~/assets/img/imgfondo.png'
</script>

<template>
    <header class="relative w-screen h-[400px] lg:h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video
                autoplay
                muted
                loop
                playsinline
                class="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 -z-[1]"
                :poster="posterImage"
            >
                <source src="/video/fondo-home.mp4?v=1" type="video/mp4" />
            </video>
        </div>

        <!-- Overlay -->
        <div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div class="relative z-[2] w-full px-5 mt-10">
            <div class="flex justify-center">
                <div class="w-full md:w-8/12">
                    <h1 class="mb-4 font-bold text-xl sm:text-2xl lg:text-4xl leading-snug sm:leading-tight lg:leading-normal shadow-text">
                        Tu Título Principal Aquí
                    </h1>
                    <p class="mb-2 font-light text-sm lg:text-xl shadow-text">
                        Descripción breve de tu propuesta de valor o slogan principal.
                    </p>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.shadow-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
