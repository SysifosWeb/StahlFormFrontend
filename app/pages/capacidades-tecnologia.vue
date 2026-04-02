<script setup>
// Mecanizado
import mecanizadoImg from '~/assets/img/mecanizado/mecanizado.webp'
import tornoImg from '~/assets/img/mecanizado/torno.webp'
import torneriaImg from '~/assets/img/mecanizado/torneria.webp'
import coronaImg from '~/assets/img/mecanizado/corona.webp'

// Soldadura
import arcoImg from '~/assets/img/soldadura/ARCO.webp'
import laserImg from '~/assets/img/soldadura/Laser.webp'
import soldaduraImg from '~/assets/img/soldadura/Soldadura.webp'
import corteLaserImg from '~/assets/img/soldadura/corte-laser.webp'
import pinchazoImg from '~/assets/img/soldadura/pinchazo.webp'

// Conformado
import cilindradoraImg from '~/assets/img/conformado/cilindradora.webp'

// Revestimiento
import autoclaveImg from '~/assets/img/revestimiento/Autoclave.webp'
import termoplasticoImg from '~/assets/img/revestimiento/Termoplastico.webp'
import prensaImg from '~/assets/img/revestimiento/prensa.webp'

// Calidad
import alivioImg from '~/assets/img/calidad/Alivio.webp'
import balanceadoraImg from '~/assets/img/calidad/Balanceadora.webp'
import calidadImg from '~/assets/img/calidad/Calidad.webp'
import endImg from '~/assets/img/calidad/END.webp'
import pruebaImg from '~/assets/img/calidad/Prueba.webp'
import agregarImg from '~/assets/img/calidad/Agregar.webp'

definePageMeta({
  layout: 'secondary',
  title: 'Capacidades Operativas'
})

useHead({
  title: 'Capacidades Operativas | FAREMIN',
  meta: [
    { name: 'description', content: 'Explora nuestras capacidades técnicas y tecnología de vanguardia en Maestranza FAREMIN. Innovación y precisión para soluciones industriales de alta calidad.' }
  ]
})
</script>

<template>
  <div>
    <CapabilitiesMain />
    
    <!-- Mecanizado -->
    <CapabilitiesCapabilitySection 
      title="Mecanizado"
      :isReversed="true"
      description="Disponemos de equipos para mecanizado de precisión, fabricación de componentes y recuperación de piezas críticas."
      :items="[
        'Centros mecanizados CNC', 'Tornos CNC', 'Tornos verticales CNC',
        'Mandrinadoras', 'Fresadoras', 'Tornos convencionales', 'Cepilladora'
      ]"
      :images="[
        { src: mecanizadoImg, alt: 'Mecanizado de precisión' },
        { src: tornoImg, alt: 'Operación de Torno' },
        { src: torneriaImg, alt: 'Trabajos de Tornería' },
        { src: coronaImg, alt: 'Mecanizado de Corona' }
      ]"
    />

    <!-- Soldadura y corte -->
    <CapabilitiesCapabilitySection 
      title="Soldadura y corte"
      :isReversed="false"
      description="Infraestructura orientada a procesos de corte, preparación y fabricación estructural."
      :items="[
        'Mesa de corte láser CNC', 'Arco sumergido', 'Cortadora de tubo',
        'Carro de corte plasma', 'Mesa de corte plasma CNC (Pantógrafo)', 'Sierra hidráulica'
      ]"
      :images="[
        { src: arcoImg, alt: 'Soldadura de Arco' },
        { src: laserImg, alt: 'Corte Láser Industrial' },
        { src: soldaduraImg, alt: 'Proceso de Soldadura' },
        { src: corteLaserImg, alt: 'Mesa de Corte Láser' },
        { src: pinchazoImg, alt: 'Punto de Soldadura' }
      ]"
    />

    <!-- Conformado -->
    <CapabilitiesCapabilitySection 
      title="Conformado"
      :isReversed="true"
      description="Capacidad para conformado y preparación de piezas según requerimientos de proyecto."
      :items="['Plegadora', 'Cilindradora']"
      :images="[
        { src: cilindradoraImg, alt: 'Cilindradora en operación' }
      ]"
    />

    <!-- Revestimiento y vulcanizado -->
    <CapabilitiesCapabilitySection 
      title="Revestimiento y vulcanizado"
      :isReversed="false"
      description="Procesos orientados a prolongar la vida útil de componentes mediante revestimientos y soluciones de protección."
      :items="[
        'Prensa hidráulica', 'Autoclave', 
        'Protección anticorrosiva termoplástico Enviropeel E170'
      ]"
      :images="[
        { src: autoclaveImg, alt: 'Autoclave de Vulcanizado' },
        { src: termoplasticoImg, alt: 'Protección Termoplástica' },
        { src: prensaImg, alt: 'Prensa Hidráulica' }
      ]"
    />

    <!-- Calidad -->
    <CapabilitiesCapabilitySection 
      title="Calidad"
      :isReversed="true"
      description="Contamos con equipamiento y procedimientos orientados a asegurar el cumplimiento de estándares, control técnico y trazabilidad en cada etapa del proceso."
      :items="[
        'Máquina de balanceo dinámico', 'Banco de prueba', 
        'Alivio de tensiones por vibraciones subarmónicas', 
        'END (U.T., P.M., L.P., P.A., V.T., T.I.)', 'Metrología'
      ]"
      :images="[
        { src: alivioImg, alt: 'Tratamiento de alivio de tensiones por vibración para prevenir la aparición de fisuras en la estructura.' },
        { src: agregarImg, alt: 'Inspección por ultrasonido para la detección de fisuras y porosidad en cordones de soldadura.'},
        { src: balanceadoraImg, alt: 'Máquina de balanceo dinámico' },
        { src: calidadImg, alt: 'Control de Calidad' },
        { src: endImg, alt: 'Ensayos No Destructivos' },
        { src: pruebaImg, alt: 'Banco de pruebas' },

      ]"
    />
  </div>
</template>

