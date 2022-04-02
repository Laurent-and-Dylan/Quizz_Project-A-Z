"use-strict";

export function category(category) {
  const subContainer = document.querySelector("#container > div");
  return (subContainer.innerHTML += `
        <article class="flex justify-around items-end w-[50vh] h-[35vh] bg-cover bg-center hover:scale-105 shadow-xl shadow-yellow-300 md:shadow-2xl md:shadow-yellow-300" style="background-image: url(./images/cultG.jpg)">
            <img class="w-[5vh] h-[5vh] mb-2" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-8" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-2" src="./images/Star.png" alt="">
        </article>
        `);
  // <h1 class="category" id="${category.id_category}">${category.name}</h1>
}
