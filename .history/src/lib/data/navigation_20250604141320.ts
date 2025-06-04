import { m } from "$lib/paraglide/messages";

export const navbar = {
    title: {
        name: "Protype Website",
        href: "/"
    },
    list: [
        {
            name: m["navbar.home"](),
            href: "/"
        },
        {
            name: m["navbar.games"](),
            href: "/games"
        },
        {
            name: m["navbar.about"](),
            href: "/about"
        },
        {
            name: m["navbar.home"](),
            href: "/"
        },
        {
            name: m["navbar.contact"](),
            href: "/contact"
        },
    ]

}

export const socials = {
    icon_size: 25,
    list: [
        {
            link: "http://youtube.com",
            image: "./images/icons/youtube.svg",
            name: "Youtube"
        },
        {
            link: "http://github.com",
            image: "./images/icons/github.svg",
            name: "Github"
        },
        {
            link: "http://discord.com",
            image: "./images/icons/discord.svg",
            name: "Discord"
        }
    ]
}