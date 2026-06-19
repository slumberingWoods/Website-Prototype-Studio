<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div
    class="card bg-neutral-900/35 shadow-sm
            w-full sm:w-80 lg:w-72 lg:h-124 mx-auto"
>
    <figure class="px-4 pt-4">
        <img
            src={img}
            alt={title}
            class="rounded-xl w-full object-cover aspect-4/3"
        />
    </figure>

    <div class="card-body p-4">
        <div class="flex flex-wrap items-center text-xs text-gray-300">
            <p>{date}</p>
            <p>By {author}</p>
        </div>

        <div class="flex flex-col gap-1">
            <p class="text-lg sm:text-xl font-semibold leading-snug">
                {title}
            </p>
            <div class="badge badge-primary badge-sm">
                {category}
            </div>
        </div>

        <p class="line-clamp-6 overflow-hidden text-sm text-gray-200">
            {description}
        </p>

        <div class="card-actions justify-end pt-2">
            <a
                href={url}
                aria-label={title}
                class="btn btn-sm btn-primary w-full sm:w-auto"
            >
                Read More
            </a>
        </div>
    </div>
</div>
