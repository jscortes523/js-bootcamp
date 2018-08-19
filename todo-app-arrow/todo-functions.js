//Get all todos saved
const getSavedTodos = ()=>{

    let todos = []

    const todosJSON = localStorage.getItem('todos')
    
    if( todosJSON !== null ) todos = JSON.parse(todosJSON)

    return todos
}

//Save a new todo
const saveTodo = (todo)=>{
    const todos = getSavedTodos()
    
    todos.push(todo)

    localStorage.setItem('todos',JSON.stringify(todos))

}

//Remove Todo
const removeTodo = (todoId)=>{
    const todoIndex = todos.findIndex((todo) => todo.id === todoId )  

    if(todoIndex > -1) todos.splice(todoIndex,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}


//Complete or uncomplete todo item
const markTodo = function(todoId,checked){
    const todoIndex=todos.findIndex((todo) => todo.id === todoId)
    
    todos[todoIndex].completed = checked
    localStorage.setItem('todos',JSON.stringify(todos))
}

//render todo
const renderTodo = (todos,filter)=>{

    todos = sortTodoBy(todos,filter.sortBy)

    const filteredTodo = todos.filter((todo)=>
         todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    ).filter(function(todo){
        if(!filter.hideComplete) {
            return true
        }else{
            return !todo.completed
        }
    })

    document.querySelector('#todos').innerHTML = ''

    //Se puede tener un método con esto
    
    filteredTodo.forEach(todo => document.querySelector('#todos').appendChild(getTodoDOM(todo)))

}

//Save compelte list
const saveTodos = (todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

//Set DOM todo
const getTodoDOM = (todo)=>{
    const div = document.createElement('div')
    
    const todoText = document.createElement('a')
    todoText.textContent = todo.text
    todoText.setAttribute('href',`/edit.html#${todo.id}`)
    
    const check = document.createElement('input')
    check.setAttribute('type','checkbox')
  //  check.type = 'checkbox'
    check.checked=todo.completed
    check.addEventListener('change',(e)=>{
        markTodo(todo.id,e.target.checked)
        renderTodo(todos,filters)
    })

    const button = document.createElement('button')
    button.textContent = 'Remove'
    button.addEventListener('click',()=>{
        removeTodo(todo.id)
        renderTodo(todos,filters)
    })
    //Agregar elementos
    div.appendChild(check)
    div.appendChild(todoText)
    div.appendChild(button)

    return div
}

//Summary todos
const getSummary =(todos)=>{
    const filteredTodos = todos.filter((todo) => todo.completed)

    const summary = `You have ${todos.length}, but only ${filteredTodos.length} is already done`

    document.querySelector('#summary-detail').textContent = summary
    //document.querySelector('#summary').appendChild(p)
}

//Get timestamp
const getMakerTime = ()=>  moment().valueOf()


const sortTodoBy = function(todos,sortBy){

    if(sortBy === 'byEdited')
    {   console.log('ordena por....')
        return todos.sort(function(todoA,todoB){

            if(todoA.updatedAt > todoB.updatedAt){
                return -1
            }else if( todoA.updatedAt < todoB.updatedAt ){
                return 1
            }
            else{
                return 0
            }

        })
    }else if(sortBy === 'byCreated'){
        return todos.sort(function(todoA,todoB){

            if(todoA.createdAt > todoB.createdAt){
                return -1
            }else if( todoA.createdAt < todoB.createdAt ){
                return 1
            }
            else{
                return 0
            }

        })
    }else if(sortBy === 'byName'){
        return todos.sort(function(todoA,todoB){

            if(todoA.text.toLowerCase() > todoB.text.toLowerCase()){
                return 1
            }else if( todoA.text.toLowerCase() < todoB.text.toLowerCase() ){
                return -1
            }
            else{
                return 0
            }

        })

    }else{
        return todos
    }
}