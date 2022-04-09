"use-strict";

import { QuizzData } from "../data/Quizz.datas.js";
import { CreateQuizz } from "../views/CreateQuizz.views.js";
import { UserQuizz } from "../views/UserQuizz.views.js";

export function ProfileController() {
  let create = document.getElementById("create");
  let quizz = document.getElementById("quizz");
  let file = document.getElementById("file");
  let img = document.getElementById("img");
  function updateProfile() {
    let valid = true;
    // password.value.match(/^[\S]{8,150}$/) == null ? (valid = false) : null;
    pseudo.value.match(/^[\w]{5,40}$/) == null ? (valid = false) : null;
    email.value.match(/^[\w]{3,25}[@][a-z]{2,8}[.][a-z]{2,4}$/) == null
      ? (valid = false)
      : null;

    if (valid) {
      let results = {
        username: pseudo.value,
        image: img.src,
        email: email.value,
        password: "password.value",
        bio: "bio.value",
        token: localStorage.getItem("jwt"),
      };

      new QuizzData("user/update", "PUT", results).fetch;
    }
  }
  file.addEventListener("change", (e) => {
    let path = e.target.value.split("\\")[2];
    img.src = `./styles/images/${path}`;
  });
  window.addEventListener("keypress", (e) => {
    e.key == "Enter" ? updateProfile() : null;
  });
  create.addEventListener("click", () => CreateQuizz());
  quizz.addEventListener("click", () => UserQuizz());
}
