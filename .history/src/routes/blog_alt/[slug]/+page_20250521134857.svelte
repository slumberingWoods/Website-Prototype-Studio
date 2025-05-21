<script>
    export let data;
</script>

<article>
    <div
        class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 h-fit"
    >
        <div class="text-left my-8">
            <h1 class="text-center">{data.title}</h1>
            <p>Published: {data.date}</p>
            <svelte:component this={data.content} />
        </div>
    </div>
</article>
