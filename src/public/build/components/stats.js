"use-strict";

export const Stats = {
  title() {
    return `
        <article class="mb-10 flex justify-around text-orange-500 text-4xl text-center font-permanent">
            <h2 class="2xl:w-2/6 md:w-1/2 text-left">Quizz</h2>
            <h2 class="2xl:w-1/6 md:w-1/2">Points</h2>
            <h2 class="2xl:w-1/6 md:w-1/2">Date</h2>
        </article>`;
  },
  result(name, points, date) {
    return `<article class="flex justify-around text-black text-center my-1">
      <h2 class="2xl:w-2/6 md:w-1/2 text-xl font-bold text-left">${name}</h2>
      <h3 class="2xl:w-1/6 md:w-1/2 text-2xl font-bold">${points}</h3>
      <h3 class="2xl:w-1/6 md:w-1/2 text-xl font-bold">${date}</h3>
    </article>`;
  },
};
