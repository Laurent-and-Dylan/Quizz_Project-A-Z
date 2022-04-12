"use-strict";

import { Container } from "../components/container.js";
import { quizzEdit } from "../components/quizz.js";
import { UserQuizzController } from "../controllers/UserQuizz.controller.js";
import { GetQuizzUser } from "../data/Quizz.datas.js";

export async function UserQuizz() {
  const { results } = await GetQuizzUser();
  const container = Container.Base();

  container.className = "px-10 py-14 min-h-[65vh] w-3/4 mx-auto";
  container.innerHTML =
    //! maybe a component
    `
      <article class="pt-5 pb-10 mb-4 flex justify-between text-orange font-bold text-4xl text-center uppercase rounded-2xl">
        <h2 class="w-1/3 ">Quizz</h2>
        <h2 class="w-1/3 ">Rate</h2>
        <h2 class="w-1/3 text-center">Edit/Delete</h2>
      </article>
  `;

  for (let r in results) {
    container.innerHTML += quizzEdit(results[r]);
  }

  UserQuizzController();
}
