"use-strict";

export const Edit = {
  quest(quest) {
    return `
      <article data-article="${quest[1]}">
        <input type="text" data-quest="${quest[1]}" value="${quest[0]}">
      </article>
    `;
  },

  resps(resps) {
    return `
      <input type="text" data-resp="${resps[2]}" data-bool="${resps[1]}" value="${resps[0]}">
    `;
  },
};
