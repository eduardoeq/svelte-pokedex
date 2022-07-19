<script context="module">
    export async function load() {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=898';
        const res = await fetch(url);
        const data = await res.json();

        const loadedPokemon = data.results.map((data, index) => {
            return {
                name: data.name,
                id: index + 1,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                }.png`
            }
        });
        return{props: {pokemon: loadedPokemon}}
    }
</script>

<script>
    import Pokecard from "../components/pokecard.svelte";
    export let pokemon;

    let searchTerm = "";
    let filteredPokemon = pokemon;

    $: {
        filteredPokemon = searchTerm.length == 0 
        ? [...pokemon] 
        : pokemon.filter( poke => poke.name.includes(searchTerm.toLocaleLowerCase()))
    }

</script>
<svelte:head>
    <title>Pokédex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokédex</h1>

<input 
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
    type="text" 
    placeholder="Search Pokémon"
    bind:value={searchTerm}    
/>

<div class="py-4 grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:gr-cols-2">
    {#each filteredPokemon as poke}
        <Pokecard poke={poke} />
    {/each}
</div>

<style>

</style>
