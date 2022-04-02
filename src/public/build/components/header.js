"use-strict";

import { HeaderController } from "../controllers/Headers.controllers.js";
import { Display } from "../views/Forms.views.js";
import { animBurger, burgerController, displayBurger } from "./burger.js";

const header = document.querySelector("header");

export const Header = {
  header_1(h1, h2) {
    header.classList.add(
      "flex",
      "items-start",
      "justify-between",
      "px-4",
      "h-[30vh]"
    );
    header.innerHTML = `
      <img class="w-44 m-4 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
      <h1 class="absolute left-2/4 top-44 -translate-x-2/4 md:top-4 font-extrabold text-white text-3xl">${h1}</h1>
      <h2 class="mt-4 font-extrabold text-white text-3xl cursor-pointer" id="${h2}">${h2}</h2>
  `;
    document.querySelector("section").classList.remove("h-[85vh]");
    document.querySelector("section").classList.add("h-[55vh]");

    document.getElementById(`${h2}`).addEventListener("click", (e) => {
      if (h2 === "Register") {
        Display.signUpForm();
      } else {
        Display.loginForm();
      }
    });
  },

  async header_2() {
    header.classList.add(
      "flex",
      "items-start",
      "justify-between",
      "h-[20vh]",
      "py-4",
      "px-4"
    );

    header.innerHTML = `
        <img class="w-44 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
        <nav class="h-full flex m-4" id="navbar">
              <ul class="flex md:w-[40vw] justify-end lg:justify-between">
                <li class="stats text-4xl h-12 hidden lg:block text-white font-extrabold hover:scale-105 cursor-pointer" >Stats</li>
                <li class="categories text-4xl h-12 hidden lg:block text-white font-extrabold hover:scale-105 cursor-pointer" >Categories</li>
                ${await displayBurger()}
              </ul>
        </nav>
      `;
    animBurger();
    burgerController();
    HeaderController();
  },

  async header_3() {
    const name = JSON.parse(localStorage.getItem("Quizz"))[0];

    header.innerHTML = `
    <img class="w-44 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
    <h1 class="absolute left-2/3 top-20 text-xl md:relative md:top-0 md:left-0 md:text-3xl text-center text-white font-extrabold" id="name_quizz">Quizzz<br>${name}</h1>
    ${await displayBurger()}
    `;

    animBurger();
    burgerController();
    HeaderController();
  },
};
