<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { people } from "$lib/data/team";
</script>

<div class="bg-gray-700">
    <div class="mx-12 flex flex-col items-center bg-slate-400 h-fit">
        <div class="my-12">
            <div class="text-center">
                <p class="text-4xl">{m["about.page.title"]()}</p>
                <div
                    class="flex flex-row items-center justify-center bg-neutral-900/35 w-full my-12"
                >
                    <div class="grow-8 mx-16">
                        <p class="text-3xl">{m["about.page.section"]()}</p>
                    </div>
                    <div class="divider divider-horizontal"></div>
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
                <div class="grid grid-cols-2 gap-3 my-12 mx-36">
                    {#each people.list as person}
                        <div
                            class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4"
                        >
                            <div
                                class="flex flex-row items-center justify-start my-4 ml-4"
                            >
                                <div
                                    class="relative rounded-full overflow-hidden mx-8 border border-neutral-900"
                                >
                                    <img
                                        class="h-30 w-30"
                                        src="{person.image}"
                                        alt="This is a thing"
                                    />
                                </div>
                                <div class="text-start">
                                    <p class="text-3xl font-semibold">
                                        {person.name}
                                    </p>
                                    <p class="">
                                        {person.title}
                                    </p>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div
                                class="text-start indent-8 font-stretch-condensed mx-12 my-6 text-lg"
                            >
                                <p>{person.bio}</p>
                            </div>
                        </div>
                    {/each}
                    <div
                        class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4"
                    >
                        <div
                            class="flex flex-row items-center justify-start my-4 ml-4"
                        >
                            <div
                                class="relative rounded-full overflow-hidden mx-8 border border-neutral-900"
                            >
                                <img
                                    class="h-30 w-30"
                                    src="../src/img/pexels-alscre-3977908.jpg"
                                    alt="This is a thing"
                                />
                            </div>
                            <div class="text-start">
                                <p class="text-3xl font-semibold">
                                    Sil K. Song
                                </p>
                                <p class="">
                                    {m["about.page.team.sil.title"]()}
                                </p>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div
                            class="text-start indent-8 font-stretch-condensed mx-12 my-6 text-lg"
                        >
                            <p>{m["about.page.team.sil.bio"]()}</p>
                        </div>
                    </div>
                    <div
                        class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4"
                    >
                        <div
                            class="flex flex-row items-center justify-start my-4 ml-4"
                        >
                            <div
                                class="relative rounded-full overflow-hidden mx-8 border border-neutral-900"
                            >
                                <img
                                    class="h-30 w-30"
                                    src="../src/img/pexels-tima-miroshnichenko-7047537.jpg"
                                    alt="This is a thing"
                                />
                            </div>
                            <div class="text-start">
                                <p class="text-3xl font-semibold">Gam Er</p>
                                <p class="">
                                    {m["about.page.team.gam.title"]()}
                                </p>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div
                            class="text-start indent-8 font-stretch-condensed mx-12 my-6 text-lg"
                        >
                            <p>{m["about.page.team.gam.bio"]()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
