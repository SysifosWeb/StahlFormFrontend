import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderTeleport, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { a as useSeoMeta, u as useHead } from './composables-YN-Ot5N5.mjs';
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
import 'unhead/plugins';
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
    ref("");
    const notification = ref({ show: false, type: "success", title: "", message: "" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-[#eaeef3] overflow-hidden font-sans" }, _attrs))} data-v-19c01d86>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (notification.value.show) {
          _push2(`<div class="${ssrRenderClass([notification.value.type === "success" ? "bg-[#003e49]/95 border-l-4 border-[#c8d400]" : "bg-red-900/95 border-l-4 border-red-500", "fixed bottom-8 right-8 z-[100] flex items-center gap-4 px-6 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[320px] backdrop-blur-md"])}" data-v-19c01d86>`);
          if (notification.value.type === "success") {
            _push2(`<div class="w-10 h-10 rounded-full bg-[#c8d400]/20 flex items-center justify-center flex-shrink-0" data-v-19c01d86><svg class="w-5 h-5 text-[#c8d400]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19c01d86><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" data-v-19c01d86></path></svg></div>`);
          } else {
            _push2(`<div class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0" data-v-19c01d86><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19c01d86><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" data-v-19c01d86></path></svg></div>`);
          }
          _push2(`<div data-v-19c01d86><h4 class="sf-bold text-[11px] tracking-widest uppercase text-white" data-v-19c01d86>${ssrInterpolate(notification.value.title)}</h4><p class="text-[13px] text-gray-300 mt-0.5 leading-tight" data-v-19c01d86>${ssrInterpolate(notification.value.message)}</p></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<div class="absolute top-12 left-12 opacity-30 cursor-default" data-v-19c01d86><span class="text-[9px] font-mono text-secondary uppercase tracking-widest" data-v-19c01d86>[ 29.9880Â° S, 71.3535Â° W ]</span></div><div class="absolute bottom-12 right-12 opacity-30 cursor-default" data-v-19c01d86><span class="text-[9px] font-mono text-secondary uppercase tracking-widest" data-v-19c01d86>S-TLFRM // SYS_2024</span></div><section id="formulario-contacto" class="relative z-10 py-12 lg:py-20" data-v-19c01d86><div class="custom-container" data-v-19c01d86><div class="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-24 items-center" data-v-19c01d86><div class="w-full md:w-2/5 space-y-8 md:space-y-10 lg:space-y-12" data-v-19c01d86><div class="space-y-6" data-v-19c01d86><div class="flex items-center gap-4" data-v-19c01d86><div class="h-[2px] w-12 bg-accent" data-v-19c01d86></div><span class="text-[10px] sf-bold text-primary uppercase tracking-[0.4em]" data-v-19c01d86>StahlForm Core Ingeniería</span></div><h2 class="text-4xl lg:text-6xl sf-bold text-secondary uppercase tracking-tighter leading-tight" data-v-19c01d86> Inicie su <br data-v-19c01d86><span class="text-primary italic" data-v-19c01d86>Proyecto</span></h2><p class="text-gray-500 sf-light text-lg leading-relaxed max-w-md" data-v-19c01d86> Proporcione los detalles técnicos iniciales para que nuestro equipo pueda realizar una evaluación preliminar de sus activos. </p></div><div class="space-y-10 pt-4" data-v-19c01d86><div class="flex items-center gap-6 group" data-v-19c01d86><div class="w-1.5 h-12 bg-accent group-hover:scale-y-125 transition-transform origin-bottom duration-500" data-v-19c01d86></div><div data-v-19c01d86><p class="text-[9px] sf-bold text-gray-400 uppercase tracking-widest mb-1" data-v-19c01d86>Ingeniería &amp; Ventas</p><p class="text-xl sf-bold text-secondary" data-v-19c01d86>kpasten@stahlformpyc.cl</p></div></div><div class="flex items-center gap-6 group" data-v-19c01d86><div class="w-1.5 h-12 bg-accent group-hover:scale-y-125 transition-transform origin-bottom duration-500" data-v-19c01d86></div><div data-v-19c01d86><p class="text-[9px] sf-bold text-gray-400 uppercase tracking-widest mb-1" data-v-19c01d86>Asistencia Crítica</p><p class="text-xl sf-bold text-secondary" data-v-19c01d86>+56 9 44539842</p></div></div></div></div><div class="w-full md:w-3/5" data-v-19c01d86><div class="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] rounded-[40px] border border-gray-200 relative overflow-hidden group" data-v-19c01d86><div class="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:flex flex-col items-end" data-v-19c01d86><div class="flex items-center gap-2 mb-1" data-v-19c01d86><div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" data-v-19c01d86></div><span class="text-[8px] font-mono text-gray-400 uppercase tracking-widest" data-v-19c01d86>Sys_Ready</span></div><span class="text-[7px] font-mono text-gray-300 uppercase tracking-widest" data-v-19c01d86>Form_ID: S-TL_602</span></div><div class="p-8 md:p-14" data-v-19c01d86><form class="space-y-10" data-v-19c01d86><div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-v-19c01d86><div class="relative group" data-v-19c01d86><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-19c01d86>Nombre Completo</label><input${ssrRenderAttr("value", formData.value.nombre)} type="text" placeholder="Ej. Juan Pérez" class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50" data-v-19c01d86></div><div class="relative group" data-v-19c01d86><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-19c01d86>Correo Directo</label><input${ssrRenderAttr("value", formData.value.email)} type="email" placeholder="empresa@correo.cl" class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50" data-v-19c01d86></div><div class="relative group md:col-span-2" data-v-19c01d86><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-19c01d86>Número de Contacto</label><input${ssrRenderAttr("value", formData.value.telefono)} type="tel" placeholder="+56 9 ...." class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50" data-v-19c01d86></div><div class="relative group md:col-span-2" data-v-19c01d86><label class="absolute -top-3 left-0 bg-white px-2 text-[10px] sf-bold uppercase tracking-widest text-primary z-10 transition-colors group-focus-within:text-secondary" data-v-19c01d86>Especificaciones del Requerimiento</label><textarea rows="3" placeholder="Describa el equipo, falla o necesidad técnica..." class="w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-primary transition-colors text-secondary placeholder:text-primary/50 resize-none" data-v-19c01d86>${ssrInterpolate(formData.value.mensaje)}</textarea></div></div><div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 mt-4" data-v-19c01d86><p class="text-[9px] text-gray-400 uppercase tracking-widest sf-bold" data-v-19c01d86>Respuesta Técnica: <span class="text-secondary" data-v-19c01d86>En menos de 24h</span></p><button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full md:w-auto h-16 px-12 rounded-xl bg-accent text-primary sf-bold flex items-center justify-center gap-5 group hover:brightness-95 transition-all shadow-xl shadow-accent/20 hover:shadow-accent/40" data-v-19c01d86><span class="text-xs uppercase tracking-[0.2em] italic" data-v-19c01d86>${ssrInterpolate(loading.value ? "Procesando..." : "Enviar Requerimiento")}</span>`);
      if (!loading.value) {
        _push(`<svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19c01d86><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-19c01d86></path></svg>`);
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
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-19c01d86"]]), { __name: "ContactForm" });
const _sfc_main = {
  __name: "contacto",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contacto | Solicite Evaluación Técnica — StahlForm PyC",
      description: "Contacte a StahlForm PyC para servicios de ingeniería mecánica, mantención industrial y reparación de maquinaria pesada. Respuesta técnica en menos de 24 horas. Ubicados en Av. Panorámica 910, La Serena, Coquimbo, Chile.",
      ogTitle: "Contacto | Solicite Evaluación Técnica — StahlForm PyC",
      ogDescription: "Inicie su proyecto con StahlForm. Evaluación técnica preliminar, asesoría especializada y respuesta en menos de 24 horas.",
      ogUrl: "https://www.stahlform.cl/contacto",
      ogType: "website",
      twitterTitle: "Contacto | StahlForm PyC",
      twitterDescription: "Inicie su proyecto con StahlForm. Evaluación técnica y respuesta en menos de 24 horas."
    });
    useHead({
      link: [
        { rel: "canonical", href: "https://www.stahlform.cl/contacto" }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto — StahlForm PyC",
            "description": "Formulario de contacto para solicitar evaluación técnica de activos industriales.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "StahlForm PyC Ltda.",
              "url": "https://www.stahlform.cl",
              "telephone": "+56944539842",
              "email": "kpasten@stahlform.cl",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Panorámica 910, Cond. Nova Florida",
                "addressLocality": "La Serena",
                "addressRegion": "Coquimbo",
                "addressCountry": "CL"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            }
          })
        }
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
//# sourceMappingURL=contacto-D8ZmNRyz.mjs.map
