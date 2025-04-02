import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("lang");
    const locale = getLocale();

    cookies.set('lang', locale, { path: '/'});
    return { locale } ;
};