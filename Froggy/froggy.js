let container = document.getElementById("GameContainer");
let pointsDisplay = document.getElementById("PointsDisplay");
let points = 0;

let winVideo = document.getElementById("winVideo");
winVideo.hidden = true;

const gridX = 10;
const gridY = 10;
const winCon = 50;

let doPoo = false;

let grid = []
let currentPosition =
    {
        x : 0,
        y : 0
    };

let pooPosition =
    {
        x : 0,
        y : 0
    };

for (let i = 0; i < gridX; i++) {
    grid.push([])
    for (let j = 0; j < gridY; j++) {
        grid[i][j] = " ";
    }
}

function DrawGrid()
{
    container.innerHTML = "";
    grid[currentPosition.x][currentPosition.y] = "🐸";
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < gridY; j++) {
            let newButton = document.createElement("button");
            newButton.textContent = grid[i][j];
            newButton.classList.add("cell");
            container.appendChild(newButton);
        }
    }

    pointsDisplay.textContent = `Score : ${points}`;
}

function SpawnMosquito(){
    let isEmpty = false;
    let randomX
    let randomY

    while(!isEmpty){
        randomX = Math.floor(Math.random() * (gridX - 1));
        randomY = Math.floor(Math.random() * (gridY - 1));

        isEmpty =  grid[randomX][randomY] !== "🦟" || grid[randomX][randomY] !== "🐸";
    }

    grid[randomX][randomY] = "🦟";
}

function CheckForMosquito(){
    if (grid[currentPosition.x][currentPosition.y] === "🦟"){
        grid[currentPosition.x][currentPosition.y] = "";
        pooPosition.x = currentPosition.x;
        pooPosition.y = currentPosition.y;
        points += 5;
        doPoo = true;
        SpawnMosquito();
    }
}

function CheckForWin(){
    if(points < winCon) return;
    winVideo.hidden = false;
}

function Poo(){
    if (doPoo){
        grid[pooPosition.x][pooPosition.y] = "💩";
        doPoo = false;
    }
}
function MoveUp()
{    if(currentPosition.x > 0) currentPosition.x--;}

function MoveDown()
{    if(currentPosition.x < gridX - 1) currentPosition.x++;}

function MoveRight()
{    if(currentPosition.y < gridY-1) currentPosition.y++;}

function MoveLeft()
{    if(currentPosition.y > 0) currentPosition.y--;}

document.addEventListener("keydown", (event) => {
    if(!doPoo) {grid[currentPosition.x][currentPosition.y] = "";}
    switch (event.key){
        case "ArrowUp":
            MoveUp();
            break;
        case "ArrowDown":
            MoveDown();
            break;
        case "ArrowLeft":
            MoveLeft();
            break;
        case "ArrowRight":
            MoveRight();
            break;
    }
    CheckForMosquito();
    Poo();
    CheckForWin();
    DrawGrid();
});

for(let i = 0; i < 7; i++){
    SpawnMosquito();
}


DrawGrid();

