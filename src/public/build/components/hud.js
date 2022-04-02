"use-strict";

import { timer } from "./timer.js";

export function makeHUD() {
  const section = document.querySelector("section");
  const results = JSON.parse(localStorage.getItem("Quizz"));

  section.classList.add("px-8", "my-16", "min-h-full");
  section.innerHTML = `
    <div class="grid grid-cols-3 grid-rows-2 md:flex md:justify-between mt-4" id="hud">
      <h2 class="w-full h-min md:w-[15vh] py-6 md:py-0 font-extrabold text-white text-2xl lg:text-3xl">
        <span id="time">20</span> s
      </h2>
      <h2 class="row-start-2 col-start-1 col-end-4 md:w-[60vw] pt-1 font-extrabold text-amber-500 text-xl text-center" id="question">Question</h2>
      <h2 class="row-start-1 col-start-3 w-full h-min md:w-[20vh] py-6 md:py-0 font-extrabold text-white text-2xl lg:text-3xl" id="rest"></h2>
    </div>
    <div id="game" class="h-min md:h-[50vh] flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8"></div>
  `;

  rest.innerHTML = `<span id="left">0</span> / <span id="total"></span>`;
  left.textContent++;
  question.textContent = results[1][left.textContent - 1][0];
  total.textContent = results[1].length;

  timer();
}

export function updateHUD() {
  const results = JSON.parse(localStorage.getItem("Quizz"));

  time.textContent = 20;
  left.textContent++;
  question.textContent = results[1][left.textContent - 1][0];
  total.textContent = results[1].length;
}
