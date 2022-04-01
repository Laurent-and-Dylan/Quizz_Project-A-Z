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

export function getAllQuizz() {
  const token = document.cookie.split("=")[1];
  const id_user = sessionStorage.getItem("user");

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ token }),
  };

  return fetch(`http://127.0.0.1:3000/api/stat/user/${id_user}`, init).then(
    (res) => {
      return res.json();
    }
  );
}
