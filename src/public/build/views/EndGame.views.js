"use-strict";

import { BeforeGame } from "./BeforeGame.views.js";

export function EndGame() {
  const score = sessionStorage.getItem("score");
  document.querySelector("section").innerHTML = `
        <h2 class="text-4xl font-bold text-center text-orange-500">THANKS FOR PLAYING</h2>
        <h2 class="text-4xl font-bold text-center text-orange-500">YOUR SCORE : <span class="text-pink-700">${score}</span> POINTS</h2>
        <button class="mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="replay">Play Again</button>
    `;

  replay.addEventListener("click", () => BeforeGame());
}
