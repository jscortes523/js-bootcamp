let num = 123.459

console.log(num.toFixed(2))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//Challenge guess number

let guessNumber = function(number){
    let max = 5
    let min = 1

    let randomNumber = Math.floor(Math.random()*(max-min+1))+min
    console.log(randomNumber)    
    return randomNumber === number
}

console.log(guessNumber(4))