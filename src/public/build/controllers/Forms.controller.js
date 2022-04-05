"use-strict";

import {
  getUser as GetUser,
  register as Register,
} from "../data/User.datas.js";

import { error } from "../components/error.js";
import { Accueil } from "../views/Accueil.views.js";
import { LoginForm, RegisterForm } from "../views/Forms.views.js";

function FormsControllers() {
  const h2 = document.querySelector(`header > h2`);

  h2.addEventListener("click", () => {
    if (h2.textContent === "Register") {
      RegisterForm();
    } else {
      LoginForm();
    }
  });
}

async function LoginControllers(param1, param2) {
  const user = param1.value;
  const pass = param2.value;

  if (!user || !pass) return alert("Veuillez remplir tout les champs");

  const { connexion, token, username, id_user } = await GetUser(user, pass);

  if (!connexion) return error("Wrong Informations !", "section", username);

  localStorage.setItem("jwt", token);
  localStorage.setItem("user", id_user);

  Accueil(username);
}

async function RegisterControllers(param1, param2, param3) {
  const email = param1.value.match(/^[\w]{3,25}[@][a-z]{2,8}[.][a-z]{2,4}$/);
  const username = param2.value.match(/^[\w]{5,40}$/);
  const password = param3.value.match(/^[\S]{8,150}$/);

  if (email && username && password) {
    const { register, token, id_user } = await Register(
      email[0],
      username[0],
      password[0]
    );

    console.log(id_user);
    if (!register) error("Informations already exist !", "section", mail);
    else {
      localStorage.setItem("jwt", token);
      localStorage.setItem("user", id_user);
      Accueil(username);
    }
  } else {
    error("Wrong Informations !", "section", mail);
  }
}

export { FormsControllers, LoginControllers, RegisterControllers };
