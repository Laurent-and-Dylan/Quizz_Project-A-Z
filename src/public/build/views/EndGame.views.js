"use-strict";

import { StatController } from "../controllers/Stats.controller.js";
import { BeforeGame } from "./BeforeGame.views.js";
import { Accueil } from "../views/Accueil.views.js";
import { Button } from "../components/Button.js";

export function EndGame() {
  const score = localStorage.getItem("score");
  localStorage.removeItem("Quizz");

  document.querySelector("section").innerHTML = `
        <h2 class="text-3xl font-bold text-center text-orange-500">THANKS FOR PLAYING</h2>
        <h2 class="text-3xl font-bold text-center text-orange-500">YOUR SCORE : <span class="text-pink-700">${score}</span> POINTS</h2>
        ${new Button("Play Again", "replay", "mx-auto").display}
        `;

  StatController();
  replay.addEventListener("click", () => BeforeGame());
  home.addEventListener("click", () => Accueil());
}
