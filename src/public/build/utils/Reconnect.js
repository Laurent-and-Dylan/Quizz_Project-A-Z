"use-strict";

import { Authentifier } from "../data/Authentifier.js";
import { Accueil } from "../views/Accueil.views.js";
import { Remover } from "./Remover.js";

export async function reconnect() {
  const user_id = localStorage.getItem("user");
  const token = localStorage.getItem("jwt");

  if (token && user_id) {
    const { connected, username } = await Authentifier(token, user_id);

    if (connected) {
      Remover.main();
      Accueil(username);
    }
  } else {
    localStorage.clear();
  }
}
