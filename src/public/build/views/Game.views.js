"use-strict";

import { GetRandomQuizz } from "../data/Quizz.datas.js";
import { HUDController } from "../components/hud.js";
import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Header.controller.js";
import { EventsBurger } from "../components/burger.js";
import { displayResponses } from "../components/responses.js";
import { Container } from "../components/container.js";

async function displayGame(username) {
  //~ Display header and his controllers
  await Header.game(username);
  EventsBurger();
  HeaderController();

  let container = Container.Base();
  container.className =
    "grid grid-cols-3 grid-row-6 w-11/12 p-4 mx-auto rounded-2xl text-xl text-orange md:flex md:flex-wrap md:h-[50vh] md:text-2xl md:text-center";
  container.innerHTML = `
        <h2 class="h-min md:w-[10%] font-bold text-2xl lg:text-3xl">
          <span id="time">20</span> s
        </h2>
        <h2 class="row-start-2 col-start-1 col-end-4 px-4 py-2 md:w-[80%] text-center text-white" id="question">Question</h2>
        <h2 class="row-start-1 col-start-3 w-full h-min md:w-[10%] font-bold text-2xl lg:text-3xl" id="rest"></h2>
    `;

  let subContainer = Container.SubContainer();
  subContainer.className =
    "row-start-3 row-end-6 col-start-1 col-end-4 grid grid-rows-4 gap-4 md:place-self-center md:grid-rows-2 md:grid-cols-2 md:w-full";

  HUDController();
}

export async function Game(username, valid) {
  if (valid) await GetRandomQuizz();
  await displayGame(username);
  displayResponses();
}
