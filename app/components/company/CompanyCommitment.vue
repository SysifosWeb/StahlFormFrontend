<template>
  <section class="container mx-auto px-6 py-12 lg:py-20 bg-white">
    <div class="space-y-12">
      <!-- Header -->
      <div class="space-y-2">
        <p class="text-lg lg:text-xl font-medium text-detail-primary">
          Nos reconocen por
        </p>
        <h2 class="text-3xl lg:text-4xl font-bold text-dark leading-tight">
          Nuestro compromiso en
        </h2>
      </div>

      <!-- Grid of Icons -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Item 1 -->
        <div class="flex flex-col items-center text-center space-y-4 group">
          <div class="h-20 lg:h-28 flex items-center justify-center">
            <img src="~/assets/img/icon/1.webp" alt="Valor 1" class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p class="text-base lg:text-lg font-semibold text-dark leading-tight max-w-[150px]">
            Valor 1
          </p>
        </div>

        <!-- Item 2 -->
        <div class="flex flex-col items-center text-center space-y-4 group">
          <div class="h-20 lg:h-28 flex items-center justify-center">
            <img src="~/assets/img/icon/2.webp" alt="Valor 2" class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p class="text-base lg:text-lg font-semibold text-dark leading-tight max-w-[150px]">
            Valor 2
          </p>
        </div>

        <!-- Item 3 -->
        <div class="flex flex-col items-center text-center space-y-4 group">
          <div class="h-20 lg:h-28 flex items-center justify-center">
            <img src="~/assets/img/icon/3.webp" alt="Valor 3" class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p class="text-base lg:text-lg font-semibold text-dark leading-tight max-w-[200px]">
            Valor 3
          </p>
        </div>

        <!-- Item 4 -->
        <div class="flex flex-col items-center text-center space-y-4 group">
          <div class="h-20 lg:h-28 flex items-center justify-center">
            <img src="~/assets/img/icon/4.webp" alt="Valor 4" class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p class="text-base lg:text-lg font-semibold text-dark leading-tight max-w-[150px]">
            Valor 4
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Industrial design consistency */
</style>
