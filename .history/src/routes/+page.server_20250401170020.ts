import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { setLocale } from "$lib/paraglide/runtime.js";
import { page } from '$app/state';

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
    console.log("page: " + locale);
	return { locale };
};

export const actions = {
	default: async ({cookies, url}) => {
		let locale = cookies.get("PARAGLIDE_LOCALE");
        const lang = locale === 'en' ? 'fr' : 'en'
        cost test_url = page.url.pathname
        const redirect_url = locale === 'en' ? '/fr' : '/'
        setLocale(lang);
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});

        redirect(302, redirect_url);
        return { success: true };
	}
} satisfies Actions;