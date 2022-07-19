<script>
    import { fade } from 'svelte/transition';
    export let poke;
</script>

<a  transition:fade
    class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" 
    href={`/pokemon/${poke.id}`}
>
    <img 
        src={poke.img} alt="{poke.name}" 
        class="h-35 w-35"
    />
    <h2 class="capitalize">{poke.id}. {poke.name}</h2>
</a>