"use-strict";

import { points } from "./points.js";
export let valid = false;

export async function displayResponses() {
  valid = false;
  const results = JSON.parse(localStorage.getItem("Quizz"));

  //~ Display responses in grid section
  for (let i = 1; i < results[left.textContent - 1].length; i++) {
    let index = results[left.textContent - 1].indexOf(
      results[left.textContent - 1][i]
    );

    game.innerHTML += `
    <article class="responses h-[8vh] md:h-[15vh] my-2 flex items-center justify-center bg-white rounded-lg" >
      <h1 class="responses w-full h-full text-xl text-pink-500 text-center py-2 md:py-8 font-bold rounded-lg" id="${index}"/>${
      results[left.textContent - 1][i][0]
    }</h1>
    </article>
    `;
  }

  document.querySelectorAll(".responses").forEach((res) => {
    res.addEventListener("click", (e) => {
      for (let f in results[left.textContent - 1]) {
        if (results[left.textContent - 1][f][0] === e.target.textContent) {
          if (results[left.textContent - 1][f][1] && !valid) {
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
  for (let g in results[left.textContent - 1]) {
    if (results[left.textContent - 1][g][1] === true) {
      const right = results[left.textContent - 1].indexOf(
        results[left.textContent - 1][g]
      );
      document.getElementById(`${right}`).style.background = "green";
      document.getElementById(`${right}`).style.color = "white";
    }
  }
}
