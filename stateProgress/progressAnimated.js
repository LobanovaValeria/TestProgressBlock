import { circle } from '../elementsForChange.js';
import { SPEEDANIMATE } from '../constants.js';

let setIntervalAnimate;
let initialDeg = 0;
let isAnimating = false;

function animate() {
  let startDeg = initialDeg;

  if (!isAnimating) {
    setIntervalAnimate = setInterval(() => {
      startDeg = startDeg + (2 % 360);
      circle.style.rotate = `${startDeg}deg`;
    }, SPEEDANIMATE);
  }
}

export function setAnimated(checkedAnimate) {
  if (checkedAnimate && !isAnimating) {
    animate();
  } else {
    isAnimating = false;
    clearInterval(setIntervalAnimate);
    circle.style.rotate = `${initialDeg}deg`;
  }
}
