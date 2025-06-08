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
            <summary>{m["navbar.blog"]()}</summary>
            <ul>
                <li>
                    <a href={localizeHref("/blog")}>{m["navbar.blog"]()}</a>
                </li>
                <li>
                    <a href={localizeHref("/blog_alt")}
                        >{m["navbar.blogalt"]()}</a
                    >
                </li>
            </ul>
        </li>
        <li>
            <a href={localizeHref("/contact")}>{m["navbar.contact"]()}</a>
        </li>
        <li>
            <p>{m["footer.social"]()}</p>
            <Socials></Socials>
        </li>
    </ul>
</div>
