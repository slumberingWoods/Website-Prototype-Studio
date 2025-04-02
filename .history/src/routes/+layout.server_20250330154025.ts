import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("lang");
    // const locale = getLocale();
    const locale = "fr"

    cookies.set('PARAGLIDE_LOCALE', locale, { path: '/'});
    return { locale: locale } ;
};