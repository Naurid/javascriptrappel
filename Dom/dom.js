const mainTitle = document.querySelector('.mainTitle');
const feedingButton = document.querySelector('.feedingButton');
const first = document.querySelector('.selectors p:first-child');
const selectors = document.querySelectorAll('.selectors p');
const countDisplay = document.querySelector('.count');

first.classList.add('feedingButton');
first.innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sucré</a>`;

selectors.forEach(selector => {
    selector.classList.add('underlined');
})

let clickCount = 0;

let foodArray = [
    'Pizza',
    'Kebab',
    'Gyros',
    'Tagine',
    'Steak Frites',
    'Hamburger',
    'Smash Burgers',
    'Poutine',
    'Calzone',
    'Sundae',
    'Chicken Alfredo',
    'Tarte au citron meringuée',
    'Brownies',
    'Cookies'
];

mainTitle.textContent = foodArray[0];



feedingButton.addEventListener('click', () => {
    GenerateFood();
    IncrementCount();
});

function GenerateFood() {
    let randInt = Math.floor(Math.random() * foodArray.length);
    if(foodArray[randInt] === mainTitle.textContent)
    {
        GenerateFood();
        return;
    }
    mainTitle.textContent = foodArray[randInt];
}

function IncrementCount() {
    clickCount++;
    countDisplay.textContent = `You clicked ${clickCount} time${clickCount > 1 ? 's':''}`;
}
