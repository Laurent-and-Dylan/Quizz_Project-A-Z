"use-strict";

import { category } from "../components/category.js";
import { Container } from "../components/container.js";
import { CategoryController } from "../controllers/Category.controller.js";
import { GetCategories } from "../data/Categories.datas.js";

export async function Categories() {
  const categories = document.querySelector("#navbar > ul > li.categories");
  const section = document.querySelector("section");
  const results = await GetCategories();

  if (results) {
    categories.textContent = "Home";
    categories.setAttribute("id", "home");

    section.innerHTML = "";
    section.classList.remove("h-[65vh]");
    Container.categories();

    for (let r in results) {
      category(results[r]);
    }

    CategoryController();
  }
}
