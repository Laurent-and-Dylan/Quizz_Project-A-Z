"use-strict";

export const recap = {
  quest(quest, index) {
    return `
      <article class="w-11/12 mx-auto mb-5 flex flex-wrap justify-center font-bold text-center">
        <input type='text' data-quest='${index}' value="${quest}" class="w-10/12 text-3xl text-white bg-white/40 shadow-md shadow-white opacity-80 rounded-l-lg">
        <div data-pen="${index}" class="h-14 w-14 border-pink-700 bg-white/80 rounded-r-lg border-4" >
          <img class="m-2 bg-auto" src="./styles/images/pen.png" alt="">
        </div>
        <div class="w-10/12 mr-14 mt-8">
        </div>
      </article>
    `;
  },
  resps(resps, index) {
    const div = document.querySelector(
      "#subContainer > article:last-of-type > div:last-of-type"
    );

    div.innerHTML += `
      <input type='text' value="${resps}" data-resp="${index}" class="hidden w-full mb-5 text-2xl text-white bg-orange-500/50 shadow-md shadow-white opacity-80 rounded">
    `;
  },
};
