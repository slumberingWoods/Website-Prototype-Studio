<script lang="ts">
	let { children } = $props();
	import "../app.css";
	import Nav from "$lib/components/navbar.svelte"
	import Footer from "$lib/components/footer.svelte"
</script>

<style lang="postcss">
	@reference "tailwindcss";
  	:global(html) {
    	font-family: 'Times New Roman', Times, serif;
  	}
</style>

<Nav />

{@render children()}

<Footer />