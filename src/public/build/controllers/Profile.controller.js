"use-strict";

import { CreateQuizz } from "../views/CreateQuizz.views.js";
import { UserQuizz } from "../views/UserQuizz.views.js";

export function ProfileController() {
  const create = document.getElementById("create");
  const quizz = document.getElementById("quizz");

  create.addEventListener("click", () => CreateQuizz());
  quizz.addEventListener("click", () => UserQuizz());
}
