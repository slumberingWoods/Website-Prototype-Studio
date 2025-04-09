<script lang="ts">
	let { children } = $props();
	import "../app.css";
	import Nav from "$lib/components/navbar.svelte"
	import Footer from "$lib/components/footer.svelte"
</script>

<div class="drawer drawer-end">
	
<Nav />

{@render children()}

<Footer />
</div>	