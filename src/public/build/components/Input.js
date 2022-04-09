"use-strict";

export class Input {
  /**
   * @param  {string} type
   * @param  {string} value
   * @param  {string} id
   * @param  {string} styles
   */
  constructor(type, value, id, styles = null) {
    this.type = type;
    this.value = value;
    this.id = id;
    this.styles = styles;
  }

  get display() {
    return this.create();
  }

  create() {
    return `
      <input type=${this.type} value="${this.value}" id="${this.id}" class="h-8 block lg:h-10 rounded-md text-xl text-center text-slate-400 ${this.styles}">
    `;
  }
}
