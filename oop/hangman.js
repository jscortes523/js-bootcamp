const Hangman = function(word,opportunities){
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.opportunities = opportunities
}


Hangman.prototype.getPuzzle = function() {

    let puzzle = ''

    this.word.forEach(letter => {
        if( this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += '* '
        }
    });

/*     if( this.guessedLetters.length === 0 )  {

        this.word.forEach(letter => {
            if( letter !== ' ' )  {puzzle += '*'} else{ puzzle += letter }
        })

    }else{
        this.guessedLetters.forEach( guessed => {
            this.word.forEach(letter => {
                if( guessed === letter || letter === ' '){
                    puzzle += letter
                }else{
                    puzzle += '*'
                }
            })
        } )
    }
 */ 
    return puzzle
}

const gameOne = new Hangman('butterfly',10)
console.log(gameOne.getPuzzle())

const gameTwo = new Hangman('Sport',6)
console.log(gameTwo)


