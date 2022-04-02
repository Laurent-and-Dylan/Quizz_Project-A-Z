"use-strict";

import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { GetRandomQuizz } from "../data/Quizz.datas.js";
import { Game } from "./Game.views.js";

export async function BeforeGame() {
  const section = document.querySelector("section");
  let results = JSON.parse(localStorage.getItem("Quizz"));
  
  if (!results) results = await GetRandomQuizz();

  Header.header_3();
  section.innerHTML = "";
  section.classList.remove(
    "relative",
    "h-[65vh]",
    "flex",
    "flex-col",
    "justify-evenly"
  );
  Container.beforeGame();

  localStorage.setItem("score", "0");
  const interval = setInterval(() => {
    if (timer.textContent == 0) {
      clearInterval(interval);
      Game();
    } else timer.textContent--;
  }, 1000);
}
