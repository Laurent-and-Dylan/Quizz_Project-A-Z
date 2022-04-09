"use-strict";

// /**
//  * @param  {string} value
//  * @param  {number} id
//  */

// export function button(value, id) {
//   const subContainer = document.getElementById("subContainer");

//   subContainer.innerHTML += `
//     <button id="${id}" class="mx-auto w-28 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl text-white bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-l hover:scale-105">${value}</button>
//   `;
// }

export class Button {
  /**
   * @param  {string} text
   * @param  {string} id
   * @param  {string} styles=null
   * @param  {string} bg=null
   */
  constructor(
    text,
    id,
    styles = null,
    bg = "bg-gradient-to-l from-amber-500/80 to-yellow-300"
  ) {
    this.text = text;
    this.id = id;
    this.styles = styles;
    this.bg = bg;
    this.mq =
      "relative w-1/3 h-9 rounded-xl font-medium md:w-52 md:h-11 lg:h-14 lg:w-80 lg:rounded-2xl lg:text-3xl";
  }

  get display() {
    return this.create();
  }

  create() {
    // if (this.bg == null) {
    //   this.id.style.setProperty(
    //     "--bg",
    //     "linear-gradient(to left, rgba(245, 158, 11, 0.8), rgba(253, 224, 71, 0.8))"
    //   );
    // } else {
    //   this.id.style.this.id.style.setProperty("--bg", `${this.bg}`);
    // }
    return `
    <button class="anim_btn ${this.mq} ${this.styles} ${this.bg}" id="${this.id}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      ${this.text}
    </button>
    `;
  }
  /**
   * @param  {integer} id
   * @param  {string} bg
   */
}
