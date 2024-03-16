import { initialStateCircle } from './stateProgress/progressNormal.js';
import setHidden from './stateProgress/progressHidden.js';
import { toogleHide, inputNumber, toogleAnimate } from './elementsOfControls.js';
import { changeInputProgress } from './stateProgress/progressNormal.js';
import { setAnimated } from './stateProgress/progressAnimated.js';

initialStateCircle();

inputNumber.addEventListener('change', () => changeInputProgress(inputNumber.value));
toogleAnimate.addEventListener('change', () => setAnimated(toogleAnimate.checked));
toogleHide.addEventListener('change', () => setHidden(toogleHide.checked));
