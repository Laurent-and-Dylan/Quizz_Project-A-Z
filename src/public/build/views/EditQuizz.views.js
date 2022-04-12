"use-strict";

import { Container } from "../components/container.js";
import { Edit } from "../components/edit.js";
import { EditQuizzController } from "../controllers/EditQuizz.controller.js";

export function EditQuizz() {
  let results = JSON.parse(localStorage.getItem("EditQuizz"));
  let section = document.querySelector("section");
  section.innerHTML = "";

  let container = Container.Base();
  container.className = "min-h-[65vh] py-8"
  let subContainer = Container.SubContainer();
  // let subContainer = Container.editQuizz(results);

  for (let r in results.quests) {
    subContainer.innerHTML += Edit.quest(results.quests[r]);

    for (let q in results.resps[r]) {
      subContainer.innerHTML += Edit.resps(results.resps[r][q]);
    }
  }

  subContainer.innerHTML += `
  <button class="block w-2/4 md:w-1/3 h-10 mx-auto rounded-xl font-medium  md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="submit">Submit</button>
  `;

  EditQuizzController();
}
