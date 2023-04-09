const square = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
letTimerId = null;

function randomSquare() {
  square.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = square[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomSquare.id;
}

square.forEach((square) => {
  square.addEventListener("mouseup", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 700);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
