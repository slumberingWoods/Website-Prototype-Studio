import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies, url }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();
    if(lang === null) {
        cookies.set('PARAGLIDE_LOCALE', locale, { path: '/'});
    }
    return { locale: lang } ;
};
