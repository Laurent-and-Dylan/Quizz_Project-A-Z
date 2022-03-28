"use-strict";

import * as Remover from "./utils/Remover.js";
import { Display } from "./views/Forms.views.js";

login.addEventListener("click", (e) => {
  Remover.main();
  Display.loginForm();
});
signUp.addEventListener("click", (e) => {
  Remover.main();
  Display.signUpForm();
});
guest.addEventListener("click", (e) => {
  Remover.main();
  Display.main();
});
