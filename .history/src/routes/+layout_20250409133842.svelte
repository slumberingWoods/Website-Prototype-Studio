<script lang="ts">
	let { children } = $props();
	import "../app.css";
	import Nav from "$lib/components/navbar.svelte"
	import Footer from "$lib/components/footer.svelte"
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
<Nav />

{@render children()}

<Footer />
	</div>
</div>
</div>	