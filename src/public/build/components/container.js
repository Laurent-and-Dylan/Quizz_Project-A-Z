"use-strict";

let section = document.querySelector("section");

export const Container = {
  Base() {
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    section.innerHTML = "";
    section.appendChild(container);

    return container;
  },

  SubContainer() {
    let container = document.getElementById("container");
    let subContainer = document.createElement("div");
    subContainer.setAttribute("id", "subContainer");
    container.appendChild(subContainer);

    return subContainer;
  },
};
