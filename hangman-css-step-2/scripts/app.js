//Primitive data types: string, number, boolean, null, undefined
// * A primitive type dont have properties
//Wrapper types: String, Number, Boolean --> There are objects
// * JS engine wrapp primitive types to access their properties like a object but keep their nature

//Anything else that are not a primituve type is an Object, includes Functions
//Function:  myFunc --> Function.prototype--> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null

//Each prototype is customizable but dont do it, keep original denifition

//HANGMAN FUNCTION

//Define a new game global variable

let game
//const game = new Hangman('white rabbit',6)
const puzzleGuesses = document.querySelector('#puzzle-guesses')
const puzzleMessage = document.querySelector('#puzzle-message')
const puzzleStatus = document.querySelector('#puzzle-status')

const startGame = async () => {
    const puzzle = await getPuzzle()
    game = new Hangman(puzzle,5)
    displayPuzzle()
}

const displayPuzzle = () => {

    puzzleGuesses.innerHTML = ''


    game.puzzle.split('').forEach(letter => {
        
        const letterEl = document.createElement('span')
        letterEl.textContent = letter

        puzzleGuesses.appendChild(letterEl)

    });

    // document.querySelector('#puzzle-guesses').textContent = game.puzzle
    puzzleMessage.textContent = game.message
    puzzleStatus.textContent = `Game: ${game.status}`

}


window.addEventListener('keypress',function(e){
    const letter = String.fromCharCode(e.charCode)
    game.addGuess(letter)
    displayPuzzle()
})

document.querySelector('#btn-reset').addEventListener('click', startGame)

startGame()

// getPuzzle((error,puzzle)=>{
//     if(error){
//         console.log(`Error: ${error}`)
//     }else{
//         console.log(puzzle)
//     }
// })
