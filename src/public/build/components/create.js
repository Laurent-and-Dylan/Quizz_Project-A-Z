"use-strict";

export const create = {
  Base() {
    const subContainer = document.getElementById("subContainer");

    subContainer.innerHTML = `
     <label for='quest' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Question :</label><input id="quest" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Quel est la couleur du cheval blanc d Enri quatre'>
     <label for='correct' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Good Response :</label><input id="correct" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
     <label for='bad1' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Bad Response :</label><input id="bad1" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
     <label for='bad2' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Bad Response :</label><input id="bad2" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
     <label for='bad3' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Bad Response :</label><input id="bad3" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
     <button  id="next" class="block col-start-2 col-end-4 mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80  lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500  hover:bg-gradient-to-l hover:scale-105 shadow-2xl shadow-white opacity-80 md:shadow-2xl md:shadow-white" id="login">Next</button>
   `;
  },
  FinishOrAdd() {
    const subContainer = document.getElementById("subContainer");
    
    subContainer.innerHTML = `
      <label for='quest' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Question :</label><input id="quest" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Quel est la couleur du cheval blanc d Enri quatre'>
      <label for='correct' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Good Response :</label><input id="correct" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
      <label for='bad1' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Bad Response :</label><input id="bad1" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
      <label for='bad2' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Bad Response :</label><input id="bad2" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
      <label for='bad3' class='col-start-1 h-10 text-orange-500 text-center bg-white/70 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-whitetext-2xl font-extrabold rounded-lg'>Bad Response :</label><input id="bad3" class="col-start-2 col-end-5 text-white bg-white/40 shadow-md shadow-white opacity-80 md:shadow-md md:shadow-white rounded-lg pl-6" type='text' placeholder='Blanc'>
      <button  id="finish" class="block col-start-2 col-end-4 mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80  lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500  hover:bg-gradient-to-l hover:scale-105 shadow-2xl shadow-white opacity-80 md:shadow-2xl md:shadow-white" id="login">Finish</button>
      <button  id="add" class="block col-start-4 col-end-5 mx-auto w-10 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80  lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500  hover:bg-gradient-to-l hover:scale-105 shadow-2xl shadow-white opacity-80 md:shadow-2xl md:shadow-white" id="login">+1</button>
    `;
  },
};
