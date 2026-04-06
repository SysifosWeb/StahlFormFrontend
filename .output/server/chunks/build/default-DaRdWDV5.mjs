import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './AppFooter-C7wT4zS4.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-Dh37GU69.mjs';
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

const _sfc_main$1 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative w-screen h-[400px] lg:h-[85vh] flex items-center justify-center text-left text-white overflow-hidden bg-secondary" }, _attrs))} data-v-a5e392e1><div class="absolute inset-0 z-0" data-v-a5e392e1><img${ssrRenderAttr("src", _imports_0)} alt="Proceso de mecanizado industrial" class="w-full h-full object-cover opacity-60 grayscale-[30%] brightness-75" data-v-a5e392e1></div><div class="blueprint-overlay" data-v-a5e392e1></div><div class="technical-grid" data-v-a5e392e1></div><div class="relative z-10 custom-container w-full" data-v-a5e392e1><div class="flex" data-v-a5e392e1><div class="w-full md:w-10/12 lg:w-8/12 xl:w-7/12" data-v-a5e392e1><span class="inline-block px-3 py-1 mb-6 text-xs tracking-[0.3em] font-bold border-l-4 border-accent bg-primary/40 uppercase" data-v-a5e392e1> Ingeniería en Movimiento </span><h1 class="mb-8 font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] uppercase tracking-tight" data-v-a5e392e1> Capacidad Técnica al <br data-v-a5e392e1><span class="text-accent underline underline-offset-[12px] decoration-1" data-v-a5e392e1>Servicio</span> de Operaciones Críticas </h1><div class="flex items-center gap-6" data-v-a5e392e1><div class="w-20 h-0.5 bg-accent opacity-60" data-v-a5e392e1></div><p class="text-xs uppercase tracking-[0.2em] opacity-80 font-bold" data-v-a5e392e1> Soluciones industriales de precisión </p></div></div></div></div><div class="absolute bottom-10 right-10 z-20 flex gap-4 opacity-30" data-v-a5e392e1><div class="w-12 h-12 border border-white" data-v-a5e392e1></div><div class="w-12 h-12 border border-white flex items-center justify-center" data-v-a5e392e1><div class="w-1 h-1 bg-white rounded-full" data-v-a5e392e1></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a5e392e1"]]);
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
//# sourceMappingURL=default-DaRdWDV5.mjs.map
