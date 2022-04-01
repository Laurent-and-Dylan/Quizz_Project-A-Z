"use-strict";

import { createStat } from "../data/Stats.datas.js";

export function StatController() {
  const token = localStorage.getItem("jwt");
  const score = localStorage.getItem("score");
  if (token) {
    createStat(token, 1, score);
  }
}
