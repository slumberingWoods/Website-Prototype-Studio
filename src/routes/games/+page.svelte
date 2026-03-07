<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import icon from "$lib/components/IconLink.svelte";
    import { icons, games } from "$lib/data/games";
    import IconLink from "$lib/components/IconLink.svelte";
    import BlockGame from "$lib/components/BlockGame.svelte";
</script>

<div class="bg-gray-700">
    <div class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 mt-20 h-fit">
        <div class="my-8">
            <div class="text-center">
                <p class="text-4xl">{m["navbar.games"]()}</p>
            </div>
        </div>
        <div class="flex flex-col items-center w-full gap-y-12 mb-6">
            {#each games.list as game}
                <BlockGame image={game.image} name={game.name} description={game.description}></BlockGame>
            {/each}
        </div>
    </div>
</div>
