import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const articles = import.meta.glob(`$lib/articles/*.{md,svx,svelte,md}`);
    for (const path in articles) {
        articles[path]().then((mod: any) => {
            console.log(path, mod)
        })
    }
};