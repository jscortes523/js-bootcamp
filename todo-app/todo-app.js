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
    hideComplete:false
}

const makeTodoList = function(todoList, filter){
    const filteredTodo = todoList.filter(function(todo,index){
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    }).filter(function(todo){
        if(!filter.hideComplete) {
            return true
        }else{
            return !todo.completed
        }
    })

    document.querySelector('#todos').innerHTML = ''

    filteredTodo.forEach(function(todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        p.className = 'todo'
        document.querySelector('#todos').appendChild(p)
    })
}

makeTodoList(todos,filters)

document.querySelector('#add-todo').addEventListener('click',function(e){
   const todo = {
       text:document.querySelector('#new-todo').target.value    ,
       completed: false
   }
   todos.push(todo)
   const p = document.createElement('p') 
   p.textContent = todo.text
   p.className = 'todo'
   document.querySelector('#todos').appendChild(p)
})

document.querySelector('#filter-todo').addEventListener('input',function(e){
    
    filters.searchText = e.target.value

    makeTodoList(todos,filters)
})

document.querySelector('#hide-complete').addEventListener('change',function(e){
    filters.hideComplete = e.target.checked
  
    makeTodoList(todos,filters)    
})

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    
    const todo = {
        text:e.target.elements.todoName.value,
        completed: false
    }

    todos.push(todo)
    filters.searchText = ''
    e.target.elements.todoName.value=''
    makeTodoList(todos,filters)

})

document.querySelector('#filter-selection').addEventListener('change',function(e){
    console.log(e.target.value)
})