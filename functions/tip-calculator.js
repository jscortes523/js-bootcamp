let tipValue = function( total = 0, tip = 0.15)
{
    return total * tip
}

//Case one: No arguments defined
console.log(tipValue())

//Case two: Arguments assigned
console.log(tipValue(230,0.2))

//Case three: Only second arguemnt assigned
console.log(tipValue(undefined,0.30))

//Case four: Only First argurment assigned
console.log(tipValue(350)) 