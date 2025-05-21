import { m } from "$lib/paraglide/messages";

export const icons = {
  store_icon_size: 55,
  stores: [
    {
      name: "steam",
      icon: "$lib/assets/images/icons/steam.svg",
      url: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    },
    {
      name: "Itch.io",
      icon: "$lib/assets/images/icons/itch-io.svg",
      url: "https://itch.io",
    },
    {
      name: "Humble Bundle",
      icon: "$lib/assets/images/icons/humble.svg",
      url: "https://www.humblebundle.com/",
    },
  ],
};

export const games = {
  list: [
    {
      name: m["game.page.game_1.title"](),
      image: "$lib/assets/images/games/pexels-mart-production-8885140.jpg",
      description: m["game.page.game_1.description"]()
    },
    {
      name: m["game.page.game_2.title"](),
      image: "$lib/assets/images/games/pexels-mart-production-8885140.jpg",
      description: m["game.page.game_2.description"]()
    }
  ]
}

