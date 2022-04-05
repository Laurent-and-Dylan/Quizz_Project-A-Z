import { Randomize_Array } from "../utils/Randomize_Array.js";

export async function GetRandomQuizz() {
  const { results } = await fetch(
    "http://127.0.0.1:3000/api/quizz/random"
  ).then((res) => {
    return res.json();
  });

  if (results) {
    for (let i in results) {
      results[1][i] = await Randomize_Array(results[1][i]);
    }
    localStorage.setItem("Quizz", JSON.stringify(results));
  }
  // ! Ne pas oublier de gerer l'erreur
  else return false;
}

export async function GetAllQuizz(category) {
  const { results } = await fetch(
    `http://127.0.0.1:3000/api/quizz/category/${category}`
  ).then((res) => {
    return res.json();
  });

  if (results) return results;
  else return false;
}

export async function GetQuizz(quizz) {
  const { results } = await fetch(
    `http://127.0.0.1:3000/api/quizz/${quizz}`
  ).then((res) => {
    return res.json();
  });

  if (results) {
    for (let i in results[1]) {
      results[1][i] = await Randomize_Array(results[1][i]);
    }
    localStorage.setItem("Quizz", JSON.stringify(results));
  } else return false;
}

export async function CreateQuizz() {
  const { name, quests, resps, id_category } = JSON.parse(
    localStorage.getItem("NewQuizz")
  );
  const token = localStorage.getItem("jwt");

  const init = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    },
    body: JSON.stringify({ name, quests, resps, token, id_category }),
  };

  const res = await fetch("http://127.0.0.1:3000/api/quizz/create", init);
  return res.json();
}

export async function GetQuizzUser() {
  const id_user = localStorage.getItem("user");
  const token = localStorage.getItem("jwt");

  const init = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    },
    body: JSON.stringify({ id_user, token }),
  };

  const res = await fetch(`http://127.0.0.1:3000/api/quizz/user/`, init);
  return res.json();
}

export async function RemoveQuizz(id_quizz) {
  const id_user = localStorage.getItem("user");
  const token = localStorage.getItem("jwt");

  const init = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    },
    body: JSON.stringify({ id_user, token }),
  };

  const res = await fetch(
    `http://127.0.0.1:3000/api/quizz/delete/${id_quizz}`,
    init
  );
  return res.json();
}

export async function GetQuizzForEdit(id_quizz) {
  const id_user = localStorage.getItem("user");
  const token = localStorage.getItem("jwt");

  const init = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    },
    body: JSON.stringify({ id_user, token, id_quizz }),
  };
  const res = await fetch(`http://127.0.0.1:3000/api/quizz/getEdit/`, init);
  return res.json();
}

export async function EditQuizz(results) {
  const id_user = localStorage.getItem("user");
  const token = localStorage.getItem("jwt");

  const init = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    },
    body: JSON.stringify({ id_user, token, results }),
  };
  const res = await fetch(
    `http://127.0.0.1:3000/api/quizz/edit/${results.id_quizz}`,
    init
  );
  return res.json();
}
