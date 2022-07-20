import { c as create_ssr_component, b as add_attribute, e as escape, a as each, v as validate_component } from "../../immutable/chunks/index-b22a25cc.js";
const Pokecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  return `<a class="${"p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${add_attribute("href", `/pokemon/${poke.id}`, 0)}><img${add_attribute("src", poke.img, 0)}${add_attribute("alt", poke.name, 0)} class="${"h-35 w-35"}">
    <h2 class="${"capitalize"}">${escape(poke.id)}. ${escape(poke.name)}</h2></a>`;
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
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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

<input class="${"w-full rounded-md text-lg p-4 border-2 border-gray-200"}" type="${"text"}" placeholder="${"Search Pok\xE9mon"}"${add_attribute("value", searchTerm, 0)}>

<div class="${"py-4 grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:gr-cols-2"}">${each(filteredPokemon, (poke) => {
    return `${validate_component(Pokecard, "Pokecard").$$render($$result, { poke }, {}, {})}`;
  })}
</div>`;
});
export {
  Routes as default,
  load
};
