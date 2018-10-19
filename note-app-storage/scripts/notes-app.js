
renderNotes()

document.querySelector('#note-form').addEventListener('submit', (e) =>{

    const noteText = e.target.elements.noteName.value

    const note = new Note(uuidv4(),noteText)

    saveNote(note)

    e.target.elements.noteName.value = ''

    renderNotes()

})


window.addEventListener('storage', (e) =>{
    if(e.key === 'notes'){
        renderNotes()
    }
})