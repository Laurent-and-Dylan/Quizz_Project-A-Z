"use-strict";

import { Container } from "../components/container.js";
import { quizzEdit } from "../components/quizz.js";
import { GetQuizzUser } from "../data/Quizz.datas.js";

export async function UserQuizz() {
  const section = document.querySelector("section");
  section.innerHTML = ``;

  const container = Container.Base();
  container.classList.add("px-10","py-14","min-h-[65vh]");

  const { results } = await GetQuizzUser();

  for (let r in results) {
    quizzEdit(results[r]);
  }
}