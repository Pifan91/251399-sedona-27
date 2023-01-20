const mainNavigationList = document.querySelector(".main-navigation__list");
const mainNavigationToggleButton = document.querySelector(".main-navigation__toggle-button");
const tabletWidth = 768;

function openOrCloseMenu() {
  mainNavigationList.classList.toggle("main-navigation__list--open");
  mainNavigationToggleButton.classList.toggle("toggle-button--open");
}

function checkWidth() {
  if (window.innerWidth >= tabletWidth) {
    mainNavigationToggleButton.style.display = "none";
  } else {
    mainNavigationToggleButton.style.display = "block";
  }
}

//Если JS не работает, меню по умолчанию открыто и нет кнопки гамбургера.
if (mainNavigationList.classList.contains("main-navigation__list--open")) {
  mainNavigationList.classList.remove("main-navigation__list--open");
  mainNavigationList.classList.remove("main-navigation__list--no-js");
  mainNavigationToggleButton.style.display = "block";
  mainNavigationToggleButton.addEventListener("click", openOrCloseMenu);
}

window.onresize = checkWidth;
checkWidth();
