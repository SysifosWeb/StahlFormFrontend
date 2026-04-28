import { _ as __nuxt_component_0, a as _sfc_main$2 } from './AppFooter-D18755Uz.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './Torno_03-ZI2nDTS5.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-B4ezjIex.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative w-screen h-[400px] lg:h-[85vh] flex items-center justify-center text-left text-white overflow-hidden bg-primary" }, _attrs))} data-v-465d6ba7><div class="absolute inset-0 z-0" data-v-465d6ba7><img${ssrRenderAttr("src", _imports_0)} alt="Proceso de mecanizado industrial" class="w-full h-full object-cover object-center lg:object-right brightness-110 -scale-x-100 mix-blend-luminosity opacity-80" data-v-465d6ba7><div class="absolute inset-0 bg-primary/40" data-v-465d6ba7></div><div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-95" data-v-465d6ba7></div></div><div class="relative z-10 custom-container w-full" data-v-465d6ba7><div class="flex" data-v-465d6ba7><div class="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 border-l-[3px] border-accent pl-4 lg:pl-8 py-2" data-v-465d6ba7><h1 class="mb-6 text-2xl sm:text-5xl lg:text-7xl leading-[1.2] lg:leading-[1.1] uppercase tracking-tight text-white drop-shadow-2xl" data-v-465d6ba7><span class="block mb-1 font-black" data-v-465d6ba7>Capacidad Técnica</span><span class="block mb-1 font-black" data-v-465d6ba7>al <span class="text-accent font-black underline underline-offset-[6px] lg:underline-offset-[12px] decoration-1" data-v-465d6ba7>Servicio</span></span><span class="block lg:text-7xl mt-2 lg:mt-5 opacity-90 font-black" data-v-465d6ba7>de Operaciones Críticas</span></h1><div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-6" data-v-465d6ba7><p class="text-[9px] md:text-xs uppercase tracking-[0.2em] sf-bold text-gray-400" data-v-465d6ba7> Soluciones industriales de precisión </p></div></div></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-465d6ba7"]]), { __name: "AppHeader" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavbar = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1;
  const _component_AppFooter = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-10" }, null, _parent));
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-B0zTcbJ4.mjs.map
