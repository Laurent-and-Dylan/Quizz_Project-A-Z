"use-strict";

import { getAllQuizz } from "../data/Stats.datas.js";
import { Stats } from "../components/stats.js";
import { Container } from "../components/container.js";

export async function Statistics() {
  let { results } = await getAllQuizz();
  let container = Container.Base();

  document.querySelector("section").className = "";
  container.className = "w-3/4 min-h-[65vh] py-[4vh] mx-auto";

  container.innerHTML = Stats.title();

  for (let s in results.stats) {
    container.innerHTML += `
      ${Stats.result(
        results.stats[s].Quizz.name,
        results.stats[s].points,
        results.stats[s].date
      )}
    `;
  }
}
