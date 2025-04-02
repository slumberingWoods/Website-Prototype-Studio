import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();

    cookies.set(
        {
            name:'PARAGLIDE_LOCALE', 
            value: locale, 
            path: '/'});
    return { locale: lang } ;
};
