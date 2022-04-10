"use-strict";

import { GetAllQuizz } from "../data/Quizz.datas.js";
import { Accueil } from "../views/Accueil.views.js";
import { Quizz } from "../views/Quizz.views.js";

export function CategoryController() {
  // Get options categories in header
  let categories = [
    document.querySelector("#navbar > ul > li.categories"),
    document.querySelector("#submenu > li.categories"),
  ];

  // Replace them by "Home"
  categories.forEach((category) => {
    category.textContent = "Home";
    category.setAttribute("id", "home");
    category.classList.remove("categories");

    category.addEventListener("click", () => Accueil());
  });

  // Get all category cards with their dataset
  categories = document.querySelectorAll("[data-category]");

  // Apply event fot display their quizz
  categories.forEach((category) => {
    category.addEventListener("click", async (e) => {
      let results = await GetAllQuizz(e.target.parentNode.dataset.category);

      Quizz(results);
    });
  });
}
