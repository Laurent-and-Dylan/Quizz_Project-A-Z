"use-strict";

import { StatController } from "../controllers/Stats.controller.js";
import { BeforeGame } from "./BeforeGame.views.js";
import { Accueil } from "../views/Accueil.views.js";

export function EndGame() {
  const score = localStorage.getItem("score");
  const home = document.createElement("img");

  home.src = "styles/images/Home.png";
  home.classList.add("w-14", "h-14", "ml-8", "mr-auto");
  home.setAttribute("id", "home");

  document.querySelector("header").insertBefore(home, name_quizz);

  document.querySelector("section").innerHTML = `
        <h2 class="text-4xl font-bold text-center text-orange-500">THANKS FOR PLAYING</h2>
        <h2 class="text-4xl font-bold text-center text-orange-500">YOUR SCORE : <span class="text-pink-700">${score}</span> POINTS</h2>
        <button class="mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="replay">Play Again</button>
    `;

  StatController();
  replay.addEventListener("click", () => BeforeGame());
  home.addEventListener("click", () => Accueil());
}
