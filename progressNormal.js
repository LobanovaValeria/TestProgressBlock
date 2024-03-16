const circle = document.getElementById('circle');
const radius = circle.getAttribute('r');
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.number__input');
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function changeInputProgress(value) {
  if (value > 100) {
    input.value = 100;
  }
  if (value < 0) {
    input.value = 0;
  }
  normal(input.value);
}

function normal(persent) {
  const speedNormal = 10;
  let startPersent = 0;
  let offset = circumference;
  const setPercentInterval = setInterval(() => {
    if (startPersent == persent) {
      clearInterval(setPercentInterval);
    }
    offset = circumference - (startPersent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    startPersent = startPersent + 1;
  }, speedNormal);
}
