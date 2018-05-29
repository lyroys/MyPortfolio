var prel = document.querySelector('#preloader');

window.addEventListener('load', function() {
  prel.classList.add('prelOpacity');

  prel.addEventListener('transitionend', function() {
  this.classList.add('prelHide');
  this.classList.remove('prelOpacity');
});
});
