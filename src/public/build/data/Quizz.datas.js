import { Randomize_Array } from "../utils/Randomize_Array.js";

export async function GetQuizz() {
  const { results } = await fetch(
    "http://127.0.0.1:3000/api/quizz/random"
  ).then((res) => {
    return res.json();
  });

  if (results) {
    for (let i in results) {
      results[i] = await Randomize_Array(results[i]);
    }
    localStorage.setItem("Quizz", JSON.stringify(results));
    console.log(results);
  }
  // ! Ne pas oublier de gerer l'erreur
  else return false;
}
