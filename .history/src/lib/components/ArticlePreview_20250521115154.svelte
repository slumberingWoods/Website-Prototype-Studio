<script lang="ts">
    let { title, description, category, author, img, date, url } =
        $props();
</script>

<div class="bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4">
    <div class="flex flex-col">
        <p>{title}</p>
        <img src={img} alt={title}>
        <p>{author}</p>
        <p>{category}</p>
        <p>{date}</p>
        <div class="divider"></div>
        <p>{description}</p>
        <a href={url} aria-label={title}></a>
    </div>
</div>
