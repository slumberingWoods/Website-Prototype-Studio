import type { LayoutServerLoad, Actions } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("PARAGLIDE_LOCALE");
    const locale = getLocale();

    cookies.set('PARAGLIDE_LOCALE', locale, { path: '/'});
    return { locale: lang } ;
};

export const actions = {
	default: async (event) => {
	login: async (event) => {
		// TODO log the user in
	},
	register: async (event) => {
		// TODO register the user
	}
} satisfies Actions;