import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './AppFooter-C7wT4zS4.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useRoute, _ as _export_sfc } from './server.mjs';
import './nuxt-link-B4ezjIex.mjs';
import 'vue-router';
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
import '@iconify/vue';

const _imports_0 = publicAssetsURL("/img/secondary_header_bg.png");
const _sfc_main$1 = {
  __name: "AppHeaderSecundary",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "secondary-header-container bg-[#1a1a1a] relative overflow-hidden flex items-center" }, _attrs))} data-v-99a06d40><div class="technical-bg-layer absolute inset-0 opacity-10 pointer-events-none" data-v-99a06d40></div><div class="absolute inset-0 z-0 technical-grid opacity-5" data-v-99a06d40></div><div class="w-full relative z-10 flex flex-col lg:flex-row h-full" data-v-99a06d40><div class="w-full lg:w-1/2 flex items-center px-8 lg:px-20 py-12 lg:py-0 h-full relative" data-v-99a06d40><div class="border-l-4 border-accent pl-10" data-v-99a06d40><h5 class="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4 opacity-70" data-v-99a06d40>StahlForm | Ingeniería</h5><h1 class="text-4xl lg:text-6xl font-bold text-white uppercase tracking-tighter leading-[0.95] drop-shadow-xl" data-v-99a06d40>${ssrInterpolate(__props.title)}</h1></div></div><div class="w-full lg:w-1/2 relative h-56 lg:h-full overflow-hidden" data-v-99a06d40><img${ssrRenderAttr("src", _imports_0)} alt="Industrial Detail" class="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:scale-105" data-v-99a06d40><div class="absolute inset-0 bg-black/60" data-v-99a06d40></div><div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent hidden lg:block" data-v-99a06d40></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeaderSecundary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-99a06d40"]]);
const _sfc_main = {
  __name: "secondary",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = __nuxt_component_0;
      const _component_AppHeaderSecundary = __nuxt_component_1;
      const _component_AppFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-10" }, null, _parent));
      _push(ssrRenderComponent(_component_AppHeaderSecundary, {
        title: unref(route).meta.title || ""
      }, null, _parent));
      _push(`</div><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/secondary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=secondary-C2R6qDL7.mjs.map
