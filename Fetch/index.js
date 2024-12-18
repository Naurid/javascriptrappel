import * as jokes from "./JokesAPI.js"
import * as trivia from "./TriviaAPI.js"
import * as home from "./Home.js"

let jokesNav = document.getElementById('jokes-button');
jokesNav.addEventListener('click', jokes.SetupJokes);
let triviaNav = document.getElementById('trivia-button');
triviaNav.addEventListener("click", trivia.SetupTrivia);
let homeNav = document.getElementById('home-button');
homeNav.addEventListener("click", home.SetupHome);



home.SetupHome();
//jokes.SetupJokes();
//trivia.SetupTrivia();