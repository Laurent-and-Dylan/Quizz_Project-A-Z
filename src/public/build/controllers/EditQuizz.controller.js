"use-strict";

import { EditQuizz } from "../data/Quizz.datas.js";
import { Profile } from "../views/Profile.views.js";

export function EditQuizzController() {
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    const results = checkDataAndFormat();
    if (results) {
      EditQuizz(results);
      Profile();
    }
  });
}

function checkDataAndFormat() {
  const quizz = document.querySelector("[data-quizz]");
  const quests = document.querySelectorAll("[data-quest]");
  const resps = document.querySelectorAll("[data-resp]");

  let results = {
    name: quizz.value,
    id_quizz: quizz.dataset.quizz,
    quests: [],
    resps: [],
  };

  let valid = true;

  if (!quizz.value.match(/^[a-zA-Z\s]{5,30}$/)) valid = false;

  quests.forEach((quest) => {
    if (quest.value.match(/^.{15,150}$/))
      results.quests.push([quest.value, quest.dataset.quest]);
    else valid = false;
  });

  resps.forEach((resp) => {
    if (resp.value.match(/^.{1,150}$/))
      results.resps.push([resp.value, resp.dataset.bool, resp.dataset.resp]);
    else valid = false;
  });

  if (valid) return results;
  else return false;
}
