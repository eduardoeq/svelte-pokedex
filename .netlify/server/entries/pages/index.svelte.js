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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b22a25cc = require("../../immutable/chunks/index-b22a25cc.js");
const Pokecard = (0, import_index_b22a25cc.c)(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  return `<a class="${"p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${(0, import_index_b22a25cc.b)("href", `/pokemon/${poke.id}`, 0)}><img${(0, import_index_b22a25cc.b)("src", poke.img, 0)}${(0, import_index_b22a25cc.b)("alt", poke.name, 0)} class="${"h-35 w-35"}">
    <h2 class="${"capitalize"}">${(0, import_index_b22a25cc.e)(poke.id)}. ${(0, import_index_b22a25cc.e)(poke.name)}</h2></a>`;
});
async function load() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=898";
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  return { props: { pokemon: loadedPokemon } };
}
const Routes = (0, import_index_b22a25cc.c)(($$result, $$props, $$bindings, slots) => {
  let { pokemon } = $$props;
  let searchTerm = "";
  let filteredPokemon = pokemon;
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  {
    {
      filteredPokemon = searchTerm.length == 0 ? [...pokemon] : pokemon.filter((poke) => poke.name.includes(searchTerm.toLocaleLowerCase()));
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Pok\xE9dex</title>`, ""}`, ""}

<h1 class="${"text-4xl text-center my-8 uppercase"}">Pok\xE9dex</h1>

<input class="${"w-full rounded-md text-lg p-4 border-2 border-gray-200"}" type="${"text"}" placeholder="${"Search Pok\xE9mon"}"${(0, import_index_b22a25cc.b)("value", searchTerm, 0)}>

<div class="${"py-4 grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:gr-cols-2"}">${(0, import_index_b22a25cc.a)(filteredPokemon, (poke) => {
    return `${(0, import_index_b22a25cc.v)(Pokecard, "Pokecard").$$render($$result, { poke }, {}, {})}`;
  })}
</div>`;
});
