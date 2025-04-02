import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();

    cookies.set('PARAGLIDE_LOCALE', "en" , { path: '/'});
    return { locale: lang } ;
};