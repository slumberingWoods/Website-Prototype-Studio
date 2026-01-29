<script>
    export let data;
    const date = new Date(data.date);
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    data.date = formattedDate;
</script>

<div class="bg-gray-700">
    <article>
        <div
            class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 h-fit"
        >
            <article>
                <div class="text-left mx-2 my-8">
                    <h1 class="text-center text-5xl">{data.title}</h1>
                    <p class="text-center">Published: {data.date}</p>
                    <div class="divider"></div>
                    <div class="prose">
                        <svelte:component this={data.content} />
                    </div>
                </div>
            </article>
        </div>
    </article>
</div>
