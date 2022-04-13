"use-strict";

import { GetQuizz } from "../data/Quizz.datas.js";
import { Button } from "../components/Button.js";
import { BeforeGame } from "../views/BeforeGame.views.js";

export function QuizzController() {
  const quizz = document.querySelectorAll("[data-quizz]");

  quizz.forEach((quiz) => {
    quiz.addEventListener("click", async (e) => {
      let id = e.target.dataset.quizz;
      console.log(id);
      await GetQuizz(id);
      // localStorage.setItem("Quizz", JSON.stringify(result));

      subContainer.innerHTML += new Button(
        "Play",
        "play",
        "top-3/4 z-20"
      ).display;
      play.classList.replace("relative", "fixed");

      play.addEventListener("click", () => BeforeGame());
    });
  });
}
