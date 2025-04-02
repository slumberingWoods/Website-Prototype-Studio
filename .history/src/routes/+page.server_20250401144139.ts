import type { Actions, PageServerLoad } from './$types';
import { setLocale } from "$lib/paraglide/runtime.js";

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
    console.log("page: " + locale);
	return { locale };
};

export const actions = {
	default: async ({cookies}) => {
		let locale = cookies.get("PARAGLIDE_LOCALE");
        const lang = locale === 'en' ? 'fr' : 'en'
        setLocale(lang);
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});

        return { success: true };
	}
} satisfies Actions;