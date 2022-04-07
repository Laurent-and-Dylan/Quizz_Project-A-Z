"use-strict";

import { points } from "./points.js";
export let valid = false;

export async function displayResponses() {
  valid = false;
  const results = JSON.parse(localStorage.getItem("Quizz"));

  //~ Display responses in grid section
  for (let i = 1; i < results[1][left.textContent - 1].length; i++) {
    let index = results[1][left.textContent - 1].indexOf(
      results[1][left.textContent - 1][i]
    );

    game.innerHTML += `
    <article class="responses w-4/5 mx-auto h-[6vh] md:h-[10vh] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg shadow-slate-900/70" >
      <h1 id="${index}" class="responses w-full h-full text-xl text-sky-900 text-center py-2 md:py-8 font-bold rounded-lg" />${
      results[1][left.textContent - 1][i][0]
    }</h1>
    </article>
    `;
  }

  document.querySelectorAll(".responses").forEach((res) => {
    res.addEventListener("click", (e) => {
      for (let f in results[1][left.textContent - 1]) {
        if (results[1][left.textContent - 1][f][0] === e.target.textContent) {
          if (results[1][left.textContent - 1][f][1] && !valid) {
            valid = true;
            points();
          } else if (!valid) {
            res.style.background = "red";
            res.style.color = "white";
            valid = true;
          }
        }
      }
      goodResponse();
    });
  });
}

export function goodResponse() {
  const results = JSON.parse(localStorage.getItem("Quizz"));
  for (let g in results[1][left.textContent - 1]) {
    if (results[1][left.textContent - 1][g][1] === true) {
      const right = results[1][left.textContent - 1].indexOf(
        results[1][left.textContent - 1][g]
      );
      document.getElementById(`${right}`).style.background = "green";
      document.getElementById(`${right}`).style.color = "white";
    }
  }
}
