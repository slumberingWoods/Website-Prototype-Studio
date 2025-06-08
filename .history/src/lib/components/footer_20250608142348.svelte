<script>
	import { m } from "../paraglide/messages";
	import Socials from "./Socials.svelte";
</script>

<div class="w-max-screen">
	<footer
		class="footer lg:footer-horizontal bg-slate-900 text-neutral-content p-12"
	>
		<nav class="lg:place-self-center lg:justify-self-start lg:mx-12">
			<h6 class="footer-title">{m["footer.legal.title"]()}</h6>
			<a href="/" class="link link-hover">{m["footer.legal.term"]()}</a>
			<a href="/" class="link link-hover">{m["footer.legal.private"]()}</a>
		</nav>
		<nav class="invisible lg:visible lg:place-self-center lg:justify-self-end lg:mx-12">
			<h6 class="footer-title">{m["footer.social"]()}</h6>
			<Socials></Socials>
		</nav>
	</footer>
	<footer
		class="footer sm:footer-horizontal footer-center bg-slate-900 text-base-content p-4"
	>
		<aside>
			<p>
				{m["footer.rights"]({date: new Date().getFullYear()})}
			</p>
		</aside>
	</footer>
</div>
