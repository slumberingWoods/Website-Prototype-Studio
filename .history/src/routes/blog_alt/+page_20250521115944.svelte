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
        <div class="grid grid-col-2 lg:grid-col-4 gap-4">
            {#each date_sorted.slice(0, 3) as article}
                {#if article.metadata.visible}
                    <ArticlePreview
                        title={article.metadata.title}
                        description={article.metadata.description}
                        category={article.metadata.category}
                        author={article.metadata.author}
                        date={article.metadata.date}
                        img={article.metadata.img}
                        url={localizeHref("/blog") + article.metadata.title}
                    ></ArticlePreview>
                {/if}
            {/each}
        </div>
    </div>
</div>
