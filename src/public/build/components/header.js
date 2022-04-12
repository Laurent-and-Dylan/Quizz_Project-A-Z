"use-strict";

import { displayBurger } from "./burger.js";

const header = document.querySelector("header");

export const Header = {
  Base() {
    header.innerHTML = `
      <img class="w-44 m-4 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
    `;
  },

  form(h1) {
    this.Base();

    header.className =
      "flex items-start justify-between md:h-[20vh] font-dosis uppercase font-extrabold text-jaune text-3xl";
    header.innerHTML += `
      <h1 class="mt-6 mr-4 cursor-pointer" id="${h1}">${h1}</h1>
    `;
  },

  async main() {
    this.Base();

    header.className =
      " flex items-start justify-between h-[20vh] py-4 px-4 font-dosis text-white uppercase font-extrabold";
    header.innerHTML += `
        <nav class="h-full flex m-4" id="navbar">
              <ul class="flex md:w-min justify-end lg:justify-between text-2xl font-bold">
                <li class="stats h-12 hidden lg:block hover:scale-105 cursor-pointer">Stats</li>
                <li class="categories h-12 ml-[70px] hidden lg:block hover:scale-105 cursor-pointer">Categories</li>
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
