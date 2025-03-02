<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>

<nav>
	<div class="navbar bg-base-100 shadow-sm">
		<div class="navbar-center">
			<a href="/home" class="btn btn-ghost text-xl">daisyUI</a>
		</div>
	</div>
</nav>

{@render children()}