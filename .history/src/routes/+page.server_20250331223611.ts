import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const user = await cookies.get("PARAGLIDE_LOCALE");
	return { user };
};

export const actions = {
	default: async (event) => {
		let locale = event.cookies.get("PARAGLIDE_LOCALE");
        const lang = locale === 'light' ? 'dark' : 'light'
	}
} satisfies Actions;