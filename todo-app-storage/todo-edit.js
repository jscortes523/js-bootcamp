const todoId = location.hash.substring(1)
const todoText = document.querySelector('#todo-text')
const todoBody = document.querySelector('#todo-body')
const todoRemove = document.querySelector('#todo-remove')
const todoUpdate = document.querySelector('#todo-updated-at')


let todos = getSavedTodos()
let todo = todos.find(function(todo){
    return todoId === todo.id
})

if(todo === undefined ) location.assign('/index.html')

todoText.value = todo.text
todoBody.value = todo.body      
todoUpdate.textContent = moment(todo.updatedAt).fromNow()

todoText.addEventListener('input',function(e){
    todo.text = e.target.value
    todo.updatedAt = getMakerTime()
    todoUpdate.textContent = moment(todo.updatedAt).fromNow()
    saveTodos(todos)
})

todoBody.addEventListener('input',function(e){
    todo.body = e.target.value
    todo.updatedAt = getMakerTime()
    todoUpdate.textContent = moment(todo.updatedAt).fromNow()
    saveTodos(todos)
})

todoRemove.addEventListener('click',function(){
    removeTodo(todo.id)
    location.assign('/index.html')
})



window.addEventListener('storage',function(e){
    
    if(e.key === 'todos')
    {
        todos = JSON.parse(e.newValue)

        todo = todos.find(function(todo){
            return todoId === todo.id
        })
        
        if(todo === undefined ) location.assign('/index.html')
        
        todoText.value = todo.text
        todoBody.value = todo.body   
        todoUpdate.textContent = moment(todo.updatedAt).fromNow()
    }   
})

