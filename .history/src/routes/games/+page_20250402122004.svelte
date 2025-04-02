<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import icon from "$lib/components/IconLink.svelte"
    import { hero } from "$lib/data/home";
    import IconLink from "$lib/components/IconLink.svelte";
</script>
<div class="bg-gray-700">
    <div class="mx-12 flex flex-col items-center bg-slate-400 h-fit">
        <div class="my-8">
            <div class="text-center">
                <p class="text-4xl">{m["navbar.games"]()}</p>
            </div>
        </div>
        <div class="flex flex-col items-center w-full gap-y-12 mb-6">
            <div class="flex flex-row items-center justify-center bg-neutral-900/35 w-full">
                <img class="h-48 w-96 object-cover my-12 mx-12" src="$static/images/games/pexels-mart-production-8885140.jpg" alt="This is a thing">
                <div class="divider divider-horizontal"></div>
                <div class="grow-3 my-8 mx-8">
                    <div class="content-center text-wrap">
                        <p class="text-center text-2xl">{m["game.page.game_1.title"]()}</p>
                        <br>
                        <div class="indent-8 mx-8">
                            <p>{m["game.page.game_1.description"]()}</p>
                        </div>
                        <br>
                        <ul class="menu menu-horizontal px-5 content-center items-center justify-center text-2xl underline">
                            {#each hero.stores as store}
                                <li><IconLink link={store.url} image={store.icon} name={store.name} size={hero.store_icon_size} /></li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-row items-center justify-center bg-neutral-900/35 w-full">
                <img class="h-48 w-96 object-cover my-12 mx-12" src="$static/images/games/pexels-mart-production-8885140.jpg" alt="This is a thing">
                <div class="divider divider-horizontal"></div>
                <div class="grow-3 my-8 mx-8">
                    <div class="content-center text-wrap">  
                        <p class="text-center text-2xl">{m["game.page.game_2.title"]()}</p>
                        <br>
                        <div class="indent-8 mx-8">
                            <p>{m["game.page.game_2.description"]()}</p>
                        </div>
                        <br>
                        <ul class="menu menu-horizontal px-5 content-center text-2xl underline">
                            {#each hero.stores as store}
                                <li><IconLink link={store.url} image={store.icon} name={store.name} size={hero.store_icon_size} /></li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
