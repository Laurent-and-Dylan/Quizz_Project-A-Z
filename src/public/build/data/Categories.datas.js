"use-strict";

export async function GetCategories() {
  const { results } = await fetch(
    "http://127.0.0.1:3000/api/category/getAll"
  ).then((res) => {
    return res.json();
  });

  if (results) return results;
  else return false;
}
