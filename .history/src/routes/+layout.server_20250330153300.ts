import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const lang = cookies.get("lang");
    
    cookies.set('lang', )
};