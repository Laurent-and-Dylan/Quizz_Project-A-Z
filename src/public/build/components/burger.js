"use-strict";

import { Authentifier } from "../data/Authentifier.js";
import { Display } from "../views/Forms.views.js";

export async function displayBurger() {
  const auth = await Authentifier();
  
  let connect;
  if (auth) {
    connect = `
      <li class="submenu w-auto mt-4 invisible text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold" id="profile">Profile</li>
      <li class="stats submenu w-auto mt-4 invisible lg:hidden text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold">Stats</li>
      <li class="categories submenu w-auto mt-4 invisible lg:hidden text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold">Categories</li>
      <li class="submenu w-auto mt-4 invisible text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold" id="logout">Log Out</li>
    `;
  } else {
    connect = `
      <li class="submenu w-auto mt-4 invisible text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold" id="login">LogIn</li>
      <li class="submenu w-auto mt-4 invisible text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold" id="register">Register</li>
      <li class="submenu stats w-auto mt-4 invisible lg:hidden text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold">Stats</li>
      <li class="submenu categories w-auto mt-4 invisible lg:hidden text-white px-4 hover:box-border hover:bg-sky-800 cursor-pointer font-bold">Categories</li>
    `;
  }

  return `
        <ul class="relative z-10 text-2xl text-right" id="submenu">
            <li class="text-2xl h-9 ml-auto w-[100px] flex flex-col justify-between hover:scale-110 cursor-pointer" id="burger">
                <span class="block w-12 ml-auto h-1 rounded-sm bg-white md:stroke-cyan-700" id="line1"></span>
                <span class="block w-12 ml-auto h-1 rounded-sm bg-white md:stroke-cyan-700" id="line2"></span>
                <span class="block w-12 ml-auto h-1 rounded-sm bg-white md:stroke-cyan-700" id="line3"></span>
            </li>
            ${connect}

        </ul>
    `;
}

export function animBurger() {
  const submenu = document.querySelectorAll(".submenu");

  burger.addEventListener("click", (e) => {
    line1.classList.toggle("ln1");
    line2.classList.toggle("hidden");
    line3.classList.toggle("ln3");

    submenu.forEach((li) => {
      li.classList.toggle("invisible");
    });
  });
}

export function burgerController() {
  const logout = document.getElementById("logout");
  const register = document.getElementById("register");
  const login = document.getElementById("login");

  if (login) login.addEventListener("click", () => Display.loginForm());
  if (register) register.addEventListener("click", () => Display.signUpForm());
  if (logout) {
    logout.addEventListener("click", () => {
      localStorage.clear();
      document.location = "http://127.0.0.1:5500/src/public/";
    });
  }
}
