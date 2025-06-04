<script lang="ts">
    import { enhance } from "$app/forms";
    import { m } from "../paraglide/messages";
    import { localizeHref } from "$lib/paraglide/runtime";
    import { page } from "$app/state";
    import { } from "$lib/data/navigation";
    import Socials from "./Socials.svelte";
</script>

<nav>
    <div class="navbar h-20 lg:h-fit bg-slate-900 shadow-sm content-center">
        <div class="navbar-start flex lg:mx-12">
            <ul class="menu menu-horizontal px-5 content-center">
                <li>
                    <a href={localizeHref("/")} class="text-xl"
                        >Prototype Website</a
                    >
                </li>
            </ul>
        </div>
        <div class="navbar-end flex lg:mx-12 content-center">
            <div class="invisible lg:visible">
                <ul class="menu menu-horizontal px-5 content-center">
                    {#each }
                    <li>
                        <a href={localizeHref("/")}>{m["navbar.home"]()}</a>
                    </li>
                    <li>
                        <a href={localizeHref("/games")}
                            >{m["navbar.games"]()}</a
                        >
                    </li>
                    <li>
                        <a href={localizeHref("/about")}
                            >{m["navbar.about"]()}</a
                        >
                    </li>
                    <li>
                        <details>
                            <summary>{m["navbar.blog"]()}</summary>
                            <ul class="p-2 bg-slate-900">
                                <li>
                                    <a href={localizeHref("/blog")}
                                        >{m["navbar.blog"]()}</a
                                    >
                                </li>
                                <li>
                                    <a href={localizeHref("/blog_alt")}
                                        >{m["navbar.blogalt"]()}</a
                                    >
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href={localizeHref("/contact")}
                            >{m["navbar.contact"]()}</a
                        >
                    </li>
                </ul>
            </div>
            <Socials></Socials>
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
        </div>
        <div class="lg:invisible">
            <label
                for="my-drawer-3"
                aria-label="open sidebar"
                class="btn btn-square btn-ghost"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-6 w-6 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </label>
        </div>
    </div>
</nav>
