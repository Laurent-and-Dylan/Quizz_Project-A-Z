"use-strict";

import { Container } from "./container.js";
import { timer } from "./timer.js";

export function makeHUD() {
  const section = document.querySelector("section");
  const { results } = JSON.parse(localStorage.getItem("Quizz"));

  Container.game();
  section.classList.remove("text-center");
  rest.innerHTML = `<span id="left">0</span> / <span id="total"></span>`;
  left.textContent++;
  question.textContent = results[1][left.textContent - 1][0];
  total.textContent = results[1].length;

  timer();
}

export function updateHUD() {
  const { results } = JSON.parse(localStorage.getItem("Quizz"));

  time.textContent = 20;
  left.textContent++;
  question.textContent = results[1][left.textContent - 1][0];
  total.textContent = results[1].length;
}
