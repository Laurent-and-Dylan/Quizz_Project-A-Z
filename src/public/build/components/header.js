import { Display } from "../views/Forms.views.js";

export const Header = {
  header_1(h1, h2) {
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
  },

  header_2() {
    document.querySelector("header").innerHTML += `
        <nav class="h-full flex items-center" id="navbar">
              <ul class="flex md:w-[50vw] justify-around items-center">
                <li>
                  <a
                    class=" text-4xl text-white font-extrabold hover:scale-110"
                    href=""
                    >Stats</a
                  >
                </li>
                <li>
                  <a class=" text-4xl text-white font-extrabold hover:scale-110"
                    href=""
                    >Categories</a
                  >
                </li>
                <div class="space-y-3 hover:scale-110">
              <span
                class="block w-12 h-1 rounded-sm bg-white md:stroke-cyan-700"
              ></span>
              <span
                class="block w-12 h-1 rounded-sm bg-white md:stroke-cyan-700"
              ></span>
              <span
                class="block w-12 h-1 rounded-sm bg-white md:stroke-cyan-700"
              ></span>
            </div>
              </ul>
        </nav>
      `;
  },
};
