<script context="module">
    export async function load({ params }) {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const poke = await res.json();
        return {props: {poke}};
    }
</script>

<script>
    export let poke;
    const type = poke.types.map(arr => arr.type.name).join(" ");
</script>

<div class="flex flex-col items-center">
    <h1 class="capitalize text-4xl my-8">{poke.name}</h1>

    <p class="capitalize text-md my-8">
        Type: <strong>{type}</strong> |
        Height: <strong>{poke.height/10} m</strong> |
        Weight: <strong>{poke.weight/10} kg</strong>
    </p>

    <img 
        src={poke.sprites.other['official-artwork']['front_default']}
        alt="{poke.name}" 
/>
</div>