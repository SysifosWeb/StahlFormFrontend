import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B4ezjIex.mjs';
import { _ as _imports_0 } from './virtual_public-DPw7c0OH.mjs';
import { _ as _imports_0$1 } from './virtual_public-C5Li1KDp.mjs';
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

const hydraulicsImage = "" + __buildAssetsURL("Bombas_hidraulicas.CF8cU7OO.png");
const _sfc_main$4 = {
  __name: "HomeValue",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 lg:py-20 bg-white flex flex-col justify-center overflow-hidden" }, _attrs))} data-v-7d1fb564><div class="custom-container" data-v-7d1fb564><div class="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center mb-12 lg:mb-20" data-v-7d1fb564><div class="flex lg:hidden w-full justify-center mt-8 mb-10" data-v-7d1fb564><img${ssrRenderAttr("src", unref(hydraulicsImage))} alt="Bombas Hidráulicas StahlForm" class="w-full max-w-[300px] h-auto object-contain" data-v-7d1fb564></div><div class="w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-12" data-v-7d1fb564><h2 class="text-3xl lg:text-5xl font-bold uppercase tracking-tight text-secondary leading-[1.2] lg:leading-[1.1]" data-v-7d1fb564><span class="block mb-2" data-v-7d1fb564>Ingeniería de clase</span><span class="block mb-2 lg:inline" data-v-7d1fb564>mundial para</span><span class="text-primary underline underline-offset-[10px] lg:underline-offset-[14px] decoration-1 opacity-90 block lg:inline" data-v-7d1fb564>operaciones infalibles.</span></h2><div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 group" data-v-7d1fb564><div class="hidden lg:block w-[2px] h-auto self-stretch bg-primary opacity-30 group-hover:opacity-100 transition-opacity duration-700" data-v-7d1fb564></div><p class="text-sm lg:text-lg text-gray-500 font-light leading-relaxed max-w-xl" data-v-7d1fb564> Nuestra propuesta de valor se centra en la trazabilidad técnica y la excelencia operativa. Transformamos activos complejos en sistemas de alto rendimiento, asegurando que cada proyecto de StahlForm se traduzca en éxito preventivo. </p></div></div><div class="hidden lg:flex w-full lg:w-6/12 justify-center lg:justify-end pr-0 lg:pr-10 relative" data-v-7d1fb564><img${ssrRenderAttr("src", unref(hydraulicsImage))} alt="Bombas Hidráulicas StahlForm" class="w-full max-w-[450px] xl:max-w-[550px] h-auto object-contain transition-transform duration-700 hover:scale-105" data-v-7d1fb564></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16" data-v-7d1fb564><div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left" data-v-7d1fb564><div class="mb-6" data-v-7d1fb564><svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-7d1fb564><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-v-7d1fb564></path></svg></div><h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4" data-v-7d1fb564>Continuidad</h4><p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest" data-v-7d1fb564>Aseguramos la operatividad ininterrumpida de sus activos críticos.</p></div><div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left" data-v-7d1fb564><div class="mb-6" data-v-7d1fb564><svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-7d1fb564><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-7d1fb564></path></svg></div><h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4" data-v-7d1fb564>Reducción de Fallas</h4><p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest" data-v-7d1fb564>Análisis predictivo para mitigar riesgos antes de que ocurran.</p></div><div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left" data-v-7d1fb564><div class="mb-6" data-v-7d1fb564><svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-7d1fb564><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-7d1fb564></path></svg></div><h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4" data-v-7d1fb564>Decisiones Confiables</h4><p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest" data-v-7d1fb564>Información técnica precisa para una gestión de activos estratégica.</p></div><div class="benefit-card flex flex-col items-center text-center lg:items-start lg:text-left" data-v-7d1fb564><div class="mb-6" data-v-7d1fb564><svg class="w-10 h-10 lg:w-8 lg:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-7d1fb564><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-7d1fb564></path></svg></div><h4 class="text-sm font-bold uppercase tracking-widest text-secondary mb-4" data-v-7d1fb564>Seguridad</h4><p class="text-xs text-gray-400 font-light leading-loose uppercase tracking-widest" data-v-7d1fb564>Protocolos de blindaje operativo en entornos de alta exigencia.</p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeValue.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7d1fb564"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-24 bg-white relative overflow-hidden flex flex-col items-center" }, _attrs))} data-v-074d8fc5><div class="absolute inset-0 z-0 opacity-10 pointer-events-none" data-v-074d8fc5><img${ssrRenderAttr("src", _imports_0)} alt="Engineering Blueprint" class="w-full h-full object-cover" data-v-074d8fc5></div><div class="absolute inset-0 technical-grid opacity-5 z-0" data-v-074d8fc5></div><div class="custom-container relative z-10 w-full" data-v-074d8fc5><div class="text-center mb-12 lg:mb-24" data-v-074d8fc5><h2 class="text-xs font-bold tracking-[0.5em] uppercase text-primary mb-4 opacity-70" data-v-074d8fc5>Excelencia Operativa</h2><h3 class="text-3xl lg:text-5xl font-bold uppercase tracking-tight text-secondary" data-v-074d8fc5>Unidades de Negocio</h3></div><div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full" data-v-074d8fc5><div class="business-card-extended group" data-v-074d8fc5><div class="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 w-full h-full" data-v-074d8fc5><div class="icon-hero-wrapper flex-shrink-0" data-v-074d8fc5><svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-074d8fc5><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-074d8fc5></path><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-074d8fc5></path></svg></div><div class="space-y-4 flex-grow w-full" data-v-074d8fc5><h4 class="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors" data-v-074d8fc5>Servicio en Terreno</h4><p class="text-sm text-gray-500 font-light leading-loose" data-v-074d8fc5> Evaluación, diagnóstico e instalación directamente en faena. Despliegue técnico ágil para la máxima disponibilidad operacional. </p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/servicios",
    class: "btn-ghost-small w-full text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver Detalles`);
      } else {
        return [
          createTextVNode("Ver Detalles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card-accent-line" data-v-074d8fc5></div></div><div class="business-card-extended group" data-v-074d8fc5><div class="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 w-full h-full" data-v-074d8fc5><div class="icon-hero-wrapper flex-shrink-0" data-v-074d8fc5><svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-074d8fc5><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-074d8fc5></path><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-074d8fc5></path></svg></div><div class="space-y-4 flex-grow w-full" data-v-074d8fc5><h4 class="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors" data-v-074d8fc5>Servicio en Taller</h4><p class="text-sm text-gray-500 font-light leading-loose" data-v-074d8fc5> Reparación y fabricación de componentes mecánicos con trazabilidad. Recuperación estructural bajo estándares rigurosos. </p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/servicios",
    class: "btn-ghost-small w-full text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver Detalles`);
      } else {
        return [
          createTextVNode("Ver Detalles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card-accent-line" data-v-074d8fc5></div></div><div class="business-card-extended group" data-v-074d8fc5><div class="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 w-full h-full" data-v-074d8fc5><div class="icon-hero-wrapper flex-shrink-0" data-v-074d8fc5><svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-074d8fc5><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-074d8fc5></path></svg></div><div class="space-y-4 flex-grow w-full" data-v-074d8fc5><h4 class="text-xl font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors" data-v-074d8fc5>Ingeniería Aplicada</h4><p class="text-sm text-gray-500 font-light leading-loose" data-v-074d8fc5> Rediseño integral, memorias de cálculo y soluciones a medida. Innovación aplicada a la mejora continua de procesos. </p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/servicios",
    class: "btn-ghost-small w-full text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver Detalles`);
      } else {
        return [
          createTextVNode("Ver Detalles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card-accent-line" data-v-074d8fc5></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBusinessUnits.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-074d8fc5"]]), { __name: "HomeBusinessUnits" });
const _sfc_main$2 = {
  __name: "HomeTrust",
  __ssrInlineRender: true,
  setup(__props) {
    const clientLogos = [
      "Aguas_del_Valle_Logotipo.svg",
      "Logo-KSB.png",
      "recon.png"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-24 bg-white relative overflow-hidden border-y border-gray-100 z-10 block" }, _attrs))} data-v-73f0c2a4><div class="custom-container relative z-10" data-v-73f0c2a4><div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20" data-v-73f0c2a4><div class="w-full lg:w-4/12" data-v-73f0c2a4><div class="inline-block px-4 py-1 mb-6 border-l-4 border-[#003e49] bg-[#003e49]/5 text-[10px] font-bold uppercase tracking-[0.4em] text-[#003e49]" data-v-73f0c2a4> Aliado Estratégico </div><h2 class="text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-[#1a1a1a] leading-[1.1] lg:leading-[0.9]" data-v-73f0c2a4><span class="block text-[#1a1a1a]" data-v-73f0c2a4>Operando</span><span class="block text-[#003e49] italic my-1 lg:my-0" data-v-73f0c2a4>desde</span><span class="block text-[#1a1a1a]" data-v-73f0c2a4>Coquimbo.</span></h2><div class="mt-10 flex items-center gap-4" data-v-73f0c2a4><div class="w-12 h-[1.5px] bg-[#003e49]" data-v-73f0c2a4></div><p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold" data-v-73f0c2a4>Respaldo Técnico de Clase Mundial</p></div></div><div class="w-full lg:w-8/12 relative overflow-hidden mt-6 lg:mt-0" data-v-73f0c2a4><div class="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" data-v-73f0c2a4></div><div class="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" data-v-73f0c2a4></div><div class="flex gap-12 lg:gap-20 py-8 lg:py-12 animate-infinite-scroll w-max" data-v-73f0c2a4><!--[-->`);
      ssrRenderList([...clientLogos, ...clientLogos, ...clientLogos], (logo, index) => {
        _push(`<div class="flex-shrink-0 flex items-center" data-v-73f0c2a4><img${ssrRenderAttr("src", `/img/clientes/${logo}`)}${ssrRenderAttr("alt", logo)} class="h-8 md:h-12 w-auto opacity-100 transition-all duration-700 cursor-pointer hover:scale-110" data-v-73f0c2a4></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeTrust.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-73f0c2a4"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]" }, _attrs))} data-v-a716cca9><div class="absolute inset-0 z-0" data-v-a716cca9><img${ssrRenderAttr("src", _imports_0$1)} alt="Industrial Workshop" class="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-v-a716cca9><div class="absolute inset-0 bg-gradient-to-b from-white to-secondary opacity-20" data-v-a716cca9></div><div class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f] opacity-90" data-v-a716cca9></div></div><div class="absolute inset-0 technical-grid opacity-5 z-0" data-v-a716cca9></div><div class="custom-container relative z-10 text-center" data-v-a716cca9><h2 class="text-2xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-[1.3] md:leading-tight max-w-5xl mx-auto drop-shadow-2xl" data-v-a716cca9><span class="block mb-2 md:inline" data-v-a716cca9>Trazabilidad técnica y</span><span class="block mb-2 md:inline ml-0 md:ml-3" data-v-a716cca9><span class="relative inline-block border-b-2 border-accent" data-v-a716cca9>seguridad</span></span><span class="block mt-2 md:mt-0" data-v-a716cca9>como eje transversal de cada proyecto.</span></h2><div class="mt-10 flex justify-center items-center gap-10" data-v-a716cca9><div class="h-[1.5px] w-14 bg-accent/40" data-v-a716cca9></div><p class="text-[9px] uppercase font-bold tracking-[0.8em] text-accent/90" data-v-a716cca9>StahlForm Commitment</p><div class="h-[1.5px] w-14 bg-accent/40" data-v-a716cca9></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a716cca9"]]), { __name: "HomeBanner" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "StahlForm | Ingeniería y Proyectos en Movimiento",
      meta: [
        { name: "description", content: "Líderes en soluciones técnicas de ingeniería para minería, logística portuaria y plantas industriales. Operaciones críticas y trazabilidad garantizada." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeValue = __nuxt_component_0;
      const _component_HomeBusinessUnits = __nuxt_component_1;
      const _component_HomeTrust = __nuxt_component_2;
      const _component_HomeBanner = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HomeValue, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeBusinessUnits, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeTrust, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeBanner, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_okJ6N10.mjs.map
