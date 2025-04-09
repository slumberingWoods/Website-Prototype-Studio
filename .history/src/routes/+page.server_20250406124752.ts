import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getLocale, setLocale, localizeHref } from "$lib/paraglide/runtime.js";    

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
	return { locale };
};

export const actions = {
	default: async ({cookies, request}) => {
        const data = await request.formData();
        console.log(data);
		let locale = getLocale();
        const lang = locale === 'en' ? 'fr' : 'en';
        const data_url = data.get("url");
        cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});
        setLocale(lang);
        const new_url = localizeHref("" + data_url, {locale : lang});
        redirect(302, new_url);
        return { success: true };
	}
} satisfies Actions;