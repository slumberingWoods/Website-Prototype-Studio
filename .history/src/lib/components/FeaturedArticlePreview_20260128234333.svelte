<script lang="ts">
    let { title, description, category, author, img, date, url } = $props();
</script>

<div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div
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
</div>
