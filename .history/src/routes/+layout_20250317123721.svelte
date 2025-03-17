<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start flex mx-12">
		<a href="/" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
	<div class="navbar-end flex mx-12">
		<ul class="menu menu-horizontal px-1"></ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Games</a></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Contact</a></li>
			<li><div>

			</div></li>
		</ul>
	</div>
</div>

{@render children()}