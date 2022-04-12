"use-strict";

export function quizz(quizz) {
  const subContainer = document.getElementById("subContainer");

  return (subContainer.innerHTML += `
    <article data-quizz='${quizz.id_quizz}' class="text-center w-[50vh] h-[35vh] bg-cover bg-center hover:scale-105 shadow-xl shadow-yellow-300 md:shadow-2xl md:shadow-yellow-300 cursor-pointer" style="background-image: url(${quizz.image})" id="${quizz.id_quizz}">
      <h1>${quizz.name}</h1>
      <div class="flex mx-auto w-[25vh]"><img class="w-[5vh] h-[5vh] mb-2" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-8" src="./styles/images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-2" src="./styles/images/Star.png" alt=""></div>
    </article>
  `);
}

export function quizzEdit(quizz) {
  return `
    <article class="flex items-center justify-between h-10 mx-auto my-2 font-bold text-center">
      <h1 class="w-1/3 text-white">${quizz.name}</h1>
      <div id="rate" class="w-1/3"><img src="./styles/images/star.png" class="h-6 w-6 mx-auto"></div>
      <div class="w-1/3 flex items-center justify-center">
        <button data-edit="${quizz.id_quizz}" class="h-8 w-8 mx-4"><img src="./styles/images/edit.svg"></button>
        <button data-remove="${quizz.id_quizz}" class="h-8 w-8"><img src="./styles/images/delete.svg"</button>
      </div>
    </article>
      `;
}
