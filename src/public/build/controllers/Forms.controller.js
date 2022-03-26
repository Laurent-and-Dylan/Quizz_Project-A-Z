"use-strict";

import { getUser as GetUser } from "../data/User.datas.js";

export async function login(username, password) {
  const user = username.value;
  const pass = password.value;

  if (!user || !pass) {
    return alert("Veuillez remplir tout les champs");
  }
  const { connexion } = await GetUser(user, pass);
  console.log(connexion);
}
