"use-strict";

import { HeaderController } from "../controllers/Headers.controllers.js";
import { Display } from "../views/Forms.views.js";
import { animBurger, displayBurger } from "./burger.js";

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
      <img class="w-44 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
      <h1 class="absolute left-2/4 top-44 -translate-x-2/4 md:top-4 font-extrabold text-white text-3xl">${h1}</h1>
      <h2 class="font-extrabold text-white text-3xl cursor-pointer" id="${h2}">${h2}</h2>
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

  async header_2(username = null) {
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
                ${displayBurger(username)}
              </ul>
        </nav>
      `;
    animBurger();
    HeaderController();
  },

  header_3(username) {
    header.innerHTML = `
    <img class="w-44 cursor-pointer" src="./styles/images/Logo.png" alt="" id="logo"/>
    <h1 class="text-4xl text-white font-extrabold" id="name_quizz">Quizzz n°48556</h1>
    ${displayBurger(username)}
    `;

    animBurger();
    HeaderController(username);
  },
};
