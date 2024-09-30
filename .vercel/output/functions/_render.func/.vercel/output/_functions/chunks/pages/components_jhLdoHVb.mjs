/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, g as renderHead, h as renderComponent, s as spreadAttributes } from '../astro_td1or4s8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$7 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<span class="relative flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span> <div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"> ${renderSlot($$result, $$slots["default"])} </div> </span> `;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/Badge.astro", void 0);

const $$Astro$6 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center dark:bg-black/20">© ${currentYear} <a href="https://flowbite.com/" class="hover:underline">DanielBerrioDev™</a>. Todos los derechos reservados.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0"> <li> <a href="#" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a href="https://api.whatsapp.com/send?phone=573022521320" target="_blank" class="hover:underline">Contacto</a> </li> </ul> ${renderSlot($$result, $$slots["default"])} </div> </footer>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`
    flex justify-center items-center
    mx-auto
    py-5
    sticky top-0
    w-full xl:w-[1120px]
    z-10
  `, "class")}> <nav${addAttribute(`
          border border-white/15 rounded-full
          px-3 py-1
          flex flex-row items-center
          bg-black/50 dark:bg-black/50
          backdrop-blur-2xl
        `, "class")}> <a class="hover:bg-white/10 rounded-full px-3 transition" href="#experiencia">
Experiencia
</a> <a class="hover:bg-white/10 rounded-full px-3 transition" href="/#proyectos">
Proyectos
</a> <a class="hover:bg-white/10 rounded-full px-3 transition" href="/#sobre-mi">
Sobre Mi
</a> <a class="hover:bg-white/10 rounded-full px-3 transition" href="mailto:berriobarriosdaniel@gmail.com" target="_blank">
Contacto
</a> </nav> </header> `;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Linkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 
    31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 
    45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 
    22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 
    138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 
    8.576 18.582 18.89 18.474h218.144c10.336.128 
    18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path> </svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/Linkedin.astro", void 0);

const $$Astro$2 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className} w-full lg:w-[740px] mx-auto pb-24`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/SectionContainer.astro", void 0);

const $$Astro$1 = createAstro();
const $$SocialPill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`rounded-full 
        border 
        dark:border-white/10 border-gray-300
        flex 
        justify-center 
        items-center
        gap-x-2  
        py-1 px-2 md:py-2 md:px-4 
        text-xs md:text-base 
        bg-white/5 
        hover:scale-110 
        hover:bg-white/10 
        transition`, "class")}${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/socialPill.astro", void 0);

const $$Astro = createAstro();
const $$Components = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Components;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Desing System portafolio.dev", "description": "Catalogo de componentes de nuestro portafolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Contactame` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;  SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/daniel-berrio-barrios/", "target": "_blank", "rel": "noopener" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedinIcon", $$Linkedin, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/pages/components.astro", void 0);

const $$file = "C:/Portafolio web con Astro/portafolio-dev/src/pages/components.astro";
const $$url = "/components";

const components = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Components,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionContainer as $, $$Badge as a, $$SocialPill as b, $$Linkedin as c, $$Layout as d, components as e };
