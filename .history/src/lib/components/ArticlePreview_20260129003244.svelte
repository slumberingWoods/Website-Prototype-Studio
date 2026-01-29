<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div class="card bg-neutral-900/35 w-72 shadow-sm">
    <figure class="px-10 pt-10 min-h-64">
        <img src={img} alt={title} class="rounded-xl" />
    </figure>
    <div class="card-body">
        <div class="flex-row">
            <p class="text-sm">Posted on: {date}</p>
            <div class="divider divider-horizontal"></div>
            <p class="text-sm">Posted by: {author}</p>
        </div>
        <p class="text-2xl">{title}</p>
        <div class=" badge badge-primary">{category}</div>
        <p class="pb-2 line-clamp-3 h-24">{description}</p>
        <div class="card-actions justify-end">
            <a href={url} aria-label={title} class="btn btn-sm btn-primary"
                >Read More...</a
            >
        </div>
    </div>
</div>
