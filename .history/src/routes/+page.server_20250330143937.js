function getLang() {
    if (navigator.languages !== undefined) 
        return navigator.languages[0]; 
    return navigator.language;
}

export function load( {cookies }) {
    const lang = cookies.get("lang");
    if()

}