"use-strict";

import { getUser as GetUser } from "../data/User.datas.js";

export function login(username, password) {
  const user = username.value;
  const pass = password.value;

  if (!user || !pass) {
    return alert("Veuillez remplir tout les champs");
  }

  GetUser(username, password);
}
