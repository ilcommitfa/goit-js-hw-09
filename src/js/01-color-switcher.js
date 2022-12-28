const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let interval;

startBtn.addEventListener('click', changeBodyColor);
stopBtn.addEventListener('click', stopChangeBodyColor);
buttonsGrowPlease();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeBodyColor() {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
};

function stopChangeBodyColor() {
  clearInterval(interval);
  startBtn.disabled = false;
};
