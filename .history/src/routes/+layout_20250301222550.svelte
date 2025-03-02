<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-center">
		<a href="/home" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
</div>

{@render children()}