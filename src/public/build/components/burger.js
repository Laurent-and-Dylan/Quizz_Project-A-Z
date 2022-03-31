export function displayBurger() {
  return `
    <li>
        <ul class="text-2xl text-right">
            <li class="text-2xl h-9 ml-auto w-[100px] flex flex-col justify-between hover:scale-110" id="burger">
                <span class="block w-12 ml-auto h-1 rounded-sm bg-white md:stroke-cyan-700" id="line1"></span>
                <span class="block w-12 ml-auto h-1 rounded-sm bg-white md:stroke-cyan-700" id="line2"></span>
                <span class="block w-12 ml-auto h-1 rounded-sm bg-white md:stroke-cyan-700" id="line3"></span>
            </li>
            <li class="submenu w-auto mt-8 invisible text-white px-4 py-1 hover:box-border hover:bg-sky-800" href="#">Profile</li>
            <li class="submenu w-auto mt-8 invisible text-white px-4 py-1 hover:box-border hover:bg-sky-800" href="#">Profile</li>
            <li class="submenu w-auto mt-8 invisible text-white px-4 py-1 hover:box-border hover:bg-sky-800" href="#">Profile</li>
        </ul>
    </li>
    `;
}

export function animBurger() {
  const submenu = document.querySelectorAll(".submenu");

  burger.addEventListener("click", (e) => {
    line1.classList.toggle("ln1");
    line2.classList.toggle("hidden");
    line3.classList.toggle("ln3");

    submenu.forEach((li) => {
      li.classList.toggle("invisible");
    });
  });
}
