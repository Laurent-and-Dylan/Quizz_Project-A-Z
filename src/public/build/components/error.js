"use-strict";

export function error(content, parent, reference) {
  document.querySelector("span").remove();

  const element = document.createElement("span");
  element.classList.add("text-center", "text-pink-600", "text-xl", "mt-4");
  element.textContent = content;

  document.querySelector(`${parent}`).insertBefore(element, reference);
}
