<script lang="ts">
    import { enhance } from "$app/forms";
    import { m } from "../paraglide/messages";
    import { navbar } from "$lib/data/navigation";
    import { localizeHref } from "$lib/paraglide/runtime";
    import Socials from "./Socials.svelte";
</script>

<div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu text-2xl bg-slate-900 min-h-full w-80 pl-10 pt-[74px]">
        <!-- Sidebar content here -->
        {#each navbar.list as link}
            {#if link.links == null}
                <li>
                    <a href={localizeHref(link.href)}>{link.name}</a>
                </li>
            {:else}
                <li>
                    <details>
                        <summary>{link.name}</summary>
                        <ul class="p-2 bg-slate-900">
                            {#each link.links as sublink}
                                <li>
                                    <a href={localizeHref(sublink.href)}
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
