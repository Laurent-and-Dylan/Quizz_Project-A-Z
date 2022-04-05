"use-strict";

import { EventsBurger } from "../components/burger.js";
import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Headers.controllers.js";
import { GetRandomQuizz } from "../data/Quizz.datas.js";
// import { Game } from "./Game.views.js";

export async function BeforeGame() {
  let results = JSON.parse(localStorage.getItem("Quizz"));
  if (!results) results = await GetRandomQuizz();

  await Header.game();
  Container.beforeGame();
  
  EventsBurger();
  HeaderController();


  localStorage.setItem("score", "0");
  // const interval = setInterval(() => {
  //   if (timer.textContent == 0) {
  //     clearInterval(interval);
  //     Game();
  //   } else timer.textContent--;
  // }, 1000);
}
