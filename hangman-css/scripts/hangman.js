class Hangman{
    constructor(word,opportunities){
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.opportunities = opportunities
        this.status = 'Playing'
    }


    addGuess(letter) {

        //Make sure that letter come in lower case
        letter = letter.toLowerCase()
        
        //Storage result
        const isUnique = !this.guessedLetters.includes(letter)
        const isNotMatch = !this.word.includes(letter)
        const isPositive = this.opportunities > 0
        const isPlaying = this.status === 'Playing'
        //Add unique guess to list of guesses
        if( isUnique && isPositive && isPlaying) {
            this.guessedLetters.push(letter)
        }

        //Verify that the letter is unique and it does not a match to make a decrement
        if(isUnique && isNotMatch && isPositive && isPlaying){
            this.opportunities--
        }
        
    }

    get puzzle() {

        this._puzzle = ''

        this.word.forEach(letter => {
            if( this.guessedLetters.includes(letter) || letter === ' '){
                this._puzzle += letter
            }else{
                this._puzzle += '* '
            }
        });

        this.getStatus()
        
        return this._puzzle
    }

    getStatus() {

    const finished = this.word.every(letter => {
        return this.guessedLetters.includes(letter) || letter === ' '
    })

    if(this.opportunities === 0){
        this.status = 'Failed'
    }else if(finished){
        this.status = 'Finished'
    }else{
        this.status = 'Playing'
    }
    }

    get message( ){

        this._message;
        console.log(this.status)
        if(this.status === 'Playing'){
            this._message = `Guesses Left: ${this.opportunities}`
        }else if(this.status == 'Failed'){
            this._message = `Sorry you Fail :(, and Guess what, the word was '${this.word.join('')}'`
        }else{
            this._message = `Hey you, amazing, you WIN!!!`
        }
        return this._message

    }


}
