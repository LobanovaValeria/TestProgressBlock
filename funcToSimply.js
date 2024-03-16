export function Listener(elementsOfControl, func, property){
    elementsOfControl.addEventListener('change', ()=>func(property));
}