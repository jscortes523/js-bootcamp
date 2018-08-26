const request = new XMLHttpRequest()
let countries
document.querySelector('#country-code').addEventListener("change",(e)=>{

    const country = countries.find((country) =>{
        return country.alpha2Code.toLowerCase() === e.target.value.toLowerCase()
    })
    
    document.querySelector('#country-name').textContent = country.name

})

request.addEventListener("readystatechange",(e)=> {
    
    if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200){
        countries = JSON.parse(e.target.responseText)
    }else if(e.target.readyState === XMLHttpRequest.DONE){
        document.querySelector('#country-name').textContent = `Can't Fetch Data`
    }
})

request.open('GET','http://restcountries.eu/rest/v2/all')
request.send()
