import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		event.cookies.get("PARAGLIDE_LOCALE");
	}
} satisfies Actions;