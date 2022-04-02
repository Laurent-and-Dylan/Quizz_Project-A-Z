"use-strict";

import { Container } from "../components/container.js";
import { quizz } from "../components/quizz.js";
import { QuizzController } from "../controllers/Quizz.controller.js";

export async function Quizz(results) {
  const section = document.querySelector("section");

  section.innerHTML = "";
  Container.quizz();

  for (let i = 0; i < 10; i++) {
    quizz(results[0]);
  }

  QuizzController();
}
