<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start flex mx-12">
		<a href="/" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
	<div class="navbar-end flex mx-12">
		<a href="/">Home</a>
		<a href="/">Games</a>
		<a href="/">About</a>
		<a href="/">Blog</a>
		<a href="/">Contact</a>
		<div>

		</div>
	</div>
</div>

{@render children()}