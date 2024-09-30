/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, e as renderSlot, h as renderComponent } from '../astro_td1or4s8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$SectionContainer, a as $$Badge, b as $$SocialPill, c as $$Linkedin, d as $$Layout } from './components_jhLdoHVb.mjs';

const $$Astro$c = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row gap justify-center items-center"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1"> <p> Me llamo Daniel Berrio Barrios, soy <strong>Tecnólogo en Análisis y desarrollo de Software,</strong> llevo más de +2 años programando y colaborando en proyectos educativos y personales. Enfocado siempre en brindar soluciones efectivas a problemas complejos.</p> <p>Durante mi proceso educativo he logrado obtener direntes certificaciónes complementarias de las cuales me he destacado en proyectos como <strong> "Software de facturación con PHP", "Gestión de Eventos Sena", "Parking-Python".</strong> <a class="font-bold text-sky-400" href="https://github.com/KingDanyDev" target="_blank">Echales un vistazo.</a></p> <p>He sido parte de Semilleros de investigación y he participado como ponenete en difrentes encuentros de <a class="font-semibold text-yellow-400" href="https://web.redcolsi.org/inicio/quienes-somos" target="_blank">RedCOLSI</a> con proyectos de innovación y tecnología.</p> </div> <img src="/projects/m5.jpg" class="rounded-full size-72 order-1 md:order-1" alt=""> </section>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/AboutMe.astro", void 0);

const $$Astro$b = createAstro();
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/Briefcase.astro", void 0);

const $$Astro$a = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/Code.astro", void 0);

const $$Astro$9 = createAstro();
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="bg-white/5
    border dark:border:white/10 border-gray-300
    rounded-full
    inline-flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:tex-base
    transition
    hover:scale-110 hover:bg-white/10 "> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/LinkButton.astro", void 0);

const $$Astro$8 = createAstro();
const $$ExperienceItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExperienceItems;
  const { title, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-sky-200/80"> ${date} </time> <h3 class="text-lg font-semibold text-yellow-200 mt-2"> ${title} </h3> <p class="mb-4 text-base font-normal text-gray-200 text-pretty"> ${description} </p> ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más...${" "}<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> ` })}`}`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/ExperienceItems.astro", void 0);

const $$Astro$7 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Supply chain Intern Bogot\xE1 SSC - SLB S.A",
      description: "Encargado de actualizar la data y reportes en SAP, Mantener al d\xEDa Dashboards de Power BI, Optimizar Queries y Macros de Excel mediante VBA, Ayudar a resolver problemas y sugerir soluciones u optimizaciones a procesos manuales y repetitivos, contribuyendo al aumento de la productividad y la eficacia operativa. ",
      link: "#"
    },
    {
      date: "Febrero, 2024 - Actualmente.",
      title: "Desarrollador Fullsatck (Aplicaci\xF3n Web - KingCaps)",
      description: "Lider\xE9 la conceptualizaci\xF3n creativa y dise\xF1\xE9 interfaces de usuario atractivas. Desarroll\xE9 tanto el frontend como el backend utilizando tecnolog\xEDas como Javascript y PHP. Adem\xE1s, gestion\xE9 la creaci\xF3n y optimizaci\xF3n de bases de datos para garantizar un rendimiento \xF3ptimo.",
      link: "#"
    },
    {
      date: "February 2, 2015",
      title: "Desarrollador backend",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCIE.map((experience) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "ExperienceItems", $$ExperienceItems, { ...experience })} </li>`)} </ol>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/Experience.astro", void 0);

const $$Astro$6 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/Github.astro", void 0);

const $$Astro$5 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/Mail.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProfileCheck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$3 = createAstro();
const $$Mongo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mongo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/Mongo.astro", void 0);

const $$Astro$2 = createAstro();
const $$NestJs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NestJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 264.6 255.6" xmlns="http://www.w3.org/2000/svg"><path d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z" fill="#e0234e" fill-rule="evenodd"></path></svg>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/icons/NestJs.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    NEXT: {
      name: "nextJS",
      class: "bg-black text-white",
      icon: $$NestJs
    },
    TAILWIND: {
      name: "TailwindCSS",
      class: "bg-white text-[#32B9F1]",
      icon: $$Mongo
    }
  };
  const PROJECTS = [
    {
      title: "Gesti\xF3n de eventos",
      descirption: "Para el control y la gesti\xF3n del resporte de horas dadas por los instructores del Sena.",
      link: "#",
      github: "https://github.com/KingDanyDev/disenno-y-desarrollo-de-sistemas-pruebas",
      image: "/projects/dds.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND]
    },
    {
      title: "Facturaci\xF3n con PHP",
      description: "Software de facturaci\xF3n hecho con PHP, MySQL y JavaScript, para la gesti\xF3n y optimizaci\xF3n de ventas, inventario, clientes y facturas",
      github: "https://github.com/KingDanyDev/Facturacion-PHP",
      image: "/projects/facturacion.webp",
      tags: [TAGS.NEXT]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, descirption, tags, link, github }) => renderTemplate`<article> <h3 class="text-2xl font-semibold text-yellow-200 mb-2">${title}</h3> <p class="text-lg mb-4 text-pretty"> ${descirption} </p> <ul class="flex gap-x-2 flex-row mb-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <img class="rounded shadow-2xl shadow-white/10"${addAttribute(image, "src")}${addAttribute(`Captura de pantalla del proyecto ${image}`, "alt")}> <footer class="flex gap-x-4"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github, "target": "_blank", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Github", $$Github, { "class": "size-6" })}
Ver código fuente
` })} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, {}, { "default": ($$result2) => renderTemplate` <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path></svg>
Ir al sitio web
` })}`} </footer> </article>`)} </section>`;
}, "C:/Portafolio web con Astro/portafolio-dev/src/components/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio Daniel Berrio - Analista y Desarrollador de Software", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit in fac elementum in fac elementum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-row items-center"> <img class="rounded-full w-48 h-48 mr-5" src="https://media.licdn.com/dms/image/v2/D4E03AQFbBawfitEgIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727407179405?e=1733356800&v=beta&t=QHr83QJlAsPIvjiOcuXGuMKttsLSoG67GQ7s_Z_xjTM" alt="daniel-photo"> <div class="flex flex-col"> <h1 class="text-white text-3xl md:text-4xl font-bold pb-2 lg:pb-2 mt-8">Hola, Soy Daniel Berrío.</h1> <a href="https://api.whatsapp.com/send?phone=573022521320&text=Hola%20Daniel,%20me%20interesa%20trabajar%20contigo." target="_blank" rel="noopener" class="flex flex-row items-center hover:scale-105 transition"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Open to work!` })} </a> </div> </div> <h2 class="text-xl lg:text-2xl text-wrap max-w-[700px]"> <span>+2 años de experiencia.</span> <span class="text-yellow-200/90">Analista y Desarrollador de Software</span> <span class="text-red-200/90">de Montería, Colombia.</span> <span class="opacity-75"> Especializado en el desarrollo web y Business Intelligence.</span> </h2> <nav class="flex gap-x-4 mt-8 flex-wrap"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/daniel-berrio-barrios/", "target": "_blank", "rel": "noopener" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedinIcon", $$Linkedin, { "class": "size-4 md:size-6" })}
LinkedIn
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/KingDanyDev", "target": "_blank", "rel": "noopener" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GithubIcon", $$Github, { "class": "size-4 md:size-6" })}
GitHub
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:berriobarriosdaniel@gmail.com", "target": "_blank", "rel": "noopener" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4 md:size-6" })}
Enviame un correo
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-7" })}
Experiencia Laboral
</h2> ${renderComponent($$result3, "Experiencie", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-7" })}
Sobre Mi
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </main> ` })} `;
}, "C:/Portafolio web con Astro/portafolio-dev/src/pages/index.astro", void 0);

const $$file = "C:/Portafolio web con Astro/portafolio-dev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
