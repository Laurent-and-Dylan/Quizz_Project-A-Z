"use-strict";

import { GetAllQuizz } from "../data/Quizz.datas.js";
import { Quizz } from "../views/Quizz.views.js";

export function CategoryController() {
  const categories = document.querySelectorAll("[data-category]");

  categories.forEach((category) => {
    category.addEventListener("click", async (e) => {
      const results = await GetAllQuizz(e.target.parentNode.dataset.category);

      Quizz(results);
    });
  });
}
