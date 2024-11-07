let sources = ["../shrekBanner.jpg", "../shrekHuh.png", "../shrekLip.jpg", "../shrekShow.jpg"];
let lionsContainer = document.getElementById('enclos-1').getElementsByClassName('animaux-container')[0];

let giraffesContainer = document.getElementById("enclos-2").getElementsByClassName("animaux-container")[0];

let buttonsContainer = document.getElementsByClassName("buttons-container")[0];

let lion = "🦁";
let giraffe = "🦒";
let pet = "💨";

let lionP = document.createElement('p');
lionP.textContent = lion;

function addAnimal(parent, content,end){
    let animal = document.createElement('p');
    animal.textContent = content;
    let randInt = Math.floor(Math.random() * 100);
    if (randInt < 35 ) {
        let randSource = Math.floor(Math.random() * sources.length);
        animal = document.createElement('img');
        animal.src = sources[randSource];
        animal.width = 100;
        animal.height = 100;
    }
    if(end) parent.appendChild(animal);
    else parent.prepend(animal);
}

function addButton(parent, content, action, insertBefore = false, referenceElement = null){
    let newButton = document.createElement("button");
    newButton.textContent = content;
    newButton.addEventListener("click", action);
    if(!insertBefore || !referenceElement) parent.appendChild(newButton);
    else parent.insertBefore(newButton, referenceElement);
    return newButton;
}


addButton(buttonsContainer,
    "Add Lion at the end",
    () => {addAnimal(lionsContainer, lion, true)})
let button1 = addButton(buttonsContainer,
    "Add Giraffe at the end",
    () => {addAnimal(giraffesContainer, giraffe, true)})
addButton(buttonsContainer,
    "Add Giraffe at the start",
    () => {addAnimal(giraffesContainer, giraffe, false)})
addButton(buttonsContainer,
    "Add Lion at the start",
    () => {addAnimal(lionsContainer, lion, false)},
    true,
    button1)
addButton(buttonsContainer,
    "Add Prout at the start of lions",
    () => {addAnimal(lionsContainer, pet, false)},
    true,
    button1)
addButton(buttonsContainer,
    "Add Prout at the start of giraffe",
    () => {addAnimal(giraffesContainer, pet, false)})





