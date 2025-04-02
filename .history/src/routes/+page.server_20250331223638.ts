import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const locale = await cookies.get("PARAGLIDE_LOCALE");
    console.log(locale);
	return { locale };
};

export const actions = {
	default: async (event) => {
		let locale = event.cookies.get("PARAGLIDE_LOCALE");
        const lang = locale === 'light' ? 'dark' : 'light'
	}
} satisfies Actions;