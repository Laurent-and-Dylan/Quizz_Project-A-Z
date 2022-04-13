"use-strict";

import { GetQuizzForEdit, RemoveQuizz } from "../data/Quizz.datas.js";
import { EditQuizz } from "../views/EditQuizz.views.js";
import { UserQuizz } from "../views/UserQuizz.views.js";
import { error } from "../components/error.js";

export function UserQuizzController() {
  const edits = document.querySelectorAll("[data-edit]");
  const removes = document.querySelectorAll("[data-remove]");

  edits.forEach((edit) => {
    edit.addEventListener("click", async () => {
      const { results } = await GetQuizzForEdit(edit.dataset.edit);

      if (results) {
        localStorage.setItem("EditQuizz", JSON.stringify(results));
        EditQuizz();
      }
    });
  });

  removes.forEach((remove) => {
    remove.addEventListener("click", async () => {
      let { results } = await RemoveQuizz(remove.dataset.remove);

      if (results) {
        await UserQuizz();
        alert("Your quizz has been delete succefully !");
      }
    });
  });
}
