<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import icon from "$lib/components/IconLink.svelte"
    import { icons, games } from "$lib/data/games";
    import IconLink from "$lib/components/IconLink.svelte";
</script>
<div class="bg-gray-700">
    <div class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 h-fit">
        <div class="my-8">
            <div class="text-center">
                <p class="text-4xl">{m["navbar.games"]()}</p>
            </div>
        </div>
        <div class="flex flex-col items-center w-full gap-y-12 mb-6">
            {#each games.list as game}
            <div class="flex flex-col lg:flex-row items-center justify-center bg-neutral-900/35 w-full">
                <img class="h-24 w-36 lg:h-48 lg:w-72 object-cover my-12 mx-12" src="{game.image}" alt="This is a thing">
                <div class="divider lg:divider-horizontal"></div>
                <div class="grow-3 my-8 mx-8">
                    <div class="content-center text-wrap">                       
                        <p class="text-center text-2xl">{game.name}</p>
                        <br>
                        <div class="overflow-scroll lg:overflow-hidden indent-8 mx-8">
                            <p>{game.description}</p>
                        </div>
                        <br>
                        <ul class="menu menu-horizontal lg:mx-8 rounded-box content-center">
                            {#each icons.stores as store}
                                <li class=""><IconLink link={store.url} image={store.icon} name={store.name} size={icons.store_icon_size}/></li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
