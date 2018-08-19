const square = (num) => {
    return num * num
}

console.log(square(6))

const people = [{
    name:'Marisol',
    age:61
},
{
    name:'Andrea',
    age:26
},
{
    name:'Jesus',
    age:69
}]

const younger = people.find((person) => person.age===26 )

console.log(younger.name)

const add = (a,b) => {
    return arguments[0]+arguments[1]
}

console.log(add(1,2,3,4,5,6,7,8,9))