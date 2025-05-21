<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4 w-min-200">
    <div class="flex flex-col mx-2 my-2">
        <img class="w-48 h-64" src={img} alt={title} />
        <p>{title}</p>
        <div class="flex-row">
            <p>Posted on: {date}</p>
            <div class="divider divider-horizontal"></div>
            <p>Posted by: {author}</p>
        </div>
        <p>{category}</p>
        <div class="divider"></div>
        <p>{description}</p>
        <a href={url} aria-label={title}>Read More...</a>
    </div>
</div>
