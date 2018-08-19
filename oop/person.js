//Funcion constructur, por convención se inicia con mayúscula, sin embargo, el lenguaje permite
//definir estas funciones en minúscula.
const Person = function(firstName, lastName,age, jerseyNumber, nationalTeam, clubs = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.jerseyNumber = jerseyNumber
    this.nationalTeam = nationalTeam
    this.clubs = clubs
}

Person.prototype.getSummary= function(){
    return `Player One Profile: ${this.firstName} ${this.lastName} - Age: ${this.age} - Jersey Number: ${this.jerseyNumber} - Team: ${this.nationalTeam}`
}

Person.prototype.getCurriculum = function(){
    let curriculum = `${this.firstName} ${this.lastName} played in: `

    this.clubs.forEach((club) => {
        curriculum += `${club}`
    })
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')

    this.firstName = names[0]
    this.lastName = names[1]
}

Person.prototype.setProperty = function(property,value){
    Object.defineProperty(this,property,{
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    })
}

const playerOne = new Person('Juan','Cortes',26,23,'Spain')

const playerTwo = new Person('Andrea','Lopez',26,10,'France')

console.log(`The Match ${playerOne.nationalTeam} VS ${playerTwo.nationalTeam}`)
console.log(`Player One Profile: ${playerOne.firstName} ${playerOne.lastName} - Age: ${playerOne.age} - Jersey Number: ${playerOne.jerseyNumber} - Team: ${playerOne.nationalTeam}`)
console.log(`Player Two Profile: ${playerTwo.firstName} ${playerTwo.lastName} - Age: ${playerTwo.age} - Jersey Number: ${playerTwo.jerseyNumber} - Team: ${playerTwo.nationalTeam}`)

console.log(Object.keys(playerOne))

playerOne.setProperty('age',32)

console.log(playerOne.prototype)
