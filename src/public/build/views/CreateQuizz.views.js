"use-strict";

import { Container } from "../components/container.js";
import { create } from "../components/create.js";
import { CreateQuizzController } from "../controllers/CreateQuizz.controller.js";
import { Input } from "../components/Input.js";
import { Button } from "../components/Button.js";

export function CreateQuizz() {
  let quizz = {
    name,
    id_category: null,
    quests: [],
    resps: [],
  };
  localStorage.setItem("NewQuizz", JSON.stringify(quizz));

  let container = Container.Base();
  container.className =
    "flex justify-end flex-wrap md:grid md:grid-cols-4 md:grid-rows-4";
  container.innerHTML = `
    <label for="title">Title of your quizz : </label>
    ${new Input("text", "ex: Moyen-Age en France", "title").display}
    ${new Button("Next", "next", "col-start-1 col-end-5 row-start-4 mx-auto").display}
  `;

  let subContainer = Container.SubContainer();
  subContainer.className = "col-start-1 col-end-5 row-start-2 row-end-4";
  subContainer.innerHTML = create.Base();
  // Container.createQuizz();
  // create.Base();

  CreateQuizzController();
}
