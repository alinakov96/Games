const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {});
  let randomPosition = square(Math.floor(Math.random() * 9));
  randomPosition.clasList.add("mole");

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function CountDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert("GAME OVER! Your final score is" + result);
  }
}

letTimerId = setInterval(CountDown, 1000);
