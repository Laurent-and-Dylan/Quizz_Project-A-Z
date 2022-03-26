export function getUser(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  fetch("127.0.0.1:3000/api/quizz/random/", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(async (res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
