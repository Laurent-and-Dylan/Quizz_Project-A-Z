"use-strict";

import { timer } from "./timer.js";

export function HUDController() {
  let { results } = JSON.parse(localStorage.getItem("Quizz"));

  rest.innerHTML = `<span id="left">0</span> / <span id="total"></span>`;
  left.textContent++;
  question.textContent = results[1][left.textContent - 1][0];
  total.textContent = results[1].length;

  timer();
}

export function updateHUD() {
  let { results } = JSON.parse(localStorage.getItem("Quizz"));

  time.textContent = 20;
  left.textContent++;
  question.textContent = results[1][left.textContent - 1][0];
  total.textContent = results[1].length;
}
