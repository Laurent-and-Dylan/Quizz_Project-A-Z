"use-strict";

import { Header } from "../components/header.js";
import { EventsBurger } from "../components/burger.js";
import { HeaderController } from "../controllers/Header.controller.js";
import { BeforeGame } from "./BeforeGame.views.js";
import { Button } from "../components/Button.js";
import { Authentifier } from "../data/Authentifier.js";

export async function Accueil() {
  let { username } = await Authentifier();
  let section = document.querySelector("section");

  // Display header content
  await Header.main();

  // Display main content
  section.className =
    "h-[65vh] flex flex-col justify-evenly font-dosis uppercase font-extrabold";
  section.innerHTML = `
    <h1 class="text-2xl lg:text-4xl text-center text-jaune">Welcome and Enjoy ${
      username ? username : ""
    } !</h1>
    <p class="text-2xl lg:text-6xl text-center text-orange">Play now a random Quizz !</p>
    ${
      new Button(
        "Play",
        "play",
        "block w-2/4 md:w-1/3 h-10 mx-auto rounded-xl md:h-11 lg:h-14 lg:w-80 font-bold uppercase"
      ).display
    }
  `;

  // Launch events elements and controllers
  EventsBurger();
  HeaderController();

  // Call to BeforeGame view
  play.addEventListener("click", () => BeforeGame());
}
