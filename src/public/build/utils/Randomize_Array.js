export async function Randomize_Array(array) {
  let quest = array.shift();
  let l = array.length;

  for (let x = 0; x !== 10; x++) {
    let ud = Math.random() > 0.5 ? true : false;
    let hm = Math.ceil(Math.random() * l);
    let oi = Math.floor(Math.random() * l);
    let ni = ud ? oi + hm : oi - hm;

    if (ni <= l - oi - 1 && ni > -1) {
      let v1 = array[oi];
      let v2 = array[ni];
      array[ni] = v1;
      array[oi] = v2;
    }
  }

  array.unshift(quest);
  return array;
}
