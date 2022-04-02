"use-strict";

export const Container = {
  base() {
    const section = document.querySelector("section");
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    section.appendChild(container);
  },
  categories() {
    this.base();
    const container = document.getElementById("container");
    const subContainer = document.createElement("div");

    container.innerHTML = `
      <h1 class="text-2xl font-extrabold text-center text-orange-500">CHOOSE A CATEGORY THEN SELECT QUIZZ</h1>
    `;

    subContainer.classList.add("flex", "justify-around", "mt-10");
    container.appendChild(subContainer);

    return { container, subContainer };
  },
};
