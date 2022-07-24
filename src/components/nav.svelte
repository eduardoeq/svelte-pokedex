<script>
    export let page;
</script>

<nav class="flex justify-center w-full">
    <a class="mx-4 text-lg { page == '' ? "font-semibold text-rose-600" : "" }" href="/">Home</a>
    <a class="mx-4 text-lg { page == 'about' ? "font-semibold text-rose-600" : "" }" href="/about">About</a>
</nav>