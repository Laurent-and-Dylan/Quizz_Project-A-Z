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
  const container = document.getElementById("container");

  return (container.innerHTML += `
    <article class="flex w-10/12 h-10 mx-6 font-white font-bold">
      <h1 class="w-3/4">${quizz.name}</h1>
      <button data-edit="${quizz.id_quizz}" class="h-8 w-8 mx-4"><img src="./styles/images/edit.svg"></button>
      <button data-delete="${quizz.id_quizz}" class="h-8 w-8"><img src="./styles/images/delete.svg"</button>
    </article>
      `);
}

// <div class="flex mx-auto w-[25vh]"><img class="w-[5vh] h-[5vh] mb-2" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-8" src="./styles/images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-2" src="./styles/images/Star.png" alt=""></div>
