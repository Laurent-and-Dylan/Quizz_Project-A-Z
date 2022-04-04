"use-strict";

export function category(category) {
  const subContainer = document.querySelector("#container > div");
  return (subContainer.innerHTML += `
        <article data-category='${category.id_category}' class="category flex justify-around items-end w-[50vh] h-[35vh] bg-cover bg-center hover:scale-105 shadow-xl shadow-yellow-300 md:shadow-2xl md:shadow-yellow-300 cursor-pointer" style="background-image: url(${category.image})">
            <h1>${category.name}</h1>
        </article>
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
