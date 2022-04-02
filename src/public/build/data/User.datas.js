"use-strict";

export async function getUser(pseudo, password) {
  const init = {
    method: "POST",
    body: JSON.stringify({ pseudo, password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const res = await fetch("http://127.0.0.1:3000/api/user/login/", init);
  return await res.json();
}

export async function register(email, username, password) {
  const init = {
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

  const res = await fetch("http://127.0.0.1:3000/api/user/register/", init);
  return await res.json();
}
