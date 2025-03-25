<script lang="ts">
	let { children } = $props();
	import "../app.css";
	import Nav from "$lib/components/navbar.svelte"
	import Footer from "$lib/components/footer.svelte"
</script>

<Nav />

{@render children()}

<Footer />