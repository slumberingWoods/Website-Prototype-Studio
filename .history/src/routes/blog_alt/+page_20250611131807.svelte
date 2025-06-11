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
    let featured = date_sorted[1];
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 lg:mx-12 flex flex-col justify-center items-center bg-slate-400 h-fit"
    >
        <div class="my-12">
            <div class="text-center">
                <p class="text-3xl lg:text-4xl">Featured Blog</p>
            </div>
            <div class="pt-8 content-center items-center">
                <div
                    class="hero bg-neutral-900/35 rounded-md border border-neutral-900 my-4 mx-4 w-fit"
                >
                    <div class="hero-content flex-col lg:flex-row">
                        <img
                            src={featured.metadata.img}
                            class="max-w-sm rounded-lg shadow-2xl"
                            alt={featured.metadata.title}
                        />
                        <div>
                            <h1 class="text-5xl font-bold">
                                {featured.metadata.title}
                            </h1>
                            <div class="pt-2">
                                <p class="">Published:
                                    {featured.metadata.date}
                                </p>
                                <p class="">By: 
                                    {featured.metadata.author}
                                </p>
                            </div>

                            <p class="py-6">
                                {featured.metadata.description}
                            </p>
                            <a
                                class="btn btn-primary"
                                href={localizeHref(
                                    "/blog_alt/" + featured.metadata.url,
                                )}
                                aria-label={featured.metadata.title}
                                >Read More</a
                            >
                        </div>
                    </div>
                </div>
                <div class="pt-5 text-center">
                    <p class="text-3xl lg:text-4xl">Blogs</p>
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
