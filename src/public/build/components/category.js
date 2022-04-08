"use-strict";

export function category(category) {
  const subContainer = document.querySelector("#container > div");
  return (subContainer.innerHTML += `
            <figure data-category='${category.id_category}' class="category hover:scale-105 duration-500 cursor-pointer">
              <img src='${category.image}' alt="" class="w-[17vw] h-[20vh] rounded-lg ">
              <h1 class="text-center mt-1 text-xl font-permanent text-yellow-300">${category.name}</h1>
            </figure>
        `);
}

export function inputCategory(categories) {
  const container = document.getElementById("container");
  let options = "";

  for (let c in categories) {
    options += `<option value="${categories[c].id_category}">${categories[c].name}</option>`;
  }

  container.innerHTML += `
    <select id="category">
      ${options}
    </select>
  `;
}
