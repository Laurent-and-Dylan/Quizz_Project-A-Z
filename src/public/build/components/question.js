"use-strict";

import { EndGame } from "../views/EndGame.views.js";
import { updateHUD } from "./hud.js";
import { displayResponses } from "./responses.js";

function removeData() {
  document.querySelectorAll(".responses").forEach((res) => {
    res.remove();
  });
}

export function nextQuestion() {
  if (parseInt(left.textContent) == total.textContent) return EndGame();

  removeData();
  updateHUD();
  displayResponses();
}
