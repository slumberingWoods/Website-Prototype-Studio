<script>
    export let data;
</script>

<article>
    <div
        class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 h-fit"
    >
        <div class="text-left mx-2 my-8 ">
            <h1 class="text-center text-5xl">{data.title}</h1>
            <p class="text-center">Published: {data.date}</p>
            <div class="divider"></div>
            <svelte:component this={data.content} />
        </div>
    </div>
</article>
