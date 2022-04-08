"use-strict";

import { displayBurger } from "./burger.js";

const header = document.querySelector("header");

export const Header = {
  Base() {
    header.innerHTML = `
      <img class="w-44 m-4 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
    `;
  },

  form(h1, h2) {
    this.Base();

    header.className = "flex items-start justify-between h-[20vh]";
    header.innerHTML += `
      <h1 class="absolute left-2/4 top-80 -translate-x-2/4 md:top-6 font-extrabold text-yellow-300 text-3xl">${h1}</h1>
      <h2 class="mt-6 mr-4 font-extrabold text-yellow-300 text-3xl cursor-pointer" id="${h2}">${h2}</h2>
    `;
  },

  async main() {
    this.Base();

    header.className = " flex items-start justify-between h-[20vh] py-4 px-4";
    header.innerHTML += `
        <nav class="h-full flex m-4" id="navbar">
              <ul class="flex md:w-[40vw] justify-end lg:justify-between">
                <li class="stats text-4xl h-12 hidden lg:block text-yellow-300 text-shadow text-shadow-lg font-extrabold hover:scale-105 cursor-pointer">Stats</li>
                <li class="categories text-4xl h-12 hidden lg:block text-yellow-300  drop-shadow-2xl shadow-white font-extrabold hover:scale-105 cursor-pointer">Categories</li>
                ${await displayBurger()}
              </ul>
        </nav>
      `;
  },

  async game() {
    this.Base();
    const { results } = JSON.parse(localStorage.getItem("Quizz"));

    header.innerHTML = `
    <img class="w-44 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
    <h1 class="absolute left-2/3 top-20 text-xl md:relative md:top-0 md:left-0 md:text-3xl text-center text-white font-extrabold" id="name_quizz">Quizzz<br>${
      results[0]
    }</h1>
    ${await displayBurger()}
    `;
  },
};
