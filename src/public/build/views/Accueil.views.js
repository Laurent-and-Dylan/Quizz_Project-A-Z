"use-strict";

import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Headers.controllers.js";
import { BeforeGame } from "./BeforeGame.views.js";

export function Accueil() {
  Header.header_2();
  HeaderController();

  document.querySelector("section").classList.remove("h-[85vh]");
  document.querySelector("section").classList.add("h-[65vh]");
  document.querySelector("section").innerHTML = `
      <p class="text-4xl font-bold text-center text-orange-500">Play now with a random Quizz !</p>
      <button class="block mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="play">Play</button>
    `;

  play.addEventListener("click", () => BeforeGame());
}
