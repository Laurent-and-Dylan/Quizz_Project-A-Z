"use-strict";

export const Edit = {
  quest(quest) {
    return `
      <article data-article="${quest[1]}" class="block w-full">
        <input type="text" data-quest="${quest[1]}" value="${quest[0]}" class="block w-3/4 h-10 mx-auto rounded-lg">
      </article>
    `;
  },

  
  resps(resps) {
    return `
      <input type="text" data-resp="${resps[2]}" data-bool="${resps[1]}" value="${resps[0]}" class="block w-3/5 mx-auto rounded-lg">
    `;
  },
};
// {/* <label for='quest' class="mx-10 flex justify-between items-center text-white font-medium">Question : ${new Input("text","Quel est la couleur du cheval blanc d'Henri IV ?","quest","w-10/12 my-1 shadow-2xl").display}</label>
      // <label for='correct' class="mx-10 flex justify-between items-center text-white font-medium">Good answer : ${new Input("text","Blanc","correct","w-10/12 my-1 shadow-2xl").display}</label>
      // <label for='bad1' class="mx-10 flex justify-between items-center text-white font-medium">Bad answer : ${new Input("text","Vert","bad1","w-10/12 my-1 shadow-2xl").display}</label>
      // <label for='bad2' class="mx-10 flex justify-between items-center text-white font-medium">Bad answer : ${new Input("text","Rouge","bad2","w-10/12 my-1 shadow-2xl").display}</label>
      // <label for='bad3' class="mx-10 flex justify-between items-center text-white font-medium">Bad answer : ${new Input("text","Gris","bad3","w-10/12 my-1 shadow-2xl").display}</label> */}