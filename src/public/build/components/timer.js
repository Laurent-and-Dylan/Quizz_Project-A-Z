"use-strict";

import { EndGame } from "../views/EndGame.views.js";
import { nextQuestion } from "./question.js";
import { valid } from "./responses.js";

export function timer() {
  const seconds = setInterval(() => {
    const temps = time.textContent == 0;
    const allQuestion = left.textContent == total.textContent;

    if ((temps && !allQuestion) || (valid && !allQuestion)) {
      clearInterval(seconds);
      nextQuestion();
      timer();
    } else if ((temps && allQuestion) || (valid && allQuestion)) {
      clearInterval(seconds);
      EndGame();
    } else {
      time.textContent--;
    }
  }, 1000);
}
