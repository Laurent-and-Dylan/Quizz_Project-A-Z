"use-strict";

import { RecapQuizzController } from "../controllers/RecapQuizz.controller.js";
import { Container } from "../components/container.js";
import { recap } from "../components/recap.js";

export function EndCreate() {
  const section = document.querySelector("section");
  section.innerHTML = "";
  section.classList.remove(
    "relative",
    "flex",
    "flex-col",
    "justify-evenly",
    "h-[65vh]"
  );

  const quizz = JSON.parse(localStorage.getItem("NewQuizz"));
  const container = Container.Base();

  container.innerHTML = `
  <h1 class="text-center text-2xl text-white font-extrabold">${quizz.name}</h1>
  `;

  for (let q in quizz.quests) {
    recap.quest(quizz.quests[q], q);
    for (let r in quizz.resps[q]) {
      recap.resps(quizz.resps[q][r], q);
    }
  }

  container.innerHTML += `
  <button class="block mx-auto mt-[10vh] w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r hover:bg-gradient-to-l from-yellow-300 to-amber-500 hover:scale-105 shadow-2xl shadow-white opacity-80 md:shadow-2xl md:shadow-white" id="submit">Submit</button>
  `

  RecapQuizzController();
}