import { c as create_ssr_component, a as each, e as escape } from "../../immutable/chunks/index-b22a25cc.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
<ul class="${"list-disc px-6 text-gray-800"}">${each(things, (thing) => {
    return `<li class="${"my-1"}">${escape(thing)}</li>`;
  })}</ul>`;
});
export {
  About as default
};
