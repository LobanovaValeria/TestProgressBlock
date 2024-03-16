import { circle } from '../elementsForChange.js';
import { inputNumber } from '../elementsOfControls.js';
import { CIRCUMFERENCE } from '../constants.js';
import { SPEEDOFNORMAL } from '../constants.js';

export function initialStateCircle() {
  circle.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
  circle.style.strokeDashoffset = CIRCUMFERENCE;
}

export function changeInputProgress(value) {
  if (value > 100) {
    inputNumber.value = 100;
  }
  if (value < 0) {
    inputNumber.value = 0;
  }
  normal(inputNumber.value);
}

function normal(persent) {
  let startPersent = 0;
  let offset = CIRCUMFERENCE;
  const setPercentInterval = setInterval(() => {
    if (startPersent == persent) {
      clearInterval(setPercentInterval);
    }
    offset = CIRCUMFERENCE - (startPersent / 100) * CIRCUMFERENCE;
    circle.style.strokeDashoffset = offset;
    startPersent += 1;
  }, SPEEDOFNORMAL);
}
