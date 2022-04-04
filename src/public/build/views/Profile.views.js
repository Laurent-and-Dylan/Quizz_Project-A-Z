"use-strict";

import { Container } from "../components/container.js";
import { ProfileController } from "../controllers/Profile.controller.js";

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
  const section = document.querySelector("section");
  // headerProfile();

  section.innerHTML = "";
  Container.profile();
  ProfileController();
}
