import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const post = await import(`$lib/articles/${params.slug}.{md,svx,svelte,md}`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
};