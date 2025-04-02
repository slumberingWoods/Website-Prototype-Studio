import { m } from "$lib/paraglide/messages";

export const icons = {
  store_icon_size: 55,
  stores: [
    {
      name: "steam",
      icon: "./images/icons/steam.svg",
      url: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    },
    {
      name: "Itch.io",
      icon: "./images/icons/itch-io.svg",
      url: "https://itch.io",
    },
    {
      name: "Humble Bundle",
      icon: "./images/icons/humble.svg",
      url: "https://www.humblebundle.com/",
    },
  ],
};

export const games = {
  "list": [
    {
      name: m["game.page.game_1.title"](),
      image: "./images/games/pexels-mart-production-8885140.jpg",
      description: "game.page.game_1.description"
    },
    {
      name: m["game.page.game_1.title"](),
      image: "./images/games/pexels-mart-production-8885140.jpg",
      description: "game.page.game_2.description"
    }

  ]
}

