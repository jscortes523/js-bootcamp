/* const todos = [{
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
},
{
    text: 'Do homework',
    completed:false
},
{
    text: 'Wash clothes',
    completed: false
},
{
    text: 'Buy remote control batteries',
    completed: false
}]
 */

let todos = getSavedTodos()
 
getSummary(todos)
 
 /* const initialData = function(todos){

    localStorage.setItem('todos',JSON.stringify(todos))
}
 */
//initialData(todos)
/* const title = document.createElement('h1')
title.textContent = 'I AM GOOD, AND YOU?...'

const msg = document.createElement('h2')
msg.textContent = 'HEY BABE, I THINK THAT ARE YOU SOOO HOT AND SEXY !'

document.body.appendChild(title)
document.body.appendChild(msg) */

/* const pElements = document.querySelectorAll('p')

pElements.forEach(function(element){
    const text = element.textContent.toLowerCase()

    if (text.includes('st')) element.remove()
}) */

/* todos.forEach(function(todo,index){
    const row = document.createElement('tr')
    const text = document.createElement('td')
    text.textContent=todo.text
    const completed = document.createElement('td')
    completed.textContent = todo.completed

    row.appendChild(text)
    row.appendChild(completed)

    document.querySelector('table').appendChild(row)
}) */

const filters = {
    searchText:'',
    hideComplete:false,
    sortBy: ''
}


renderTodo(todos,filters)

/* document.querySelector('#add-todo').addEventListener('click',function(e){
   const todo = {
       text:document.querySelector('#new-todo').target.value    ,
       completed: false
   }

   saveTodo(todo)

   const p = document.createElement('p') 
   p.textContent = todo.text
   p.className = 'todo'
   document.querySelector('#todos').appendChild(p)
})
 */
document.querySelector('#filter-todo').addEventListener('input',function(e){
    
    filters.searchText = e.target.value

    renderTodo(todos,filters)
})

document.querySelector('#hide-complete').addEventListener('change',function(e){
    filters.hideComplete = e.target.checked
  
    renderTodo(todos,filters)    
})

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    
    const todo = {
        id:uuidv4(),
        text:e.target.elements.todoName.value,
        completed: false,
        createdAt: getMakerTime(),
        updatedAt: getMakerTime()
    }
    
    saveTodo(todo)

    todos = getSavedTodos()
    console.log('adding..')
    filters.searchText = ''
    e.target.elements.todoName.value=''
    location.assign(`/edit.html#${todo.id}`)
    //renderTodo(todos,filters)
    getSummary(todos)

})

document.querySelector('#filter-selection').addEventListener('change',function(e){
    
    filters.sortBy = e.target.value
    console.log(filters.sortBy)
    renderTodo(todos,filters)

})

window.addEventListener('storage',function(e){

    if(e.key === 'todos'){

        todos = JSON.parse(e.newValue)

        renderTodo(todos,filters)
    }
})