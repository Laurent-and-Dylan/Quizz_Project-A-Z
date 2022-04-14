"use-strict";

import { EventsBurger } from "../components/burger.js";
import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Header.controller.js";
import { QuizzData } from "../data/Quizz.datas.js";
import { Game } from "./Game.views.js";

export async function BeforeGame() {
  let results = JSON.parse(localStorage.getItem("Quizz"));
  if (!results) results = await new QuizzData("quizz/random", "GET").fetch;

  localStorage.setItem("Quizz", JSON.stringify(results));

  await Header.game();
  let container = Container.Base();
  container.className =
    "min-h-[65vh] flex flex-col justify-evenly font-dosis uppercase font-extrabold text-center";
  container.innerHTML = `
    <span class="text-8xl text-white font-bold" id="timer">1</span>
    <h1 class="text-4xl text-orange font-bold">Let's Play !</h1>
  `;
  EventsBurger();
  HeaderController();

  localStorage.setItem("score", "0");
  let interval = setInterval(() => {
    if (timer.textContent == 0) {
      clearInterval(interval);
      Game();
    } else timer.textContent--;
  }, 1000);
}
