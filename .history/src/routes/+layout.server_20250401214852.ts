import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();
    console.log("layout: " + locale);
    if(lang === null) {
        cookies.set('PARAGLIDE_LOCALE', locale, { path: '/'});
    }
    const redirect_url = locale === 'en' ? '/fr' : '/'
    redirect(302, redirect_url);
    return { locale: lang } ;
};
