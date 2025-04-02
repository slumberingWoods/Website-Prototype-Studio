import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	const locale = cookies.get("PARAGLIDE_LOCALE");
    console.log(locale);
	return { locale };
};

export const actions = {
	default: async ({cookies}) => {
		let locale = event.cookies.get("PARAGLIDE_LOCALE");
        console.log(locale);
        const lang = locale === 'en' ? 'fr' : 'en'
        console.log("this is" + lang);
        event.cookies.set('PARAGLIDE_LOCALE', lang, { path: '/'});
	}
} satisfies Actions;