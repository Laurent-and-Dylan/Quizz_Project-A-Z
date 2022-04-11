"use-strict";

import { GetAllQuizz } from "../data/Quizz.datas.js";
import { Accueil } from "../views/Accueil.views.js";
import { Quizz } from "../views/Quizz.views.js";

export function CategoryController() {
  //~ Get options categories in header
  let categories = [
    document.querySelector("#navbar > ul > li.categories"),
    document.querySelector("#submenu > li.categories"),
  ];

  //~ Replace them by "Home"
  categories.forEach((category) => {
    category.textContent = "Home";
    category.setAttribute("id", "home");
    category.classList.remove("categories");

    category.addEventListener("click", () => Accueil());
  });

  //~ Get all category cards with their dataset
  categories = document.querySelectorAll("[data-category]");

  //~ Apply event fot display their quizz
  categories.forEach((category) => {
    category.addEventListener("click", async (e) => {
      let results = await GetAllQuizz(e.target.parentNode.dataset.category);

      Quizz(results);
    });
  });

  carousel();
  function carousel() {
    let x = 0;
    let widthCard = categories[0].clientWidth;

    let end = widthCard * categories.length;
    let negatifEnd = (end / 2) * -1;
    arrow_r.addEventListener("click", () => {
      if (x <= 0 && x > negatifEnd) {
        x -= widthCard;
        subContainer.style.transform = `translateX(${x}px)`;
        subContainer.style.transition = `0.4s ease-in-out`;
      }
    });
    arrow_l.addEventListener("click", () => {
      if (x < 0) {
        x += widthCard;
        subContainer.style.transform = `translateX(${x}px)`;
        subContainer.style.transition = `0.4s ease-in-out`;
      }
    });
  }
}
