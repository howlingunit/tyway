function darkTheme(){
    const root = document.documentElement;
    root.style.setProperty("--textColor", "#fff");
    root.style.setProperty("--buttonBGColor", "#D3D3D3");
    root.style.setProperty("--buttonTextColor", "#000");
    root.style.setProperty("--buttonStyleColor", "blue");
}

function lightTheme(){
    const root = document.documentElement;
    root.style.setProperty("--textColor", "black");
    root.style.setProperty("--buttonBGColor", "#717171");
    root.style.setProperty("--buttonTextColor", "#fff");
}

function selectBGtheme(){
    const bg = document.querySelector("#bg");
    const imgs = ["B_forrest.jpg", "B_mountain.jpg", "D_city.jpg", "D_city2.jpg"];
    const img = imgs[Math.floor(Math.random() * imgs.length)];
    bg.style.backgroundImage = `url("assets/${img}")`;
    if(img[0] === "B"){
        lightTheme();
    } else if(img[0] === "D"){
        darkTheme();

    }
}
window.addEventListener("load", selectBGtheme)