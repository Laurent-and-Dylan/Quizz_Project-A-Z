"use-strict";

import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Headers.controllers.js";
import { BeforeGame } from "./BeforeGame.views.js";

export async function Accueil(username = null) {
  const section = document.querySelector("section");
  await Header.header_2();
  HeaderController();

  section.classList.replace("h-[85vh]", "h-full");
  section.innerHTML = "";
  Container.accueil(username);

  play.addEventListener("click", () => BeforeGame());
}
