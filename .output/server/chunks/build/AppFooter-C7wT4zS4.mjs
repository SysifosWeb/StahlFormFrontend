import { _ as __nuxt_component_0$1 } from './nuxt-link-B4ezjIex.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    ref(false);
    const isMounted = ref(false);
    const route = useRoute();
    const currentRoute = computed(() => route.path);
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full z-[1002] bg-transparent py-6" }, _attrs))} data-v-55f6a40d><div class="custom-container flex items-center justify-between" data-v-55f6a40d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white font-bold tracking-[0.4em] uppercase text-2xl group-hover:scale-105 transition-transform duration-300" data-v-55f6a40d${_scopeId}> STAHLFORM </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white font-bold tracking-[0.4em] uppercase text-2xl group-hover:scale-105 transition-transform duration-300" }, " STAHLFORM ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center gap-10 ml-auto" data-v-55f6a40d><ul class="flex items-center gap-4" data-v-55f6a40d><!--[-->`);
      ssrRenderList([
        { to: "/", label: "INICIO" },
        { to: "/nuestra-empresa", label: "NOSOTROS" },
        { to: "/servicios", label: "SERVICIOS" },
        { to: "/contacto", label: "CONTACTO" }
      ], (item) => {
        _push(`<li data-v-55f6a40d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: ["nav-link text-sm tracking-widest font-bold", { active: currentRoute.value === item.to }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><button class="${ssrRenderClass([{ open: isMenuOpen.value }, "lg:hidden p-2 bg-accent/10 border border-accent/20 rounded-lg group"])}" aria-label="Menu" data-v-55f6a40d><span class="toggler-icon group-hover:bg-accent" data-v-55f6a40d></span></button></div>`);
      if (isMounted.value && isMenuOpen.value) {
        _push(`<div class="fixed inset-0 glass z-[2000] flex flex-col items-center justify-center p-8" data-v-55f6a40d><button class="absolute top-8 right-8 text-accent" data-v-55f6a40d><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-55f6a40d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-55f6a40d></path></svg></button><ul class="text-center space-y-8" data-v-55f6a40d><!--[-->`);
        ssrRenderList([
          { to: "/", label: "INICIO" },
          { to: "/nuestra-empresa", label: "NOSOTROS" },
          { to: "/servicios", label: "SERVICIOS" },
          { to: "/contacto", label: "CONTACTO" }
        ], (item) => {
          _push(`<li data-v-55f6a40d>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: ["text-2xl font-bold tracking-[0.2em] text-light hover:text-accent transition-colors", { "text-accent": currentRoute.value === item.to }],
            onClick: closeMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-55f6a40d"]]), { __name: "AppNavbar" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#111111] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden font-sans" }, _attrs))}><div class="custom-container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24"><div class="space-y-10"><div class="brand-logo"><h2 class="text-3xl font-bold tracking-[0.3em] uppercase leading-none text-white text-shadow-glow">STAHL<span class="text-accent italic">FORM</span></h2><p class="text-[9px] uppercase tracking-[0.5em] text-gray-500 mt-3 font-bold">Industrial Engineering Solutions</p></div><p class="text-xs font-light text-gray-400 leading-relaxed max-w-[240px]"> Compromiso con la excelencia operativa y la seguridad técnica en minería e industria nacional. </p><div class="flex gap-4"><div class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group"><svg class="w-4 h-4 text-gray-500 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></div></div></div><div class="space-y-10"><h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Contacto Técnico</h5><ul class="space-y-8"><li class="flex items-start gap-4"><svg class="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="text-xs font-light text-gray-400"><p class="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Casa Matriz</p><p class="leading-relaxed">Alto La Herradura, Galpón N°3,<br> Coquimbo, Chile.</p></div></li><li class="flex items-start gap-4"><svg class="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><div class="text-xs font-light text-gray-400"><p class="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Consultas Directas</p><a href="mailto:adm@stahlform.cl" class="hover:text-accent transition-colors">adm@stahlform.cl</a></div></li></ul></div><div class="space-y-10"><h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Explorar</h5><ul class="space-y-5"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/servicios",
    class: "text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Líneas de Negocio`);
      } else {
        return [
          createTextVNode("Líneas de Negocio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/capacidades-tecnologicas",
    class: "text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Capacidad Técnica`);
      } else {
        return [
          createTextVNode("Capacidad Técnica")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/nuestra-empresa",
    class: "text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nuestra Empresa`);
      } else {
        return [
          createTextVNode("Nuestra Empresa")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Área de Clientes`);
      } else {
        return [
          createTextVNode("Área de Clientes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="space-y-10"><h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Presencia Regional</h5><div class="h-[180px] w-full rounded-2xl overflow-hidden border border-white/5 relative group/map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.064560738018!2d-71.35345749999999!3d-29.9880299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca0f47e3a9b1%3A0x6d9f3f9f9f9f9f9f!2sCoquimbo%2C%20Chile!5e0!3m2!1ses!2scl!4v1712078000000!5m2!1ses!2scl" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="absolute inset-0 bg-secondary/10 pointer-events-none group-hover/map:bg-transparent transition-all duration-700"></div></div></div></div><div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"><p class="text-[9px] uppercase tracking-[0.3em] text-gray-600">© 2024 StahlForm Inversiones PyC LTDA. Todos los derechos reservados.</p><div class="flex gap-10 text-[9px] uppercase tracking-[0.4em] font-bold text-gray-500">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/politicas",
    class: "hover:text-accent transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Términos`);
      } else {
        return [
          createTextVNode("Términos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "hover:text-accent transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacidad`);
      } else {
        return [
          createTextVNode("Privacidad")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "AppFooter" });

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=AppFooter-C7wT4zS4.mjs.map
