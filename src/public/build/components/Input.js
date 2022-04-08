"use-strict";

export class Input {
  /**
   * @param  {string} type
   * @param  {string} placeholder
   * @param  {string} id
   * @param  {string} styles
   */
  constructor(type, placeholder, id, styles = null) {
    this.type = type;
    this.placeholder = placeholder;
    this.id = id;
    this.styles = styles;
  }

  get display() {
    return this.create();
  }

  create() {
    return `
      <input type=${this.type} placeholder="${this.placeholder}" id="${this.id}" class="w-80 h-8 block mx-auto mt-8 lg:h-10 rounded-md text-xl text-center text-slate-400 ${this.styles}">
    `;
  }
}
