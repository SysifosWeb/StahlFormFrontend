<script setup>
import { ref } from 'vue'
import recursoDecor from '~/assets/img/Fotografias_WEBP/Recurso 1WebP.webp'
// SEO con useHead nativo de Nuxt
const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
  motivo: '',
  otroMotivo: '',
  documento: null,
})

const errors = ref({})
const loading = ref(false)
const fileName = ref('')

const notification = ref({ show: false, type: 'success', title: '', message: '' })
const showNotification = (type, title, message) => {
  notification.value = { show: true, type, title, message }
  setTimeout(() => {
    notification.value.show = false
  }, 5000)
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (allowedTypes.includes(file.type)) {
      formData.value.documento = file
      fileName.value = file.name
      errors.value.documento = null
    } else {
      formData.value.documento = null
      fileName.value = ''
      errors.value.documento = ['El archivo debe ser PDF o Word (DOC/DOCX)']
    }
  }
}

const handleSubmit = async () => {
  loading.value = true
  errors.value = {}
  notification.value.show = false

  const body = new FormData()
  for (const key in formData.value) {
    if (formData.value[key] !== null) {
      body.append(key, formData.value[key])
    }
  }

  try {
    // Reemplaza '/api/contacts' por tu endpoint real
    await $fetch('/api/contacts', {
      method: 'POST',
      body
    })

    // Resetear formulario
    formData.value = { nombre: '', email: '', telefono: '', mensaje: '', motivo: '', otroMotivo: '', documento: null }
    fileName.value = ''
    showNotification('success', 'Requerimiento Recibido', 'Un ingeniero se pondrá en contacto pronto.')
  } catch (err) {
    showNotification('error', 'Error del Sistema', 'No se pudo procesar su solicitud. Intente nuevamente.')
    if (err.response?._data?.errors) {
      errors.value = err.response._data.errors
    } else {
      errors.value = { general: ['Error al enviar el mensaje. Intente nuevamente.'] }
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="relative bg-[#eaeef3] overflow-hidden font-sans">

    <!-- NotificaciÃ³n Toast Profesional -->
    <Teleport to="body">
      <Transition enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform translate-y-12 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-400 ease-in" leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-12 opacity-0">
        <div v-if="notification.show"
          class="fixed bottom-8 right-8 z-[100] flex items-center gap-4 px-6 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[320px] backdrop-blur-md"
          :class="notification.type === 'success' ? 'bg-[#003e49]/95 border-l-4 border-[#c8d400]' : 'bg-red-900/95 border-l-4 border-red-500'">
          <div v-if="notification.type === 'success'"
            class="w-10 h-10 rounded-full bg-[#c8d400]/20 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-[#c8d400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div v-else class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div>
            <h4 class="sf-bold text-[11px] tracking-widest uppercase text-white">{{ notification.title }}</h4>
            <p class="text-[13px] text-gray-300 mt-0.5 leading-tight">{{ notification.message }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>




    <section id="formulario-contacto" class="relative z-10 py-12 lg:py-20">
      <div class="custom-container">
        <div class="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-24 items-center">

          <!-- Left Column: Narrative & Technical Contacts -->
          <div class="w-full md:w-2/5 space-y-8 md:space-y-10 lg:space-y-12">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="h-[2px] w-12 bg-accent"></div>
                <span class="text-[10px] sf-bold text-primary uppercase tracking-[0.4em]">StahlForm Core
                  Ingeniería</span>
              </div>

              <h2 class="text-4xl lg:text-6xl font-black text-primary uppercase tracking-tighter leading-tight">
                Inicie su <br />
                <span class="font-black italic">Proyecto</span>
              </h2>

              <p class="text-gray-500 sf-light text-lg leading-relaxed max-w-md">
                Proporcione los detalles técnicos iniciales para que nuestro equipo pueda realizar una evaluación
                preliminar de sus activos.
              </p>
            </div>

            <!-- Contact Stats Integrated -->
            <div class="space-y-10 pt-4">
              <div class="flex items-center gap-6 group">
                <div
                  class="w-1.5 h-12 bg-accent group-hover:scale-y-125 transition-transform origin-bottom duration-500">
                </div>
                <div>
                  <p class="text-[9px] sf-bold text-gray-400 uppercase tracking-widest mb-1">Ingeniería & Ventas</p>
                  <p class="text-xl sf-medium text-primary">contacto@stahlform.cl</p>
                </div>
              </div>
              <div class="flex items-center gap-6 group">
                <div
                  class="w-1.5 h-12 bg-accent group-hover:scale-y-125 transition-transform origin-bottom duration-500">
                </div>
                <div>
                  <p class="text-[9px] sf-bold text-gray-400 uppercase tracking-widest mb-1">Asistencia Crítica</p>
                  <p class="text-xl sf-medium text-primary">+56 9 44539842</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: High-Precision Technical Sheet (Form) -->
          <div class="w-full md:w-3/5">
            <div
              class="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] rounded-[40px] border border-gray-200 relative overflow-hidden group">
              <!-- System Status Label -->
              <div
                class="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:flex flex-col items-end">
                <div class="flex items-center gap-2 mb-1">
                  <div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span class="text-[8px] font-mono text-gray-400 uppercase tracking-widest">Sys_Ready</span>
                </div>
                <span class="text-[7px] font-mono text-gray-300 uppercase tracking-widest">Form_ID: S-TL_602</span>
              </div>

              <div class="p-8 md:p-14">
                <form @submit.prevent="handleSubmit" class="space-y-10">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div class="relative group">
                      <label
                        class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary">Nombre
                        Completo</label>
                      <input v-model="formData.nombre" type="text" placeholder="Ej. Juan Pérez"
                        class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50" />
                    </div>

                    <div class="relative group">
                      <label
                        class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary">Correo
                        Directo</label>
                      <input v-model="formData.email" type="email" placeholder="empresa@correo.cl"
                        class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50" />
                    </div>

                    <div class="relative group md:col-span-2">
                      <label
                        class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary">Número
                        de Contacto</label>
                      <input v-model="formData.telefono" type="tel" placeholder="+56 9 ...."
                        class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50" />
                    </div>

                    <div class="relative group md:col-span-2">
                      <label
                        class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary">Especificaciones
                        del Requerimiento</label>
                      <textarea v-model="formData.mensaje" rows="3"
                        placeholder="Describa el equipo, falla o necesidad técnica..."
                        class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50 resize-none"></textarea>
                    </div>
                  </div>

                  <!-- Optimized Action Area -->
                  <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 mt-4">
                    <p class="text-[9px] text-gray-400 uppercase tracking-widest sf-bold">Respuesta Técnica: <span
                        class="text-secondary">En menos de 24h</span></p>

                    <button type="submit" :disabled="loading"
                      class="w-full md:w-auto h-16 px-12 rounded-xl bg-accent text-primary sf-bold flex items-center justify-center gap-5 group hover:brightness-95 transition-all shadow-xl shadow-accent/20 hover:shadow-accent/40">
                      <span class="text-xs uppercase tracking-[0.2em] italic">
                        {{ loading ? 'Procesando...' : 'Enviar Requerimiento' }}</span>
                      <svg v-if="!loading" class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Decorative Recurso (Top Left) -->
    <div
      class="absolute left-0 top-0 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] z-0 opacity-[0.05] pointer-events-none transform -translate-x-1/3 -translate-y-1/3">
      <img :src="recursoDecor" alt="Decoration" class="w-full h-full object-contain" />
    </div>
  </div>
</template>

<style scoped>
/* Las fuentes se cargan en nuxt.config.ts para mejor rendimiento */
</style>
