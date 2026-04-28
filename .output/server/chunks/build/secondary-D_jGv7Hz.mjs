import { _ as __nuxt_component_0, a as _sfc_main$2 } from './AppFooter-DzmF2p0E.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { h as headerBg } from './Torno_2-DLjQ8ZGw.mjs';
import { u as useRoute, _ as _export_sfc } from './server.mjs';
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
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "secondary-header-container relative overflow-hidden flex items-center bg-primary font-sans" }, _attrs))} data-v-0a34cf35><div class="absolute inset-0 z-0" data-v-0a34cf35><img${ssrRenderAttr("src", unref(headerBg))} alt="Banner Industrial" class="w-full h-full object-cover object-[50%_25%] brightness-110 mix-blend-luminosity opacity-80" data-v-0a34cf35><div class="absolute inset-0 bg-primary/40" data-v-0a34cf35></div><div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-95" data-v-0a34cf35></div></div><div class="w-full relative z-10 custom-container flex items-center h-full" data-v-0a34cf35><div class="border-l-[3px] border-accent pl-6 lg:pl-8 py-2 max-w-4xl" data-v-0a34cf35><h1 class="text-3xl md:text-5xl lg:text-5xl sf-bold text-white uppercase tracking-tight leading-tight drop-shadow-2xl" data-v-0a34cf35>${__props.title ?? ""}</h1></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeaderSecundary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0a34cf35"]]);
const _sfc_main = {
  __name: "secondary",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = __nuxt_component_0;
      const _component_AppHeaderSecundary = __nuxt_component_1;
      const _component_AppFooter = _sfc_main$2;
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
//# sourceMappingURL=secondary-D_jGv7Hz.mjs.map
