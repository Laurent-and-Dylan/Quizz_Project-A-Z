"use-strict";

import { Accueil } from "../views/Accueil.views.js";
import { Stats } from "../views/Stats.views.js";
import { Categories } from "../views/Categories.views.js";
import { Authentifier } from "../data/Authentifier.js";

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
      Stats();
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
