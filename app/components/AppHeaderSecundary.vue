<script setup>
// En Nuxt 3, si tu archivo se llama components/Navbar.vue, 
// NO necesitas el import. Nuxt lo hace por ti automáticamente.

defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="secondary-header">
        <div class="header-content">
            <h1 class="text-light font-bold">{{ title }}</h1>
        </div>
    </header>
</template>

<style scoped>
.secondary-header {
    position: relative;
    width: 100%;
    height: 280px;
    /* En Nuxt usamos ~/ para referenciar la raíz del proyecto */
    background-image: url('~/assets/img/banner.webp');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.secondary-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1; /* Aseguramos que el overlay esté debajo del contenido */
}

.header-content {
    position: absolute;
    bottom: 30px;
    left: 50px;
    z-index: 2;
}

h1 {
    /* Si no tienes definida esta variable CSS en Nuxt, puedes usar 3rem o un valor de Tailwind */
    font-size: var(--size-3xl, 3rem); 
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
    .header-content {
        left: 20px;
        bottom: 20px;
    }

    h1 {
        font-size: 2rem;
    }
}
</style>