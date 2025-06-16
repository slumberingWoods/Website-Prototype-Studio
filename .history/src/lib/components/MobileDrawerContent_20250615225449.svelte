<script lang="ts">
    import { enhance } from "$app/forms";
    import { m } from "../paraglide/messages";
    import { navbar } from "$lib/data/navigation";
    import { localizeHref } from "$lib/paraglide/runtime";
    import { page } from "$app/state";
    import Socials from "./Socials.svelte";
    let { updateDrawer = $bindable()} = $props()
</script>

<div class="drawer-side w-max-screen">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu text-2xl bg-slate-900/95 min-h-full w-80 pl-10 pt-[74px]">
        <!-- Sidebar content here -->
         <li>
            <ul>
                <div class="lg:ml-4">
                    <form method="POST" action={localizeHref("/")}>
                        <input
                            type="hidden"
                            name="url"
                            id="MyId"
                            value={page.url.pathname}
                        />
                        <button class="btn btn-neutral bg-slate-800 rounded-box"
                            >{m["navbar.button.lang"]()}</button
                        >
                    </form>
                </div>
            </ul>
         </li>
        {#each navbar.list as link}
            {#if link.links == null}
                <li>
                    <a href={localizeHref(link.href)} onclick={updateDrawer}>{link.name}</a>
                </li>
            {:else}
                <li>
                    <details>
                        <summary>{link.name}</summary>
                        <ul class="p-2 bg-slate-900">
                            {#each link.links as sublink}
                                <li>
                                    <a href={localizeHref(sublink.href)} onclick={updateDrawer}
                                        >{sublink.name}</a
                                    >
                                </li>
                            {/each}
                        </ul>
                    </details>
                </li>
            {/if}
        {/each}
        <li>
            <p>{m["footer.social"]()}</p>
            <Socials></Socials>
        </li>
    </ul>
</div>
