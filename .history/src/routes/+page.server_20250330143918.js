function getLang() {
    if (navigator.languages !== undefined) 
        return navigator.languages[0]; 
    return navigator.language;
}

export function load() {
    const lang = coookies.get("lang");
    if()

}