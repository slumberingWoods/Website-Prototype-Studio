<script lang="ts">
    let { children } = $props();
    import "../app.css";
    import Nav from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { localizeHref } from "$lib/paraglide/runtime";
    import { m } from "$lib/paraglide/messages";
    import MobileDrawerContent from "$lib/components/MobileDrawerContent.svelte";
</script>

<svelte:head>
    <script
        defer
        src="http://gwf-umami.67.207.84.31.sslip.io/script.js"
        data-website-id="b356c86c-09c1-4dcd-9f32-febd48023d6e"
    ></script>
</svelte:head>
<div class="drawer drawer-end text-neutral-50">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
        <Nav />

        {@render children()}

        <Footer />
    </div>
    <MobileDrawerContent bind:updateDrawer={handleClick} ></MobileDrawerContent>
</div>
