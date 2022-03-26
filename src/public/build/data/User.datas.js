export async function getUser(pseudo, password) {
  const init = {
    method: "POST",
    body: JSON.stringify({ pseudo, password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  return fetch("http://127.0.0.1:3000/api/user/login/", init).then((res) => {
    return res.json();
  });
}
