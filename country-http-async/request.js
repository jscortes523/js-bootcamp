
const getCountryInfo = (code, callback) =>
{

    const request = new XMLHttpRequest()
    let country 

    request.addEventListener("readystatechange",(e)=> {
        
        if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200){
            country = JSON.parse(e.target.responseText)
            callback(undefined,country)
        }else if(e.target.readyState === XMLHttpRequest.DONE){
            callback(`Can't Fetch Data`,undefined)
             
        }
    })

    request.open('GET',`http://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)
    request.send()

}
