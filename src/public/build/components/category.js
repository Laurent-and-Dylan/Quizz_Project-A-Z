"use-strict";

export function category(category) {
  return `
            <figure data-category='${category.id_category}' class="category hover:scale-105 duration-500 cursor-pointer w-2/3 my-7 mx-auto md:w-1/6">
              <img src='${category.image}' alt="" class="h-[40vh] w-full rounded-lg">
              <h1 class="text-center font-semibold text-xl text-white">${category.name}</h1>
            </figure>
        `;
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
