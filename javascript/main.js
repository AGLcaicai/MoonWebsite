"use strict";

var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__nav');
var body = document.querySelector('body');

burger.onclick = function () {
  burger.classList.toggle('opened');
  menu.classList.toggle('header__nav-active');
  body.classList.toggle('scroll-hidden');
};

var navbar = document.querySelector('.header');

window.onscroll = function () {
  var top = window.scrollY;

  if (top == 0) {
    navbar.classList.remove('header-background');
  } else {
    navbar.classList.add('header-background');
  }
};
//# sourceMappingURL=main.js.map


// flipdowm
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(1656734400, {theme: "light"})
    
    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme

  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
