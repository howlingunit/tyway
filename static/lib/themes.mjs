function darkTheme() {
  const root = document.documentElement;
  root.style.setProperty('--textColor', '#fff');
  root.style.setProperty('--nav-bar-colour', '#818181');
}

function lightTheme() {
  const root = document.documentElement;
  root.style.setProperty('--textColor', 'black');
  root.style.setProperty('--nav-bar-colour', '#d1d1d1');
}

function selectBGtheme() {
  const bg = document.querySelector('.bg');
  const imgs = ['B_forrest.jpg', 'B_mountain.jpg', 'D_city.jpg', 'D_city2.jpg'];
  const img = imgs[Math.floor(Math.random() * imgs.length)];
  bg.style.backgroundImage = `url("assets/homePage/${img}")`;
  if (img[0] === 'B') {
    lightTheme();
  } else if (img[0] === 'D') {
    darkTheme();
  }
}

selectBGtheme();
