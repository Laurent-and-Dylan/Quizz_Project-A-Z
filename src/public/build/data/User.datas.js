"use-strict";

export async function getUser(pseudo, password) {
  let init = {
    method: "POST",
    body: JSON.stringify({ pseudo, password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let res = await fetch("http://127.0.0.1:3000/api/user/login/", init);
  return res.json();
}

export async function register(email, username, password) {
  let init = {
    method: "POST",
    body: JSON.stringify({
      email,
      username,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    },
  };

  let res = await fetch("http://127.0.0.1:3000/api/user/register/", init);
  return await res.json();
}
