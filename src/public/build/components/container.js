"use-strict";

const section = document.querySelector("section");

export const Container = {
  Base() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
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
      ? `<input type="email" placeholder="${input3}" minlength="7" maxlength="40" class="w-80 h-8 mt-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="mail">`
      : "";

    section.classList.replace("h-[85vh]", "h-[55vh]");
    section.innerHTML = `
      ${register}
      <input type="text" placeholder="${input1}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="username">
      <input type="password" placeholder="${input2}" class="w-80 h-8 block mx-auto rounded-md text-xl text-center text-slate-400" id="password">
      <input type="submit" value="${submit}" class="w-48 h-10 my-9 block mx-auto rounded-md text-xl text-center text-white bg-gradient-to-r from-yellow-300 to-amber-500 cursor-pointer" id="submit">
    `;
  },
  accueil(username = null) {
    section.classList.replace("h-[85vh]", "h-[65vh]");

    section.innerHTML = `
    <h1 class="text-2xl lg:text-3xl font-bold text-center text-pink-600"">Welcome and Enjoy ${
      username ? username : ""
    }</h1>
    <p class="text-2xl lg:text-4xl font-bold text-center text-orange-500">Play now with a random Quizz !</p>
    <button class="block w-2/4 md:w-1/3 h-10 mx-auto   rounded-xl font-medium  md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105" id="play">Play</button>
  `;
  },

  categories() {
    const container = this.Base();

    container.innerHTML = `
      <h1 class="text-2xl font-extrabold text-center text-orange-500">CHOOSE A CATEGORY THEN SELECT QUIZZ</h1>
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
    const container = this.Base();

    container.classList.add("flex", "justify-end", "flex-wrap");
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

  profile() {
    const container = this.Base();

    container.classList.add("min-h-[65vh]", "py-8");

    container.innerHTML = `
    <article class="w-11/12 mx-auto pt-4 rounded-3xl bg-sky-600 shadow-xl shadow-slate-900/70">
      <h1 class="mb-4 text-center font-semibold font-xl">Informations générale</h1>
        <article class="pl-8 flex items-center hover:bg-sky-700 cursor-pointer">
          <h1 class="w-1/4 font-bold ">Photo</h1>
          <p class="w-2/3">Ajoutez une photo pour personalisez votre compte</p>
          <figure>
            <img src="./styles/images/avatarH.png " alt"" class="w-14 h-14">
          </figure>
        </article>
        <article class="pl-8 flex items-center h-14 hover:bg-sky-700 cursor-pointer">
          <h1 class="w-1/4 font-bold">Pseudo</h1>
          <p class="w-2/3">Jean Heaud</p>
        </article>
        <article class="pl-8 flex items-center h-14 hover:bg-sky-700 cursor-pointer rounded-b-3xl">
          <h1 class="w-1/4 font-bold">Password</h1>
          <p class="w-2/3">*************</p>
        </article>
    </article>
    <article class="w-11/12 mx-auto my-12 flex rounded-3xl bg-sky-600 shadow-xl shadow-slate-900/70">
      <button id='create' class="w-1/3 mx-auto my-8 py-8 text-3xl font-bold text-center text-rose-600 bg-white rounded-3xl border-4 border-rose-600 hover:scale-105 shadow-xl shadow-slate-900/70">Create a quizz</button>
      <button id='quizz' class="w-1/3 mx-auto my-8 py-8 text-3xl font-bold text-center text-white bg-amber-500 rounded-3xl border-4 hover:scale-105 shadow-xl shadow-slate-900/70">View your quizzes</button>
    </article>
    `;
  },

  editQuizz(quizz) {
    const container = this.Base();

    container.classList.add("min-h-[65vh]", "py-8");
    container.innerHTML = `<input type="text" data-quizz="${quizz.id_quizz}" value="${quizz.name}">`;

    return this.SubContainer();
  },
};
