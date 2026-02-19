<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { hero, newsletter } from "$lib/data/homePage";
    import Hero from "$lib/components/Hero.svelte";
    import NewsletterSub from "$lib/components/NewsletterSub.svelte";
    import gsap from 'gsap';
    import FeaturedArticlePreview from "$lib/components/FeaturedArticlePreview.svelte";
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
    let featured = date_sorted[0];
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 sm:mx-12 flex flex-col justify-center items-center bg-slate-400 min-h-screen"
    >
        <div class="hero min-h-screen">
            <Hero title={hero.title} motto={hero.motto}></Hero>
        </div>

        <div class="min-h-screen">
            <p class="text-3xl text-center mb-10 lg:text-4xl">Featured Blog</p>
            <div class="hero">
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
        </div>

        <div class="mx-4 my-6">
            <NewsletterSub
                title={newsletter.title}
                subscribe={newsletter.subscribe}
            ></NewsletterSub>
        </div>
    </div>
</div>
