import type { Actions, PageServerLoad } from './$types';
import { setLocale } from "$lib/paraglide/runtime.js";

export const actions = {
	default: async ({cookies}) => {
		let locale = cookies.get("PARAGLIDE_LOCALE");
        const lang = locale === 'en' ? 'fr' : 'en'
        setLocale(lang, { reload: false });

        return { success: true };
	}
} satisfies Actions;