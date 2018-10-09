
const getCountryInfo = (code) => {
    
    return fetch(`http://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`).then((response) => {

        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Country cant Fetch!!')
        }
    }).then((country)=>{
        return country.name
    })

}


