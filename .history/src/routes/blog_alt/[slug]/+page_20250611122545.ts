import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`$lib/articles/${params.slug}.md`);
	if (!post) {
		error(404, {
			message: 'Not found'
		});
	}
	const { title, date } = post.metadata;
	const content = post.default;



	return {
		content,
		title,
		date
	};
};