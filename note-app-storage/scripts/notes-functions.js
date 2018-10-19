const saveNote = (note) => {

    const notes = getNotes()

    notes.push(note)

    localStorage.setItem('notes',JSON.stringify(notes))
}


const getNotes = () => {

    let notes = []

    notesJSON = localStorage.getItem('notes')

    if(notesJSON) {
        
        notes = JSON.parse(notesJSON)
    }

    return notes

}

const editNote = (newNote) => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    const noteIdx = notes.findIndex( (note) => {
        return note.id === newNote.id
    } )

    notes[noteIdx]._text = newNote._text

    localStorage.setItem('notes',JSON.stringify(notes))    
}

const removeNote = (noteId) => {

    const notes = JSON.parse(localStorage.getItem('notes'))

    const noteIdx =  notes.findIndex( note => note.id === noteId )

    if( noteIdx > -1 )    notes.splice(noteIdx,1)

    localStorage.setItem('notes',JSON.stringify(notes))
}

const renderNotes = () => {

    const notes = getNotes()

    document.querySelector('#notes-list').innerHTML = ''

    notes.forEach(note => {
        document.querySelector('#notes-list').appendChild(getNoteDOM(note))
    })
}

const getNoteDOM = (note) => {
    const divEl = document.createElement('div')

    const textEl = document.createElement('a')
    textEl.textContent = note._text
    textEl.setAttribute('href',`/edit.html#${note.id}`)

    const removeEl = document.createElement('button')
    removeEl.textContent = 'X'
    removeEl.addEventListener('click',(e) =>{
        removeNote(note.id)
        renderNotes()
    })

    divEl.appendChild(textEl)
    divEl.appendChild(removeEl)

    return divEl
}