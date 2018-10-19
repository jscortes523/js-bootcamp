class Note {

    constructor(id, text){
        this.id = id
        this.text = text
    }

    set text(newText) {
        this._text = newText
    }
}