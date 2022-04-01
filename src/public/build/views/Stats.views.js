"use-strict";

import * as Display from "../components/stats.js";
import { getAllQuizz } from "../data/Stats.datas.js";

export async function Stats() {
  const { stats } = await getAllQuizz();
  document.querySelector("section").innerHTML = `
  ${Display.user.title()}
  `;

  for (let s in stats) {
    document.querySelector("section").innerHTML += `
    ${Display.user.result(stats[s].Quizz.name, stats[s].points, stats[s].date)}
    `;
  }
}
