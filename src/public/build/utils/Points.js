"use-strict";

export function points() {
  let score = sessionStorage.getItem("score");
  let data = Math.floor(time.textContent * 6.9);

  if (score === null) sessionStorage.setItem("score", data);
  else {
    score = eval(score + "+" + data);
    sessionStorage.setItem("score", score);
  }
}
