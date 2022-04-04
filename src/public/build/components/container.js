"use-strict";

import { Stats } from "./stats.js";

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

  accueil(username = null) {
    const container = this.Base();

    container.classList.add(
      "h-[65vh]",
      "relative",
      "flex",
      "flex-col",
      "justify-evenly"
    );

    container.innerHTML = `
    <h1 class="text-2xl lg:text-3xl font-bold text-center text-pink-600"">Welcome and Enjoy ${
      username ? username : ""
    }</h1>
    <p class="text-2xl lg:text-4xl font-bold text-center text-orange-500">Play now with a random Quizz !</p>
    <button class="block w-2/4 md:w-1/3 h-10 mx-auto   rounded-xl font-medium  md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="play">Play</button>
  `;
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

  createQuizz() {
    const container = this.Base();

    container.classList.add("flex", "justify-end", "flex-wrap");
    container.innerHTML = `
      <h1 class="w-1/3 text-center text-2xl text-white font-extrabold"><span id="left">1</span>/<span id="total">2</span></h1>
      <input id="title" class="w-1/3 text-center text-2xl text-white font-extrabold bg-transparent" placeholder="Name of Quizz">
    `;
    const subContainer = this.SubContainer();

    subContainer.classList.add(
      "w-screen",
      "grid",
      "grid-cols-4",
      "gap-4",
      "mx-20",
      "my-8"
    );
  },
};
