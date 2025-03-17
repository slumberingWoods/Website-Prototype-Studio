<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start flex mx-12">
		<a href="/" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
	<div class="navbar-end flex mx-12">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li><a href="/">Games</a></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Contact</a></li>
			<div>
				<ul class="menu menu-horizontal">
					<li>
						<button class="btn btn-square" aria-label="like">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
						</button>
					</li>
				</ul>
			</div>
		</ul>
	</div>
</div>

{@render children()}