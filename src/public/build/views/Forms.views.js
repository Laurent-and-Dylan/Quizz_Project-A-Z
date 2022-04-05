"use-strict";

import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import {
  FormsControllers,
  LoginControllers,
  RegisterControllers,
} from "../controllers/Forms.controller.js";

// function form(submit, input1, input2, input3 = null) {
//   const section = document.querySelector("section");
//   const register = input3
//     ? `<input type="email" placeholder="${input3}" minlength="7" maxlength="40" class="w-80 h-8 mt-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="mail">`
//     : "";

//   section.classList.replace("h-[85vh]", "h-[55vh]");
//   section.innerHTML = `
//     ${register}
//     <input type="text" placeholder="${input1}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="username">
//     <input type="password" placeholder="${input2}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="password">
//     <input type="submit" value="${submit}" class="w-48 h-10 my-9 block mx-auto rounded-md text-xl text-center text-white bg-gradient-to-r from-yellow-300 to-amber-500 cursor-pointer" id="submit">
//   `;
// }

function LoginForm() {
  Header.form("Login Form :", "Register");
  Container.form("LogIn", "Email / Username", "Password");
  FormsControllers();

  submit.addEventListener("click", () => {
    LoginControllers(username, password);
  });
}

function RegisterForm() {
  Header.form("Register Form :", "LogIn");
  Container.form("Register", "Username", "Password", "Email");
  FormsControllers();

  submit.addEventListener("click", () => {
    RegisterControllers(mail, username, password);
  });
}

export { LoginForm, RegisterForm };
