"use-strict";

import { Accueil } from "../views/Accueil.views.js";
import { Statistics } from "../views/Statistics.views.js";
import { Categories } from "../views/Categories.views.js";
import { Authentifier } from "../data/Authentifier.js";
// import { Display } from "../views/Forms.views.js";

export function HeaderController() {
  const { username } = Authentifier();
  const categories = document.querySelectorAll(".categories");
  const stats = document.querySelectorAll(".stats");

  logo.addEventListener("click", () => {
    localStorage.removeItem("Quizz");
    Accueil(username);
  });

  stats.forEach((stat) => {
    stat.addEventListener("click", () => {
      Statistics();
    });
  });

  categories.forEach((categorie) => {
    categorie.addEventListener("click", () => {
      Categories();
    });
  });

  if (username) {
    logout.addEventListener("click", () => {
      localStorage.clear();
      document.location.reload("http://127.0.0.1:5500/src/public/");
    });
  }
}

// export function HeaderControllerForm() {
//   const h2 = document.querySelector(`header > h2`);

//   h2.addEventListener("click", () => {
//     console.log("hello");
//     if (h2.textContent === "Register") {
//       Display.signUpForm();
//     } else {
//       Display.loginForm();
//     }
//   });
// }
