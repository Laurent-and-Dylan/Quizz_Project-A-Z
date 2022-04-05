"use-strict";

import { Remover } from "./utils/Remover.js";
import { LoginForm, RegisterForm } from "./views/Forms.views.js";
import { Accueil } from "./views/Accueil.views.js";
import { reconnect } from "./utils/Reconnect.js";

reconnect();

login.addEventListener("click", (e) => {
  LoginForm();
});
signUp.addEventListener("click", (e) => {
  RegisterForm();
});
guest.addEventListener("click", (e) => {
  Remover.main();
  Accueil();
});
