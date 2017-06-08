var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var login = document.querySelector(".main-nav__user-login");
var popup = document.querySelector(".popup");
var closePopup = popup.querySelector(".popup__close");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
	if (navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened");
	}
});

login.addEventListener("click", function (event) {
	event.preventDefault();
	if (popup.classList.contains("popup--show")) {
		popup.classList.remove("popup--show");
	} else {
		popup.classList.add("popup--show");
	}
});

closePopup.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup--show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode===27) {
		if (popup.classList.contains("popup--show")) {
			popup.classList.remove("popup--show");
		}
	}
})