"use-strict";

import { Container } from "../components/container.js";
import { create } from "../components/create.js";
import { CreateQuizzController } from "../controllers/CreateQuizz.controller.js";

export function CreateQuizz() {
  const section = document.querySelector("section");
  const quizz = {
    name,
    id_category:null,
    quests: [],
    resps: [],
  };
  localStorage.setItem("NewQuizz", JSON.stringify(quizz));

  section.innerHTML = "";

  Container.createQuizz();
  create.Base();
  CreateQuizzController();
}
