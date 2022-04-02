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
