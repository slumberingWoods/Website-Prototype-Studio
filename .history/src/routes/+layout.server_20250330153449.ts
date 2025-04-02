import type { LayoutServerLoad } from './$types';
import { getLocale } from "./paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("lang");

    cookies.set('lang', )
};