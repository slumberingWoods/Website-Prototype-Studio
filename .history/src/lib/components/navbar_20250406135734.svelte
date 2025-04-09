<script lang="ts">
    import { enhance } from "$app/forms";
    import { m } from "../paraglide/messages";
    import { localizeHref } from "$lib/paraglide/runtime";
    import { page } from "$app/state";
</script>

<nav>
    <div class="navbar h-20 sm:h-fit bg-slate-900 shadow-sm content-center">
        <div class="navbar-start flex mx-12">
            <div class="">
                <button
                    tabindex="-1"
                    class="btN lg:hidden"
                    popovertarget="popover-1"
                    aria-label="button"
                    style="anchor-name:--anchor-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
                <ul
                    class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover
                    id="popover-1"
                    style="position-anchor:--anchor-1"
                >
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
                        <a href={localizeHref("/blog")}>{m["navbar.blog"]()}</a>
                    </li>
                    <li>
                        <a href={localizeHref("/contact")}
                            >{m["navbar.contact"]()}</a
                        >
                    </li>
                </ul>
            </div>
            <a href={localizeHref("/")} class="btn btn-ghost text-xl"
                >Prototype Website</a
            >
        </div>
        <div class="invisible sm:visible navbar-end flex mx-12 content-center">
            <ul class="menu menu-horizontal px-5 content-center">
                <li><a href={localizeHref("/")}>{m["navbar.home"]()}</a></li>
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
                    <a href={localizeHref("/contact")}
                        >{m["navbar.contact"]()}</a
                    >
                </li>
            </ul>
            <ul
                class="invisible sm:visible menu menu-horizontal bg-slate-800 rounded-box"
            >
                <li>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                        aria-label="Youtube"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-youtube"
                        >
                            <path
                                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                            ></path>
                            <polygon
                                points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                            ></polygon>
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/watch?v=3BFTio5296w&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                        aria-label="Youtube"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                            ></rect>
                            <path
                                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                            ></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/watch?v=XGxIE1hr0w4&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                        aria-label="Youtube"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter"
                        >
                            <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
            <ul>
                <div class="ml-4">
                    <form method="POST" action={localizeHref("/")}>
                        <input
                            type="hidden"
                            name="url"
                            id="MyId"
                            value={page.url.pathname}
                        />
                        <button class="btn bg-slate-800 rounded-box"
                            >{m["navbar.button.lang"]()}</button
                        >
                    </form>
                </div>
            </ul>
        </div>
    </div>
</nav>
