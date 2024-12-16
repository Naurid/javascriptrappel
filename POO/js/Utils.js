import Car from "./Car.js";


export function CreateCar(e){
    e.preventDefault();

    let formData = new FormData(e.target);

    const dataObject = {};
        formData.forEach((value, key) => {
            dataObject[key] = value;
    });

    return new Car(dataObject["Brand"], dataObject["Model"], dataObject["Year"], dataObject["HorsePower"], dataObject["Tank Size"], dataObject["Consumption"],);
}
export function EnterShrekMode(model){
    console.log(model);
   switch(model){
       case "1":
           document.body.style.backgroundImage = "url('../../shrekBanner.jpg')";
           break;
       case "2":
           document.body.style.backgroundImage = "url('../../shrekHuh.png')";
           break;
       case "3":
           document.body.style.backgroundImage = "url('../../shrekLip.jpg')";
           break;
       case "4":
           document.body.style.backgroundImage = "url('../../shrekShow.jpg')";
           break;
   }

   document.getElementsByClassName("shrekFast")[0].style.display = "block";
   document.getElementsByClassName("shrekCursed")[0].style.display = "block";
}

export function CalculateConsumption(){

}

export function CreateInput(container, label, type){
    let description = document.createElement("p");
    description.textContent = label;

    let input = document.createElement("input");
    input.type = type;
    input.name = label;
    input.required = true;

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("inputContainer");

    inputContainer.appendChild(description);
    inputContainer.appendChild(input);
    container.appendChild(inputContainer);

    return input;
}