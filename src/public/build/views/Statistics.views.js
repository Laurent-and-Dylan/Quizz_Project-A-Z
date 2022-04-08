"use-strict";

import { getAllQuizz } from "../data/Stats.datas.js";
import { Stats } from "../components/stats.js";
import { Container } from "../components/container.js";

export async function Statistics() {
  let { results } = await getAllQuizz();
  let section = document.querySelector("section");
  let container = Container.Base();

  section.className = "py-[4vh]";
  container.className =
    "w-3/4 min-h-[57vh] mx-auto";

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
