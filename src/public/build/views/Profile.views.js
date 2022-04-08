"use-strict";

import { Container } from "../components/container.js";
import { ProfileController } from "../controllers/Profile.controller.js";
import { Input } from "../components/Input.js";

function headerProfile() {
  const photo = document.createElement("img");
  photo.src = "images/logo.png";
  photo.classList.add("w-40", "h-40");
  document.querySelector("nav > ul > li").remove();
  document.querySelector("nav > ul > li").remove();
  document.querySelector("nav > ul").classList.remove("md:w-[40vw]");
  document.querySelector("header").insertBefore(photo, navbar);

  document.querySelector("section").innerHTML = `
    <h1>Username</h1>
  `;
}

export function Profile(username) {
  const container = Container.Base();
  container.className = "grid grid-cols-4 grid-rows-3 w-1/2 mx-auto";
  container.innerHTML = `<h1 class="col-start-1 col-end-5 text-2xl lg:text-4xl text-center text-jaune">Account Informations</h1>`;

  const subContainer = Container.SubContainer();
  subContainer.className = "col-start-1 col-end-4";
  subContainer.innerHTML = `
    ${new Input("text", "Pseudo", "pseudo", "w-full").display}
    ${new Input("password", "Password", "pass", "w-full").display}
    ${new Input("file", "Choose image", "img", "w-full").display}`;

  container.innerHTML += `<img src="./styles/images/avatarH.png">`;

  ProfileController();
}
