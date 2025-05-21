import type {PageLoad} from './$types';

export const load: PageLoad = async ({params}) => {
    const articles = import.meta.glob(`/modules/articles/*.{md,svx,svelte,md}`);
    for(const [key, value] of Object.entries(articles)) {
        console.log(value);
    }
};