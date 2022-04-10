"use-strict";

import { category } from "../components/category.js";
import { Container } from "../components/container.js";
import { CategoryController } from "../controllers/Category.controller.js";
import { GetCategories } from "../data/Categories.datas.js";

export async function Categories() {
  let results = await GetCategories();
  let section = document.querySelector("section");

  let container = Container.Base();
  container.innerHTML = `<h1 class="text-4xl text-center text-jaune uppercase">Choose your categories :</h1>`;
  let subContainer = Container.SubContainer();

  if (results) {
    section.classList.remove("h-[65vh]");

    for (let r in results) {
      subContainer.innerHTML += category(results[r]);
    }
  }
  CategoryController();
}
