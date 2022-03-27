"use-strict";

import {
  getUser as GetUser,
  register as Register,
} from "../data/User.datas.js";

export async function login(param1, param2) {
  const user = param1.value;
  const pass = param2.value;

  if (!user || !pass) {
    return alert("Veuillez remplir tout les champs");
  }
  const { connexion } = await GetUser(user, pass);
  console.log(connexion);
}

export async function register(param1, param2, param3) {
  const email = param1.value.match(/^[\w]{3,25}[@][a-z]{2,8}[.][a-z]{2,4}$/);
  const username = param2.value.match(/^[\w]{5,40}$/);
  const password = param3.value.match(/^[\S]{8,150}$/);

  if (email && username && password) {
    const valid = await Register(email[0], username[0], password[0]);
    console.log(valid);
  } else {
    console.log("error");
  }
}
