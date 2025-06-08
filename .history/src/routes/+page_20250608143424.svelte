<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { hero, newsletter } from "$lib/data/homePage";
    import Hero from "$lib/components/Hero.svelte";
    import NewsletterSub from "$lib/components/NewsletterSub.svelte";
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 sm:mx-12 flex flex-col justify-center items-center bg-slate-400 min-h-screen"
    >
        <div class="hero grow-7">
            <Hero title={hero.title} motto={hero.motto}></Hero>
        </div>

        <div class="grow-2 mx-4">
            <NewsletterSub
                title={newsletter.title}
                subscribe={newsletter.subscribe}
            ></NewsletterSub>
        </div>
    </div>
</div>
