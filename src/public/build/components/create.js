"use-strict";

import { Button } from "./Button.js";
import { Input } from "./Input.js";

export const create = {
  Base() {
    return `
      <label for='quest' class="mx-10 flex justify-between items-center text-white font-medium">Question : ${new Input("text","Quel est la couleur du cheval blanc d'Henri IV ?","quest","w-10/12 my-1 shadow-2xl").display}</label>
      <label for='correct' class="mx-10 flex justify-between items-center text-white font-medium">Good answer : ${new Input("text","Blanc","correct","w-10/12 my-1 shadow-2xl").display}</label>
      <label for='bad1' class="mx-10 flex justify-between items-center text-white font-medium">Bad answer : ${new Input("text","Vert","bad1","w-10/12 my-1 shadow-2xl").display}</label>
      <label for='bad2' class="mx-10 flex justify-between items-center text-white font-medium">Bad answer : ${new Input("text","Rouge","bad2","w-10/12 my-1 shadow-2xl").display}</label>
      <label for='bad3' class="mx-10 flex justify-between items-center text-white font-medium">Bad answer : ${new Input("text","Gris","bad3","w-10/12 my-1 shadow-2xl").display}</label>
      `;
  },
  FinishOrAdd() {
    return `
      ${new Button("Finish","finish","col-start-1 col-end-3").display}
      ${new Button("+1","add","col-start-4 col-end-6").display}
      `;
  },
};
