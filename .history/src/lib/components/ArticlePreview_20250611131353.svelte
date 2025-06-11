<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4">
    <div class="flex flex-col items-center justify-start mx-4 my-2 max-w-38">
        <img class="max-w-48 max-h-36 my-2" src={img} alt={title} />
        <div class="text-left mb-2">
            <div class="flex-row">
                <p class="text-sm">Posted on: {date}</p>
                <div class="divider divider-horizontal"></div>
                <p class="text-sm">Posted by: {author}</p>
            </div>
            <p class="text-2xl">{title}</p>
            <p>{category}</p>
            <div class="divider"></div>
            <p>{description}</p>
            <a href={url} aria-label={title} class="btn btn-primary">Read More...</a>
        </div>
    </div>
</div>
