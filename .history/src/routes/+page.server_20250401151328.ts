import type { Actions, PageServerLoad } from './$types';
import { setLocale } from "$lib/paraglide/runtime.js";

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
    console.log("page: " + locale);
	return { locale };
};

export const actions = {
	default: async ({cookies, url}) => {
		let locale = cookies.get("PARAGLIDE_LOCALE");
        const lang = locale === 'en' ? 'fr' : 'en'
        const redirect = locale === 'en' ? '/fr' : '/'
        setLocale(lang);
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});
        redirect(302, url.searchParams.get('redirect'));
        return { success: true };
	}
} satisfies Actions;