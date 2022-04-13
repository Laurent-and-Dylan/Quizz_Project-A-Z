"use-strict";

export const recap = {
  quest(quest, index) {
    return `
      <article class="w-11/12 mx-auto my-5 flex flex-wrap justify-center items-center text-xl text-black">
        <label class="w-1/4 text-white text-xl">Question : </label>
        <input type='text' data-quest='${index}' value="${quest}" class="w-3/4 h-8 mt-2 pl-2 bg-white rounded">
      </article>
    `;
  },
  resps(resps, index, label) {
    let art = document.querySelector("#subContainer > article:last-of-type");

    art.innerHTML += `
      <label class="w-1/4 text-white text-xl">${label}</label>
      <input type='text' value="${resps}" data-resp="${index}" class="w-3/4 h-8 mt-2 pl-2 bg-white rounded">
    `;
  },
};
