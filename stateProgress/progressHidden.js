import { blockProgress } from '../elementsForChange.js';

function setHidden(checked) {
  checked
    ? (blockProgress.style.visibility = 'hidden')
    : (blockProgress.style.visibility = 'visible');
}
export default setHidden;
