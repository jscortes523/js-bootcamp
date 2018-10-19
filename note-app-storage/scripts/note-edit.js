
const noteId = location.hash.substring(1)
const notes = getNotes()

const currentNote = notes.find((note) => {
    return note.id === noteId
})

document.querySelector('#note-text').value = currentNote._text

document.querySelector('#note-text').addEventListener('change', (e) => {
    
    const editedNote = new Note(noteId,e.target.value)

    editNote(editedNote)
})

document.querySelector('#note-remove').addEventListener('click',(e) => {
    
    removeNote(noteId)
})

window.addEventListener('storage', (e) => {

    console.log(noteId)
    if(e.key ==='notes'){
        
        const notes = JSON.parse(e.newValue)

        const note = notes.find( (note) =>{
            return note.id === noteId
        })

        if(note){
            document.querySelector('#note-text').value = note._text
        }else{
            location.assign('/index.html')
        }
    }
})