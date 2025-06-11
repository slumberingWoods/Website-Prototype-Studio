<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div
    class="hero bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4"
>
    <div class="hero-content flex-col lg:flex-row">
        <img
            src={img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt={title}
        />
        <div>
            <h1 class="text-5xl font-bold">
                {title}
            </h1>
            <div class="pt-2">
                <p class="">
                    Published:
                    {date}
                </p>
                <p class="">
                    By:
                    {author}
                </p>
            </div>

            <p class="py-6">
                {description}
            </p>
            <a
                class="btn btn-primary"
                href={url}
                aria-label={title}>Read More</a
            >
        </div>
    </div>
</div>
