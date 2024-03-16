const blockProgress=document.querySelector('.progress');
function hide(checked) {
  checked ? (blockProgress.style.visibility = 'hidden') : (blockProgress.style.visibility = 'visible');
}