var popup = document.querySelector(".form");
var open = document.querySelector(".main-search");
var close = document.querySelector(".");
open.addEventListener("click", function(event) {
  event.preventDefault(event);
  popup.classList.add("modal-show");
});
close.addEventListener("click", function(event) {
  event.preventDefault(event);
  popup.classList.remove("modal-show");
});