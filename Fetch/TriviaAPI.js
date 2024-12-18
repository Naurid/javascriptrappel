const mainDisplay = document.getElementById('displayer');
const wrongAnswerDisplay = document.getElementById('wrongAnswer');

function decodeHtmlEntities(text) {
    const tempElement = document.createElement("div"); // Temporary DOM element
    tempElement.innerHTML = text; // Set innerHTML to decode entities
    return tempElement.textContent || tempElement.innerText; // Return decoded text
}

async function getTriviaData(){
    try{
        const response = await fetch('https://opentdb.com/api.php?amount=1');
        const body = await response.json();
        console.log(body.results);

        body.results.forEach((result) => {
            let questionDiv = document.createElement('p');
            questionDiv.classList.add('question');
            questionDiv.textContent = decodeHtmlEntities(result.question);
            mainDisplay.appendChild(questionDiv);

            let answers = [result.correct_answer, ...result.incorrect_answers]
            answers.forEach((answer) => {
                let answerDiv = document.createElement('button');
                answerDiv.className = 'answer';
                answerDiv.textContent = decodeHtmlEntities(answer);

                answerDiv.addEventListener("click", () => {
                    if(answerDiv.textContent === decodeHtmlEntities(result.correct_answer)){
                        getTriviaData();
                        return;
                    }
                    wrongAnswerDisplay.style.bottom = '1rem'
                    setTimeout(()=>{
                        wrongAnswerDisplay.style.bottom = '-5rem'
                        }, 2000)
                })
                mainDisplay.appendChild(answerDiv);
            })
        })

    }
    catch(err){
        console.log(err);
    }
}

export function SetupTrivia(){
    mainDisplay.innerHTML = '';
    document.body.backgroundColor = '#ffeaea';
    document.body.backgroundImage = "none";
    getTriviaData();
}