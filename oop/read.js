const Hangman = function(word,opportunities){
    this.word = word
    this.opportunities = opportunities
}

const gameOne = new Hangman('butterfly',10)
console.log(gameOne)

const gameTwo = new Hangman('Sport',6)
console.log(gameTwo)


const readLine = require('readline')

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Letter>'
})

console.log('Star Game One')


const completeWord = (word, letter) => {

    let lettersCounter = 0

    const wordArray = word.split('')

    wordArray.forEach((e,idx) => {
        if(e === letter) lettersCounter++
    });

    return lettersCounter
}

const isComplete = (letters) => !(letters.find((letter) => letter === undefined) === undefined)

const playHangman = (game) => {

    const word = game.word.toLowerCase()

    let lettersCounter = 0//new Array(word.length)    
    
    let remaining = game.opportunities

    reader.prompt()

        reader.on('line',(letter) => {
            
            if(word.includes(letter)){
                   console.log('Yuju! Get right letter')
                   lettersCounter+=completeWord(word,letter)
                   console.log(lettersCounter)
            }else{
                console.log('You Miss!')
            }

            remaining--

            if( remaining === 0 && lettersCounter < word.length ){
                console.log('Sorry chance over!, You Loss!!!')
                reader.close()
            }else if( lettersCounter === word.length ){
                console.log('Congratulation, You WIN!!!!!')
                reader.close()
            }else{
                console.log(`Chances: ${remaining}`)

            }
            reader.prompt()
        }).on('close',() => {
            console.log('Thanks for Play :)')
            process.exit(0)
        })

}

playHangman(gameOne)
