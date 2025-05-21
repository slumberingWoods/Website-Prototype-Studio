<script>
    export let data;
</script>

<article>
    <div
        class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 h-screen"
    >
        <div class="text-left">
            <h1>{data.title}</h1>
            <p>Published: {data.date}</p>
            <svelte:component this={data.content} />
        </div>
    </div>
</article>
