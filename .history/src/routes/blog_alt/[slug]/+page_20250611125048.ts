import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`$lib/articles/${params.slug}.md`);
		const { title, date } = post.metadata;
		const content = post.default;
		return {
			content,
			title,
			date
		};
	} catch {
		error(404, {
			message: "Article not found"
		});
	}

};