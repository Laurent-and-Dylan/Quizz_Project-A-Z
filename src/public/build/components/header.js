import { Display } from "../views/Forms.views.js";

export function header(h1, h2) {
  document
    .querySelector("header")
    .classList.add(
      "flex",
      "items-start",
      "justify-between",
      "px-4",
      "h-[30vh]"
    );
  document.querySelector("header").innerHTML = `
      <img class="w-44" src="./styles/images/Logo.png" alt="" id="logo"/>
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
}
