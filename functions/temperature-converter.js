let toCelsius = function (fahrenheit)
{
    let celsiusDegree = ((fahrenheit-32)*5)/9

    return celsiusDegree
}

let value = toCelsius(32)

console.log(value)
console.log(toCelsius(68))