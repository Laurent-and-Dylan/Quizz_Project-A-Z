"use-strict";

import { EventsBurger } from "../components/burger.js";
import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Header.controller.js";
import { BeforeGame } from "./BeforeGame.views.js";

export async function Accueil(username = null) {
  await Header.main();
  Container.accueil(username);
  
  EventsBurger()
  HeaderController();

  play.addEventListener("click", () => BeforeGame());
}
