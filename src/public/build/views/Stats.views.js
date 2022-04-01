"use-strict";

import * as Display from "../components/stats.js";
import { getAllQuizz } from "../data/Stats.datas.js";

export async function Stats() {
  const section = document.querySelector("section");
  const { stats } = await getAllQuizz();

  section.classList.remove("h-[65vh]");
  section.classList.add("min-h-full", "my-14");
  section.innerHTML = `
    ${Display.user.title()}
  `;

  for (let s in stats) {
    section.innerHTML += `
      ${Display.user.result(
        stats[s].Quizz.name,
        stats[s].points,
        stats[s].date
      )}
    `;
  }
}
