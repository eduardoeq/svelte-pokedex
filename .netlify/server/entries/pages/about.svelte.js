var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b22a25cc = require("../../immutable/chunks/index-b22a25cc.js");
const About = (0, import_index_b22a25cc.c)(($$result, $$props, $$bindings, slots) => {
  let things = [
    "Svelte stores",
    "API setup",
    "Dynamic routes",
    "Server-side rendering",
    "Svelte transition animations"
  ];
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}
<h1 class="${"text-4xl text-center my-8 uppercase"}">About</h1>
<p class="${"my-4"}">This is a SvelteKit Demo that uses the PokeAPI to build a Pok\xE9dex.</p>
<p class="${"my-4"}">Some of the tools used in this project are:</p>
<ul class="${"list-disc px-6 text-gray-800"}">${(0, import_index_b22a25cc.a)(things, (thing) => {
    return `<li class="${"my-1"}">${(0, import_index_b22a25cc.e)(thing)}</li>`;
  })}</ul>`;
});
