'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}


addEventOnElem(navTogglers, "click", toggleNavbar);
addEventOnElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");
const backToBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backToBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backToBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);
