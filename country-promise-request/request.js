
const getCountryInfo = (code) => new Promise( (resolve,reject) =>
{
    const request = new XMLHttpRequest()
    let country 

    request.addEventListener("readystatechange",(e)=> {
        
        if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200){
            country = JSON.parse(e.target.responseText)
            resolve(country)
        }else if(e.target.readyState === XMLHttpRequest.DONE){
            reject(`Can't Fetch Data`)
             
        }
    })

    request.open('GET',`http://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)
    request.send()
})
