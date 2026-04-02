<script setup>
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
const showSuccess = ref(false)
const fileName = ref('')

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
  showSuccess.value = false

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
    
    showSuccess.value = true
    // Resetear formulario
    formData.value = { nombre: '', email: '', telefono: '', mensaje: '', motivo: '', otroMotivo: '', documento: null }
    fileName.value = ''
    alert('Mensaje enviado con éxito')
  } catch (err) {
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
  <div class="bg-slate-50 min-h-screen">

    <section id="formulario-contacto" class="py-12 lg:py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white p-6 md:p-12 shadow-xl rounded-2xl border border-slate-100">
            
            <div class="text-center mb-10">
              <h2 class="text-2xl lg:text-3xl font-bold text-medium mb-4 leading-tight">
                ¿En qué podemos ayudarte?<br />Escríbenos
              </h2>
              <p class="text-medium font-light max-w-2xl mx-auto leading-relaxed mt-4">
                Si tienes consultas generales sobre nuestros servicios o necesitas más información, completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-2 gap-6">
                
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-medium">Nombre</label>
                  <input
                    v-model="formData.nombre"
                    type="text"
                    placeholder="Jane Smith"
                    class="w-full px-4 py-3 rounded-lg border bg-slate-50 transition-all outline-none focus:ring-2 focus:ring-[var(--detail-primary)]/20 focus:border-[var(--detail-primary)]"
                    :class="errors.nombre ? 'border-detail-primary bg-red-50' : 'border-gray-200'"
                  />
                  <span v-if="errors.nombre" class="text-xs text-detail-primary italic">{{ errors.nombre[0] }}</span>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-medium">Correo</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="jane@gmail.com"
                    class="w-full px-4 py-3 rounded-lg border bg-slate-50 transition-all outline-none focus:ring-2 focus:ring-[var(--detail-primary)]/20 focus:border-[var(--detail-primary)]"
                    :class="errors.email ? 'border-detail-primary bg-red-50' : 'border-gray-200'"
                  />
                  <span v-if="errors.email" class="text-xs text-detail-primary italic">{{ errors.email[0] }}</span>
                </div>

                <div class="flex flex-col gap-2 col-span-2">
                  <label class="text-sm font-semibold text-medium">Teléfono</label>
                  <input
                    v-model="formData.telefono"
                    type="tel"
                    placeholder="+56.."
                    class="w-full px-4 py-3 rounded-lg border bg-slate-50 transition-all outline-none focus:ring-2 focus:ring-[var(--detail-primary)]/20 focus:border-[var(--detail-primary)]"
                    :class="errors.telefono ? 'border-detail-primary bg-red-50' : 'border-gray-200'"
                  />
                  <span v-if="errors.telefono" class="text-xs text-detail-primary italic">{{ errors.telefono[0] }}</span>
                </div>

                <div class="flex flex-col gap-2 col-span-2">
                  <label class="text-sm font-semibold text-medium">Mensaje</label>
                  <textarea
                    v-model="formData.mensaje"
                    rows="4"
                    placeholder="Tu mensaje..."
                    class="w-full px-4 py-3 rounded-lg border bg-slate-50 transition-all outline-none focus:ring-2 focus:ring-[var(--detail-primary)]/20 focus:border-[var(--detail-primary)]"
                    :class="errors.mensaje ? 'border-detail-primary bg-red-50' : 'border-gray-200'"
                  ></textarea>
                  <span v-if="errors.mensaje" class="text-xs text-detail-primary italic">{{ errors.mensaje[0] }}</span>
                </div>

                <div class="flex flex-col gap-2 col-span-2">
                  <label class="text-sm font-semibold text-medium">Motivo</label>
                <select
                v-model="formData.motivo"
                class="w-full px-4 py-3 rounded-lg border bg-slate-50 transition-all
                        outline-none appearance-none text-medium
                        focus:outline-none focus:ring-0 focus:border-[var(--detail-primary)]"
                :class="errors.motivo ? 'border-detail-primary bg-red-50' : 'border-gray-200'"
                >
                    <option value="" disabled>Seleccione un motivo</option>
                    <option value="cotizar">Cotizar producto/Servicio</option>
                    <option value="postular">Postular Trabajo</option>
                    <option value="ofrecer">Ofrecer un servicio</option>
                    <option value="otro">Otro</option>
                  </select>
                  <span v-if="errors.motivo" class="text-xs text-detail-primary italic">{{ errors.motivo[0] }}</span>
                </div>

                <div v-if="formData.motivo === 'otro'" class="flex flex-col gap-2 col-span-2">
                  <label class="text-sm font-semibold text-medium">Especifique el motivo</label>
                  <input
                    v-model="formData.otroMotivo"
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    class="w-full px-4 py-3 rounded-lg border bg-slate-50 border-gray-200 outline-none focus:border-[var(--detail-primary)]"
                  />
                </div>

                <div v-if="formData.motivo === 'postular'" class="flex flex-col gap-2 col-span-2">
                  <label class="text-sm font-semibold text-medium">Adjuntar CV (PDF o Word)</label>
                  <div class="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      @change="handleFileChange"
                      class="w-full text-sm text-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-detail-primary hover:file:bg-red-100 cursor-pointer"
                    />
                  </div>
                  <p v-if="fileName" class="text-sm text-green-600 font-medium">✓ {{ fileName }}</p>
                  <span v-if="errors.documento" class="text-xs text-detail-primary italic">{{ errors.documento[0] }}</span>
                </div>
              </div>

              <div v-if="errors.general" class="p-4 bg-red-50 border border-red-200 text-detail-primary rounded-lg text-sm text-center">
                {{ errors.general[0] }}
              </div>

              <div class="text-center pt-4">
                <button
                type="submit"
                :disabled="loading"
                class="flex w-full max-w-xs mx-auto items-center justify-center gap-3
                    bg-detail-primary hover:bg-detail-primary/80 text-white font-bold
                    py-3 rounded-lg shadow-lg transition-all active:scale-95
                    disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <svg v-if="loading" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ loading ? 'Enviando...' : 'Enviar' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
/* Las fuentes se cargan en nuxt.config.ts para mejor rendimiento */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>