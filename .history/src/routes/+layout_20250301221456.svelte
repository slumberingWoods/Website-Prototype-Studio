<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>

<nav class="bg-gray-900 border-gray-200">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

{@render children()}