const mainNavigationList = document.querySelector(".main-navigation__list");
const mainNavigationHamburger = document.querySelector(".main-navigation__hamburger");
const tabletWidth = 768;

function openOrCloseMenu() {
  mainNavigationList.classList.toggle("main-navigation__list--open");
  mainNavigationHamburger.classList.toggle("hamburger--open");
}

function checkWidth() {
  if (window.screen.width >= tabletWidth) {
    mainNavigationHamburger.style.display = "none";
  } else {
    mainNavigationHamburger.style.display = "block";
  }
}

//Если JS не работает, меню по умолчанию открыто и нет кнопки гамбургера.
if (mainNavigationList.classList.contains("main-navigation__list--open")) {
  mainNavigationList.classList.remove("main-navigation__list--open");
  mainNavigationList.classList.remove("main-navigation__list--no-js");
  mainNavigationHamburger.style.display = "block";
  mainNavigationHamburger.addEventListener("click", openOrCloseMenu);
}

window.onresize = checkWidth;
checkWidth();
