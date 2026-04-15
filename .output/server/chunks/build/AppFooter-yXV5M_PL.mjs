import { _ as __nuxt_component_0$1 } from './nuxt-link-DJNj0z-3.mjs';
import { mergeProps, unref, withCtx, createTextVNode, ref, computed, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';

const logoStahlForm = "" + __buildAssetsURL("02 Logo_BlancoWebP.CFqSgdHw.webp");
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
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full z-[1002] bg-transparent py-6" }, _attrs))} data-v-d5a948f3><div class="custom-container flex items-center justify-between" data-v-d5a948f3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoStahlForm))} alt="StahlForm Logo" class="h-10 lg:h-20 w-auto group-hover:scale-105 transition-transform duration-300" data-v-d5a948f3${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoStahlForm),
                alt: "StahlForm Logo",
                class: "h-10 lg:h-20 w-auto group-hover:scale-105 transition-transform duration-300"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center gap-10 ml-auto" data-v-d5a948f3><ul class="flex items-center gap-4" data-v-d5a948f3><!--[-->`);
      ssrRenderList([
        { to: "/", label: "INICIO" },
        { to: "/nuestra-empresa", label: "NOSOTROS" },
        { to: "/servicios", label: "SERVICIOS" },
        { to: "/contacto", label: "CONTACTO" }
      ], (item) => {
        _push(`<li data-v-d5a948f3>`);
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
      _push(`<!--]--></ul></div><button class="lg:hidden text-accent focus:outline-none flex items-center justify-center transition-transform hover:scale-110 active:scale-95" aria-label="Menu" data-v-d5a948f3>`);
      if (!isMenuOpen.value) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-d5a948f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-d5a948f3></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-d5a948f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-d5a948f3></path></svg>`);
      }
      _push(`</button></div>`);
      if (isMounted.value && isMenuOpen.value) {
        _push(`<div class="fixed inset-0 z-[2000] flex flex-col p-8 overflow-hidden mobile-menu-panel" data-v-d5a948f3><div class="absolute inset-0 technical-grid opacity-20 pointer-events-none" data-v-d5a948f3></div><div class="flex items-center justify-between relative z-10 mb-20" data-v-d5a948f3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: closeMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(logoStahlForm))} alt="StahlForm Logo" class="h-8 w-auto" data-v-d5a948f3${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: unref(logoStahlForm),
                  alt: "StahlForm Logo",
                  class: "h-8 w-auto"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="text-accent hover:scale-110 transition-transform" data-v-d5a948f3><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d5a948f3><path stroke-linecap="square" stroke-linejoin="inherit" stroke-width="0.8" d="M6 18L18 6M6 6l12 12" data-v-d5a948f3></path></svg></button></div><ul class="flex-grow flex flex-col justify-center space-y-12 relative z-10 px-4" data-v-d5a948f3><!--[-->`);
        ssrRenderList([
          { to: "/", label: "INICIO" },
          { to: "/nuestra-empresa", label: "NOSOTROS" },
          { to: "/servicios", label: "SERVICIOS" },
          { to: "/contacto", label: "CONTACTO" }
        ], (item) => {
          _push(`<li class="relative" data-v-d5a948f3>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: ["mobile-nav-link text-xl font-bold tracking-[0.3em] text-white hover:text-accent transition-all pl-6 block border-l-2 border-transparent", { "active-mobile": currentRoute.value === item.to }],
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
        _push(`<!--]--></ul><div class="mt-auto relative z-10 border-t border-white/10 pt-10 pb-4 space-y-4 flex flex-col items-center" data-v-d5a948f3><p class="text-[10px] text-center uppercase tracking-[0.3em] leading-tight text-gray-400 font-bold max-w-xs mx-auto" data-v-d5a948f3> CAPACIDAD TÉCNICA AL <span class="text-accent" data-v-d5a948f3>SERVICIO</span> DE OPERACIONES CRÍTICAS </p><div class="flex justify-center gap-8 mt-12" data-v-d5a948f3><a href="#" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all" data-v-d5a948f3><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-d5a948f3><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-v-d5a948f3></path></svg></a><a href="https://www.instagram.com/stahlform_pyc?utm_source=qr&amp;igsh=MWQ2cnZxc2Mybnk5cQ==" target="_blank" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all" data-v-d5a948f3><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-d5a948f3><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" data-v-d5a948f3></path></svg></a><a href="https://www.facebook.com/share/18F7fTkJD5/" target="_blank" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all" data-v-d5a948f3><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-d5a948f3><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" data-v-d5a948f3></path></svg></a><a href="https://www.tiktok.com/@maestranza_stahlform?_r=1&amp;_t=ZS-95LP2FgXnyC" target="_blank" class="text-white opacity-60 hover:opacity-100 hover:text-accent transition-all" data-v-d5a948f3><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-d5a948f3><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.91 4.1-2.4 5.56-1.69 1.66-3.95 2.62-6.33 2.58-2.61-.04-5.01-1.36-6.52-3.41-1.31-1.78-1.84-4.08-1.43-6.28.39-2.12 1.6-3.97 3.32-5.16 1.78-1.23 3.99-1.66 6.08-1.29v4.06c-1.36-.45-2.93-.34-4.14.4-1.07.65-1.8 1.79-1.99 3.03-.23 1.49.27 3.01 1.28 4.09 1.05 1.13 2.6 1.71 4.14 1.53 1.42-.16 2.66-.99 3.35-2.22.42-.75.64-1.61.64-2.48.02-4.99.01-9.98.01-14.97-.02-.02-.04-.04-.06-.06z" data-v-d5a948f3></path></svg></a></div><p class="text-[9px] uppercase tracking-[0.4em] text-gray-500 leading-tight" data-v-d5a948f3>© 2026 StahlForm</p></div></div>`);
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
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-d5a948f3"]]), { __name: "AppNavbar" });
const _sfc_main = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#111111] text-white pt-16 pb-12 border-t border-white/5 overflow-hidden font-sans" }, _attrs))}><div class="custom-container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12"><div class="space-y-10"><div class="brand-logo flex flex-col items-center lg:items-start text-center lg:text-left"><img${ssrRenderAttr("src", unref(logoStahlForm))} alt="StahlForm Logo" class="h-16 w-auto mb-6"><p class="text-[9px] uppercase tracking-[0.5em] text-gray-500 mt-1 font-bold">Industrial Engineering Solutions</p></div><p class="text-xs font-light text-gray-400 leading-relaxed max-w-[240px] text-center lg:text-left mx-auto lg:mx-0"> Compromiso con la excelencia operativa y la seguridad técnica en minería e industria nacional. </p><div class="flex justify-center lg:justify-start gap-4"><a href="#" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group"><svg class="w-4 h-4 text-gray-500 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a><a href="https://www.instagram.com/stahlform_pyc?utm_source=qr&amp;igsh=MWQ2cnZxc2Mybnk5cQ==" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group"><svg class="w-4 h-4 text-gray-500 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771-4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a><a href="https://www.facebook.com/share/18F7fTkJD5/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group"><svg class="w-4 h-4 text-gray-500 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a><a href="https://www.tiktok.com/@maestranza_stahlform?_r=1&amp;_t=ZS-95LP2FgXnyC" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group"><svg class="w-4 h-4 text-gray-500 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.91 4.1-2.4 5.56-1.69 1.66-3.95 2.62-6.33 2.58-2.61-.04-5.01-1.36-6.52-3.41-1.31-1.78-1.84-4.08-1.43-6.28.39-2.12 1.6-3.97 3.32-5.16 1.78-1.23 3.99-1.66 6.08-1.29v4.06c-1.36-.45-2.93-.34-4.14.4-1.07.65-1.8 1.79-1.99 3.03-.23 1.49.27 3.01 1.28 4.09 1.05 1.13 2.6 1.71 4.14 1.53 1.42-.16 2.66-.99 3.35-2.22.42-.75.64-1.61.64-2.48.02-4.99.01-9.98.01-14.97-.02-.02-.04-.04-.06-.06z"></path></svg></a></div></div><div class="space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left"><h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Contacto Técnico</h5><ul class="space-y-8"><li class="flex flex-col lg:flex-row items-center lg:items-start gap-4"><svg class="w-5 h-5 text-accent mt-0 lg:mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="text-xs font-light text-gray-400"><p class="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Casa Matriz</p><p class="leading-relaxed">Av. Panorámica 910,<br> Cond. Nova Florida, La Serena.</p></div></li><li class="flex flex-col lg:flex-row items-center lg:items-start gap-4"><svg class="w-5 h-5 text-accent mt-0 lg:mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><div class="text-xs font-light text-gray-400"><p class="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Consultas Directas</p><a href="mailto:adm@stahlform.cl" class="hover:text-accent transition-colors">adm@stahlform.cl</a></div></li></ul></div><div class="space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left"><h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Explorar</h5><ul class="space-y-5"><li>`);
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
        to: "/servicios",
        class: "text-sm font-light text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block hover:underline decoration-accent/30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Servicios`);
          } else {
            return [
              createTextVNode("Servicios")
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
            _push2(`Contacto`);
          } else {
            return [
              createTextVNode("Contacto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left"><h5 class="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Presencia Regional</h5><div class="h-[220px] lg:h-[180px] w-full max-w-full rounded-2xl overflow-hidden border border-white/5 relative"><iframe src="https://maps.google.com/maps?q=Av.%20Panor%C3%A1mica%20910,%20Cond.%20Nova%20Florida,%20La%20Serena,%20Chile&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div><div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"><p class="text-[9px] uppercase tracking-[0.3em] text-gray-600"> © 2026 StahlForm Inversiones PyC LTDA. Todos los derechos reservados. <span class="ml-2">|</span><a href="https://sysifosweb.cl" target="_blank" class="ml-2 hover:text-lime-400 transition-colors duration-300"> Desarrollado por <span class="font-bold">SysifosWeb</span></a></p><div class="flex gap-10 text-[9px] uppercase tracking-[0.4em] font-bold text-gray-500">`);
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main as a };
//# sourceMappingURL=AppFooter-yXV5M_PL.mjs.map
