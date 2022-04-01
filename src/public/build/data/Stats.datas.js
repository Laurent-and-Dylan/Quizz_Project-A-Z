"use-strict";

export function createStat(token, id_quizz, points) {

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ token, id_quizz, points }),
  };
  return fetch("http://127.0.0.1:3000/api/stat/", init);
}

export async function getAllQuizz() {
  const token = localStorage.getItem("jwt");
  const id_user = localStorage.getItem("user");

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ token }),
  };

  const res = await fetch(
    `http://127.0.0.1:3000/api/stat/user/${id_user}`,
    init
  );
  return await res.json();
}
