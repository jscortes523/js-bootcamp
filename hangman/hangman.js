const Hangman = function(word,opportunities){
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.opportunities = opportunities
    this.status = 'Playing...'
}


Hangman.prototype.addGuess = function(letter) {

    //Make sure that letter come in lower case
    letter = letter.toLowerCase()
    
    //Storage result
    const isUnique = !this.guessedLetters.includes(letter)
    const isNotMatch = !this.word.includes(letter)
    const isPositive = this.opportunities > 0
    //Add unique guess to list of guesses
    if( isUnique && isPositive) {
        this.guessedLetters.push(letter)
    }

    //Verify that the letter is unique and it does not a match to make a decrement
    if(isUnique && isNotMatch && isPositive ){
        this.opportunities--
    }
     
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

    this.getStatus()
    
    return puzzle
}

Hangman.prototype.getStatus = function() {

const finished = this.word.every(letter => {
    return this.guessedLetters.includes(letter)
})

if(this.opportunities === 0){
    this.status = 'Failed :('
}else if(finished){
    this.status = 'Finished !!!!'
}else{
    this.status = 'Playing...'
}

/*     let status = ''

    let counter = 0

    this.word.forEach( letter => {
        if( this.guessedLetters.includes(letter)){
            counter++
        }
    })

    if( counter === this.word.length && this.opportunities >= 0){
        status = 'Finished!!!'
    }else if(this.opportunities === 0){
        status = 'Failed :('
    }else{
        status = 'Playing...'
    }

 */ 
}

/* const gameOne = new Hangman('butterfly',10)

const gameTwo = new Hangman('Sport',6)

 */




