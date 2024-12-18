let mainDisplay ;
let triviaDisplay;
let wrongAnswerDisplay;
export function SetupTrivia(){
    document.body.style.backgroundColor = "white";
    mainDisplay = document.getElementById("mainDisplay");
    mainDisplay.style.backgroundImage = "none";
    wrongAnswerDisplay = document.getElementById('wrongAnswer');
    triviaDisplay = document.createElement('div');
    triviaDisplay.classList.add("triviaMain");
    triviaDisplay.style.display = "flex";
    triviaDisplay.style.flexDirection = "column";
    triviaDisplay.style.justifyContent = "start";
    triviaDisplay.style.background = "linear-gradient(to bottom, #ffd1dc, #ffffff)";
    mainDisplay.innerHTML = '';
    getTriviaData();
}

function decodeHtmlEntities(text) {
    const tempElement = document.createElement("div"); // Temporary DOM element
    tempElement.innerHTML = text; // Set innerHTML to decode entities
    return tempElement.textContent || tempElement.innerText; // Return decoded text
}

function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Boucle vide pour créer un délai synchrone
    }
}

async function getTriviaData(){
    try{
        let response;
        while (response === undefined || response.status === 429) {
            document.getElementById("shrek-loader").classList.add('active')
            if (response?.status === 429) {
                console.log(document.getElementById("shrek-loader"))
                sleep(1000)
            }
            response = await fetch('https://opentdb.com/api.php?amount=1');
        }
        document.getElementById("shrek-loader").classList.remove('active')

        console.log(response)
        const body = await response.json();

        let answersContainer = document.createElement('div');
        answersContainer.classList.add('answers');

        body.results.forEach((result) => {
            let questionDiv = document.createElement('p');
            questionDiv.classList.add('question');
            questionDiv.textContent = decodeHtmlEntities(result.question);
            triviaDisplay.appendChild(questionDiv);

            let answers = [result.correct_answer, ...result.incorrect_answers]
            answers.forEach((answer) => {
                let answerDiv = document.createElement('button');
                answerDiv.className = 'answer';
                answerDiv.textContent = decodeHtmlEntities(answer);

                answerDiv.addEventListener("click", () => {
                    if(answerDiv.textContent === decodeHtmlEntities(result.correct_answer)){
                        SetupTrivia();
                        return;
                    }
                    wrongAnswerDisplay.style.bottom = '1rem'
                    setTimeout(()=>{
                        wrongAnswerDisplay.style.bottom = '-5rem'
                        }, 2000)
                })

                answersContainer.append(answerDiv);

            })
            triviaDisplay.appendChild(answersContainer);
        })
        mainDisplay.appendChild(triviaDisplay);
    }
    catch(err){
        console.log(err);
    }
}

