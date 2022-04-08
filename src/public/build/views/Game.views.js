"use-strict";

// import GameController from "../controllers/Game.controller.js";
import { GetRandomQuizz } from "../data/Quizz.datas.js";
import { makeHUD } from "../components/hud.js";
import { Header } from "../components/header.js";
import { HeaderController } from "../controllers/Header.controller.js";
import { EventsBurger } from "../components/burger.js";
import { displayResponses } from "../components/responses.js";

async function displayGame(username) {
  await Header.game(username);
  EventsBurger();
  HeaderController();
  makeHUD();
}

export async function Game(username, valid) {
  if (valid) await GetRandomQuizz();
  await displayGame(username);
  displayResponses();
}
