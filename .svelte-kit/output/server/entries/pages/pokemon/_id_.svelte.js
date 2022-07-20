import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../immutable/chunks/index-b22a25cc.js";
async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const poke = await res.json();
  return { props: { poke } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  const type = poke.types.map((arr) => arr.type.name).join(" ");
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  return `<div class="${"flex flex-col items-center"}"><h1 class="${"capitalize text-4xl my-8"}">${escape(poke.name)}</h1>

    <p class="${"capitalize text-md my-8"}">Type: <strong>${escape(type)}</strong> |
        Height: <strong>${escape(poke.height / 10)} m</strong> |
        Weight: <strong>${escape(poke.weight / 10)} kg</strong></p>

    <img${add_attribute("src", poke.sprites.other["official-artwork"]["front_default"], 0)}${add_attribute("alt", poke.name, 0)}></div>`;
});
export {
  U5Bidu5D as default,
  load
};
