"use-strict";

import { EndCreate } from "../views/EndCreate.views.js";
import { create } from "../components/create.js";

export function CreateQuizzController() {
  const next = document.getElementById("next");
  const add = document.getElementById("add");

  if (add) addEvents(add);
  if (next) baseEvents(next);
}

function baseEvents(next_add) {
  const id = next_add.id;
  const btn = document.getElementById(`${id}`);

  btn.addEventListener("click", () => {
    let Quizz = JSON.parse(localStorage.getItem("NewQuizz"));
    const quest = document.getElementById("quest").value.match(/^.{15,150}$/);
    const correct = document
      .getElementById("correct")
      .value.match(/^.{1,150}$/);
    const bad1 = document.getElementById("bad1").value.match(/^.{1,150}$/);
    const bad2 = document.getElementById("bad2").value.match(/^.{1,150}$/);
    const bad3 = document.getElementById("bad3").value.match(/^.{1,150}$/);

    if (quest && correct && bad1 && bad2 && bad3) {
      Quizz.quests.push(quest[0]);
      Quizz.resps.push([correct[0], bad1[0], bad2[0], bad3[0]]);

      localStorage.setItem("NewQuizz", JSON.stringify(Quizz));

      if (next_add.id == "next" && left.textContent != total.textContent - 1) {
        left.textContent++;
        create.Base();
        CreateQuizzController();
      } else if (left.textContent == total.textContent - 1) {
        left.textContent++;
        create.FinishOrAdd();
        CreateQuizzController();
      }
      if (next_add.id == "add") {
        left.textContent++;
        total.textContent++;
        create.FinishOrAdd();
        CreateQuizzController();
      }
    }
  });
}

function addEvents(add) {
  const finish = document.getElementById("finish");
  baseEvents(add);

  finish.addEventListener("click", () => {
    let Quizz = JSON.parse(localStorage.getItem("NewQuizz"));
    const title = document
      .getElementById("title")
      .value.match(/^[a-zA-Z\s]{5,30}$/);
    const quest = document.getElementById("quest").value.match(/^.{15,150}$/);
    const correct = document
      .getElementById("correct")
      .value.match(/^.{1,150}$/);
    const bad1 = document.getElementById("bad1").value.match(/^.{1,150}$/);
    const bad2 = document.getElementById("bad2").value.match(/^.{1,150}$/);
    const bad3 = document.getElementById("bad3").value.match(/^.{1,150}$/);

    if (quest && correct && bad1 && bad2 && bad3 && title) {
      Quizz.name = title[0];
      Quizz.quests.push(quest[0]);
      Quizz.resps.push([correct[0], bad1[0], bad2[0], bad3[0]]);

      localStorage.setItem("NewQuizz", JSON.stringify(Quizz));
      EndCreate();
    }
  });
}
