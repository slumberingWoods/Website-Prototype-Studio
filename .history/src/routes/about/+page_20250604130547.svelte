<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { people, sections } from "$lib/data/team";
    import BlockDescription from "$lib/components/BlockDescription.svelte";
    import Person from "$lib/components/Person.svelte";
</script>

<div class="bg-gray-700">
    <div class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 h-fit">
        <div class="my-12">
            <div class="text-center">
                <p class="text-3xl lg:text-4xl">{m["about.page.title"]()}</p>
                {#each sections.list as section}
                    <BlockDescription title={section.title} description={section.description}> </BlockDescription>
                {/each}
            </div>
            <div class="">
                <p class="text-center text-4xl">
                    {m["about.page.team.title"]()}
                </p>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-8 lg:mx-36">
                    {#each people.list as person}
                        <Person image={person.image} name={person.name} title={person.title} bio={person.bio}></Person>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
