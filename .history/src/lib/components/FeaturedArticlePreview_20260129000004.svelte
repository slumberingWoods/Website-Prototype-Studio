<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div class="card lg:card-side bg-base-100 shadow-sm w-fit">
    <figure>
        <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
        />
    </figure>
    <div class="card-body">
        <h1 class="text-5xl font-bold">
            {title}
        </h1>
        <div class="pt-2">
            <p class="">
                Posted on::
                {date}
            </p>
            <p class="">
                Posted by:
                {author}
            </p>
            <div class="badge badge-outline badge-primary">{category}</div>
            <p>Category: {category}</p>
        </div>

        <p class="py-6">
            {description}
        </p>

        <div class="card-actions justify-end">
            <a class="btn btn-primary" href={url} aria-label={title}
                >Read More</a
            >
        </div>
    </div>
</div>

<!-- <div
    class="hero bg-neutral-900/35 rounded-md border border-neutral-900"
>
    <div class="hero-content flex-col lg:flex-row">
        <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt={title} />
        <div>
            <h1 class="text-5xl font-bold">
                {title}
            </h1>
            <div class="pt-2">
                <p class="">
                    Posted on::
                    {date}
                </p>
                <p class="">
                    Posted by:
                    {author}
                </p>
                <p>Category: {category}</p>
            </div>

            <p class="py-6">
                {description}
            </p>
            <a class="btn btn-primary" href={url} aria-label={title}
                >Read More</a
            >
        </div>
    </div>
</div> -->
