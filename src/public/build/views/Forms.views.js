"use-strict";

function removeMain() {
  logo.remove();
  guest.remove();
  document.querySelector("section > div").remove();
}

function header(h1, h2) {
  document
    .querySelector("header")
    .classList.add("flex", "justify-between", "px-4", "h-[30vh]");
  document.querySelector("header").innerHTML = `
      <img class="w-44" src="./styles/images/Logo.png" alt="" />
      <h1 class="w-max absolute left-2/4 top-44 -translate-x-2/4 md:top-4 font-extrabold text-white text-3xl">${h1}</h1>
      <h2 class="font-extrabold text-white text-3xl cursor-pointer">${h2}</h2>
  `;
  document.querySelector("section").classList.remove("h-[85vh]");
  document.querySelector("section").classList.add("h-[55vh]");
}

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
    removeMain();
    header("Login Form :", "Register");
    form("LogIn", "Email / Username", "Password");
  },
  signUpForm() {
    removeMain();
    header("Register Form :", "LogIn");
    form("Register", "Username", "Password", "Email");
  },
  main() {
    removeMain();
  },
};
