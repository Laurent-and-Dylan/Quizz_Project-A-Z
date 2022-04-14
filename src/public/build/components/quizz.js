"use-strict";

export function quizz(quizz) {
  return `
  <h1 data-quizz='${quizz.id_quizz}' class="w-[50vh] h-[10vh] text-center text-slate-400 font-semibold pt-6 bg-white rounded-xl shadow-xl hover:scale-105 cursor-pointer">${quizz.name}</h1>
  `;
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
