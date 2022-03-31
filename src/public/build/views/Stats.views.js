"use-strict";

import * as Display from "../components/stats.js";

export function Stats() {
  document.querySelector("section").innerHTML = `
  ${Display.user.title()}
  ${Display.user.result()}
  `;
}
