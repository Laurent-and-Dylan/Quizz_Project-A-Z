"use-strict";

import { Stats } from "../views/Stats.views.js";
// import { Categories } from "../views/Categories.js"

export function HeaderController() {
  const categories = document.querySelectorAll(".categories");
  const stats = document.querySelectorAll(".stats");

  stats.forEach((stat) => {
    stat.addEventListener("click", () => {
      Stats();
    });
  });

  categories.forEach((categorie) => {
    categorie.addEventListener("click", () => {
      // Categories();
    });
  });

  logout.addEventListener("click", () => {
    localStorage.clear();
    document.location.reload("http://127.0.0.1:5500/src/public/");
  });
}
