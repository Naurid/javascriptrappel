let mainDisplay;
let homeDisplay;

let chuckNorrisFacts =[];
let uselessFacts = [];
let cats = [];

const wallPapers = [
    {id : 1, url : 'url("./pictures/disappointedtrollface.png")'},
    {id : 2, url : 'url("./pictures/mexicanoTroll.png")'},
    {id : 3, url : 'url("./pictures/trollFaceNormal.png")'},
]

export function SetupHome(){
    mainDisplay = document.getElementById("mainDisplay");
    homeDisplay = document.createElement("div");
    homeDisplay.classList.add("homeMain");
    mainDisplay.innerHTML = '';
    document.getElementById("shrek-loader").classList.add('active')
    getHomeData().then((data) => {
        document.getElementById("shrek-loader").classList.remove('active')
    });
}
async function getHomeData(){
    try{
        for (let i = 0; i < 50; i++) {
            let response = await fetch("https://api.chucknorris.io/jokes/random");
            let fact = await response.json();
            chuckNorrisFacts.push(fact.value);
        }
        let scrollingBand = document.createElement('div');
        scrollingBand.className = 'scrolling-band';
        homeDisplay.appendChild(scrollingBand);
        let content = document.createElement('div');
        content.className = "content";
        scrollingBand.appendChild(content);

        chuckNorrisFacts.forEach(fact => {
            let Container = document.createElement("p");
            Container.textContent = fact;
            content.appendChild(Container);
        })
        mainDisplay.appendChild(homeDisplay);

        let catContainer = document.createElement("div");
        catContainer.className = "cats";

        let response = await fetch("https://cataas.com/api/cats?limit=50&skip=0");
        let catIDs = await response.json();
        console.log(catIDs);
        catIDs.forEach(id => {
            console.log(id._id);
            cats.push(id._id);
        })

        for (let i = 0; i < cats.length; i++) {

            let catDisplay = document.createElement("img");
            catDisplay.className = "cat";
            catDisplay.src = `https://cataas.com/cat/${cats[i]}`;
            catContainer.appendChild(catDisplay);
        }

        homeDisplay.appendChild(catContainer);

        for (let i = 0; i < 50; i++) {
            let response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
            let fact = await response.json();
            uselessFacts.push(fact.text);
        }
        let scrollingBand2 = document.createElement('div');
        scrollingBand2.className = 'scrolling-band2';
        homeDisplay.appendChild(scrollingBand2);
        let content2 = document.createElement('div');
        content2.className = "content2";
        scrollingBand2.appendChild(content2);

        uselessFacts.forEach(fact => {
            let Container = document.createElement("p");
            Container.textContent = fact;
            content2.appendChild(Container);
        })


        mainDisplay.appendChild(homeDisplay);

    }
    catch(err){
        console.log(err);
    }
}