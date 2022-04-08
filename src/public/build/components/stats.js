"use-strict";

export const Stats = {
  title() {
    return `
        <article class="pt-5 pb-10 mb-4 flex justify-around text-orange font-bold text-4xl text-center uppercase rounded-2xl">
            <h2 class="2xl:w-1/6 md:w-1/2">Place</h2>
            <h2 class="2xl:w-2/6 md:w-1/2">Quizz</h2>
            <h2 class="2xl:w-1/6 md:w-1/2">Points</h2>
            <h2 class="2xl:w-1/6 md:w-1/2">Date</h2>
        </article>`;
  },
  result(name, points, date) {
    return `<article class="flex justify-around text-white text-center p-3">
      <h2 class="2xl:w-1/6 md:w-1/2 text-xl font-bold">1</h2>
      <h2 class="2xl:w-2/6 md:w-1/2 text-xl font-bold">${name}</h2>
      <h3 class="2xl:w-1/6 md:w-1/2 text-2xl font-bold">${points}</h3>
      <h3 class="2xl:w-1/6 md:w-1/2 text-xl font-bold">${date}</h3>
    </article>`;
  },
};
