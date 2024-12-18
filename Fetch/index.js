import * as jokes from "./JokesAPI.js"
import * as trivia from "./TriviaAPI.js"

const display = document.getElementById('displayer');
let jokesNav = document.getElementById('jokes-button');

jokesNav.addEventListener('click', jokes.SetupJokes);
let triviaNav = document.getElementById('trivia-button');
triviaNav.addEventListener("click", trivia.SetupTrivia);

async function getData(){
    try{
        const response = await fetch('https://opentdb.com/api.php?amount=1');
        const body = await response.json();
        console.log(body.results);

        body.results.forEach((result) => {
            let questionDiv = document.createElement('p');
            questionDiv.classList.add('question');
            questionDiv.textContent = result.question;
            display.appendChild(questionDiv);

            let answers = [result.correct_answer, ...result.incorrect_answers]
            answers.forEach((answer) => {
                let answerDiv = document.createElement('button');
                answerDiv.className = 'answer';
                answerDiv.textContent = answer;

                answerDiv.addEventListener("click", () => {
                    if(answerDiv.textContent === result.correct_answer){
                        getData();
                        return;
                    }
                   wrongAnswerDisplay.style.display = 'inline';
                })
                display.appendChild(answerDiv);
            })
        })

    }
    catch(err){
        console.log(err);
    }
}

// if(display.innerHTML === "") jokes.SetupJokes();
trivia.SetupTrivia();