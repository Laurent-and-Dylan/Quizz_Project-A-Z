"use-strict";

import { CreateQuizz } from "../data/Quizz.datas.js";
import { UserQuizz } from "../views/UserQuizz.views.js";

export function RecapQuizzController() {
  let submit = document.getElementById("submit");
  submit.addEventListener("click", () => formatData());
}

async function formatData() {
  let quests = document.querySelectorAll("[data-quest]");
  let resps = document.querySelectorAll("[data-resp]");
  let title = document.getElementById("title");
  let category = document.getElementById("category");

  let valid = [];
  let ok = true;

  quests.forEach((quest) => {
    valid.push(quest.value.match(/^.{15,150}$/));
  });
  resps.forEach((resp) => {
    valid.push(resp.value.match(/^.{1,150}$/));
  });

  valid.push(title.value.match(/^[a-zA-Z\s]{5,30}$/));

  valid.push(category.value);

  for (let v in valid) {
    if (!valid[v]) {
      ok = false;
    }
  }

  if (ok) {
    let quizz = JSON.parse(localStorage.getItem("NewQuizz"));
    quizz.name = title.value;
    quizz.id_category = category.value;

    for (let q in quizz.quests) {
      const resps = document.querySelectorAll(`[data-resp='${q}']`);
      quizz.quests[q] = quests[q].value;

      for (let r in quizz.resps[q]) {
        quizz.resps[q][r][0] = resps[r].value;
      }
    }

    localStorage.setItem("NewQuizz", JSON.stringify(quizz));
    let { results, errors } = await CreateQuizz();

    if (results) {
      alert("Your quizz has been create succesfully !");
      UserQuizz();
    } else {
      alert(errors);
    }
  }
}
