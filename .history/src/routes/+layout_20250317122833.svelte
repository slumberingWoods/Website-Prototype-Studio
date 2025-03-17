<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start flex">
		<a href="/" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
	<div class="navbar-end flex">
		<ul class="bg-base-100 rounded-t-none p-2">
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
          </ul>
	</div>
</div>

{@render children()}