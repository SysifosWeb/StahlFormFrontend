<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-dark-primary text-white font-['Poppins']">
    <div class="text-center p-8">
      <h1 class="text-9xl sf-bold text-detail-primary mb-4 animate-bounce">
        404
      </h1>
      <h2 class="text-3xl md:text-4xl font-semibold mb-6">
        ¡Vaya! Página no encontrada
      </h2>
      <p class="text-lg text-white/70 mb-10 max-w-md mx-auto">
        Parece que el camino que buscabas no existe o ha sido movido. No te preocupes, puedes volver al inicio.
      </p>
      
      <button
        @click="handleError"
        class="bg-detail-primary hover:bg-red-700 text-white sf-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
      >
        Volver al Inicio
      </button>
    </div>

    <!-- Elementos decorativos de fondo -->
    <div class="fixed top-20 left-10 w-32 h-32 bg-detail-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="fixed bottom-20 right-10 w-48 h-48 bg-detail-primary/5 rounded-full blur-3xl pointer-events-none"></div>
  </div>
</template>

<style scoped>
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>

