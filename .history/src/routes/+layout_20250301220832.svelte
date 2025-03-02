<script lang="ts">
	let { children } = $props();
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

{@render children()}