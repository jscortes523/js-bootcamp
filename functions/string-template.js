let tipValue = function( total = 0, tip = 0.15)
{
    let result = total*tip
    
    return `A ${tip*100}% tip on ${total} would be ${result}`
}

console.log(tipValue(40,.25)) 