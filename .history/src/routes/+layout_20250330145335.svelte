<script lang="ts">
	let { children } = $props();
	import "../app.css";
	import Nav from "$lib/components/navbar.svelte"
	import Footer from "$lib/components/footer.svelte"
	import { availableLanguageTags, languageTag } from "$paraglide/runtime";
</script>

<Nav />

{@render children()}

<Footer />