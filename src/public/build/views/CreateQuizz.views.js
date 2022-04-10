"use-strict";

import { Container } from "../components/container.js";
import { create } from "../components/create.js";
import { CreateQuizzController } from "../controllers/CreateQuizz.controller.js";
import { Input } from "../components/Input.js";
import { Button } from "../components/Button.js";

export function CreateQuizz() {
  //~ Create a localStorage
  let quizz = {
    name,
    id_category: null,
    quests: [],
    resps: [],
  };
  localStorage.setItem("NewQuizz", JSON.stringify(quizz));
  document.querySelector('section').className = 'min-h-[65vh] font-dosis flex items-center'

  //~ Make the create view
  let container = Container.Base();
  container.className =
    "h-[55vh] flex justify-end flex-wrap md:grid md:grid-cols-5 md:grid-rows-5 md:w-1/2 mx-auto text-jaune";
  container.innerHTML = `
    <label for="title" class="col-start-1 col-end-3 text-4xl font-extrabold text-center">Title of your quizz : </label>
    ${new Input("text", "Moyen-Age en France", "title","col-start-3 col-end-5 bg-transparent text-jaune text-3xl").display}
    <h1 class="text-center text-4xl font-extrabold"><span id="left" class="font-normal">1</span>/<span id="total">2</span></h1>
    ${new Button("Next", "next", "col-start-1 col-end-6 row-start-6 mx-auto").display}
  `;

  //~ Make the question/responses elements
  let subContainer = Container.SubContainer();
  subContainer.className = "col-start-1 col-end-6 row-start-2 row-end-5";
  subContainer.innerHTML = create.Base();
  // Container.createQuizz();
  // create.Base();

  //~ Logic of create view
  CreateQuizzController();
}
