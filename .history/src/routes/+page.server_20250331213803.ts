import type { Actions } from './$types';

export const actions = {
	changeLang: async ({request, cookies}) => {
        const locale = cookies.get("'PARAGLIDE_LOCALE'");
        console.log(locale);
	}
} satisfies Actions;