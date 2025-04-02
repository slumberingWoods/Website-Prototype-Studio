import type { PageLoad } from './$types';


export const load: PageLoad = ({cookies}) => {

    cookies.set("test", "val");

    return {}
}