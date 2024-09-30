import * as adapter from '@astrojs/vercel/serverless/entrypoint';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_LLuOsfrO.mjs';

const _page0  = () => import('./chunks/generic_GUSEVdOa.mjs');
const _page1  = () => import('./chunks/index_8HDvvDNq.mjs');
const _page2  = () => import('./chunks/components_n7nQIeer.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/components.astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"2d0fe191-c2e4-44f6-b9a0-ff6826805c30","skewProtection":false};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
