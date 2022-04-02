"use-strict";

export function category(category) {
  const subContainer = document.querySelector("#container > div");
  return (subContainer.innerHTML += `
        <article data-category='${category.id_category}' class="category flex justify-around items-end w-[50vh] h-[35vh] bg-cover bg-center hover:scale-105 shadow-xl shadow-yellow-300 md:shadow-2xl md:shadow-yellow-300 cursor-pointer" style="background-image: url(${category.image})">
            <h1>${category.name}</h1>
            <img class="w-[5vh] h-[5vh] mb-2" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-8" src="./styles/images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-6" src="./images/Star.png" alt=""><img  class="w-[5vh] h-[5vh] mb-2" src="./styles/images/Star.png" alt="">
        </article>
        `);
}
