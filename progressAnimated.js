let setIntervalAnimate;
let initialDeg = 0;
let isAnimating = false;

function animate() {
  let startDeg = initialDeg;
  let speedAnimate = 10;
  if (!isAnimating) {
    setIntervalAnimate = setInterval(() => {
      startDeg = startDeg + (2 % 360);
      circle.style.rotate = `${startDeg}deg`;
    }, speedAnimate);
  }
}

function setAnimated(checkedAnimate) {
  if (checkedAnimate && !isAnimating) {
    animate();
  } else {
    isAnimating = false;
    clearInterval(setIntervalAnimate);
    circle.style.rotate = `${initialDeg}deg`;
  }
}
