"use-strict";

import { RecapQuizzController } from "../controllers/RecapQuizz.controller.js";
import { Container } from "../components/container.js";
import { recap } from "../components/recap.js";
import { GetCategories } from "../data/Categories.datas.js";
import { inputCategory } from "../components/category.js";

export async function EndCreate() {
  let categories = await GetCategories();
  let section = document.querySelector("section");

  section.innerHTML = "";
  section.classList.remove(
    "relative",
    "flex",
    "flex-col",
    "justify-evenly",
    "h-[65vh]"
  );

  let quizz = JSON.parse(localStorage.getItem("NewQuizz"));
  let container = Container.Base();
  container.className = "flex justify-evenly flex-wrap";
  container.innerHTML = `
  <input id='title' type="text" class="block h-20 mx-auto text-center text-4xl text-jaune font-normal bg-transparent" value="${quizz.name}">
  `;
  inputCategory(categories);

  let subContainer = Container.SubContainer();
  subContainer.className = "w-full";
  for (let q in quizz.quests) {
    subContainer.innerHTML += recap.quest(quizz.quests[q], q);
    for (let r in quizz.resps[q]) {
      recap.resps(quizz.resps[q][r][0], q);
    }
  }

  subContainer.innerHTML += `
  <button class="block mx-auto mt-[10vh] w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r hover:bg-gradient-to-l from-yellow-300 to-amber-500 hover:scale-105 shadow-2xl shadow-white opacity-80 md:shadow-2xl md:shadow-white" id="submit">Submit</button>
  `;

  RecapQuizzController();
}
