"use-strict";

import * as Remover from "../utils/Remover.js";
import { header } from "../components/header.js";

function form(submit, input1, input2, input3 = null) {
  const register = input3
    ? `<input type="text" placeholder="${input3}" class="w-80 h-8 mt-8 block mx-auto rounded-md text-xl text-center text-slate-400">`
    : "";

  document.querySelector("section").innerHTML = `
    ${register}
    <input type="text" placeholder="${input1}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400">
    <input type="password" placeholder="${input2}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400">
    <input type="submit" value="${submit}" class="w-48 h-10 my-9 block mx-auto rounded-md text-xl text-center text-white bg-gradient-to-r from-yellow-300 to-amber-500 cursor-pointer">
  `;
}

export const Display = {
  loginForm() {
    Remover.main();
    header("Login Form :", "Register");
    form("LogIn", "Email / Username", "Password");
  },
  signUpForm() {
    Remover.main();
    header("Register Form :", "LogIn");
    form("Register", "Username", "Password", "Email");
  },
  main() {
    Remover.main();
  },
};
