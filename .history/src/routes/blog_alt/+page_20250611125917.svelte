<script lang="ts">
    import ArticlePreview from "$lib/components/ArticlePreview.svelte";
    import { localizeHref } from "$lib/paraglide/runtime";
    const articles = import.meta.glob(`$lib/articles/*.{md,svx,svelte,md}`, {
        eager: true,
    });
    let date_sorted: any[] = [];
    interface Article {
        metadata: {
            title: string;
            description: string;
            img: string;
            category: string;
            date: string;
            author: string;
            url: string;
        };
    }

    for (const [key, value] of Object.entries(articles)) {
        const articleValue = value as unknown as Article;
        const date = new Date(articleValue.metadata.date);
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        var url = articleValue.metadata.title;
        function camelCase(value: string) {
            return value
                .toLowerCase()
                .replace(/\s+(.)/g, function (match, group) {
                    return group.toUpperCase();
                });
        }
        url = camelCase(url);
        url = url.replace(/\s/g, "");
        console.log(value);
        articleValue.metadata.url = url;
        articleValue.metadata.date = formattedDate;
        date_sorted.push(articleValue);
    }
    date_sorted.sort((a, b) => {
        return (
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime()
        );
    });
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 lg:mx-12 flex flex-col justify-center items-center bg-slate-400 h-fit"
    >
        <div class="my-12">
            <div class="text-center">
                <p class="text-3xl lg:text-4xl">Blogs</p>
            </div>
            <div class="">
                <div class="hero bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            class="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-8 lg:mx-36"
                >
                    {#each date_sorted.slice(1) as article}
                        {#if article.metadata.visible}
                            <ArticlePreview
                                title={article.metadata.title}
                                description={article.metadata.description}
                                category={article.metadata.category}
                                author={article.metadata.author}
                                date={article.metadata.date}
                                img={article.metadata.img}
                                url={localizeHref(
                                    "/blog_alt/" + article.metadata.url,
                                )}
                            ></ArticlePreview>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
