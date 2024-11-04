let word = ' t y h f  g h j u h n t';
let replacedWord = '';
let replacedWordFor='';

replacedWord = word.replaceAll(' ', '');

for (let letter of word) {
    if(letter !== ' ') {
        replacedWordFor += letter;
    }
}

let splitWord = word.split(' ');

for(i = 0; i < splitWord.length; i++) {
    if (splitWord[i] === ' ') {
        splitWord.slice(i);
    }
}

word = splitWord.join('');

console.log(`${replacedWord} is the value with the replaceAll function`);
console.log(`${replacedWordFor} is the value with the foreach loop`);
console.log(`${word} is the value with the for loop`);