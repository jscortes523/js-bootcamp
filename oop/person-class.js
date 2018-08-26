//Another way to define an object using class sintax
// You define functions and properties into de bracelets

class Person {

    constructor(firstName, lastName,age, jerseyNumber, nationalTeam, clubs = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.jerseyNumber = jerseyNumber
        this.nationalTeam = nationalTeam
        this.clubs = clubs
    }

    getSummary(){
        return `Player One Profile: ${this.firstName} ${this.lastName} - Age: ${this.age} - Jersey Number: ${this.jerseyNumber} - Team: ${this.nationalTeam}`
    }
    
    getCurriculum(){
        let curriculum = `${this.firstName} ${this.lastName} played in: `
    
        this.clubs.forEach((club) => {
            curriculum += `${club}`
        })

        return curriculum
    }
    
    set fullName(value){
        const names = value.split(' ')
    
        this.firstName = names[0]
        this.lastName = names[1]
    }
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setProperty(property,value){
        Object.defineProperty(this,property,{
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
        })
    }
    
}

//Subclass
class Player extends Person{

    constructor(firstName, lastName,age, jerseyNumber, nationalTeam, currentTeam, clubs = []){
        super(firstName, lastName,age, jerseyNumber, nationalTeam, clubs)

        this.currentTeam = currentTeam
    }

    getCurriculum(){
        let curriculum = `${this.fullName}: ${super.getCurriculum()}`

        curriculum+=` Current Club: ${this.currentTeam}`

        return curriculum
    }

}

const player = new Player('Juan','Cortes',26,23,'Spain','Lazio',['PSG','Roma'])

console.log(player.getCurriculum())

 
class Student extends Person{
    constructor(firstName, lastName,age, jerseyNumber, nationalTeam, clubs,category){
        super(firstName, lastName,age, jerseyNumber, nationalTeam, clubs)

        this.category = category
        this.score = 0
    }

    getSummary(){
        
        if(this.score < 2.5)
        {
            return `No Category`    
        }
              
        return `Category: ${this.category} - ${this.score} points`
    }

    updateScore(points){
        this.score += points
    }
}

const myPerson = new Student('Juan','Cortes',26,23,'Spain',['PSG','Roma'],'Junior')
//console.log(myPerson.getSummary())

myPerson.updateScore(3.5)
//console.log(myPerson.getSummary())

myPerson.updateScore(-0.6)
//console.log(myPerson.getSummary())