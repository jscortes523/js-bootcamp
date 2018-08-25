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
const game = new Hangman('rabbit',6)

const displayPuzzle = (game) => {

    document.querySelector('#puzzle-guesses').textContent = game.getPuzzle()
    document.querySelector('#remaining-guesses').textContent = `Remaining Guesses ${game.opportunities}`
    document.querySelector('#puzzle-status').textContent = `Game: ${game.status}`

}

displayPuzzle(game)


window.addEventListener('keypress',function(e){
    const letter = String.fromCharCode(e.charCode)
    game.addGuess(letter)
    displayPuzzle(game)
})