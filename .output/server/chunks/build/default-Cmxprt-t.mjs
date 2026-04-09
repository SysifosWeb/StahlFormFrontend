import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './AppFooter-D0pAdwlb.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-DJNj0z-3.mjs';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import '@iconify/vue';

const _imports_0 = publicAssetsURL("/img/hero.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative w-screen h-[400px] lg:h-[85vh] flex items-center justify-center text-left text-white overflow-hidden bg-secondary" }, _attrs))} data-v-ae7206e4><div class="absolute inset-0 z-0" data-v-ae7206e4><img${ssrRenderAttr("src", _imports_0)} alt="Proceso de mecanizado industrial" class="w-full h-full object-cover object-center lg:object-right brightness-100" data-v-ae7206e4><div class="absolute inset-0 bg-black/60" data-v-ae7206e4></div><div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" data-v-ae7206e4></div></div><div class="blueprint-overlay" data-v-ae7206e4></div><div class="technical-grid" data-v-ae7206e4></div><div class="relative z-10 custom-container w-full" data-v-ae7206e4><div class="flex" data-v-ae7206e4><div class="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 border-l-[3px] border-accent pl-4 lg:pl-8 py-2" data-v-ae7206e4><span class="inline-block mb-4 text-[9px] md:text-xs tracking-[0.3em] font-bold text-gray-400 uppercase" data-v-ae7206e4> STAHLFORM | INGENIERÍA EN MOVIMIENTO </span><h1 class="mb-6 font-bold text-[22px] sm:text-5xl lg:text-7xl leading-[1.3] lg:leading-[1.1] uppercase tracking-tight text-white drop-shadow-2xl" data-v-ae7206e4><span class="block mb-1" data-v-ae7206e4>Capacidad Técnica</span><span class="block mb-1" data-v-ae7206e4>al <span class="text-accent underline underline-offset-[6px] lg:underline-offset-[12px] decoration-1" data-v-ae7206e4>Servicio</span></span><span class="block text-xl lg:text-7xl mt-2 lg:mt-5 opacity-90" data-v-ae7206e4>de Operaciones Críticas</span></h1><div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-6" data-v-ae7206e4><p class="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-400" data-v-ae7206e4> Soluciones industriales de precisión </p></div></div></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ae7206e4"]]), { __name: "AppHeader" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavbar = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1;
  const _component_AppFooter = __nuxt_component_2;
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
//# sourceMappingURL=default-Cmxprt-t.mjs.map
