import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    // const locale = getLocale();
    const locale = "en";

    cookies.set('PARAGLIDE_LOCALE', locale, { path: '/'});
    return { locale: locale } ;
};