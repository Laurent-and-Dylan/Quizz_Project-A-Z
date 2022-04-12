"use-strict";

import { Button } from "./Button.js";

export function form(submit, input1, input2, input3 = null) {
  const register = input3
    ? `<input type="email" placeholder="${input3}" minlength="7" maxlength="40" class="w-80 h-8 mt-8 block mx-auto lg:w-1/3 lg:h-10 rounded-md text-xl text-center text-slate-400" id="mail">`
    : "";

  return `
    ${register}
    <input type="text" placeholder="${input1}" class="w-80 h-8 block mx-auto mt-8 lg:w-1/3 lg:h-10 rounded-md text-xl text-center text-slate-400" id="username">
    <input type="password" placeholder="${input2}" class="w-80 h-8 block mx-auto mt-8 lg:w-1/3 lg:h-10 rounded-md text-xl text-center text-slate-400" id="password">
    ${new Button(submit, "submit", "mx-auto mt-8").display}
    `;
}