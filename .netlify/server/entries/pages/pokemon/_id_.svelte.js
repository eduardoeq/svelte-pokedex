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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b22a25cc = require("../../../immutable/chunks/index-b22a25cc.js");
async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const poke = await res.json();
  return { props: { poke } };
}
const U5Bidu5D = (0, import_index_b22a25cc.c)(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  const type = poke.types.map((arr) => arr.type.name).join(" ");
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  return `<div class="${"flex flex-col items-center"}"><h1 class="${"capitalize text-4xl my-8"}">${(0, import_index_b22a25cc.e)(poke.name)}</h1>

    <p class="${"capitalize text-md my-8"}">Type: <strong>${(0, import_index_b22a25cc.e)(type)}</strong> |
        Height: <strong>${(0, import_index_b22a25cc.e)(poke.height / 10)} m</strong> |
        Weight: <strong>${(0, import_index_b22a25cc.e)(poke.weight / 10)} kg</strong></p>

    <img${(0, import_index_b22a25cc.b)("src", poke.sprites.other["official-artwork"]["front_default"], 0)}${(0, import_index_b22a25cc.b)("alt", poke.name, 0)}></div>`;
});
