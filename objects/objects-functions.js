let temperatures = function (pTemp) {

    let celsiusDegree = ((pTemp-32)*5)/9
    let kelvinDegree = ((pTemp+459.67)*5)/9

    return {
        fahrenheit: pTemp,
        celsius: `${pTemp}F are ${celsiusDegree}C`,
        kelvin: `${pTemp}F are ${kelvinDegree}K`
    }
}

let oneTemp = temperatures(20)
let otherTemp = temperatures(32)

console.log(oneTemp.celsius)
console.log(otherTemp.kelvin)