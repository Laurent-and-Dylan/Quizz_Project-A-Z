"use-strict";

export function button(value, id) {
  const subContainer = document.getElementById("subContainer");

  subContainer.innerHTML += `
    <button id="${id}" class="mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105">${value}</button>
  `;
}

export class Button {
  constructor(text, id, styles = null) {
    this.text = text;
    this.id = id;
    this.styles = styles;
  }
  get display() {
    return this.create();
  }

  create() {
    return `
    <button class="anim_btn ${this.styles}" id="${this.id}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      ${this.text}
    </button>
    `;
  }
}
