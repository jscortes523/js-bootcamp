const request = new XMLHttpRequest()

request.addEventListener("readystatechange",(e) => {
    
    if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200){
        document.querySelector('#http-response').textContent = JSON.parse(e.target.responseText).puzzle
    }else if(e.target.readyState === XMLHttpRequest.DONE){
        document.querySelector('#http-response').textContent = 'There is not words, an Error is takeing place!'
    }
    
})
    
request.open('GET','http://puzzle.mead.io/puzzle')
request.send()