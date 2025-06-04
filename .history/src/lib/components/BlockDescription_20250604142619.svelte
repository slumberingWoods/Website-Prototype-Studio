<script lang="ts">
    let { title, description } = $props();
    
</script>

<div
    class="flex flex-col lg:flex-row items-center justify-center bg-neutral-900/35 w-full my-12"
>
    <div class="grow-8 mt-8 lg:mt-0 lg:mx-16">
        <p class="text-3xl">{title}</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div
        class="overflow-scroll lg:overflow-hidden h-84 lg:h-auto text-start indent-8 content-center place-items-center justify-items-center my-8 mx-12 text-wrap text-lg"
    >
        <p>{description}</p>
    </div>
</div>
