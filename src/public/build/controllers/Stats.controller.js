"use-strict";

import { createStat } from "../data/Stats.datas.js";

export function StatController() {
  const token = document.cookie.split("=")[1];
  const score = sessionStorage.getItem("score");
  if (token) {
    createStat(token, 1, score);
  }
}
