import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getLocale, setLocale } from "$lib/paraglide/runtime.js";    
import { page } from '$app/state';

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
	return { locale };
};

export const actions = {
	default: async ({cookies, url}) => {
		let locale = getLocale();
        const lang = locale === 'en' ? 'fr' : 'en';
        console.log(url);
        const redirect_url = locale === 'en' ? '/fr' : '/'
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});
        setLocale(lang);
        redirect(302, redirect_url);
        return { success: true };
	}
} satisfies Actions;