import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getLocale, setLocale } from "$lib/paraglide/runtime.js";

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
    console.log("page: " + getLocale());
	return { locale };
};

export const actions = {
	default: async ({cookies}) => {
		let locale = getLocale();
        const lang = locale === 'en' ? 'fr' : 'en';
        const redirect_url = locale === 'en' ? '/fr' : '/'
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});
        setLocale(lang);
        console.log("url: " + redirect_url);
        redirect(302, redirect_url);
        return { success: true };
	}
} satisfies Actions;