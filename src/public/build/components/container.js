"use-strict";

import { Button } from "./Button.js";
// import { Input } from "./Input.js";

const section = document.querySelector("section");

export const Container = {
  Base() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    section.innerHTML = "";
    section.appendChild(container);

    return container;
  },

  SubContainer() {
    const container = document.getElementById("container");
    const subContainer = document.createElement("div");
    subContainer.setAttribute("id", "subContainer");
    container.appendChild(subContainer);

    return subContainer;
  },

  form(submit, input1, input2, input3 = null) {
    const register = input3
      ? `<input type="email" placeholder="${input3}" minlength="7" maxlength="40" class="w-80 h-8 mt-8 block mx-auto lg:w-1/3 lg:h-10 rounded-md text-xl text-center text-slate-400" id="mail">`
      : "";

    section.classList.replace("h-[85vh]", "h-[65vh]");
    section.classList.replace("justify-evenly", "justify-center");
    section.innerHTML = `
      ${register}
      <input type="text" placeholder="${input1}" class="w-80 h-8 block mx-auto mt-8 lg:w-1/3 lg:h-10 rounded-md text-xl text-center text-slate-400" id="username">
      <input type="password" placeholder="${input2}" class="w-80 h-8 block mx-auto mt-8 lg:w-1/3 lg:h-10 rounded-md text-xl text-center text-slate-400" id="password">
      ${new Button(submit, "submit", "mx-auto mt-8").display}
      
      `;
  },

  accueil(username = null) {
    section.className =
      "h-[65vh] flex flex-col justify-evenly font-dosis uppercase font-extrabold";
    section.innerHTML = `
    <h1 class="text-2xl lg:text-4xl text-center text-jaune">Welcome and Enjoy ${
      username ? username : ""
    } !</h1>
    <p class="text-2xl lg:text-6xl text-center text-orange">Play now a random Quizz !</p>
    ${
      new Button(
        "Play",
        "play",
        "block w-2/4 md:w-1/3 h-10 mx-auto rounded-xl md:h-11 lg:h-14 lg:w-80 font-bold uppercase"
      ).display
    }
    `;
  },

  categories() {
    const container = this.Base();

    container.innerHTML = `
      <h1 class="text-4xl text-center text-jaune uppercase">Choose your categories :</h1>
    `;

    const subContainer = this.SubContainer();

    subContainer.className =
      "w-4/5 grid grid-cols-3 gap-8 my-10 mx-auto p-10 justify-items-center";
  },

  quizz() {
    const container = this.Base();

    container.innerHTML = `
      <h1 class="text-2xl font-extrabold text-center text-orange-500">SELECT QUIZZ</h1>
    `;

    const subContainer = this.SubContainer();

    subContainer.classList.add(
      "grid",
      "grid-cols-3",
      "gap-8",
      "my-10",
      "justify-items-center"
    );
  },

  beforeGame() {
    section.classList.add("text-center");
    section.innerHTML = `
      <span class="text-8xl text-white font-bold" id="timer">1</span>
      <h1 class="text-4xl text-pink-700 font-bold">Let's Play !</h1>
    `;
  },

  createQuizz() {
    // const container = this.Base();

    // container.classList.add("flex", "justify-end", "flex-wrap");
    container.innerHTML = `
      <h1 class="w-1/3 text-center text-2xl text-white font-extrabold"><span id="left">1</span>/<span id="total">2</span></h1>
      <input id="title" class="w-1/3 text-center text-2xl text-white font-extrabold bg-transparent" placeholder="Name of Quizz">
    `;
    const subContainer = this.SubContainer();

    subContainer.classList.add(
      "w-screen",
      "grid",
      "grid-cols-4",
      "gap-4",
      "mx-20",
      "my-8"
    );
  },

  // profile() {
  //   const container = this.Base();

  //   container.className = "grid grid-cols-4 grid-rows-3";
  //   container.innerHTML = `${new Input("text", "Pseudo", "pseudo").display}`;
  //   const subContainer = this.SubContainer();
  //   subContainer.innerHTML `
    
  //   `
  //   container.innerHTML += `${
  //     new Input("password", "Password", "pass").display
  //   }`;

    // container.innerHTML = `
    // <article class="w-11/12 mx-auto pt-4 rounded-3xl bg-sky-600 shadow-xl shadow-slate-900/70">
    //   <h1 class="mb-4 text-center font-semibold font-xl">Informations générale</h1>
    //     <article class="pl-8 flex items-center hover:bg-sky-700 cursor-pointer">
    //       <h1 class="w-1/4 font-bold ">Photo</h1>
    //       <p class="w-2/3">Ajoutez une photo pour personalisez votre compte</p>
    //       <figure>
    //         <img src="./styles/images/avatarH.png " alt"" class="w-14 h-14">
    //       </figure>
    //     </article>
    //     <article class="pl-8 flex items-center h-14 hover:bg-sky-700 cursor-pointer">
    //       <h1 class="w-1/4 font-bold">Pseudo</h1>
    //       <p class="w-2/3">Jean Heaud</p>
    //     </article>
    //     <article class="pl-8 flex items-center h-14 hover:bg-sky-700 cursor-pointer rounded-b-3xl">
    //       <h1 class="w-1/4 font-bold">Password</h1>
    //       <p class="w-2/3">*************</p>
    //     </article>
    // </article>
    // <article class="w-11/12 mx-auto my-12 flex rounded-3xl bg-sky-600 shadow-xl shadow-slate-900/70">
    //   <button id='create' class="w-1/3 mx-auto my-8 py-8 text-3xl font-bold text-center text-rose-600 bg-white rounded-3xl border-4 border-rose-600 hover:scale-105 shadow-xl shadow-slate-900/70">Create a quizz</button>
    //   <button id='quizz' class="w-1/3 mx-auto my-8 py-8 text-3xl font-bold text-center text-white bg-amber-500 rounded-3xl border-4 hover:scale-105 shadow-xl shadow-slate-900/70">View your quizzes</button>
    // </article>
    // `;
  // },

  editQuizz(quizz) {
    const container = this.Base();
    // class="h-[65vh] flex flex-col justify-evenly text-center"
    container.classList.add("min-h-[65vh]", "py-8");
    container.innerHTML = `<input type="text" data-quizz="${quizz.id_quizz}" value="${quizz.name}">`;

    return this.SubContainer();
  },

  game() {
    const container = this.Base();
    container.className =
      "grid grid-cols-3 grid-row-6 w-11/12 p-4 bg-white/50 mx-auto rounded-2xl text-xl md:flex md:flex-wrap md:h-[50vh] md:text-2xl md:text-center";
    container.innerHTML = `
        <h2 class="h-min md:w-[10%] font-bold text-sky-900 text-2xl lg:text-3xl">
          <span id="time">20</span> s
        </h2>
        <h2 class="row-start-2 col-start-1 col-end-4 px-4 py-2 md:w-[80%] text-sky-900 text-center" id="question">Question</h2>
        <h2 class="row-start-1 col-start-3 w-full h-min md:w-[10%] font-bold text-sky-900 text-2xl lg:text-3xl" id="rest"></h2>
    `;

    const subContainer = this.SubContainer();
    subContainer.className =
      "row-start-3 row-end-6 col-start-1 col-end-4 grid grid-rows-4 gap-4 md:place-self-center md:grid-rows-2 md:grid-cols-2 md:w-full";

    return subContainer, container;
  },
};
