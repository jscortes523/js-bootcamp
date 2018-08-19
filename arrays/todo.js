let todos = ['Walk the dog','Start courses','Clean bedroom','Run 5k','Sleep at night']
console.log(todos.toString())
console.log(todos[1])
console.log(todos[todos.length-2])

//Challenge
let thirdItem =todos.splice(2,1).toString()
console.log(`The third item: ${thirdItem} was deleted`)
console.log(todos.toString())

let lastItem = todos.push('New To Do task')-1
console.log(`New last item was Added: ${todos[lastItem]}`)
console.log(todos.toString())

let firstItem = todos.shift()
console.log(`The first item: ${firstItem} was deleted`)
console.log(todos.toString())

//For each Challange

todos.forEach(function(item, index){
    console.log(`${index+1}. ${item}`)
})

//For statement challenge
console.log('Forward')
for(let count=0; count < todos.length; count++)
{
    console.log(`${count+1}. ${todos[count]}`)
}
console.log('Reverse')
for(let count=todos.length-1; count >= 0; count--)
{
    console.log(`${count+1}. ${todos[count]}`)
}