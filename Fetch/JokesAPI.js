const mainDisplay = document.getElementById('displayer');

const wallPapers = [
    {id : 1, url : 'url("./pictures/disappointedtrollface.png")'},
    {id : 2, url : 'url("./pictures/mexicanoTroll.png")'},
    {id : 3, url : 'url("./pictures/trollFaceNormal.png")'},
]
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
            mainDisplay.appendChild(displayDiv);
        })
        let refreshButton = document.createElement('button');
        refreshButton.className = 'refresh-button';
        refreshButton.textContent = 'Refresh Jokes';
        refreshButton.addEventListener('click', getJokesData);
        mainDisplay.appendChild(refreshButton);
    }
    catch(err){
        console.log(err);
    }
}

export function SetupJokes(){
    let randomBG = Math.floor(Math.random() * 3);
    document.body.style.backgroundImage = wallPapers[randomBG].url;
    document.body.style.backgroundColor = "grey";
    getJokesData();


}