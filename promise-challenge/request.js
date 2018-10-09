
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

const getLocationInfo = () => {

    const TOKEN = '622a3230ed8c45'

    return fetch(`https://ipinfo.io/json?token=${TOKEN}`).then((response) => {

        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Your Location not Found')
        }

    }).then((location) => {
        return {
            countryCode: location.country,
            host: location.hostname,
            ip:location.ip            
        }
    })
    

}


