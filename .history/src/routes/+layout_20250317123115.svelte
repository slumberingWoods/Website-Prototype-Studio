<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start flex">
		<a href="/" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
	<div class="navbar-end flex">
		<a href="/">Link 1</a>
		<a href="/">Link 2</a>
	</div>
</div>

{@render children()}