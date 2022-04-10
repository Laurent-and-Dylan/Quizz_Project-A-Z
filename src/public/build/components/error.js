"use-strict";

export function error(content, parent, reference) {
  if (document.getElementById("error"))
    document.getElementById("error").remove();

  let element = document.createElement("span");
  element.className = "text-center text-pink-600 text-xl mt-4";
  element.setAttribute("id", "error");
  element.textContent = content;

  document.querySelector(`${parent}`).insertBefore(element, reference);
}
