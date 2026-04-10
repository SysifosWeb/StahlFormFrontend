import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DPw7c0OH.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './composables-B9sj1z5i.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      motivo: "",
      otroMotivo: "",
      documento: null
    });
    ref({});
    const loading = ref(false);
    ref(false);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden font-sans" }, _attrs))} data-v-e5a575b2><div class="absolute inset-0 z-0 opacity-[0.05] grayscale pointer-events-none" data-v-e5a575b2><img${ssrRenderAttr("src", _imports_0)} alt="Engineering Blueprint" class="w-full h-full object-cover" data-v-e5a575b2><div class="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" data-v-e5a575b2></div></div><div class="absolute top-12 left-12 opacity-30 cursor-default" data-v-e5a575b2><span class="text-[9px] font-mono text-secondary uppercase tracking-widest" data-v-e5a575b2>[ 29.9880° S, 71.3535° W ]</span></div><div class="absolute bottom-12 right-12 opacity-30 cursor-default" data-v-e5a575b2><span class="text-[9px] font-mono text-secondary uppercase tracking-widest" data-v-e5a575b2>S-TLFRM // SYS_2024</span></div><section id="formulario-contacto" class="relative z-10 py-12 lg:py-20" data-v-e5a575b2><div class="custom-container" data-v-e5a575b2><div class="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center" data-v-e5a575b2><div class="lg:w-2/5 space-y-12" data-v-e5a575b2><div class="space-y-6" data-v-e5a575b2><div class="flex items-center gap-4" data-v-e5a575b2><div class="h-[2px] w-12 bg-primary" data-v-e5a575b2></div><span class="text-[10px] font-bold text-primary uppercase tracking-[0.4em]" data-v-e5a575b2>StahlForm Core Ingeniería</span></div><h2 class="text-4xl lg:text-7xl font-bold text-secondary uppercase tracking-tighter leading-none" data-v-e5a575b2> Inicie su <br data-v-e5a575b2><span class="text-primary italic" data-v-e5a575b2>Proyecto</span></h2><p class="text-gray-500 font-light text-lg leading-relaxed max-w-md" data-v-e5a575b2> Proporcione los detalles técnicos iniciales para que nuestro equipo pueda realizar una evaluación preliminar de sus activos. </p></div><div class="space-y-10 pt-4" data-v-e5a575b2><div class="flex items-center gap-6 group" data-v-e5a575b2><div class="w-1.5 h-12 bg-primary group-hover:scale-y-125 transition-transform origin-bottom duration-500" data-v-e5a575b2></div><div data-v-e5a575b2><p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1" data-v-e5a575b2>Ingeniería &amp; Ventas</p><p class="text-xl font-bold text-secondary" data-v-e5a575b2>contacto@stahlform.cl</p></div></div><div class="flex items-center gap-6 group" data-v-e5a575b2><div class="w-1.5 h-12 bg-primary group-hover:scale-y-125 transition-transform origin-bottom duration-500" data-v-e5a575b2></div><div data-v-e5a575b2><p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1" data-v-e5a575b2>Asistencia Crítica</p><p class="text-xl font-bold text-secondary" data-v-e5a575b2>+56 2 2345 6789</p></div></div></div></div><div class="lg:w-3/5 w-full" data-v-e5a575b2><div class="bg-white/95 backdrop-blur-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] rounded-[40px] border border-gray-100 relative overflow-hidden group" data-v-e5a575b2><div class="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:flex flex-col items-end" data-v-e5a575b2><div class="flex items-center gap-2 mb-1" data-v-e5a575b2><div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" data-v-e5a575b2></div><span class="text-[8px] font-mono text-gray-400 uppercase tracking-widest" data-v-e5a575b2>Sys_Ready</span></div><span class="text-[7px] font-mono text-gray-300 uppercase tracking-widest" data-v-e5a575b2>Form_ID: S-TL_602</span></div><div class="p-8 md:p-14" data-v-e5a575b2><form class="space-y-10" data-v-e5a575b2><div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-v-e5a575b2><div class="relative group" data-v-e5a575b2><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-e5a575b2>Nombre Completo</label><input${ssrRenderAttr("value", formData.value.nombre)} type="text" placeholder="Ej. Juan Pérez" class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-gray-200" data-v-e5a575b2></div><div class="relative group" data-v-e5a575b2><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-e5a575b2>Correo Directo</label><input${ssrRenderAttr("value", formData.value.email)} type="email" placeholder="empresa@correo.cl" class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-gray-200" data-v-e5a575b2></div><div class="relative group md:col-span-2" data-v-e5a575b2><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-e5a575b2>Número de Contacto</label><input${ssrRenderAttr("value", formData.value.telefono)} type="tel" placeholder="+56 9 ...." class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-gray-200" data-v-e5a575b2></div><div class="relative group md:col-span-2" data-v-e5a575b2><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-e5a575b2>Especificaciones del Requerimiento</label><textarea rows="3" placeholder="Describa el equipo, falla o necesidad técnica..." class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-gray-200 resize-none" data-v-e5a575b2>${ssrInterpolate(formData.value.mensaje)}</textarea></div></div><div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 mt-4" data-v-e5a575b2><p class="text-[9px] text-gray-400 uppercase tracking-widest font-bold" data-v-e5a575b2>Respuesta Técnica: <span class="text-secondary" data-v-e5a575b2>En menos de 24h</span></p><button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full md:w-auto h-16 px-12 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-5 group hover:bg-[#1a5c4d] transition-all shadow-xl shadow-primary/10 hover:shadow-[#1a5c4d]/30" data-v-e5a575b2><span class="text-xs uppercase tracking-[0.2em] italic" data-v-e5a575b2>${ssrInterpolate(loading.value ? "Procesando..." : "Enviar Requerimiento")}</span>`);
      if (!loading.value) {
        _push(`<svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e5a575b2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-e5a575b2></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></form></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-e5a575b2"]]), { __name: "ContactForm" });
const _sfc_main = {
  __name: "contacto",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contacto | StahlForm",
      meta: [
        { name: "description", content: "Contacta con StahlForm para servicios industriales, mantenimiento ferroviario y soluciones de ingeniería en Chile." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactForm = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ContactForm, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacto-BFAa6omr.mjs.map
