"use-strict";

import { Container } from "../components/container.js";
import { quizz } from "../components/quizz.js";
import { QuizzController } from "../controllers/Quizz.controller.js";

export async function Quizz(results) {
  let container = Container.Base();
  container.innerHTML = `
    <h1 class="text-3xl font-extrabold text-center text-jaune uppercase">Select quizz</h1>
  `;

  let subContainer = Container.SubContainer();
  subContainer.className = "grid grid-cols-3 gap-8 my-10 justify-items-center";

  for (let r in results) {
    subContainer.innerHTML += quizz(results[r]);
  }

  QuizzController();
}
