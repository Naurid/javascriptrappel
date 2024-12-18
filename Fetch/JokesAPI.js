
let mainDisplay;
let jokesDisplay;

const wallPapers = [
    {id : 1, url : 'url("./pictures/disappointedtrollface.png")'},
    {id : 2, url : 'url("./pictures/mexicanoTroll.png")'},
    {id : 3, url : 'url("./pictures/trollFaceNormal.png")'},
]

export function SetupJokes(){
    let randomBG = Math.floor(Math.random() * 3);
    mainDisplay = document.getElementById("mainDisplay");
    mainDisplay.style.backgroundImage = wallPapers[randomBG].url;
    mainDisplay.style.backgroundRepeat = "no-repeat";
    mainDisplay.style.backgroundPosition = "center";
    document.body.style.backgroundColor = "darkgrey";
    jokesDisplay = document.createElement("div");
    jokesDisplay.classList.add("jokesMain");
    jokesDisplay.style.display = "flex";
    jokesDisplay.style.flexWrap = "wrap";
    jokesDisplay.style.justifyContent = "center";
    jokesDisplay.style.alignItems = "center";
    jokesDisplay.style.gap = "1rem";
    jokesDisplay.style.height = "75vh";
    mainDisplay.innerHTML = '';
    getJokesData();
}
 async function getJokesData(){
    try{
        mainDisplay.innerHTML = '';
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10');
        const body = await response.json();
        const jokes = body.jokes;
        jokes.forEach(joke => {

            let displayDiv = document.createElement('div');
            displayDiv.className = "joke-card";
            let setup = document.createElement('p');
            setup.className = 'joke-setup';
            setup.textContent = joke.setup;
            let delivery = document.createElement('p');
            delivery.className = 'joke-delivery';
            delivery.style.display = 'none';
            delivery.textContent = joke.delivery;
            displayDiv.addEventListener('click', () => {
                delivery.style.display = 'inline';
            })

            displayDiv.append(setup, delivery);
            jokesDisplay.appendChild(displayDiv);
        })

        let refreshButton = document.createElement('button');
        refreshButton.className = 'refresh-button';
        refreshButton.textContent = 'Refresh Jokes';
        refreshButton.addEventListener('click', SetupJokes);
        mainDisplay.append(jokesDisplay, refreshButton);
    }
    catch(err){
        console.log(err);
    }
}

