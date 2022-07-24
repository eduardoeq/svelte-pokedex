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
        return{ props: {allPokemon: loadedPokemon} }
    }
</script>

<script>
    import InfiniteScroll from "svelte-infinite-scroll";
    import Pokecard from "../components/pokecard.svelte";
    export let allPokemon;

    let page = 1;
    let size = 24;
    let maxLimit = 898;

    let searchTerm = "";
    // let pokemon = [];
    let pokemon = allPokemon.slice(0, size*page);
    let filteredPokemon = pokemon;

    $: {
        filteredPokemon = searchTerm.length == 0
        ? [...pokemon] 
        : allPokemon.filter( poke => poke.name.includes(searchTerm.toLocaleLowerCase()));
    }
    const loadMorePokemon = () => {
        let newSize = size*page > 898 ? 898 : size*page;
        pokemon = allPokemon.slice(0, newSize);
    }
</script>

<svelte:head>
    <title>Pokédex</title>
</svelte:head>

<h1 class="dark text-4xl text-center my-8 uppercase text-rose-500 font-semibold">Pokédex</h1>

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
    <InfiniteScroll 
        window="true"
        threshold={1} 
        on:loadMore={()=>{page++; loadMorePokemon()}} 
    />
</div>


<style>

</style>
