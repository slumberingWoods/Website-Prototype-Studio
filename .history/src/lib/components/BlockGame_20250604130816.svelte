<script lang="ts">
    let { image, name, description } = $props();
    import { icons } from "$lib/data/games";
</script>

<div
    class="flex flex-col lg:flex-row items-center justify-center bg-neutral-900/35 w-full"
>
    <img
        class="h-36 w-48 lg:h-48 lg:w-72 object-cover my-12 mx-12"
        src={game.image}
        alt="This is a thing"
    />
    <div class="divider lg:divider-horizontal"></div>
    <div class="grow-3 my-8 mx-8">
        <div class="content-center text-wrap">
            <p class="text-center text-2xl">{game.name}</p>
            <br />
            <div
                class="overflow-scroll h-64 lg:h-auto lg:overflow-hidden indent-8 mx-2 lg:mx-8"
            >
                <p>{game.description}</p>
            </div>
            <br />
            <ul class="menu menu-horizontal lg:mx-8 rounded-box content-center">
                {#each icons.stores as store}
                    <li class="">
                        <IconLink
                            link={store.url}
                            image={store.icon}
                            name={store.name}
                            size={icons.store_icon_size}
                        />
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
