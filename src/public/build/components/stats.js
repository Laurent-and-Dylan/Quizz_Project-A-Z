"use-strict";

export const user = {
  title() {
    return `
        <article class="mb-10 flex justify-around text-orange-500 text-4xl font-bold text-center">
            <h2 class="2xl:w-1/6 md:w-1/2">Name of quizz</h2>
            <h2 class="2xl:w-1/6 md:w-1/2">Points</h2>
            <h2 class="2xl:w-1/6 md:w-1/2">Date</h2>
        </article>`;
  },
  result(name, points, date) {
    return `<article class="flex justify-around text-white text-center">
      <h2 class="2xl:w-1/6 md:w-1/2 text-3xl font-bold">${name}</h2>
      <h3 class="2xl:w-1/6 md:w-1/2 text-2xl font-bold">${points}</h3>
      <h3 class="2xl:w-1/6 md:w-1/2 text-2xl font-bold">${date}</h3>
    </article>`;
  },
};
