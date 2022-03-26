export function header(h1, h2) {
  document
    .querySelector("header")
    .classList.add("flex", "justify-between", "px-4", "h-[30vh]");
  document.querySelector("header").innerHTML = `
      <img class="w-44" src="./styles/images/Logo.png" alt="" />
      <h1 class="w-max absolute left-2/4 top-44 -translate-x-2/4 md:top-4 font-extrabold text-white text-3xl">${h1}</h1>
      <h2 class="font-extrabold text-white text-3xl cursor-pointer">${h2}</h2>
  `;
  document.querySelector("section").classList.remove("h-[85vh]");
  document.querySelector("section").classList.add("h-[55vh]");
}
