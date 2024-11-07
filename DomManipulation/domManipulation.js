let sources = ["../shrekBanner.jpg", "../shrekHuh.jpg", "../shrekLip.jpg", "../shrekShow.jpg"];

let mainContainer = document.getElementById("main");

let container = document.createElement("div");
container.classList.add("container");
//banner tout en haut
let banner = document.createElement("div");
banner.classList.add("banner");
let image = document.createElement("img");
image.src = "../shrekBanner.jpg";
image.alt = "nothing to see here"
banner.appendChild(image);

//div contenant pleins de boutons dont un qui mene a un rick roll ou qui change le shrek
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");
/*for (let i = 0; i < sources.length; i++) {
    let button = document.createElement("button");
    button.classList.add(`button ${i}`);
    button.addEventListener("click", () => {image.src = sources[i];})
    buttonContainer.appendChild(button);
}*/

container.append(banner, buttonContainer);
mainContainer.appendChild(container);
