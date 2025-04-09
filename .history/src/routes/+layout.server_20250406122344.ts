import type { Actions, LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { setLocale, getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();
    if(lang === null) {
        cookies.set('PARAGLIDE_LOCALE', locale, { path: '/'});
    }
    return { locale: lang } ;
};

export const actions = {
	language: async ({cookies}) => {
		let locale = getLocale();
        const lang = locale === 'en' ? 'fr' : 'en';
        const redirect_url = locale === 'en' ? '/fr' : '/'
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});
        setLocale(lang);
        redirect(302, redirect_url);
        return { success: true };
	}
} satisfies Actions;