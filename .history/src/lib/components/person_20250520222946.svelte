<script lang="ts">
    let { image, name, title, bio } = $props();
</script>

<div class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4">
    <div class="flex flex-row items-center justify-start my-4 ml-4">
        <div
            class="relative rounded-full overflow-hidden mx-4 lg:mx-8 border border-neutral-900"
        >
            <enhanced:img class="h-24 w-24 lg:h-30 lg:w-30" src={image} alt="This is a thing" />
        </div>
        <div class="text-start">
            <p class="text-3xl font-semibold">
                {name}
            </p>
            <p class="">
                {title}
            </p>
        </div>
    </div>
    <div class="divider"></div>
    <div class="overflow-scroll lg:overflow-hidden h-64 lg:h-auto text-start indent-8 font-stretch-condensed mx-12 my-6 text-lg">
        <p>{bio}</p>
    </div>
</div>
