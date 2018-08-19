const todos = [{
    text:'Walk the dog',
    completed:true
},{
    text:'Clean Bedroom',
    completed:false
},{
    text:'Run 5k',
    completed: true
},{
    text:'Study english',
    completed:false
}]

console.log(todos)

const removeTodo = function(todos,text){
    const index = todos.findIndex(function(todo,idx){
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if(index > -1) todos.splice(index,1)
}

const getThingsToDO = function(todos){
    return todos.filter(function(todo,index){
        return !todo.completed
    })
}

console.log('Filteres...')
console.log(getThingsToDO(todos))



console.log('Sorting...')

const compareValues = function(valueOne, valueTwo){
    if (valueOne < valueTwo){
        return -1
    }else if(valueOne > valueTwo){
        return 1
    }else{
        return 0
    }
}

console.log(todos)

const sortToDo = function(todos){
    todos.sort(function(a,b){
        const scoreA = compareValues(a.text.toLowerCase(),b.text.toLowerCase()) 
        const scoreB = compareValues(a.completed,b.completed)
        const score = scoreA+scoreB
        let order = 0
        
        if(score < 0){
            order = -1
        }else if(score > 0){
            order = 1
        }else{
            order = 0
        }


        return order

    })
}
console.log('Sorted')
sortToDo(todos)
console.log(todos)

console.log('Removing...')

removeTodo(todos,'RUN 5k    ')
console.log(todos)

