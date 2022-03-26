"use-strict";

import { Display } from "./views/Forms.views.js";

login.addEventListener("click", (e) => {
  e.preventDefault();
  Display.loginForm();
});
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  Display.signUpForm();
});
guest.addEventListener("click", (e) => {
  e.preventDefault();
  Display.main();
});
