"use-strict";

import { timer } from "./timer.js";
import { EndGame } from "../views/EndGame.views.js";

export function makeHUD() {
  const results = JSON.parse(localStorage.getItem("Quizz"));

  document.querySelector("section").innerHTML = `
    <div class="flex justify-between" id="hud">
      <h2 class="font-extrabold text-white text-3xl">
        <span id="time">20</span> s
      </h2>
      <h2 id="question" class="font-extrabold text-white text-3xl">Question</h2>
      <h2 id="rest" class="font-extrabold text-white text-3xl"></h2>
    </div>
    <div id="game" class="grid grid-cols-2 grid-rows-2 h-[50vh]"></div>
  `;

  rest.innerHTML = `<span id="left">0</span> / <span id="total"></span>`;
  left.textContent++;
  question.textContent = results[left.textContent - 1][0];
  total.textContent = results.length;

  timer();
}

export function updateHUD() {
  const results = JSON.parse(localStorage.getItem("Quizz"));

  time.textContent = 20;
  left.textContent++;
  question.textContent = results[left.textContent - 1][0];
  total.textContent = results.length;
  // else EndGame();
}
