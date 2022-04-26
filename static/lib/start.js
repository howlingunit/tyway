function darkTheme(){
    const root = document.documentElement;
    root.style.setProperty("--textColor", "#fff");
    root.style.setProperty("--nav-bar-colour", "#818181")
}

function lightTheme(){
    const root = document.documentElement;
    root.style.setProperty("--textColor", "black");
    root.style.setProperty("--nav-bar-colour", "#d1d1d1")

}

function selectBGtheme(){
    const bg = document.querySelector(".bg");
    const imgs = ["B_forrest.jpg", "B_mountain.jpg", "D_city.jpg", "D_city2.jpg"];
    const img = imgs[Math.floor(Math.random() * imgs.length)];
    bg.style.backgroundImage = `url("assets/${img}")`;
    if(img[0] === "B"){
        lightTheme();
    } else if(img[0] === "D"){
        darkTheme();

    }
}

function setUpNav(){
    const burgerButton = document.querySelector('.burger-button');
    const navExit = document.querySelector('.nav-exit');
    burgerButton.addEventListener('click', toggleNav);
    navExit.addEventListener('click', toggleNav);
    
}

async function toggleNav() {
    const optionsMenu = document.querySelector('.nav-options');
    const navExit = document.querySelector('.nav-exit');

    if(optionsMenu.classList.contains('open')){ // close
        optionsMenu.classList.add('close');
        optionsMenu.classList.remove('open');
        navExit.classList.add('invis');
    } else {                                    // open
        optionsMenu.classList.add('open');
        optionsMenu.classList.remove('close');
        navExit.classList.remove('invis');
    }
}

selectBGtheme();
setUpNav();