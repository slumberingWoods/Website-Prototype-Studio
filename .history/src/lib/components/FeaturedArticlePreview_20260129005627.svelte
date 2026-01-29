<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div class="card lg:card-side bg-neutral-900/35 shadow-sm mx-auto w-full max-w-4xl">
    <figure class="w-full lg:w-80 flex-shrink-0">
         <img src={img} class="" alt={title} />
    </figure>
    <div class="card-body">
        <h1 class="text-5xl font-bold">
            {title}
        </h1>
        <div class="pt-2">
            <p class="">
                Posted on:
                {date}
            </p>
            <p class="">
                Posted by:
                {author}
            </p>
            <div class="mt-2 badge badge-primary">{category}</div>
        </div>
        <p class="py-3 indent-8">
            {description}
        </p>

        <div class="card-actions justify-end">
            <a class="btn btn-primary" href={url} aria-label={title}
                >Read More</a
            >
        </div>
    </div>
</div>