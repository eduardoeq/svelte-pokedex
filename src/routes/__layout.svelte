<script>
    import Nav from "../components/nav.svelte";
    import { page } from '$app/stores';


</script>

<div class="p-8 max-w-6xl mx-auto">
    <Nav page={$page.routeId} />
    <slot></slot>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>