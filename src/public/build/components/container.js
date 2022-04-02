"use-strict";

export const Container = {
  Base() {
    const section = document.querySelector("section");
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    section.appendChild(container);

    return container;
  },

  SubContainer() {
    const container = document.getElementById("container");
    const subContainer = document.createElement("div");
    subContainer.setAttribute("id", "subContainer");
    container.appendChild(subContainer);

    return subContainer;
  },

  categories() {
    const container = this.Base();

    container.innerHTML = `
      <h1 class="text-2xl font-extrabold text-center text-orange-500">CHOOSE A CATEGORY THEN SELECT QUIZZ</h1>
    `;

    const subContainer = this.SubContainer();

    subContainer.classList.add(
      "grid",
      "grid-cols-3",
      "gap-8",
      "my-10",
      "justify-items-center"
    );
  },

  quizz() {
    const container = this.Base();

    container.innerHTML = `
      <h1 class="text-2xl font-extrabold text-center text-orange-500">SELECT QUIZZ</h1>
    `;

    const subContainer = this.SubContainer();

    subContainer.classList.add(
      "grid",
      "grid-cols-3",
      "gap-8",
      "my-10",
      "justify-items-center"
    );
  },
  beforeGame() {
    const container = this.Base();

    container.classList.add(
      "relative",
      "h-[65vh]",
      "flex",
      "flex-col",
      "text-center",
      "justify-evenly"
    );
    container.innerHTML = `
      <span class="text-8xl text-white font-bold" id="timer">1</span>
      <h1 class="text-4xl text-pink-700 font-bold">Let's Play !</h1>
    `;
  },
};
