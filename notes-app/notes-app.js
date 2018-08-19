
document.querySelector('#input-text').addEventListener('change',function(e){
    console.log(e.target.value)
})


//Evento por cada entrada, es decir, por caracter o cambio realizado en el elemento
document.querySelector('#input-text').addEventListener('input',function(e){
    console.log('Input: '+e.target.value)
}) 

//Formas
document.querySelector('#note-form').addEventListener('submit',function(e){
    e.preventDefault()

    const noteName = e.target.elements.noteName.value
    console.log(noteName)
})

//Local Store session
//localStorage.setItem('location','Cali')
//console.log(localStorage.getItem('location')) --obtiene un item qu corresponde con la llave
/* localStorage.setItem('Country','Colombia') --> modifica o crea un item
localStorage.setItem('Neighborhood','Ciudadela') */
//localStorage.removeItem('Country') --> elimina el item que corresponde con la llave
//localStorage.clear()  --> Limpia todo

/* const birthDate = new Date('May 23 1992 23:00:23')
console.log(`My birth date: ${birthDate.toString()}`)

const mamaBirthDate = new Date('March 14 1957 2:00:00')
console.log(`Mom birth date: ${mamaBirthDate.toString()}`)

console.log(`My Timestamp: ${birthDate.getTime()}`)
console.log(`Mom TimeStamp: ${mamaBirthDate.getTime()}`)

if(birthDate.getDate() < mamaBirthDate.getTime()){
    console.log('I am older')
}
else
{
    console.log('My mom older')
}
 */


const momentEx = moment([1992,04,23])
console.log(`Moment date: ${momentEx.toString()}`)

const birthMoment = moment()
birthMoment.date(23).month(04).year(1992)
console.log(birthMoment.unix())

