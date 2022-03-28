"use-strict";
let results;
let seconds;

async function getQuizz() {
  ({ results } = await fetch("http://127.0.0.1:3000/api/quizz/random").then(
    (res) => {
      return res.json();
    }
  ));
}

async function makeHUD() {
  rest.innerHTML = `<span id='left'>0</span> / <span id="total"></span>`;
  left.textContent++;
  question.textContent = results[left.textContent][0];
  total.textContent = results.length;
}

async function updateHUD() {
  if (left.textContent === total.textContent) endGame();
  else {
    left.textContent++;
    question.textContent = results[left.textContent][0];
    total.textContent = results.length;
  }
}

async function removeData() {
  document.querySelectorAll(".responses").forEach((res) => {
    res.remove();
  });
}

async function displayResponses() {
  let valid = false;
  //~ Display responses in grid section
  for (i = 1; i < results[left.textContent].length; i++) {
    let index = results[left.textContent].indexOf(results[left.textContent][i]);
    game.innerHTML += `
    <h1 class="responses text-xl text-white text-center" id="${index}">${
      results[left.textContent][i][0]
    }</h1>
    `;
  }

  document.querySelectorAll(".responses").forEach((res) => {
    res.addEventListener("click", (e) => {
      for (f in results[left.textContent]) {
        if (results[left.textContent][f][0] === e.target.textContent) {
          if (results[left.textContent][f][1] && !valid) {
            valid = true;
            setTimeout(() => {
              clearInterval(seconds);
              nextQuestion();
            }, 1500);
            points();
          } else if (!valid) {
            res.style.background = "red";
            valid = true;
            setTimeout(() => {
              clearInterval(seconds);
              nextQuestion();
            }, 1500);
          }
        }
      }
      goodResponse();
    });
  });
}

async function timer() {
  time.textContent = 20;

  seconds = setInterval(() => {
    time.textContent--;

    if (time.textContent == 0) {
      clearInterval(seconds);
      nextQuestion();
    }
  }, 1000);
}

async function points() {
  let score = sessionStorage.getItem("score");
  let data = Math.floor(time.textContent * 6.9);

  if (score === null) sessionStorage.setItem("score", data);
  else {
    score = eval(score + "+" + data);
    sessionStorage.setItem("score", score);
  }
}

async function nextQuestion() {
  removeData();
  updateHUD();
  displayResponses();
  timer();
}

async function launchGame() {
  await getQuizz();
  await makeHUD();
  await displayResponses();
  await timer();
}

async function goodResponse() {
  for (g in results[left.textContent]) {
    if (results[left.textContent][g][1] === true) {
      right = results[left.textContent].indexOf(results[left.textContent][g]);
      document.getElementById(`${right}`).style.background = "green";
    }
  }
}

async function endGame() {}
launchGame();
