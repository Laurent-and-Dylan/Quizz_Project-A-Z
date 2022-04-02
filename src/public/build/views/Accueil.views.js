"use-strict";

import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Headers.controllers.js";
import { BeforeGame } from "./BeforeGame.views.js";

export async function Accueil(username = null) {
  await Header.header_2();
  HeaderController();

  document.querySelector("section").classList.remove("h-[85vh]");
  document.querySelector("section").classList.add("h-[65vh]");
  document.querySelector("section").innerHTML = `
      <h1 class="text-2xl lg:text-3xl font-bold text-center text-pink-600"">Welcome and Enjoy ${
        username ? username : ""
      }</h1>
      <p class="text-2xl lg:text-4xl font-bold text-center text-orange-500">Play now with a random Quizz !</p>
      <button class="block w-2/4 md:w-1/3 h-10 mx-auto   rounded-xl font-medium  md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="play">Play</button>
    `;

  play.addEventListener("click", () => BeforeGame());
}
