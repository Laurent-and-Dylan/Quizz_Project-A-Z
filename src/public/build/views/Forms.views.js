"use-strict";

import { header } from "../components/header.js";
import * as Controller from "../controllers/Forms.controller.js";

function form(submit, input1, input2, input3 = null) {
  const register = input3
    ? `<input type="email" placeholder="${input3}" minlength="7" maxlength="40" class="w-80 h-8 mt-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="mail">`
    : "";

  document.querySelector("section").innerHTML = `
    ${register}
    <input type="text" placeholder="${input1}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="username">
    <input type="password" placeholder="${input2}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="password">
    <input type="submit" value="${submit}" class="w-48 h-10 my-9 block mx-auto rounded-md text-xl text-center text-white bg-gradient-to-r from-yellow-300 to-amber-500 cursor-pointer" id="submit">
  `;
}

export const Display = {
  loginForm() {
    header("Login Form :", "Register");
    form("LogIn", "Email / Username", "Password");

    submit.addEventListener("click", () => {
      Controller.login(username, password);
    });
  },

  signUpForm() {
    header("Register Form :", "LogIn");
    form("Register", "Username", "Password", "Email");

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      Controller.register(mail, username, password);
    });
  },
  main() {
    Remover.main();
  },
};
