<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { people } from "$lib/data/team";
    import Person from "$lib/components/Person.svelte";
</script>

<div class="bg-gray-700">
    <div class="mx-12 flex flex-col items-center bg-slate-400 h-fit">
        <div class="my-12">
            <div class="text-center">
                <p class="text-3xl lg:text-4xl">{m["about.page.title"]()}</p>
                <div
                    class="flex flex-col lg:flex-row items-center justify-center bg-neutral-900/35 w-full my-12"
                >
                    <div class="grow-8 lg:mx-16">
                        <p class="text-3xl">{m["about.page.section"]()}</p>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div
                        class="text-start indent-8 content-center place-items-center justify-items-center my-8 mx-12 text-wrap text-lg"
                    >
                        <p>{m["about.page.description"]()}</p>
                    </div>
                </div>
            </div>
            <div class="">
                <p class="text-center text-4xl">
                    {m["about.page.team.title"]()}
                </p>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-12 mx-36">
                    {#each people.list as person}
                        <Person image={person.image} name={person.name} title={person.title} bio={person.bio}></Person>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
