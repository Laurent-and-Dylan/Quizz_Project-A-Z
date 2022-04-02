"use-strict";

export async function Authentifier() {
  const token = localStorage.getItem("jwt");
  const id_user = localStorage.getItem("user");

  if (token && id_user) {
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, id_user }),
    };

    const res = await fetch(
      "http://127.0.0.1:3000/api/user/authentifier",
      init
    );
    return await res.json();
  }
}
