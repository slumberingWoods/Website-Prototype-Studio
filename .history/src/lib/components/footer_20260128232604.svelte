<script>
	import { m } from "../paraglide/messages";
	import { localizeHref } from "$lib/paraglide/runtime";
	import Socials from "./Socials.svelte";
	import { navbar } from "$lib/data/navigation";
</script>

<div class="w-max-screen">
	<footer
		class="footer lg:footer-horizontal bg-slate-900 text-neutral-content p-4 overflow-hidden"
	>
		<nav class="lg:place-self-start lg:justify-self-start">
			<h6 class="footer-title">{m["footer.link"]()}</h6>
			{#each navbar.list as link}
				{#if link.links == null}
					<a href={localizeHref(link.href)} class="link link-hover"
						>{link.name}</a
					>
				{:else}
					{#each link.links as sublink}
						<a
							href={localizeHref(sublink.href)}
							class="link link-hover">{sublink.name}</a
						>
					{/each}
				{/if}
			{/each}
		</nav>
		<nav class="lg:place-self-start lg:justify-self-start">
			<h6 class="footer-title">{m["footer.legal.title"]()}</h6>
			<a href="/" class="link link-hover">{m["footer.legal.term"]()}</a>
			<a href="/" class="link link-hover">{m["footer.legal.private"]()}</a
			>
		</nav>
		<nav
			class="hidden lg:block lg:place-self-start lg:justify-self-end"
		>
			<h6 class="footer-title">{m["footer.social"]()}</h6>
			<Socials></Socials>
		</nav>
	</footer>
	<footer
		class="footer sm:footer-horizontal footer-center bg-slate-900 text-base-content pb-4"
	>
		<aside>
			<p>
				{m["footer.rights"]({ date: new Date().getFullYear() })}
			</p>
		</aside>
	</footer>
</div>
