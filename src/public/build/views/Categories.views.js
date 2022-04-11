"use-strict";

import { category } from "../components/category.js";
import { Container } from "../components/container.js";
import { CategoryController } from "../controllers/Category.controller.js";
import { GetCategories } from "../data/Categories.datas.js";

//^ Categories views function
export async function Categories() {
  //~ Get categories in database
  let results = await GetCategories();
  let section = document.querySelector("section");
  section.classList.replace("h-[65vh]", "min-h-[65vh]");

  //~ Display content title
  let container = Container.Base();
  container.className = "h-full sm:overflow-hidden sm:w-4/5 mx-auto relative";
  container.innerHTML = `<h1 class="text-4xl text-center text-jaune uppercase font-extrabold">Choose your categories :</h1>`;
  section.innerHTML += `
  <img id="arrow_r" src="./styles/images/arrow.png" class="hidden sm:block absolute top-1/2 right-[5vw] -translate-y-1/2 cursor-pointer z-50 hover:scale-105 ">
  <img id="arrow_l" src="./styles/images/arrow.png" class="hidden sm:block absolute top-1/2 left-[5vw] -translate-y-1/2 rotate-180 cursor-pointer z-50 hover:scale-105">
  `;

  let subContainer = Container.SubContainer();
  subContainer.className =
    "flex flex-col justify-evenly sm:flex-row sm:w-[150vw] font-dosis uppercase font-extrabold";

  if (results) {
    //~ Boucle for display categories
    for (let r in results) {
      subContainer.innerHTML += category(results[r]);
    }
  }
  CategoryController();
}
