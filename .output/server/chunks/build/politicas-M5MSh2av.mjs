import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './composables-B9sj1z5i.mjs';
import './server.mjs';
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

const siteUrl = "https://www.faremin.cl";
const _sfc_main = {
  __name: "politicas",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Políticas de Gestión Integrada | FAREMIN",
      meta: [
        {
          name: "description",
          content: "Políticas de gestión integrada de FAREMIN. Comprometidos con la calidad, seguridad, salud ocupacional y medio ambiente bajo normas ISO 9001, 14001 y 45001."
        },
        {
          name: "keywords",
          content: "políticas FAREMIN, gestión integrada, ISO 9001, ISO 14001, ISO 45001, política de calidad, seguridad industrial"
        },
        {
          property: "og:title",
          content: "Políticas de Gestión Integrada | FAREMIN"
        }
      ],
      link: [
        { rel: "canonical", href: `${siteUrl}/politicas` }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl"><div class="text-center mb-12"><h2 class="text-3xl lg:text-4xl font-bold text-dark mb-4"> Política del Sistema de Gestión Integrado </h2><div class="title-accent mx-auto"></div></div><div class="space-y-8 text-medium font-light text-justify leading-relaxed"><p> Maestranza Faremin Limitada, empresa de servicios y manufactura de productos y repuestos metalmecánicos, en su compromiso empresarial, proporciona condiciones de trabajo seguras y saludables para la prevención de lesiones y deterioro de la salud relacionados con el trabajo, para nuestros trabajadores, colaboradores y la comunidad. </p><p> Siempre consciente en la protección del medio ambiente, del uso sostenible de recursos en sus operaciones, de la prevención de la contaminación y la satisfacción de nuestros clientes, en cumplimiento con nuestro sistema de gestión integrado basado en las normas internacionales ISO 9001:2015; ISO 14001:2015 e ISO 45001:2018, se establecen los siguientes compromisos: </p><ul class="space-y-4"><li class="flex gap-4 items-start"><div class="mt-2 w-2 h-2 rounded-full bg-detail-primary shrink-0"></div><span> Asegurar la continuidad del sistema de gestión de calidad, medio ambiente, seguridad y salud en el trabajo en un marco de acción preventiva y mejoramiento continuo, buscando la mejora del desempeño de la organización. </span></li><li class="flex gap-4 items-start"><div class="mt-2 w-2 h-2 rounded-full bg-detail-primary shrink-0"></div><span> Identificar, evaluar y controlar los aspectos ambientales de nuestras actividades, productos y servicios. </span></li><li class="flex gap-4 items-start"><div class="mt-2 w-2 h-2 rounded-full bg-detail-primary shrink-0"></div><span> Eliminar peligros y reducir los riesgos para la Seguridad y Salud en el Trabajo. </span></li><li class="flex gap-4 items-start"><div class="mt-2 w-2 h-2 rounded-full bg-detail-primary shrink-0"></div><span> Motivar a toda la organización a una actitud responsable en materias de calidad, medio ambiente, seguridad y salud en el trabajo, a través del liderazgo, consulta y participación de los trabajadores y capacitación. </span></li><li class="flex gap-4 items-start"><div class="mt-2 w-2 h-2 rounded-full bg-detail-primary shrink-0"></div><span> Establecer mecanismos efectivos de control operacional, evaluación de desempeño, satisfacción de nuestros clientes, prevención de la contaminación, seguridad y salud en el trabajo. </span></li><li class="flex gap-4 items-start"><div class="mt-2 w-2 h-2 rounded-full bg-detail-primary shrink-0"></div><span> Asegurar el cumplimiento de requisitos legales y otros requisitos aplicables a la organización. </span></li></ul><p class="font-normal text-dark text-center py-4"> La responsabilidad de aplicar y cumplir esta política es un compromiso de toda la organización. </p><div class="pt-12 border-t border-gray-100 text-center space-y-2"><p class="text-xl font-bold text-dark"> Saturnino Segundo Miranda Pasten </p><p class="text-medium">Gerente General</p><p class="text-sm text-gray-400">Versión 1 – 2024</p><div class="pt-4 text-sm text-gray-500 space-y-1 font-normal"><p>Maestranza Faremin Ltda. R.U.T 77.573.120-6</p><p>Ruta D-43, Km 57, Cuesta El Manzano, El Peñón, Comuna de Coquimbo</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/politicas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=politicas-M5MSh2av.mjs.map
