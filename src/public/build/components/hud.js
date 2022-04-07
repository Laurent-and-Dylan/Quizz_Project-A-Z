"use-strict";

import { Container } from "./container.js";
import { timer } from "./timer.js";

export function makeHUD() {
  const section = document.querySelector("section");
  const results = JSON.parse(localStorage.getItem("Quizz"));

  Container.game();
  section.classList.remove("text-center");
  // section.classList.remove("justify-around");
  // section.classList.add(
  //   "w-10/12",
  //   "h-[55vh]",
  //   "mt-[10vh]",
  //   "mx-auto",
  //   "min-h-full",
  //   "bg-white",
  //   "rounded-2xl",
  //   "shadow-xl",
  //   "shadow-slate-900/90"
  // );
  // section.innerHTML = `
  //   <div class="grid grid-cols-3 grid-rows-2 md:flex md:justify-between" id="hud">
  //     <h2 class="h-min pt-4 md:w-[15vh] md:py-0 font-bold text-sky-900 text-2xl lg:text-3xl">
  //       <span id="time">20</span> s
  //     </h2>
  //     <h2 class="row-start-2 col-start-1 col-end-4 px-4 md:w-[60vw] font-bold text-sky-900 text-xl text-center" id="question">Question</h2>
  //     <h2 class="row-start-1 col-start-3 w-full h-min pt-4 md:w-[20vh] md:py-0 font-bold text-sky-900 text-2xl lg:text-3xl" id="rest"></h2>
  //   </div>
  //   <div id="game" class="h-full my-2 md:h-[25vh] flex flex-col justify-around md:mt-20 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8"></div>
  // `;

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
