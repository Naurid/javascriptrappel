import * as utils from "./Utils.js";
import Car from "./Car.js";

const mainContainer = document.getElementById("MainContainer");
const displayContainer = document.getElementById("DisplayContainer");
const display = document.getElementById("Display");
displayContainer.style.display = "none";
const calculator = document.getElementById("Calculator");
calculator.style.display = "none";

document.getElementsByClassName("shrekFast")[0].style.display = "none";
document.getElementsByClassName("shrekCursed")[0].style.display = "none";

let currentCar;

const formContainer = document.createElement("form");
formContainer.classList.add("formContainer");
formContainer.onsubmit = (e) => {
    currentCar = utils.CreateCar(e);
    if(currentCar.brand === "Shrek") {
        utils.EnterShrekMode(currentCar.model);
        return
    }
    display.textContent = currentCar.DisplayCarInfo();
    displayContainer.style.display = "flex";
    formContainer.style.display = "none";
    calculator.style.display = "flex";
}

mainContainer.appendChild(formContainer);

utils.CreateInput(formContainer, "Brand", "text");
utils.CreateInput(formContainer, "Model", "text");
utils.CreateInput(formContainer, "Year", "number");
utils.CreateInput(formContainer, "HorsePower", "number");
utils.CreateInput(formContainer, "Tank Size", "number");
utils.CreateInput(formContainer, "Consumption", "number");

let button = document.createElement("button");
button.type = "submit";
button.classList.add("button");
button.innerText = "Create Car";

let kilometreInput = utils.CreateInput(calculator, "Nombre de kilomètres parcouru", "number");

let kilometreButton = document.createElement("button");
kilometreButton.classList.add("button");
kilometreButton.innerText = "Calculate remaining distance";
kilometreButton.onclick = () => {
   if(currentCar === null) return;
    kmLeft.textContent = utils.CalculateConsumption(currentCar, kilometreInput);
}
calculator.appendChild(kilometreButton);

let kmLeft = document.createElement("p");
calculator.appendChild(kmLeft);

formContainer.appendChild(button);