"use-strict";

import { timer } from "./timer.js";

export function makeHUD() {
  const section = document.querySelector("section");
  const results = JSON.parse(localStorage.getItem("Quizz"));

  section.classList.add("p-8", "min-h-full");
  // section.classList.remove("h-[65vh]");
  section.innerHTML = `
    <div class="flex justify-between mt-4" id="hud">
      <h2 class="w-[10vw] font-extrabold text-white text-3xl">
        <span id="time">20</span> s
      </h2>
      <h2 id="question" class="w-[60vw] font-extrabold text-amber-500 text-2xl">Question</h2>
      <h2 id="rest" class="w-[15vw] font-extrabold text-white text-3xl"></h2>
    </div>
    <div id="game" class="h-[50vh] grid grid-cols-2 grid-rows-2 gap-8 mt-8"></div>
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
}
