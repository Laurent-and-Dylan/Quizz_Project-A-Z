"use-strict";

export function points() {
  let score = localStorage.getItem("score");
  let data = Math.floor(time.textContent * 6.9);

  if (score === null) localStorage.setItem("score", data);
  else {
    score = eval(score + "+" + data);
    localStorage.setItem("score", score);
  }
}
