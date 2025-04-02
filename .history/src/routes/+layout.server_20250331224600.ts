import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();
    const expire = new Date(24 * 60 * 60 *360);
    if(lang === null) {
        cookies.set('PARAGLIDE_LOCALE', locale, { expires: expire, path: '/'});
    }
    return { locale: lang } ;
};
