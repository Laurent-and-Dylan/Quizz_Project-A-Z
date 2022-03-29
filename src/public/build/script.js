"use-strict";

import { Remover } from "./utils/Remover.js";
import { Display as Forms } from "./views/Forms.views.js";
import { accueil as Accueil } from "./views/Accueil.views.js";

login.addEventListener("click", (e) => {
  Remover.main();
  Forms.loginForm();
});
signUp.addEventListener("click", (e) => {
  Remover.main();
  Forms.signUpForm();
});
guest.addEventListener("click", (e) => {
  Remover.main();
  Accueil();
});
