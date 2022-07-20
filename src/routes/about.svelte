
<script>
    let things = [
        "Svelte stores",
        "PokeAPI",
        "API endpoints",
        "Dynamic routes",
        "Server-side rendering",
        "Svelte transition animations",
        "Infinite scrolling",
        "Tailwind css"
    ];
</script>
<svelte:head>
    <title>About</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">About</h1>
<p class="my-4">This is a SvelteKit Demo that uses the PokeAPI to build a Pokédex.</p>
<p class="my-4">Some of the tools used in this project are:</p>
<ul class="list-disc px-6 text-gray-800">
    {#each things as thing}
        <li class="my-1">{thing}</li>
    {/each}
</ul>
<p class="my-8 text-center">Built by <a class="text-rose-600 font-bold" href="https://github.com/eduardoeq" target="_blank">Eduardo Raizer</a></p>