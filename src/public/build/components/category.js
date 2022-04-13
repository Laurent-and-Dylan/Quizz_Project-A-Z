"use-strict";

export function category(category) {
  return `
            <figure data-category='${category.id_category}' class="category hover:scale-105 duration-500 cursor-pointer w-2/3 my-7 mx-auto sm:mx-6 md:w-1/6">
              <img src='${category.image}' alt="" class="h-[40vh] w-full rounded-lg">
              <h1 class="text-center font-semibold text-xl text-white">${category.name}</h1>
            </figure>
        `;
}

export function inputCategory(categories) {
  let options = "";

  for (let c in categories) {
    options += `<option value="${categories[c].id_category}" class="text-black text-3xl ">${categories[c].name}</option>`;
  }

  return `
    <select id="category" class="block w-40 bg-transparent text-jaune text-3xl h-10">
      ${options}
    </select>
  `;
}
