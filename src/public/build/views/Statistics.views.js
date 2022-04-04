"use-strict";

import { getAllQuizz } from "../data/Stats.datas.js";
import { Container } from "../components/container.js";
import { Stats } from "../components/stats.js";

export async function Statistics() {
  const { results } = await getAllQuizz();
  const section = document.querySelector("section");

  section.classList.remove(
    "relative",
    "h-full",
    "flex",
    "flex-col",
    "justify-evenly",
    "min-h-full",
    "my-14"
  );
  section.classList.add("min-h-full");
  section.innerHTML = "";

  const container = Container.Base();

  container.classList.add("min-h-[65vh]");
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
