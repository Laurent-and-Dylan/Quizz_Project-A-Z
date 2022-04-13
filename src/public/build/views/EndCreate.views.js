"use-strict";

import { RecapQuizzController } from "../controllers/RecapQuizz.controller.js";
import { Container } from "../components/container.js";
import { recap } from "../components/recap.js";
import { GetCategories } from "../data/Categories.datas.js";
import { inputCategory } from "../components/category.js";
import { Button } from "../components/Button.js";

export async function EndCreate() {
  let categories = await GetCategories();
  let quizz = JSON.parse(localStorage.getItem("NewQuizz"));

  let container = Container.Base();
  container.className =
    "flex justify-evenly flex-wrap min-h-[65vh] w-3/5 py-1 mx-auto";
  container.innerHTML = `
  <input id='title' type="text" class="block h-10 mx-auto text-center text-4xl text-jaune font-normal bg-transparent" value="${quizz.name}">
  ${inputCategory(categories)}
  `;

  let subContainer = Container.SubContainer();
  subContainer.className = "w-full flex flex-col flex-wrap justify-center";
  for (let q in quizz.quests) {
    subContainer.innerHTML += recap.quest(quizz.quests[q], q);
    for (let r in quizz.resps[q]) {
      let label = r == 0 ? "Good Answer :" : "Bad Answer :";
      recap.resps(quizz.resps[q][r][0], q, label);
    }
  }

  subContainer.innerHTML += new Button("Submit", "submit", "mx-auto").display;

  RecapQuizzController();
}
