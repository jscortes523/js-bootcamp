const getPuzzle = async () => {

    const response = await fetch('http://puzzle.mead.io/puzzle')

    if(response.status === 200)
    {
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Something bad is happening :(')
    }
    
// const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange',(e) => {

//         if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined,data.puzzle)
//         }else if(e.target.readystatus === XMLHttpRequest.DONE){
//                 callback('Error Run!!!',undefined)
//         }

//     })

//     request.open('GET','http://puzzle.mead.io/puzzle')
//     request.send()
}