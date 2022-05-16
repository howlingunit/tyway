

function setUpNav() {
  const burgerButton = document.querySelector('.burger-button');
  const navExit = document.querySelector('.nav-exit');
  burgerButton.addEventListener('click', toggleNav);
  navExit.addEventListener('click', toggleNav);
}

function toggleNav() {
  const optionsMenu = document.querySelector('.nav-options');
  const navExit = document.querySelector('.nav-exit');

  if (optionsMenu.classList.contains('open')) { // close
    optionsMenu.classList.add('close');
    optionsMenu.classList.remove('open');
    navExit.classList.add('invis');
  } else { // open
    optionsMenu.classList.add('open');
    optionsMenu.classList.remove('close');
    navExit.classList.remove('invis');
  }
}

setUpNav();
