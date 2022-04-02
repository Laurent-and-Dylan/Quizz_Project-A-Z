"use-strict";

import { GetQuizz } from "../data/Quizz.datas.js";
import { button } from "../components/button.js";
import { BeforeGame } from "../views/BeforeGame.views.js";

export function QuizzController() {
  const quizz = document.querySelectorAll("[data-quizz]");

  quizz.forEach((quiz) => {
    quiz.addEventListener("click", async (e) => {
      await GetQuizz(e.target.dataset.quizz);
      // localStorage.setItem("Quizz", JSON.stringify(result));

      button("Play", "play");
      play.classList.add(
        "fixed",
        "top-3/4",
        "left-1/2",
        "-translate-x-2/4",
        "z-20"
      );

      play.addEventListener("click", () => BeforeGame("lala", true));
    });
  });
}
