"use-strict";

// import GameController from "../controllers/Game.controller.js";
import { GetRandomQuizz } from "../data/Quizz.datas.js";
import { makeHUD } from "../components/hud.js";
import { Header } from "../components/header.js";
import { GameController } from "../controllers/Game.controller.js";

function displayGame(username) {
  Header.header_3(username);
  makeHUD();
}

export async function Game(username) {
  await GetRandomQuizz();
  displayGame(username);
  GameController();
}
