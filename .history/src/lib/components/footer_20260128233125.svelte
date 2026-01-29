<script>
	import { m } from "../paraglide/messages";
	import { localizeHref } from "$lib/paraglide/runtime";
	import Socials from "./Socials.svelte";
	import { navbar } from "$lib/data/navigation";
</script>

<div class="w-max-screen">
	<footer
		class="footer footer-horizontal footer-center bg-slate-900 text-base-content rounded p-10"
	>
		<nav class="grid grid-flow-col gap-2">
			<a href="/" class="link link-hover">{m["footer.legal.term"]()}</a>
			<a href="/" class="link link-hover">{m["footer.legal.private"]()}</a
			>
		</nav>
		<nav>
			<div class="grid grid-flow-col gap-2">
				<Socials></Socials>
			</div>
		</nav>
		<aside>
			<p>
				{m["footer.rights"]({ date: new Date().getFullYear() })}
			</p>
		</aside>
	</footer>
	
</div>
