"use-strict";

import { Header } from "../components/header.js";
import { Game } from "./Game.views.js";

const section = document.querySelector("section");

export function BeforeGame() {
  sessionStorage.setItem("score", "0");

  Header.header_3();
  section.classList.add("text-center");
  section.innerHTML = `
    <span class="text-8xl text-white font-bold" id="timer">1</span>
    <h1 class="text-4xl text-pink-700 font-bold">Let's Play !</h1>
    `;

  const interval = setInterval(() => {
    if (timer.textContent == 0) {
      clearInterval(interval);
      Game();
    } else timer.textContent--;
  }, 1000);
}
