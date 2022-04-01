"use-strict";

import { EndGame } from "../views/EndGame.views.js";
import { nextQuestion } from "./question.js";
import { valid, goodResponse } from "./responses.js";

export function timer() {
  const seconds = setInterval(() => {
    const play = document.getElementById("play");
    const time = document.getElementById("time");
    const left = document.getElementById("left");

    let temps;
    let allQuestion;

    if (time) temps = time.textContent == 0;
    if (left) allQuestion = left.textContent == total.textContent;

    if ((temps && !allQuestion) || (valid && !allQuestion)) {
      clearInterval(seconds);
      goodResponse();
      setTimeout(() => {
        nextQuestion();
        timer();
      }, 2000);
    } else if ((temps && allQuestion) || (valid && allQuestion)) {
      clearInterval(seconds);
      EndGame();
    } else if (play != null) {
      clearInterval(seconds);
    } else {
      time.textContent--;
    }
  }, 1000);
}
