<script lang="ts">
    import ArticlePreview from "$lib/components/ArticlePreview.svelte";
    import FeaturedArticlePreview from "$lib/components/FeaturedArticlePreview.svelte";
    import { localizeHref } from "$lib/paraglide/runtime";
    let currentPage = 1;
    let postsPerPage = 4;
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
    let featured = date_sorted[0];
    let totalPosts = date_sorted.length - 1;
    let totalPages = Math.ceil(totalPosts / postsPerPage);
    function setCurrentPage(newPage: number) {
        currentPage = newPage;
    }
</script>

<div class="bg-gray-700">
    <div class="mx-4 lg:mx-12 flex flex-col bg-slate-400 mt-20 h-fit">
        <div class="mt-12 text-center">
            <p class="text-3xl lg:text-4xl">Featured Blog</p>
        </div>
        <div class="pt-8 items-center justify-center-safe">
            <div>
                <FeaturedArticlePreview
                    title={featured.metadata.title}
                    description={featured.metadata.description}
                    category={featured.metadata.category}
                    author={featured.metadata.author}
                    date={featured.metadata.date}
                    img={featured.metadata.img}
                    url={localizeHref("/blog_alt/" + featured.metadata.url)}
                ></FeaturedArticlePreview>
            </div>
            <div class="pt-5 text-center">
                <p class="text-3xl lg:text-4xl">Blogs</p>
            </div>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-4 my-10 px-4 sm:px-8 lg:px-12"
            >
                {#each date_sorted.slice(1 + 4 * (currentPage - 1), 5 + 4 * (currentPage - 1)) as article}
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
        <div class="join self-center mt-6 pb-10 w-fit">
            {#if totalPages > 1}
                {#if currentPage == 1}
                    <button class="join-item btn btn-disabled">«</button>
                {:else}
                    <button
                        class="join-item btn"
                        on:click={() => setCurrentPage(currentPage - 1)}
                        >«</button
                    >
                {/if}
                <button class="join-item btn">Page {currentPage}</button>
                {#if currentPage == totalPages}
                    <button class="join-item btn btn-disabled">»</button>
                {:else}
                    <button
                        class="join-item btn"
                        on:click={() => setCurrentPage(currentPage + 1)}
                        >»</button
                    >
                {/if}
            {/if}
        </div>
    </div>
</div>
