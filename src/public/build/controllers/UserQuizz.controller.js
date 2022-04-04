"use-strict";

import { GetQuizzForEdit, RemoveQuizz } from "../data/Quizz.datas.js";
import { UserQuizz } from "../views/UserQuizz.views.js";

export function UserQuizzController() {
  const edits = document.querySelectorAll("[data-edit]");
  const removes = document.querySelectorAll("[data-remove]");

  edits.forEach((edit) => {
    edit.addEventListener("click", async () => {
      const { results } = await GetQuizzForEdit(edit.dataset.edit);

      if (results) {
        localStorage.setItem("EditQuizz", results);
        EditQuizz();
      }
    });
  });

  removes.forEach((remove) => {
    remove.addEventListener("click", async () => {
      const { results } = await RemoveQuizz(remove.dataset.remove);

      if (results) {
        UserQuizz();
      }
    });
  });
}
