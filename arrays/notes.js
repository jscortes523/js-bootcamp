let notes = ['Note 1', 'Note 2','Note 3']

console.log(notes.length)
console.log(notes[1]) //--> primer elementos esta en la posición 0
console.log(notes.indexOf('Note 3'))

//Métodos de manipulación de la información

// Afectan a partir de la última posición
notes.pop() //Elimina el último item
notes.push('New last Note')//Agrega un item en la última posición
console.log(notes)

// Afectan a partir de la primera posición
notes.shift() //Elimina el primer item
notes.unshift('New first Note')//Agrega un item en la primera posición
console.log(notes)

//Afecta la posición indicada, ya sea para eliminar o agregar
notes.splice(1,0,'New second item') //Agrega item en la segunda posición
console.log(notes)
notes.splice(2,1) //Elimina item en la tercera posición
console.log(notes)
notes.splice(1,1,'Another second') //Elimina la segunda posición y luego agrega un item en esa posición
console.log(notes)

notes.splice(notes.length+1,0,'New Item')
console.log(notes)
