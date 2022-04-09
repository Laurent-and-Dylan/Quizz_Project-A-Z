"use-strict";

import { QuizzData } from "../data/Quizz.datas.js";
import { CreateQuizz } from "../views/CreateQuizz.views.js";
import { UserQuizz } from "../views/UserQuizz.views.js";

export function ProfileController() {
  let create = document.getElementById("create");
  let quizz = document.getElementById("quizz");
  let file = document.getElementById("file");
  let img = document.getElementById("img");
  async function updateProfile() {
    let valid = true;
    // password.value.match(/^[\S]{8,150}$/) == null ? (valid = false) : null;
    pseudo.value.match(/^[\w]{5,40}$/) == null ? (valid = false) : null;
    email.value.match(/^[\w]{3,25}[@][a-z]{2,8}[.][a-z]{2,4}$/) == null
      ? (valid = false)
      : null;

    if (valid) {
      let results = new FormData();
      results.append("username", pseudo.value);
      results.append("email", email.value);
      results.append("password", "password.value");
      results.append("token", localStorage.getItem("jwt"));
      results.append("bio", "bio.value");
      results.append("user", localStorage.getItem("user"));
      results.append("file", file.files[0]);

      let res = await fetch("http://127.0.0.1:3000/api/user/update", {
        method: "PUT",
        body: results,
      });

      console.log(res.json());
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
