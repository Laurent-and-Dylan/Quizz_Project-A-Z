"use-strict";

export function EndCreate() {
  document.querySelector("#container").innerHTML = `
  ${localStorage.getItem("NewQuizz")}
  `;
}
