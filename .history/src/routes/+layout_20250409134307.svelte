<script lang="ts">
	let { children } = $props();
	import "../app.css";
	import Nav from "$lib/components/navbar.svelte";
	import Footer from "$lib/components/footer.svelte";
	import { localizeHref } from "$lib/paraglide/runtime";
	import { m } from "$lib/paraglide/messages";
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Nav />

		{@render children()}

		<Footer />
	</div>
	<div class="drawer-side">
        <label
            for="my-drawer-3"
            aria-label="close sidebar"
            class="drawer-overlay"
        ></label>
        <ul class="menu text-2xl bg-base-200 min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <li>
                <a href={localizeHref("/")}>{m["navbar.home"]()}</a>
            </li>
            <li>
                <a href={localizeHref("/games")}>{m["navbar.games"]()}</a>
            </li>
            <li>
                <a href={localizeHref("/about")}>{m["navbar.about"]()}</a>
            </li>
            <li>
                <a href={localizeHref("/blog")}>{m["navbar.blog"]()}</a>
            </li>
            <li>
                <a href={localizeHref("/contact")}>{m["navbar.contact"]()}</a>
            </li>
        </ul>
    </div>
</div>
