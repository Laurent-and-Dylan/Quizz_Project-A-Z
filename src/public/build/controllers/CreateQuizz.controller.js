"use-strict";

import { EndCreate } from "../views/EndCreate.views.js";
import { create } from "../components/create.js";

//^ Call baseEvents function or addEvents function
export function CreateQuizzController() {
  let next = document.getElementById("next");
  let add = document.getElementById("add");

  if (add) addEvents(add);
  if (next) baseEvents(next);
}

//^ Control Create View (if left question is under the minimum required)
function baseEvents(next_add) {
  let id = next_add.id;
  let btn = document.getElementById(`${id}`);
  let subContainer = document.getElementById("subContainer");
  let container = document.getElementById("container");

  //~ Listen next question is click
  btn.addEventListener("click", () => {
    // Get value of each input
    let Quizz = JSON.parse(localStorage.getItem("NewQuizz"));
    let quest = document.getElementById("quest").value.match(/^.{15,150}$/);
    let correct = document.getElementById("correct").value.match(/^.{1,150}$/);
    let bad1 = document.getElementById("bad1").value.match(/^.{1,150}$/);
    let bad2 = document.getElementById("bad2").value.match(/^.{1,150}$/);
    let bad3 = document.getElementById("bad3").value.match(/^.{1,150}$/);

    //~ Check if each is not null and push them in array Quizz
    if (quest && correct && bad1 && bad2 && bad3) {
      Quizz.quests.push(quest[0]);
      Quizz.resps.push([
        [correct[0], true],
        [bad1[0], false],
        [bad2[0], false],
        [bad3[0], false],
      ]);

      //~ Push array in localStorage
      localStorage.setItem("NewQuizz", JSON.stringify(Quizz));

      //~ Check the question left and create view accordingly
      if (next_add.id == "next" && left.textContent != total.textContent - 1) {
        // Number of question under the minimum

        left.textContent++;
        subContainer.innerHTML = create.Base();
        CreateQuizzController();
      } else if (left.textContent == total.textContent - 1) {
        // Number of question under the minimum -1

        left.textContent++;
        subContainer.innerHTML = create.Base();
        next.remove();
        container.innerHTML += create.FinishOrAdd();
        CreateQuizzController();
      }
      if (next_add.id == "add") {
        // Number of question equal or superior of miminum

        left.textContent++;
        total.textContent++;
        subContainer.innerHTML = create.Base();
        finish.remove();
        add.remove();
        container.innerHTML += create.FinishOrAdd();
        CreateQuizzController();
      }
    }
  });
}

//^ Control Create View (if left question is equal or superior of miminum)
function addEvents(add) {
  let finish = document.getElementById("finish");
  baseEvents(add);

  //~ Listen finish quizz button is click
  finish.addEventListener("click", () => {
    //~ Check if each is not null and push them in array Quizz
    let Quizz = JSON.parse(localStorage.getItem("NewQuizz"));
    let title = document
      .getElementById("title")
      .value.match(/^[a-zA-Z\s]{5,30}$/);
    let quest = document.getElementById("quest").value.match(/^.{15,150}$/);
    let correct = document.getElementById("correct").value.match(/^.{1,150}$/);
    let bad1 = document.getElementById("bad1").value.match(/^.{1,150}$/);
    let bad2 = document.getElementById("bad2").value.match(/^.{1,150}$/);
    let bad3 = document.getElementById("bad3").value.match(/^.{1,150}$/);

    //~ Check if each is not null and push them in array Quizz
    if (quest && correct && bad1 && bad2 && bad3 && title) {
      Quizz.name = title[0];
      Quizz.quests.push(quest[0]);
      Quizz.resps.push([
        [correct[0], true],
        [bad1[0], false],
        [bad2[0], false],
        [bad3[0], false],
      ]);

      //~ Push array in localStorage
      localStorage.setItem("NewQuizz", JSON.stringify(Quizz));

      //^ Call EndCreate View
      EndCreate();
    }
  });
}
