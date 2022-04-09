export function inputFile() {
  return `
  <div class="w-full">
    <div aria-hidden="true" class="relative group w-full h-10 flex items-center justify-center">
      <div class="absolute inset-0 w-full h-full rounded-xl">
      <input type="file"
             id="file"
             accept=".jpeg, .jpg, .png, .webp, .svg"
             class="relative z-10 opacity-0 w-full h-full cursor-pointer">
      <div class="absolute inset-0 w-full h-8 flex items-center justify-center lg:h-10 rounded-md text-xl text-center bg-white shadow-2xl">
        <h1 class="text-xl text-slate-400 font-normal normal-case">Choose image</h1>
      </div>
      </div>
    </div>
  </div>
  `;
}
