import { _ as __nuxt_component_0 } from './nuxt-link-DJNj0z-3.mjs';
import __nuxt_component_0$1 from './index-BDNoctLu.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
import { u as useHead } from './composables-B6OROZz1.mjs';
import '../_/nitro.mjs';
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
import '@iconify/utils/lib/css/icon';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const Servicios = [
  {
    id: 1,
    title: "Servicio 1",
    description: "Descripción del primer servicio ofrecido. Reemplaza con información real de tu empresa.",
    image: "/img/placeholder.webp"
  },
  {
    id: 2,
    title: "Servicio 2",
    description: "Descripción del segundo servicio ofrecido. Personaliza este texto con tus servicios reales.",
    image: "/img/placeholder.webp"
  },
  {
    id: 3,
    title: "Servicio 3",
    description: "Descripción del tercer servicio ofrecido. Agrega los detalles específicos de tu propuesta de valor.",
    image: "/img/placeholder.webp"
  }
];
const Proyectos = [
  {
    id: 1,
    title: "Proyecto Destacado 1",
    description: "Descripción breve del primer proyecto destacado. Reemplaza con información real.",
    image: "/img/placeholder.webp",
    alt: "Proyecto de ejemplo 1"
  },
  {
    id: 2,
    title: "Proyecto Destacado 2",
    description: "Descripción breve del segundo proyecto destacado. Reemplaza con información real.",
    image: "/img/placeholder.webp",
    alt: "Proyecto de ejemplo 2"
  },
  {
    id: 3,
    title: "Proyecto Destacado 3",
    description: "Descripción breve del tercer proyecto destacado. Reemplaza con información real.",
    image: "/img/placeholder.webp",
    alt: "Proyecto de ejemplo 3"
  },
  {
    id: 4,
    title: "Proyecto Destacado 4",
    description: "Descripción breve del cuarto proyecto destacado. Reemplaza con información real.",
    image: "/img/placeholder.webp",
    alt: "Proyecto de ejemplo 4"
  }
];
const _sfc_main = {
  __name: "buscar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const searchQuery = computed(() => route.query.q || "");
    const normalize = (str) => {
      if (!str) return "";
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };
    const results = computed(() => {
      if (!searchQuery.value) return [];
      const query = normalize(searchQuery.value);
      const servicesResults = Servicios.filter(
        (servicio) => normalize(servicio.title).includes(query) || normalize(servicio.deck).includes(query) || normalize(servicio.description).includes(query)
      ).map((item) => ({ ...item, type: "service" }));
      const projectsResults = Proyectos.filter(
        (proyecto) => normalize(proyecto.title).includes(query) || normalize(proyecto.description).includes(query)
      ).map((item) => ({ ...item, type: "project" }));
      return [...servicesResults, ...projectsResults];
    });
    useHead({
      title: () => searchQuery.value ? `Búsqueda: ${searchQuery.value} | StahlForm` : "Buscar | StahlForm",
      meta: [
        { name: "description", content: "Encuentra servicios y proyectos en StahlForm." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 py-12 lg:py-16" }, _attrs))}><div class="container mx-auto px-4 max-w-7xl"><div class="mb-12"><h1 class="text-3xl lg:text-4xl font-bold text-dark mb-2"> Resultados para: <span class="text-detail-primary">${ssrInterpolate(unref(searchQuery))}</span></h1><div class="title-accent"></div>`);
      if (unref(results).length > 0) {
        _push(`<p class="mt-2 text-medium font-light"> Se han encontrado ${ssrInterpolate(unref(results).length)} ${ssrInterpolate(unref(results).length === 1 ? "resultado" : "resultados")}. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(results).length > 0) {
        _push(`<div class="space-y-12"><!--[-->`);
        ssrRenderList(unref(results), (item) => {
          _push(`<div>`);
          if (item.type === "service") {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              class: "block group w-full"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<article class="flex flex-col md:flex-row w-full bg-white overflow-hidden gap-0 md:gap-6 h-auto md:h-[400px] shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg"${_scopeId}><div class="w-full md:w-1/2 h-[250px] md:h-full overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}></div><div class="flex flex-col p-6 md:p-8 w-full md:flex-1 gap-4 justify-center"${_scopeId}><span class="text-xs font-bold uppercase tracking-wider text-detail-primary"${_scopeId}>Servicios</span><h2 class="font-bold text-dark text-xl lg:text-2xl group-hover:text-detail-primary transition-colors"${_scopeId}>${ssrInterpolate(item.title)}</h2><p class="text-medium text-sm md:text-base font-light leading-relaxed line-clamp-4"${_scopeId}>${ssrInterpolate(item.deck)}</p><div class="mt-4 flex items-center gap-2 text-detail-primary font-bold text-sm"${_scopeId}> Ver Servicio `);
                  _push2(ssrRenderComponent(_component_Icon, { name: "heroicons:arrow-right" }, null, _parent2, _scopeId));
                  _push2(`</div></div></article>`);
                } else {
                  return [
                    createVNode("article", { class: "flex flex-col md:flex-row w-full bg-white overflow-hidden gap-0 md:gap-6 h-auto md:h-[400px] shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg" }, [
                      createVNode("div", { class: "w-full md:w-1/2 h-[250px] md:h-full overflow-hidden" }, [
                        createVNode("img", {
                          src: item.src,
                          alt: item.title,
                          class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "flex flex-col p-6 md:p-8 w-full md:flex-1 gap-4 justify-center" }, [
                        createVNode("span", { class: "text-xs font-bold uppercase tracking-wider text-detail-primary" }, "Servicios"),
                        createVNode("h2", { class: "font-bold text-dark text-xl lg:text-2xl group-hover:text-detail-primary transition-colors" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-medium text-sm md:text-base font-light leading-relaxed line-clamp-4" }, toDisplayString(item.deck), 1),
                        createVNode("div", { class: "mt-4 flex items-center gap-2 text-detail-primary font-bold text-sm" }, [
                          createTextVNode(" Ver Servicio "),
                          createVNode(_component_Icon, { name: "heroicons:arrow-right" })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.type === "project") {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              class: "block group w-full"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<article class="flex flex-col md:flex-row w-full bg-white overflow-hidden gap-0 md:gap-6 h-auto md:h-[400px] shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg"${_scopeId}><div class="w-full md:w-1/2 h-[250px] md:h-full overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}></div><div class="flex flex-col p-6 md:p-8 w-full md:flex-1 gap-4 justify-center"${_scopeId}><span class="text-xs font-bold uppercase tracking-wider text-detail-primary"${_scopeId}>Proyecto Destacado</span><h2 class="font-bold text-dark text-xl lg:text-2xl group-hover:text-detail-primary transition-colors"${_scopeId}>${ssrInterpolate(item.title)}</h2><p class="text-medium text-sm md:text-base font-light leading-relaxed line-clamp-4"${_scopeId}>${ssrInterpolate(item.description)}</p><div class="mt-4 flex items-center gap-2 text-detail-primary font-bold text-sm"${_scopeId}> Ver en Proyectos `);
                  _push2(ssrRenderComponent(_component_Icon, { name: "heroicons:arrow-right" }, null, _parent2, _scopeId));
                  _push2(`</div></div></article>`);
                } else {
                  return [
                    createVNode("article", { class: "flex flex-col md:flex-row w-full bg-white overflow-hidden gap-0 md:gap-6 h-auto md:h-[400px] shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg" }, [
                      createVNode("div", { class: "w-full md:w-1/2 h-[250px] md:h-full overflow-hidden" }, [
                        createVNode("img", {
                          src: item.src,
                          alt: item.title,
                          class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "flex flex-col p-6 md:p-8 w-full md:flex-1 gap-4 justify-center" }, [
                        createVNode("span", { class: "text-xs font-bold uppercase tracking-wider text-detail-primary" }, "Proyecto Destacado"),
                        createVNode("h2", { class: "font-bold text-dark text-xl lg:text-2xl group-hover:text-detail-primary transition-colors" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-medium text-sm md:text-base font-light leading-relaxed line-clamp-4" }, toDisplayString(item.description), 1),
                        createVNode("div", { class: "mt-4 flex items-center gap-2 text-detail-primary font-bold text-sm" }, [
                          createTextVNode(" Ver en Proyectos "),
                          createVNode(_component_Icon, { name: "heroicons:arrow-right" })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20 bg-white rounded-xl shadow-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:magnifying-glass",
          size: "4rem",
          class: "text-gray-200 mb-6 mx-auto"
        }, null, _parent));
        _push(`<h3 class="text-2xl font-bold text-dark mb-2">No se encontraron resultados</h3><p class="text-medium font-light"> Prueba con otros términos de búsqueda. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-block mt-8 px-8 py-3 bg-detail-primary text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Volver al Inicio `);
            } else {
              return [
                createTextVNode(" Volver al Inicio ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/buscar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=buscar-D35bWzLt.mjs.map
